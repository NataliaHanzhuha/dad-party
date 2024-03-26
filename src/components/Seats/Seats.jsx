import chart from '../../images/chart.png';
import seats from '../../images/seats.png';
import Image from '../../utillits/Image/Image';

function Seats() {
    // const styles = {
    //     overflowY: 'scroll',
    //     width: '100%',
    //     height: '10000px',
    //     display: 'block',
    //     marginBottom: '100px',
    // }
  
    return <section className='main seats'>
        <Image src={seats} alt='seats'/>
        <Image src={chart} alt='chart'/>        
    </section>;
}

export default Seats;