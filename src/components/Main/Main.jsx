import yearsCard from '../../images/70th-logo.png';
import preview from '../../images/video-preview.png';
import styles from './Main.module.css';
import { useState } from 'react';
import { mainPageVideo } from '../../constants';

export function Video({videoSrc, videoClass, placeholderClass}) {
  const [loading, setLoadCount] = useState(true);

  return <>
    {loading && <img src={preview}
                     width="100%"
                     height="216px"
                     className={placeholderClass}
                     alt="video preview"/>}
    <video autoPlay
           className={videoClass}
           onLoadStart={() => setLoadCount(true)}
           onLoadedData={() => setLoadCount(false)}
           loop
           muted>
      <source src={videoSrc}
              type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </>
}

function Main() {
  return <section className={'main ' + styles.section}>
    <Video videoSrc={mainPageVideo()} videoClass={styles.video} placeholderClass={styles.previewImage}/>

    <img src={yearsCard}
         className={styles.yearImage}
         alt="70 years birthday card"/>
  </section>;
}

export default Main;
