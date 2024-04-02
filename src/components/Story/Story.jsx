import styles from './Story.module.css';

import { Modal } from '../../utillits/Modal/Modal';
import { useState } from 'react';
import { imageLink } from '../../firebase';
import biographyVidep from '../../images/biography.mp4';

function getUrl(name) {
  return imageLink('biography', name, process.env.REACT_APP_B_IMAGE_TOKEN);
}

const timelineHash = [
  {
    year: 1954,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Birth 26 April 1954 in the town of Oko.',
    text: 'The third child of seven Children of Mr Ayantoye Kolawole Bale Aremu. Ayantoye is his dad’s name signals the family’s drumming heritage.\n PJA’s Paternal Grandmother is from Omu Aran, a town adjacent to his town o birth and notable for housing Landmark University, associated with Bishop Oyedepo.'
  },
  {
    year: 1959,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Started primary School in SIM ECWA-',
    text: 'Just a year before Nigeria’s independence. This was admit stringent financial odds, that saw him chosen as the only one to attend school in his family instead of the first and second born children who would ideally have been preferred'
  },
  {
    year: 1964,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Passed secondary School entrance exam',
    text: 'Encouraged by Teachers to site for secondary school entrance examination- and planned to attend Previan Memorial Collage- but unfortunately father couldn’t afford school fees.'
  },
  {
    year: 1965,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Decision made by his father to send him to Lagos',
    text: 'Father chose to send him to Lagos to give him some exposure based on his own experience from Lagos around 1915-1920'
  },
  {
    year: 1966,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Moved to Lagos, working as a domestic servant',
    text: 'Lagos, was the capital of Nigeria at the time, he was working as a domestic servant on 2 naira (approx. $1 in today’s money) per month- working in Tom Jones selling thread for tying hair and then leaving that job due to the derogatory experience, getting another job selling books at Idumota, Lagos'
  },
  {
    year: 1967,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Left Lagos returned to Kwara State in July 1967',
    text: 'To explore option for secondary school level education despite the financial challenges'
  },
  {
    year: 1968,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Enrolled in Igbaja teachers college',
    text: 'His father couldn` t afford secondary school fees, but the promise of a stable career after five years of teacher training seemed like a practical choice. The college, affiliated with ECWA and SIM ECWA, provided a nurturing academic and spiritual growth environment.'
  },
  {
    year: 1971,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Selected to represent Kwara State in interstate basketball',
    text: 'Involvement in basketball truly enriched his college experience. By the time I reached Form 3, I had developed a keen interest in the sport. By Form 4, I was a member and an integral part of the school team. In 1971, was selected to represent Kwara State in interstate basketball competitions, where his team proudly secured the third position behind Benue Plateau and Lagos State. Playing alongside esteemed players like Major General Joe Garba and Lieutenant Colonel Sparox was a tremendous honour. Major General Garba, known as the best shooter in Africa, later served as Nigeria` s Minister for Foreign Affairs'
  },
  {
    year: 1972,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'As Igbaja Teachers` College team captain, he led the squad to victory, clinching the state championship in 1973.',
    text: 'During final year at Igbaja Teachers`  College, basketball became a defining aspect of his experience. Under the guidance of coach, Kenneth Lloyd, an American professional basketball player, we received top-notch training. Many of our teachers were Americans; their basketball expertise greatly enhanced our skills. As Igbaja Teachers`  College team captain, he led the squad to victory, clinching the state championship in 1973. This achievement remains a cherished memory, symbolizing dedication and teamwork. Graduating from college in 1972, I excelled academically despite my basketball commitments.'
  },
  {
    year: 1972,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Finished Igbaja Teachers Training',
    text: 'Time at Igbaja Teachers\' College was marked by personal growth, academic achievement, and unforgettable experiences on the basketball court. It laid the foundation for my future endeavours and instilled values that continue to guide me today.\n His spiritual growth at the college was profound, thanks to the guidance of dedicated teachers like Miss Reid and Miss Webb. Miss Reid, a missionary from South Africa, taught English with such effectiveness that no one in our class failed Grade 2 English. Meanwhile, Miss Webb\'s instruction in Bible studies ensured that nearly all of us received high marks.\n In addition to academics and sports, he also served as a field marshal in my final year. This role involved overseeing environmental upkeep and ensuring discipline among junior students, akin to military leadership.\n To this day, he maintains contact with Coach Kenneth Lloyd, who now resides in Miami, Florida. He played a pivotal role in developing my basketball skills, emphasizing the importance of physical fitness as a prerequisite for joining our team.\n Overall, my time at Igbaja Teachers\' College was transformative, shaping my character and instilling values that continue to guide me.'
  },
  {
    year: 1973,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Served as an educator in the village of Papri',
    text: 'In January 1973, he ventured to the northern reaches of Kwara State, specifically the Borgu area encompassing the Kainji Dam. This region, still under Kwara\'s administration, beckoned with prospects due to its shortage of educators.\n Living conditions mirrored the simplicity of the community, residing in houses devoid of windows, a stark contrast to the bustling urban landscapes. Despite the challenges, he embarked on our teaching duties with zeal, endeavouring to instill the value of education in the local populace, even amidst their initial reluctance'
  },
  {
    year: 1974,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Successfully passed GCE London examination',
    text: 'He seized the opportunity to further his education, undertaking the GCE London examinations in January 1974. Successfully passing all six papers, including mathematics and English, marked a significant milestone in our academic journey.'
  },
  {
    year: 1974,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Commenced studying at Kwara State College of Education',
    text: 'Fresh off representing Kwara State at the first National Sports Festival in Lagos that year, I applied to several schools: Adeyemi College of Education, Kwara State College of Education (which was opening then), Ahmadu Bello University (ABU Zaria), the National Certificate in Education (NCE) program, and even the NCE program in Kano. I was fortunate to be accepted by nearly all of them, thanks to my strong Grade 2 results with credits, merits, and only two passes.\n My qualifications far exceeded the requirements for NCE, so I ended up at the Kwara College of Education, where I planned to spend three years studying mathematics and geography for my NCE. Basketball continued to be a big part of my life at the College, and my reputation there preceded me.'
  },
  {
    year: 1975,
    image: getUrl('old-man.jpeg'),
    location: 'Kwara State, Nigeria',
    event: 'Met Bishop David Oyedepo for the first time',
    text: 'In my second year at Kwara Tech, a new student named David Oyedepo joined the first-year class. I was a sophomore in 1975, the same year he entered. He was on the Christian Fellowship Executive Committee. I wasn\'t a member that year. Back then, he was already demonstrating the leadership qualities he\'s known for today. I knew who he was, but he didn\'t know me. We knew the executives, but I had yet to catch his attention.'
  },
  {
    year: 1976,
    image: getUrl('old-man.jpeg'),
    location: 'Oyo State, Nigeria',
    event: 'Enrolled at University to Study Economics',
    text: 'My university experience at Ibadan was enriching, both academically and socially. Among my classmates, who have been friends ever since, is Godwin Obaseki. We entered the University of Ibadan together and resided in Nnamdi Azikiwe Hall, and our friendship has endured.\n The University of Ibadan wasn\'t just about academics - it was also about enjoying the camaraderie of fellow students. and even before graduation, institutions lined up to interview us for jobs. Ministries, the Central Bank, and others expressed interest, and by the time I finished my studies, I had offers from multiple organizations.'
  },
  {
    year: 1979,
    image: getUrl('old-man.jpeg'),
    location: '',
    event: 'Got Married',
    text: 'I found love close to home, marrying a beautiful woman from my village. We had grown up together, our families deeply entwined.\n Marrying someone from my village offered a unique advantage – complete transparency. Our families knew each other intimately, eliminating any need for awkward introductions or uncertainty about backgrounds. God\'s love remained constant in our household, guiding us through thick and thin.'
  },
  {
    year: 1979,
    image: getUrl('old-man.jpeg'),
    location: 'Oyo State, Nigeria',
    event: 'Graduated from the University of Ibadan',
    text: ''
  },
  {
    year: 1979,
    image: getUrl('old-man.jpeg'),
    location: 'Plateau State, Nigeria',
    event: 'Started National Youth Service',
    text: 'Plateau State Governor Solomon Lang assigned me to St. John\'s Vianney Seminary Barkin Ladi, a junior seminary for Catholic students. While the seminary\'s primary function was to educate future priests, my role was to provide a secular secondary school education for those who might not choose that path.\n My passion for basketball continued to burn bright during my NYSC service. I not only coached the seminary\'s basketball team but also helped them rise to become the best team in the state. I completed a coaching course in 1971 and was well-equipped to lead them to victory.'
  },
  {
    year: 1979,
    image: getUrl('old-man.jpeg'),
    location: 'Plateau State, Nigeria',
    event: 'Had first son, Adedeji Aremu',
    text: ''
  },
  {
    year: 1980,
    image: getUrl('old-man.jpeg'),
    location: 'Plateau State, Nigeria',
    event: 'Accepted Job offer as Assistant Economist in research department of Central Bank of Nigeria',
    text: 'One day in June 1980, while teaching a class, I was surprised by a visitor from the Central Bank. They presented me with a job offer as an Assistant Economist in the research department and explained that upon completing my NYSC service, I would be expected to report to Lagos for police fingerprint verification and a medical exam. This offer was particularly appealing due to the position\'s research focus.'
  },
  {
    year: 1980,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Began 12 year career in CBN',
    text: 'My promotions within the bank were steady. I rose from Assistant Economist to Economist in 1982, then to Senior Economist in 1985, and finally to Principal Economist in 2008. Before leaving the bank in 1992, I had already begun serving as the acting head of the Statistical Survey Office. Promotions came quickly at the Central Bank, and I always caught every single one'
  },
  {
    year: 1983,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Second Child was born, Adebayo Aremu',
    text: ''
  },
  {
    year: 1985,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Third Child was born, Adebola Aremu',
    text: ''
  },
  {
    year: 1986,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Fourth Child was born, Adekunle Aremu',
    text: ''
  },
  {
    year: 1990,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Appointed as life member of the Nigerian Economic Society',
    text: ''
  },
  {
    year: 1991,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Masters Degree from University of Lagos',
    text: ''
  },
  {
    year: 1992,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Left CBN established Market Link Consult',
    text: 'In December 1992, I decided to retire from the Central Bank. Part of my motivation was a desire to venture out on my own.\n After leaving the bank, I collaborated with friends on joint ventures while establishing my own research and consulting firm. This marked the birth of Market Link Consult. I launched three companies: Market Link Consult, Market Link International, and Market Link Communications. Market Link Consult focuses on consulting services.\n The genesis of Market Link stems from a collaborative effort with a partner from Malaysia, Mr. Chu, with whom I aimed to bridge the markets of Southeast Asia and Nigeria. Hence, "Market Link" encapsulates our vision of connecting these two distinct marketplaces.'
  },
  {
    year: 1992,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Kicked off pursuit of PhD',
    text: ''
  },
  {
    year: 1993,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Joined Living Faith Church, Winners Chapel',
    text: 'It was a turbulent time in Nigeria, and my business wasn\'t going well. That\'s when I found myself at Winners\' Chapel. During the service, Bishop Oyedepo pointed right at where I was standing. He quoted 1 Corinthians 12:13:\n His message resonated deeply with me. He went on to support with the production and donation of bags used by the church to support Rwanda to assist the country during its struggles.\n Bishop Oyedepo on hearing of this met with him, took his hand and said, "You\'ve been operating on a local level, but God is taking you global. No more local work." From that day on, I\'ve travelled the world, assisting countries throughout ECOWAS and beyond in Africa. It all happened because of that prophecy. All my children are now living and working abroad – all thanks to that word from Bishop Oyedepo. That\'s why I\'m so close to him.'
  },
  {
    year: 1994,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Appointed as Chairman of the Winners Business Fellowship',
    text: ''
  },
  {
    year: 1995,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Ordained as a Deacon at the Living Faith Church',
    text: ''
  },
  {
    year: 1996,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Appointed to the Elder’s Council of the Living Faith Church',
    text: ''
  },
  {
    year: 1996,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Appointed as Chairman of Dominion Airlines',
    text: ''
  },
  {
    year: 1998,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Appointed as life member of the Nigerian Society of International Law and the Nigerian Association of International Affairs.',
    text: ''
  },
  {
    year: 1999,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'Established the Living Faith Church’s hospitality Unit',
    text: ''
  },
  {
    year: 2002,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'Assigned to Covenant University board of regents',
    text: 'Also serving as a part-time lecturer in the department of Entrepreneurship.\n Leveraging my Ph.D. and teaching experience, I focused on globalization concepts within the Department of Entrepreneurship, equipping students with the knowledge to navigate the global environment. This coursework became mandatory for postgraduate students in 2003, recognizing its importance across disciplines.'
  },
  {
    year: 2003,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'Appointed as Pastor at Winners Chapel International',
    text: ''
  },
  {
    year: 2003,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Concluded PhD',
    text: ''
  },
  {
    year: 2003,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Published Book based on PhD titled - Attracting and Negotiating Foreign Direct Investment with International Cooperations',
    text: ''
  },
  {
    year: 2004,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'Appointed as Associate Senior Lecturer',
    text: 'in recognition of his qualifications and contributions to the Covenant University'
  },
  {
    year: 2004,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'Appointed as Acting Vice Chancellor for Covenant University',
    text: ''
  },
  {
    year: 2004,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'First and Second Children graduate with Bachelor’s degrees from Obafemi Awolowo University',
    text: ''
  },
  {
    year: 2004,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Journey with ECOWAS Commission began',
    text: 'My journey with the ECOWAS Commission began in 2004, following a presentation I delivered at the Nigerian National Assembly on trade and trade policy coordination. A presentation copy was sent to the president, Olusegun Obasanjo, who responded with a commendation letter.'
  },
  {
    year: 2005,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'Second Launch of Book- “Attracting and Negotiating Foreign Direct Investment with International Cooperations"',
    text: ''
  },
  {
    year: 2006,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Daughter graduates with first class in Economics',
    text: ''
  },
  {
    year: 2007,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Moved to Abuja Nigeria as part of increased demand for MarketLink Consulting work',
    text: ''
  },
  {
    year: 2008,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'Second Son Graduates with master’s degree in architecture',
    text: ''
  },
  {
    year: 2009,
    image: getUrl('old-man.jpeg'),
    location: '',
    event: 'Second and Third Children graduates with Master’s degrees from the UK',
    text: ''
  },
  {
    year: 2012,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Acropolis-theme Park approval received',
    text: ''
  },
  {
    year: 2012,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'First Child (son), Adedeji Aremu, got married',
    text: ''
  },
  {
    year: 2013,
    image: getUrl('old-man.jpeg'),
    location: 'Nottingham, Nigeria',
    event: 'First Son, graduated with Phd Degree',
    text: ''
  },
  {
    year: 2014,
    image: getUrl('old-man.jpeg'),
    location: 'Nottingham , Nigeria',
    event: 'Became a grandfather- first grandchild was born, Ademide Aremu',
    text: ''
  },
  {
    year: 2014,
    image: getUrl('old-man.jpeg'),
    location: 'Lagos, Nigeria',
    event: 'Second Child (son), Adebayo, got married',
    text: ''
  },
  {
    year: 2015,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Third Child (daughter) got married',
    text: ''
  },
  {
    year: 2017,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Acropolis phase 1 development completed',
    text: ''
  },
  {
    year: 2018,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Jointly negotiated a joined investment code with for all 15 ECOWAS member Countries',
    text: 'So, I took advantage of my role as an ECOWAS consultant to bring in one consultant from each of the 15 member states. Together, we negotiated the code, and by December 2018, ECOWAS had a unified investment code.\n Significantly, the work done on the ECOWAS code also substantially developed a PAN- African investment code for the entire continent.'
  },
  {
    year: 2019,
    image: getUrl('old-man.jpeg'),
    location: 'Ogun State, Nigeria',
    event: 'Nigeria Delivered 20th Inaugural as Professor of Covenant University',
    text: ''
  },
  {
    year: 2020,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Advanced Negotiation on African Continental Free Trade Area kicked off',
    text: ''
  },
  {
    year: 2022,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Appointment as facilitator for the Trade and Investment Liberalization and Facilitation Committee (TILFPC), Nigeria',
    text: ''
  },
  {
    year: 2023,
    image: getUrl('old-man.jpeg'),
    location: 'Abuja, Nigeria',
    event: 'Significant Milestone achieved with African Continental Free Trade Area Negotiations',
    text: ''
  },
  {
    year: 2024,
    image: getUrl('old-man.jpeg'),
    location: 'Calgary, Canada',
    event: '70 birthday celebrations held with Family in Canada',
    text: ''
  },
];

