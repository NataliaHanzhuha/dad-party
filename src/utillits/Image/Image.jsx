import { Fragment } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

function Image({src, alt}) {
  return <TransformWrapper minScale={1} maxScale={5} initialScale={1} smooth={true}>
      <Fragment>
        <TransformComponent>
          <img src={src}
               alt={alt}
               width={'100%'}/>
        </TransformComponent>
      </Fragment>
  </TransformWrapper>;
  // const imgRef = useRef();
  // const onUpdate = useCallback(({x, y, scale}) => {
  //   const {current: img} = imgRef;
  //
  //   if (img) {
  //     const value = make3dTransformValue({x, y, scale});
  //     img.style.setProperty('transform', value);
  //   }
  // }, []);
  //
  // return <QuickPinchZoom onUpdate={onUpdate}
  //                        tapZoomFactor={2}
  //                        initialScale={1}
  //                        disablePadding={true}
  //                        maxZoom={10}
  //                        minZoom={1}>
  //   <img ref={imgRef}
  //        src={src}
  //        alt={alt}
  //        className="zoom-image"/>
  // </QuickPinchZoom>;

}

export default Image;
