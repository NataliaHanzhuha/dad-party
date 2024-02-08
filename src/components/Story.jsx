import oldManPhoto from '../images/old-man.jpeg';
import React from 'react';
import closeIcon from '../images/close.svg';

function Story() {
  const [fullSizePhoto, toggleFullSizePhoto] = React.useState(null);

  const textSummaryStyles = {
    textAlign: 'justify',
    lineHeight: 1.5,
    borderTop: '1px solid white',
    paddingTop: '15px'
  };

  const timelineHash = {
    1951: [{
      image: oldManPhoto,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, suscipit!'
    },
      {
        image: oldManPhoto,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, suscipit!'
      }],
    1961: [{
      image: oldManPhoto,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, suscipit!'
    },
      {
        image: oldManPhoto,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, suscipit!'
      }],
    1971: [{
      image: oldManPhoto,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, suscipit!'
    },
      {
        image: oldManPhoto,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, suscipit!'
      }],
  };
  const timelineYears = Object.keys(timelineHash);

  return <section id="biography">
    <h1>Biography</h1>

    <iframe width="100%"
            height="320px"
            src="https://www.youtube.com/embed/8S3Yt-NxY0E?list=PLwyOlgrwwHqcq-OyxKFFxa3_ylnte5bSB"
            title="Best 60s Dancer Boy Ever - The Nitty Gritty"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>

    <p style={textSummaryStyles}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque debitis deserunt distinctio
      facilis, nemo temporibus
      veritatis. Accusamus eos numquam quibusdam soluta vitae voluptatibus? Aspernatur, nobis, quasi? Dicta eaque
      iste omnis optio pariatur
      provident voluptatem! Doloremque facere ipsam odio saepe!</p>

    <h2>Timeline</h2>

    <div className="timeline-wrapper">
      {timelineYears.map((year) => {
        return <div key={year}
                    className="year-wrapper">
          <div className="year">{year}</div>

          <div className="item-list">
            {timelineHash[year]?.map((item, index) => {
              return <div className="item-wrapper"
                          key={index}>
                <img src={item?.image}
                     alt="sss"
                     width="46%"
                     onClick={() => toggleFullSizePhoto(item)}/>
                <div className="text">{item?.text}</div>
              </div>;
            })}
          </div>
        </div>;
      })}
    </div>

    {fullSizePhoto && <div className="full-size-wrapper">
      <button className="little-close-btn">
        <img src={closeIcon}
             alt="sss"
             width={24}
             onClick={() => toggleFullSizePhoto(null)}/>
      </button>
      <img src={fullSizePhoto.image}
           alt="sss"
      />
      <p>{fullSizePhoto.text}</p>
    </div>}

  </section>;
}

export default Story;
