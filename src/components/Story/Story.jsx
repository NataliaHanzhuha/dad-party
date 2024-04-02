import styles from './Story.module.css';

import { Modal } from '../../utillits/Modal/Modal';
import { useState } from 'react';
import { imageLink } from '../../firebase';

function getUrl(name) {
  return imageLink('biography', name, process.env.REACT_APP_B_IMAGE_TOKEN);
}

const timelineHash = [
  {
    year: 1954,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Birth 26 April 1954 in the town of Oko.',
    text: 'The third child of seven Children of Mr Ayantoye Kolawole Bale Aremu. Ayantoye is his dad’s name signals the family’s drumming heritage.\n PJA’s Paternal Grandmother is from Omu Aran, a town adjacent to his town o birth and notable for housing Landmark University, associated with Bishop Oyedepo.'
  },
  {
    year: 1959,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Started primary School in SIM ECWA-',
    text: 'Just a year before Nigeria’s independence. This was admit stringent financial odds, that saw him chosen as the only one to attend school in his family instead of the first and second born children who would ideally have been preferred'
  },
  {
    year: 1964,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Passed secondary School entrance exam',
    text: 'Encouraged by Teachers to site for secondary school entrance examination- and planned to attend Previan Memorial Collage- but unfortunately father couldn’t afford school fees.'
  },
  {
    year: 1965,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Decision made by his father to send him to Lagos',
    text: 'Father chose to send him to Lagos to give him some exposure based on his own experience from Lagos around 1915-1920'
  },
];

function Story() {
  const [fullSizePhoto, toggleFullSizePhoto] = useState(null);
  // const timelineYears = Object.keys(timelineHash);

  const fullSizeImage = <div className={styles.fullSizeWrapper}>
    <img src={fullSizePhoto?.image}
         alt={fullSizePhoto?.event}
    />
    <h2>{fullSizePhoto?.event}</h2>
    <p className={styles.description}>{fullSizePhoto?.text}</p>
  </div>;

  return <>
    <section className={styles.section}>
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
        {timelineHash.map((item) => {
          return <div key={item.year}
                      className={styles.yearWrapper}>
            <div className={styles.year}>{item.year}</div>
            <div className={styles.itemList}>
              {/*{timelineHash[year]?.map((item, index) => {*/}
                 <div className={styles.itemWrapper}>
                  <img src={item?.image}
                       alt={item?.text}
                       loading="lazy"
                       className={styles.image}
                       width="46%"
                       onClick={() => toggleFullSizePhoto(item)}/>
                  <div className={styles.line}></div>
                  <div className={styles.text}>{item?.event}</div>
                </div>
              {/*})}*/}
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
