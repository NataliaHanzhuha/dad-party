import styles from './Events.module.css';

function Events() {
  const eventHash = [
    {time: '4:00 pm', events: [{name: 'Arrival of Guests'}]},
    {time: '4:00 pm - 4:35 pm',
      events: [{name: 'Cocktail Hour'}, {name: '360 Video'}, {name: 'Cartoonist'}]},
    {time: '4:45 pm', events: [{name: 'Guest gets seated'}]},
    {time: '5:00 pm', events: [{name: 'Grand Entrance of the Celebrant'}]},
    {time: '5:20 pm', events: [{name: 'Opening Prayers'}]},
    {time: '5:20 pm - 5:30 pm', events: [{name: 'MC'}]},
    {time: '-', events: [{name: 'Speeches'}]},
    {time: '-', events: [{name: 'Cutting of the cake'}, {name: 'Photo session with guests'}]},
    {time: '5:40 pm', events: [{name: 'Dinner Dinner'}]},
    {time: '6:30 pm - 6:45 pm', events: [{name: 'Presentation by the Children'}]},
    {time: '6:50 pm - 6:55 pm', events: [{name: 'Celebrant special dance'}]},
    {time: '-', events: [{name: 'Prayer for the Celebrant and family'}]},
    {time: '-', events: [{name: 'Toast to the Celebrant'}]},
    {time: '-', events: [{name: 'Vote of Thanks by Celebrant'}]},
    {time: '-', events: [{name: 'Closing Prayer'}]},
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
