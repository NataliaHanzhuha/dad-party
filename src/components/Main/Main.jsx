import yearsCard from '../../images/70th-logo.png';
import preview from '../../images/video-preview.png';
import styles from './Main.module.css';
import blinksVideo from '../../images/Happy_Birthday_Animation.mov';
import { useState } from 'react';

function Main() {
  const [loading, setLoadCount] = useState(true);

  return <section className={'main ' + styles.section}>
    {loading && <img src={preview}
                     width="100%"
                     height="216px"
                     className={styles.previewImage}
                     alt="video preview"/>}
    <video autoPlay
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
