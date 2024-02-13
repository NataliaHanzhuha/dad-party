import yearsCard from '../../images/70th-logo.png';
import blinksBottom from '../../images/blinks_bottom.png';
import styles from './Main.module.css';
import blinksVideo from '../../images/Happy_Birthday_Animation.mov';
import { useEffect, useRef } from 'react';
import blinksTop from '../../images/blinks-top.png';

function Main() {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      video.play(); // Restart video when it ends
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);
  return <section className={styles.section}>

    <video ref={videoRef}
           autoPlay
           width="125%"
           loop
           muted>
      <source src={blinksVideo}
              type="video/mp4"/>
      Your browser does not support the video tag.
    </video>

    <img src={blinksTop}
         alt="blinks"
         className={styles.blinksTop}
         width="100%"/>
    <img src={yearsCard}
         className={styles.yearImage}
         alt="70 years birthday card"/>
    <img src={blinksBottom}
         alt="blinks"
         width="100%"
         className={styles.blinksBottom}/>
  </section>
}

export default Main;
