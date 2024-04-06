import styles from './Events.module.css';

function Events() {
  const eventHash = [
    'Arrival of Guests',
    'Cocktail Hour | 360 Video | Cartoonist',
    'Guests Seated',
    'Entrance of the Celebrant',
    'Opening Prayer',
    'Biography',
    'Good Will Messages and Speeches',
    'Presentation by Grand Kids',
    'Dinner | Photo Session',
    'Cutting of the Cake',
    'Good Will Messages and Speeches',
    'Prayer for the Celebrant and Family',
    'Celebrants Dance',
    'Toast | Vote of Thanks',
    'Closing Prayer',
    'Dance Dance Dance'
  ];

  return<section className={styles.section}>

    <div className={styles.eventsWrapper}>
      {eventHash.map((event) => <p className={styles.eventName}>{event}</p>)}
    </div>
  </section>

}

export default Events;
