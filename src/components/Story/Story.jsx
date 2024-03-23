import styles from './Story.module.css';

import { Modal } from '../../utillits/Modal/Modal';
import { useState } from 'react';
import { timelineHash } from '../../constants';

function Story() {
  const [fullSizePhoto, toggleFullSizePhoto] = useState(null);
  const timelineYears = Object.keys(timelineHash);
  const fullSizeImage = <div className={styles.fullSizeWrapper}>
    <img src={fullSizePhoto?.image}
         alt={fullSizePhoto?.text}
    />
    <p>{fullSizePhoto?.text}</p></div>;

  return <>
  <section className={styles.section}>
      {/*<h1 className={styles.header}>Biography</h1>*/}

      <iframe width="100%"
              height="315"
              src="https://www.youtube.com/embed/kriaFd5Sggk?si=GQ7Yp45L2RR0QNYP"
              title="YouTube video player"
              frameBorder="0"
              className={styles.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>

      <p className={styles.textSummary}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque debitis deserunt distinctio
        facilis, nemo temporibus
      </p>

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
                       className={styles.image}
                       width="46%"
                       onClick={() => toggleFullSizePhoto(item)}/>
                  <div className={styles.line}></div>
                  <div className={styles.text}>{item?.text}</div>
                </div>;
              })}
            </div>
          </div>;
        })}
      </div>
    </section>
    {fullSizePhoto && <Modal closeModal={() => toggleFullSizePhoto(null)}
                             header="Photo"
                             content={fullSizeImage}></Modal>}
                             </>;
}

export default Story;
