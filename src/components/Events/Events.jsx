import styles from './Events.module.css';

function Events() {
  const eventHash = [
    {time: '5 pm', events: [{name: 'Arrival of Guests'}]},
    {time: '5 pm - 5:35 pm', events: [{name: 'Cocktail Hour'}, {name: '360 Video'}, {name: 'Cartoonist'}]},
    {time: '5:40 pm', events: [{name: 'Guest gets seated'}]},
    {time: '6 pm', events: [{name: 'Grand Entrance of the Celebrant'}]},
    {time: '6:10 pm', events: [{name: 'Opening Prayers'}]},
    {time: '-', events: [{name: 'Speeches'}]},
    {time: '6:30 pm', events: [{name: 'Dinner'}]},
    {time: '7:15 pm', events: [{name: 'Cutting of the cake'}, {name: 'Photo session with guests'}]},
    {time: '-', events: [{name: 'Celebrants special dance'}]},
    {time: '-', events: [{name: 'Prayer for the Celebrant and family'}]},
    {time: '-', events: [{name: 'Toast to the Celebrant'}]},
    {time: '-', events: [{name: 'Vote of Thanks by Celebrant'}]},
    {time: '-', events: [{name: 'Dance Dance Dance'}]},
  ];

  return <section className={styles.section}>
    <h1>Party Events</h1>

    <div className={styles.eventsWrapper}>
      {eventHash.map((event) => {
        return <div className={styles.eventWrapper}>
          <span className={styles.eventTime}>{event.time}</span>
          <div>
            {event.events.map((e) => <p className={styles.eventName}>{e.name}</p>)}
          </div>
        </div>;
      })}
    </div>
  </section>
}

export default Events;
