import "./contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Secondhead from "../../utils/secondhead/secondhead";
import photo from "../../assets/map.png"
import Foot from "../../utils/footer/footer";

function Contact() {
  return (
    <>
    <Secondhead/>
    <section className="contact-section">
      <div className="contact-left">
        <h2>Get In Touch!</h2>

        <p className="contact-description">
          Fill up the form and our team will get
          <br />
          back to you within 24 hours.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Piazza Napoleone, Lucca, Tuscany</span>
          </div>

          <div className="contact-phone">
            <FaPhoneAlt className="contact-icon" />
            <span>+39 346 368 5708</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>italiainlimo@gmail.com</span>
          </div>

        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">

          <label>Name and Surname</label>
          <input
            type="text"
            placeholder="Enter your name and surname"
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <label>Message</label>
          <textarea
            placeholder="Enter your message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>
      </div>
      
    </section>
    <section className="map-pic">
        <img src={photo} alt="" />
    </section>
    <Foot/>
    </>
  )
}

export default Contact;