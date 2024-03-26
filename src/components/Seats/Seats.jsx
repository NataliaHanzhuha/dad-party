import chart from '../../images/chart.png';
import seats from '../../images/seats.png';
import Image from '../../utillits/Image/Image';
import { useState } from 'react';
import { Modal } from '../../utillits/Modal/Modal';

function Seats() {
    const styles = {
        overflowY: 'auto',
        width: '100%',
        height: 'auto',
        display: 'block',
        marginBottom: '40px',
    }
    const [fullSizePhoto, toggleFullSizePhoto] = useState(null);
    const fullSizeImage = <div className={'fullSizeWrapper'}>
       <Image src={fullSizePhoto} alt='test'/>
    </div>;
  
    return <>
    <section className='main' styles={styles}>
        <img src={seats} width="100%" alt='seats' onClick={() => toggleFullSizePhoto(seats)}/>
        <img src={chart} width="100%"  alt='chart' onClick={() => toggleFullSizePhoto(chart)}/>
        
    </section>
       {fullSizePhoto && <Modal closeModal={() => toggleFullSizePhoto(null)}
       header="Photo"
       content={fullSizeImage}></Modal>}
       </>;
}

export default Seats;