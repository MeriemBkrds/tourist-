import "./footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Foot() {
  return (
    <footer className="footer-area">
      <div className="footer-container">

       
        <div className="footer-logo-area">
          <img src={logo} alt="Tours to Tuscany" className="footer-logo" />
        </div>

        <hr />

        
        <div className="footer-list">

       
          <div className="footer-column">
            <h3>Services</h3>

            <ul>
              <li>Bike and Rickshaw Rental</li>
              <li>Guided Tours of Lucca</li>
              <li>Guided Bike Tour of Lucca</li>
              <li>Trip in the Tuscan Hills</li>
              <li>Transportation with Luxury Cars</li>
              <li>Wine Tours by Bus with Guide</li>
            </ul>
          </div>

          
          <div className="footer-column">
            <h3>Home</h3>

            <ul className="footer-links">
                <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/packages">Tour Packages</Link>
                    </li>
            </ul>
          </div>

          
          <div className="footer-column">
            <h3>Help</h3>

            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

         
          <div className="footer-column">
            <h3>Contacts</h3>

            <ul className="contact-list">

              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Piazza Napoleone, Lucca, Tuscany</span>
              </li>

              <li>
                <FaPhoneAlt className="contact-icon" />
                <span>+39 346 368 5708</span>
              </li>

              <li>
                <FaEnvelope className="contact-icon" />
                <span>italiainlimo@gmail.com</span>
              </li>

            </ul>
          </div>

          
          <div className="footer-column">
            <h3>Social Media</h3>

            <div className="social-icons">

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

            </div>
          </div>

        </div>

        <hr />

        <div className="footer-copyright">
          <p>Copyright © 2022. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Foot;