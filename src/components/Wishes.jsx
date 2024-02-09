import { useEffect, useState } from 'react';
import { wishCollectionRef } from '../firebase';
import { addDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import closeIcon from '../images/close.svg';
import editIcon from '../images/edit.svg';
import { debounce } from 'lodash';


function Wishes() {
  const [wishes, setWishes] = useState([]);
  const [wish, setWish] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isEditing, toggleEdit] = useState(null);
  const [showForm, toggleForm] = useState(false);
  const LSKey = 'wish-ids-list';
  const [userMessageIds, setUserMessages] = useState([]);

  useEffect(() => {
    if (loading) {
      getMovieList().then();
    }
  }, [loading]);

  useEffect(() => {
    refreshList();

    return () => refreshList.cancel();
  })

  const refreshList = debounce(() => getMovieList(), 20 * 1000)

  const getMovieList = () => {
    return getDocs(wishCollectionRef).then(data => {
      const filteredData = data.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setWishes(filteredData);
      setLoading(false);
      getSavedUserMessageIds();
    });

  };

  const getSavedUserMessageIds = () => {
    const existListStorage = localStorage[LSKey];
    const existList = existListStorage ? JSON.parse(existListStorage) : [];

    setUserMessages(existList);
  };

  const getWishData = () => {
    return {
      text: wish?.trim(),
      name: name?.trim()?.length ? name : 'Anonim',
    };
  };

  const createWish = async () => {
    try {
      await addDoc(wishCollectionRef, getWishData())
        .then((doc) => {
          localStorage[LSKey] = JSON.stringify([...userMessageIds, doc.id]);
          closeModal();
        });
    } catch (err) {
      console.error(err);
    }
  };

  const updateWish = async (id) => {
    const wishDoc = doc(wishCollectionRef, id);
    await updateDoc(wishDoc, getWishData()).then(closeModal);
  };

  const submitForm = () => {
    isEditing
      ? updateWish(isEditing)
      : createWish();
  };

  const setEditForm = (wish) => {
    setName(wish?.name ?? '');
    setWish(wish?.text);
    toggleEdit(wish.id);
    toggleForm(true);
  };

  const closeModal = () => {
    toggleForm(false);
    setName('');
    setWish('');
    toggleEdit(null);
    setLoading(true);
  };

  const form = <div className="modal">
    <header>
      <h2>Add your wish to list</h2>
      <button className="little-close-btn">
        <img src={closeIcon}
             width={24}
             alt="sss"
             onClick={closeModal}/>
      </button>
    </header>

    <label htmlFor="textarea">Your Wishes
      <textarea placeholder="Enter something for birthday guy"
                value={wish}
                autoFocus="true"
                onChange={(e) => setWish(e.target.value)}></textarea>
    </label>


    <label htmlFor="input">Your Name (optional)
      <input placeholder="Your name"
             value={name}
             onInput={(e) => setName(e.target.value)}/>
    </label>

    <button className="big-close-btn"
            disabled={!wish.trim().length}
            onClick={submitForm}>Send
    </button>
  </div>;

  const wishList = <div className="wish-list">
    {wishes?.map((wish, index) => {
      return <div className="wish-wrapper"
                  key={index}>
        <div>{wish.text} </div>

        <div className="name-wrapper">
          <i>{wish.name}</i>
          {userMessageIds.includes(wish?.id)
            && <button onClick={() => setEditForm(wish)}>
              <img src={editIcon}
                   alt="edit button"
                   width={18}/>
            </button>}
        </div>

      </div>;
    })}
  </div>;

  return <section id="wishes"
                  className="wishes-wrapper">
    <h1>Well Wishes</h1>
    <button className="big-close-btn"
            onClick={() => toggleForm(true)}>Add your wish to list
    </button>
    {showForm && form}

    {loading
      ? 'Loading...'
      : wishes?.length ? wishList : <div>You can leave your wish first!!!</div>
    }

  </section>;
}

export default Wishes;
