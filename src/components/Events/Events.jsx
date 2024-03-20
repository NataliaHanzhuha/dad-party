import styles from './Events.module.css';

function Events() {
  const eventHash = [
    {time: '4:00 pm', events: [{name: 'Arrival of Guests'}]},
    {time: '4:00 pm - 4:35 pm',
      events: [{name: 'Cocktail Hour | 360 Video | Cartoonist'}]},
    {time: '4:45 pm', events: [{name: 'Guests Seated'}]},
    {time: '5:00 pm', events: [{name: 'Entrance of the Celebrant'}]},
    {time: '5:20 pm', events: [{name: 'Opening Prayer'}]},
    {time: '5:20 pm - 5:30 pm', events: [{name: 'Good Will Messages and Speeches'}]},
    {time: '-', events: [{name: 'Presentation by Grand Kids'}]},
    {time: '5:40 pm', events: [{name: 'Dinner'}]},
    {time: '5:20 pm - 5:30 pm', events: [{name: 'Good Will Messages and Speeches'}]},
    {time: '-', events: [{name: 'Cutting of the Cake'}]},
    {time: '-', events: [{name: 'Prayer for the Celebrant and Family'}]},
    {time: '-', events: [{name: 'Toast'}]},
    {time: '-', events: [{name: 'Vote of Thanks'}]},
    {time: '-', events: [{name: 'Closing Prayer'}]},
    {time: '6:50 pm - 6:55 pm', events: [{name: 'Photo Session'}]},
    {time: '-', events: [{name: 'Dance Dance Dance'}]},
  ];

  return <>
    <h1 className={"hh"}>P r o g r a m</h1>
  <section className={styles.section}>

    <div className={styles.eventsWrapper}>
      {eventHash.map((event) => {
        return <div className={styles.eventWrapper}>
          {/* <span className={styles.eventTime}>{event.time}</span> */}
          {/* <div> */}
            {event.events.map((e) => <p className={styles.eventName}>{e.name}</p>)}
          {/* </div> */}
        </div>;
      })}
    </div>
  </section>
  </>

}

export default Events;
