import "./booking.css";
import bike from "../../assets/bike.png"

function Booking() {
  return (
    <section className="booking">
      <h2>Book Now Bike</h2>

      <div className="booking-container">

        <div className="booking-form">

          <div className="input-box">
            <label>Name and Surname</label>
            <input
              type="text"
              placeholder="Enter your name and surname"
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="input-box">
            <label>Telephone Number</label>
            <input
              type="tel"
              placeholder="Enter your telephone number"
            />
          </div>

          <div className="input-box">
            <label>Service Type</label>

            <select>
              <option>Select the service types</option>
              <option>Mountain Bike</option>
              <option>Road Bike</option>
              <option>Electric Bike</option>
            </select>
          </div>

          <div className="input-box">
            <label>Date</label>
            <input type="date" />
          </div>

          <div className="input-box">
            <label>Time</label>
            <input type="time" />
          </div>

          <button className="book-btn">
            Book Now
          </button>

        </div>

        <div className="bike-image">
          <img src={bike} alt="Bike" />
        </div>

      </div>
    </section>
  );
}

export default Booking;