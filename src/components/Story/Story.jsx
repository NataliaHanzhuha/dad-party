import styles from './Story.module.css';

import { Modal } from '../../utillits/Modal/Modal';
import { useState } from 'react';
import { Video } from '../Main/Main';
import ImageGallery from 'react-image-gallery';
import { biography, biographyImages, biographyPageVideo } from '../../constants';

const timelineHash = biography();
const images = biographyImages;

export function SlideShow({images, maxPhoto = false, imageClick}) {
  const arr = images.map((img) => {
    return {
      original: img,
      originalTitle: 'title',
    };
  });
  return <ImageGallery items={arr}
                       showThumbnails={maxPhoto}
                       showFullscreenButton={maxPhoto}
                       showPlayButton={false}
                       showBullets={images?.label > 1}
                       loading={'lazy'}
                       onClick={imageClick}
  />;
}

const FullSizeImage = ({fullSizePhoto}) => {
  const text = timelineHash.get(fullSizePhoto);
  const imageSrc = images[fullSizePhoto] && images[fullSizePhoto].length ? images[fullSizePhoto][0] : null;

  return <div className={styles.fullSizeWrapper}>
    {imageSrc && <SlideShow images={images[fullSizePhoto]}/>}
    <div className={styles.modalDescription}>
      <div className={styles.year}>{fullSizePhoto}</div>
      <div className={styles.description}>
        {text.split('\n').map((paragraph) => <p>{paragraph}</p>)}
      </div>
    </div>

  </div>;
};

function Story() {
  const [fullSizePhoto, toggleFullSizePhoto] = useState(null);
  const timelineKeys = Array.from(timelineHash.keys());

  function Photo({item, children}) {
    const text = timelineHash.get(item);
    const imageSrc = images[item] && images[item].length ? images[item][0] : null;

    return <>
      {imageSrc && <SlideShow images={images[item]}
                              imageClick={() => toggleFullSizePhoto(item)}/>}
      {/*{imageSrc && <div className={styles.line}></div>}*/}
      <div className={styles.descriptionWrapper}
           onClick={() => toggleFullSizePhoto(item)}>
        <div className={styles.text}>{text}</div>
        {children}
        <p className={styles.tip}>Click on image or text to see more...</p>
      </div>
    </>;
  }

  return <>
    <section className={styles.section}>
      <Video videoSrc={biographyPageVideo()}
             videoClass={styles.video}
             placeholderClass={styles.previewImage}/>

      <div className={styles.timelineWrapper}>
        {timelineKeys.map((year, index) => {
          return <div key={year}
                      className={styles.yearWrapper}>
            <div className={styles.year}>{year}</div>

            <div className={styles.itemWrapper + ' photoWrapper'}>
              <Photo item={year}>
                {/*{timelineKeys.length === index + 1 &&*/}
                {/*  <a className={styles.link}*/}
                {/*     onClick={e => e.stopPropagation()}*/}
                {/*     href="https://50642.lightfolio.com/gallery/jonathan-aremu/">Click here to see all photos in gallery</a>*/}
                {/*}*/}
              </Photo>
            </div>
          </div>;
        })}

      </div>
    </section>
    {fullSizePhoto && <Modal closeModal={() => toggleFullSizePhoto(null)}
                             header="Photo"
                             content={<FullSizeImage fullSizePhoto={fullSizePhoto}/>}></Modal>}
  </>;
}

export default Story;
