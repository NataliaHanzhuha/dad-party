import styles from './Contact-Us.module.css';
import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { emailsCollectionRef } from '../../firebase';

export function ContactUs() {
  const [form, setForm] = useState({email: '', name: ''});
  const [send, setStatus] = useState(false);
  const setValue = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const submitForm = () => {
    addDoc(emailsCollectionRef, form).then(() => {
      setForm({email: '', name: ''});
      setStatus(true);
    });
  };

  return <section className={styles.section}>
    <div className={styles.heading}>
      <h2>Contact us</h2>
      <p className={styles.description}>
        Please leave us your email and name so we can send you a link to the event pictures and video
        highlights as soon as they are ready
      </p>
    </div>

    {send
      ? <p className={styles.greating}>Thank you for registering; enjoy the rest of the party!!!</p>
      : <div className={styles.contactForm}>
        <label htmlFor="input">Your Email
          <input placeholder="Your email"
                 value={form.email}
                 name="email"
                 className={styles.input}
                 onInput={setValue}/>
        </label>
        <label htmlFor="input">Your Name (optional)
          <input placeholder="Your name"
                 value={form.name}
                 name="name"
                 className={styles.input}
                 onInput={setValue}/>
        </label>

        <button className="big-close-btn"
                disabled={!form.email.trim().length}
                onClick={submitForm}>Send
        </button>
      </div>}

  </section>;
}

