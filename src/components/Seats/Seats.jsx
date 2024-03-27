import Image from '../../utillits/Image/Image';
import { Modal } from '../../utillits/Modal/Modal';
import { useEffect, useState } from 'react';
import { imageLink } from '../../firebase';
import useScreenSize from '../../utillits/useScreenSize';

function Seats() {
  const [fullSizePhoto, toggleFullSizePhoto] = useState(null);
  const [urls, setUrls] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const screenSize = useScreenSize();
  const isMobileScreen = screenSize?.width < 900;
  useEffect(() => {
    const folder = 'seats';
    const images = ['Untitled-11.png', 'Untitled-10.png'];
    setUrls(images.map((name) => imageLink(folder, name)));
  }, []);

  const toggleModal = (url) => {
    if (isMobileScreen) {
      toggleFullSizePhoto(url);
    }
  };

  return <>
    <section className="main seats">
      {!loaded && <p>Loading...</p>}
      {isMobileScreen && loaded && <p className={'tip'}>Click on image for maximizing and zooming...</p>}
      {urls.map((url) =>
        <img src={url}
             key={url}
             onLoad={() => setLoaded(true)}
             alt="chart"
             onClick={() => toggleModal(url)}/>
      )}
    </section>
    {fullSizePhoto && <Modal closeModal={() => toggleFullSizePhoto(null)}
                             header="Photo"
                             content={<Image src={fullSizePhoto}
                                             alt="seats"/>}></Modal>}
  </>;
}

export default Seats;
