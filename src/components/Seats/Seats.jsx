import chart from '../../images/chart.png';
import seats from '../../images/seats.png';
import Image from '../../utillits/Image/Image';
import { Modal } from '../../utillits/Modal/Modal';
import { useState } from 'react';

function Seats() {
    const [fullSizePhoto, toggleFullSizePhoto] = useState(null);
    const fullSizeImage = <Image src={fullSizePhoto} alt='seats'/>;
  
    return<><section className='main seats'>
        <img src={seats} alt='seats'  onClick={() => toggleFullSizePhoto(seats)}/>
        <img src={chart} alt='chart'  onClick={() => toggleFullSizePhoto(chart)}/>
    </section>
    {fullSizePhoto && <Modal closeModal={() => toggleFullSizePhoto(null)}
                             header="Photo"
                             content={fullSizeImage}></Modal>}
</>;
}

export default Seats;
