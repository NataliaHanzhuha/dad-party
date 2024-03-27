import Image from '../../utillits/Image/Image';
import { Modal } from '../../utillits/Modal/Modal';
import { useEffect, useState } from 'react';
import { imageLink } from '../../firebase';

function Seats() {
  const [fullSizePhoto, toggleFullSizePhoto] = useState(null);
  const [urls, setUrls] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    setLoaded(true);
  }

  const fullSizeImage = <Image src={fullSizePhoto}
                               alt="seats"/>;

  useEffect(() => {
    const folder = 'seats';
    const images = ['Untitled-11.png', 'Untitled-10.png'];
    setUrls(images.map((name) => imageLink(folder, name)));
  }, []);

  return <>
    <section className="main seats">
      {!loaded && 'Loading...' }
      {urls.map((url) =>
        <img src={url}
             key={url}
             onLoad={onLoad}
             alt="chart"
             onClick={() => toggleFullSizePhoto(url)}/>
      )}
    </section>
    {fullSizePhoto && <Modal closeModal={() => toggleFullSizePhoto(null)}
                             header="Photo"
                             content={fullSizeImage}></Modal>}
  </>;
}

export default Seats;
