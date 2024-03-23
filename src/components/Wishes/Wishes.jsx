import { useCallback, useEffect, useState } from 'react';
import { wishCollectionRef } from '../../firebase';
import { addDoc, doc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore';
import editIcon from '../../images/icons/edit.svg';
import { Modal } from '../../utillits/Modal/Modal';
import styles from './Wishes.module.css';
// import refreshIcon from '../../images/icons/refresh.svg';

function Wishes() {
  const [wishes, setWishes] = useState([]);
  const [wish, setWish] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isEditing, toggleEdit] = useState(null);
  const [showForm, toggleForm] = useState(false);
  const LSKey = 'wish-ids-list';
  const [userMessageIds, setUserMessages] = useState([]);

  // const refreshList = debounce(() => getMovieList(), 20 * 1000);

  const getMovieList = useCallback(() => {
      getDocs(query(wishCollectionRef, orderBy('created', 'desc')))
        .then(data => {
          const filteredData = data.docs?.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setWishes(filteredData);
          setLoading(false);
          getSavedUserMessageIds();
        });
    }, []
  );

  useEffect(() => {
    if (loading) {
      getMovieList();
    }
  }, [loading, getMovieList]);

  const getSavedUserMessageIds = () => {
    const existListStorage = localStorage[LSKey];
    const existList = existListStorage ? JSON.parse(existListStorage) : [];

    setUserMessages(existList);
  };

  const getWishData = () => {
    return {
      text: wish?.trim(),
      name: name?.trim()?.length ? name : 'Anonim',
      created: Date.now()
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

  const formatDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = new Date(date);
    const timeString = d.toUTCString().split(' ')[4].slice(0, -3);
    const dateString = `${months[d.getMonth()]}, ${d.getDate()}`;
    return [dateString, timeString].join(' ');
  };

  const formContent = <>
    <label htmlFor="textarea">Your Wishes
      <textarea placeholder="Enter something for birthday boy"
                value={wish}
                className={styles.textarea}
                autoFocus={true}
                onChange={(e) => setWish(e.target.value)}></textarea>
    </label>


    <label htmlFor="input">Your Name (optional)
      <input placeholder="Your name"
             value={name}
             className={styles.input}
             onInput={(e) => setName(e.target.value)}/>
    </label>

    <button className="big-close-btn"
            disabled={!wish.trim().length}
            onClick={submitForm}>Send
    </button>
  </>;

  const form = <Modal closeModal={closeModal}
                      header={isEditing ? 'Edit your wish' : 'Add your wish'}
                      content={formContent}></Modal>;

  const wishList = <div className={styles.wishList}>
    {wishes?.map((wish, index) => {
      return <div className={styles.wishWrapper}
                  key={index}>
        <p>{wish.text} </p>

        <div className={styles.nameWrapper}>
          {!!wish?.created && <span>{formatDate(wish?.created)}</span>}

          <div className={styles.name}>
            <i>{wish.name}</i>
            {userMessageIds.includes(wish?.id)
              && <button onClick={() => setEditForm(wish)}>
                <img src={editIcon}
                     alt="edit button"
                     width={18}/>
              </button>}
          </div>

        </div>

      </div>;
    })}
  </div>;

  return <section className={styles.wishesWrapper}>
      <div className={styles.header}>
        <button className="big-close-btn"
                onClick={() => toggleForm(true)}>Add a Wish
        </button>

        <button className="big-close-btn"
                onClick={() => setLoading(true)}>
          Refresh List
          {/*<img src={refreshIcon}*/}
          {/*     alt="refresh icon"*/}
          {/*     width="24"/>*/}
        </button>
      </div>


      {showForm && form}

      {loading
        ? 'Loading...'
        : wishes?.length ? wishList : <div>You can leave your wish first!!!</div>
      }

    </section>;
}

export default Wishes;