function Photo({item, description}) {
  // const [loading, setLoadCount] = useState(true);
  const image =
    // loading
    // ? <div>Photo</div>
    // :
      <img src={item?.image}
           alt={item?.text}
           loading="lazy"
           className={styles.image}
           width="46%"
    />;

  return item?.image ? image : description;
}

function Story() {
  const [fullSizePhoto, toggleFullSizePhoto] = useState(null);

  const fullSizeImage = <div className={styles.fullSizeWrapper}>
    <img src={fullSizePhoto?.image}
         alt={fullSizePhoto?.event}
    />
    <div className={styles.modalDescription}>
      <div className={styles.year}>{fullSizePhoto?.year}</div>
      {fullSizePhoto?.location && <i>{fullSizePhoto?.location}</i>}
      <h2 className={styles.header}>{fullSizePhoto?.event}</h2>
      {fullSizePhoto?.text && <p className={styles.description}>{fullSizePhoto?.text}</p>}
    </div>

  </div>;

  return <>
    <section className={styles.section}>
      <video autoPlay
             loop
             className={styles.video}
             muted>
        <source src={biographyVidep}
                type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className={styles.timelineWrapper}>
        {timelineHash.map((item, index) => {
          const showYear = index ? item?.year !== timelineHash[index - 1]?.year : true;
          console.log(showYear, item.year, timelineHash[index - 1]?.year);
          const description = item?.text ?
            <>
              <p>{item.text}</p>
              <p className={styles.tip}>Click on image for see more...</p>
            </> : null;
          return <div key={item.year + index}
                      className={styles.yearWrapper}>
            {showYear && <div className={styles.year}>{item.year}</div>}
            <div className={styles.itemWrapper}
                 onClick={() => toggleFullSizePhoto(item)}>
              <Photo item={item}
                     description={description}/>
              {/*<img src={item?.image}*/}
              {/*     alt={item?.text}*/}
              {/*     loading="lazy"*/}
              {/*     className={styles.image}*/}
              {/*     width="46%"*/}
              {/*/>*/}
              <div className={styles.line}></div>
              <div className={styles.descriptionWrapper}>
                {item?.location && <i>{item?.location}</i>}
                <div className={styles.text}>{item?.event}</div>
                {description}

              </div>
            </div>
          </div>;
        })}
      </div>
    </section>
    {fullSizePhoto && <Modal closeModal={() => toggleFullSizePhoto(null)}
                             header="Photo"
                             content={fullSizeImage}></Modal>}
  </>;
}

export default Story;
