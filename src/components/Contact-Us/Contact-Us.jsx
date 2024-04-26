import styles from './Contact-Us.module.css';
import { SlideShow } from '../Story/Story';
import { bayo360Video, parents360Video, partyPhoto } from '../../constants';
import { Video } from '../Main/Main';

export function ContactUs() {
  // const [form, setForm] = useState({email: '', name: ''});
  // const [send, setStatus] = useState(false);
  // const [fullSizePhoto, toggleFullSizePhoto] = useState(null);

  // const setValue = (e) => {
  //   setForm({...form, [e.target.name]: e.target.value});
  // };
  //
  // const submitForm = () => {
  //   addDoc(emailsCollectionRef, form).then(() => {
  //     setForm({email: '', name: ''});
  //     setStatus(true);
  //   });
  // };

  function Photo({children}) {

    return <><SlideShow images={partyPhoto}/>
      {/*{imageSrc && <div className={styles.line}></div>}*/}
      {/*<div className={styles.descriptionWrapper}*/}
      {/*     onClick={() => toggleFullSizePhoto(item)}>*/}
      {children}
      {/*</div>*/}
    </>;
  }

  return <section className={styles.section}>

    <div className={styles.dd1}>
      <h3 className={styles.header}>70th Birthday Photos, held in Calgary, Canada (06.04.2024)</h3>

      <Photo>
        <a className={styles.link}
           onClick={e => e.stopPropagation()}
           href="https://50642.lightfolio.com/gallery/jonathan-aremu/">Click here to see more pictures from the Event</a>
      </Photo>
    </div>

    <div className={styles.dd}>
      <Video videoSrc={parents360Video()}
             videoClass={styles.video}
             placeholderClass={styles.previewImage}/>

      <Video videoSrc={bayo360Video()}
             videoClass={styles.video}
             placeholderClass={styles.previewImage}/>
    </div>


    {/*<div className={styles.heading}>*/}
    {/*  <p className={styles.description}>*/}
    {/*    Please leave us your email and name so we can send you a link to the event pictures and video*/}
    {/*    highlights as soon as they are ready*/}
    {/*  </p>*/}
    {/*</div>*/}

    {/*{send*/}
    {/*  ? <p className={styles.greating}>Thank you for registering; enjoy the rest of the party!!!</p>*/}
    {/*  : <div className={styles.contactForm}>*/}
    {/*    <label htmlFor="input">Your Email*/}
    {/*      <input placeholder="Your email"*/}
    {/*             value={form.email}*/}
    {/*             name="email"*/}
    {/*             className={styles.input}*/}
    {/*             onInput={setValue}/>*/}
    {/*    </label>*/}
    {/*    <label htmlFor="input">Your Name (optional)*/}
    {/*      <input placeholder="Your name"*/}
    {/*             value={form.name}*/}
    {/*             name="name"*/}
    {/*             className={styles.input}*/}
    {/*             onInput={setValue}/>*/}
    {/*    </label>*/}

    {/*    <button className="big-close-btn"*/}
    {/*            disabled={!form.email.trim().length}*/}
    {/*            onClick={submitForm}>Send*/}
    {/*    </button>*/}
    {/*  </div>}*/}

  </section>;
}

