import chart from '../../images/chart.png';
import seats from '../../images/seats.png';
import InnerImageZoom from 'react-inner-image-zoom';

function Seats() {

    return <section>
        <InnerImageZoom src={seats} alt="seats" width="100%" zoomScale={'.15'} zoomType='hover'/>

        <InnerImageZoom src={chart}  alt="chart" width="100%" zoomScale={'.15'} zoomType='hover'/>
    </section>
}

export default Seats;