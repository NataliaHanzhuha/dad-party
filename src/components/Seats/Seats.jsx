import chart from '../../images/chart.png';
import seats from '../../images/seats.png';
import Image from '../../utillits/Image/Image';

function Seats() {
    const styles = {
        overflowY: 'auto'
    }
    return <section className='main' styles={styles}>
        <Image src={seats} alt='seats'/>
        <Image src={chart} alt='chart'/>
    </section>
}

export default Seats;