import yearsCard from '../../images/70th-logo.png';
import preview from '../../images/video-preview.png';
import styles from './Main.module.css';
import blinksVideo from '../../images/Happy_Birthday_Animation.mov';
import { useEffect, useRef, useState } from 'react';

function Main() {
  const [loading, setLoadCount] = useState(true);
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
    {loading && <img src={preview}
                     width="100%"
                     height="216px"
                     alt="video preview"/>}
    <video ref={videoRef}
           autoPlay
           className={styles.video}
           onLoadStart={() => setLoadCount(true)}
           onLoadedData={() => setLoadCount(false)}
           loop
           muted>
      <source src={blinksVideo}
              type="video/mp4"/>
      Your browser does not support the video tag.
    </video>

    <img src={yearsCard}
         className={styles.yearImage}
         alt="70 years birthday card"/>
  </section>;
}

export default Main;
