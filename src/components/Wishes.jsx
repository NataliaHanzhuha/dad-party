function Wishes() {
  return <section id="wishes"
                  className="wishes-wrapper">
    <h1>Well Wishes</h1>

    <label htmlFor="textarea">Your Wishes
      <textarea placeholder="Enter something for birthday guy"></textarea>
    </label>


    <label htmlFor="input">Your Name (optional)
      <input placeholder="Your name"/>
    </label>

    <button className="big-close-btn">Send</button>
  </section>;
}

export default Wishes;
