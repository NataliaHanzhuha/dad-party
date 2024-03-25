import chart from '../../images/chart.png';
import seats from '../../images/seats.png';
import InnerImageZoom from 'react-inner-image-zoom';
import { useRef, useCallback } from 'react';
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

function Seats() {
    const imgRef = useRef();
    const onUpdate = useCallback(({ x, y, scale }) => {
      const { current: img } = imgRef;
  
      if (img) {
        const value = make3dTransformValue({ x, y, scale });
  
        img.style.setProperty("transform", value);
      }
    }, []);

    return <section>
          <QuickPinchZoom onUpdate={onUpdate}>
            <img ref={imgRef} src={seats} alt="seats"  width="100%"/>
        </QuickPinchZoom>
        {/* <InnerImageZoom src={seats} alt="seats" width="100%" zoomScale={'.15'} zoomType='hover'/> */}

        <InnerImageZoom src={chart}  alt="chart" width="100%" zoomScale={'.15'} zoomType='hover'/>
    </section>
}

export default Seats;