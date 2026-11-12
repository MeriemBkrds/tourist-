import "./secondpage.css";
import cityImage from "../../../assets/second.png";

import {
  FaClipboardList,
  FaAward,
  FaUserTie,
  FaThumbsUp,
} from "react-icons/fa";

function Second() {
  return (
    <>
      

      <section className="about-section">

        <div className="about-image">
          <img src={cityImage} alt="Lucca" />
        </div>

        <div className="about-content">

          <span className="section-subtitle">
            WELCOME TO OUR SITE!
          </span>

          <h2 className="section-title">
            We Are The Center Of Lucca To Offer You The Best
          </h2>

          <p className="section-description">
            We are right in the center of Lucca to offer you the real city
            life! With years of experience in practically every tourism
            sector, with us you can find complete packages at the lowest
            price, to travel and learn and have fun all without worries
            and without stress. What are you waiting for? Book a beautiful
            evening, a trip to Tuscany, or a personal tour designed just
            for you.
          </p>

          <div className="stats">

            <div className="stat-box">
              <h3>20+</h3>
              <p>Years <br /> Experience</p>
            </div>

            <div className="stat-box">
              <h3>100+</h3>
              <p>Happy <br /> Customers</p>
            </div>

            <div className="stat-box">
              <h3>15+</h3>
              <p>Choice <br /> Of Services</p>
            </div>

            <div className="stat-box">
              <h3>10+</h3>
              <p>Professional <br /> Guides</p>
            </div>

          </div>

        </div>

      </section>

     

      <section className="features-section">

        <div className="feature-card">
          <div className="feature-icon">
            <FaClipboardList />
          </div>

          <h3>Complete Packages For All Your Wishes</h3>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaAward />
          </div>

          <h3>Over 30 Years Of Experience</h3>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaUserTie />
          </div>

          <h3>Expert Guides For You</h3>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaThumbsUp />
          </div>

          <h3>Guaranteed Fun At The Best Price!</h3>
        </div>

      </section>
    </>
  );
}

export default Second;