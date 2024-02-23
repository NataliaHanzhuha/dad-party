import styles from './Story.module.css';

import { Modal } from '../../utillits/Modal/Modal';
import { useState } from 'react';
import { timelineHash } from '../../constants';

function Story() {
  const [fullSizePhoto, toggleFullSizePhoto] = useState(null);
  const timelineYears = Object.keys(timelineHash);

  const fullSizeImage = <div className={styles.fullSizeWrapper}>
    <img src={fullSizePhoto?.image}
         alt="sss"
    />
    <p>{fullSizePhoto?.text}</p></div>;

  return <section className={styles.section}>
    <h1>Biography</h1>

    <p className={styles.textSummary}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque debitis deserunt distinctio
      facilis, nemo temporibus
   </p>

    <h2>Timeline</h2>

    <div className={styles.timelineWrapper}>
      {timelineYears.map((year) => {
        return <div key={year}
                    className={styles.yearWrapper}>
          <div className={styles.year}>{year}</div>

          <div className={styles.itemList}>
            {timelineHash[year]?.map((item, index) => {
              return <div className={styles.itemWrapper}
                          key={index}>
                <img src={item?.image}
                     alt={item?.text}
                     // data-aos={index % 2 ? 'fade-left' : 'fade-right'}
                     className={styles.image}
                     width="46%"
                     onClick={() => toggleFullSizePhoto(item)}/>
                <div className={styles.line}></div>
                <div className={styles.text}
                     // data-aos={index % 2 ? 'fade-right' : 'fade-left'}
                >{item?.text}</div>
              </div>;
            })}
          </div>
        </div>;
      })}
    </div>

    {fullSizePhoto && <Modal closeModal={() => toggleFullSizePhoto(null)}
                             header="Photo"
                             content={fullSizeImage}></Modal>}

  </section>;
}

export default Story;
