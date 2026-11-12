import "./aboutus.css";
import Firsthead from "../../utils/firsthead/firsthead";
import photo from "../../assets/aboutpic.jpg"
import Second from "./secondpage/secondpage";
import Comments from "../../utils/comments/comment";
import Foot from "../../utils/footer/footer";

function About() {
  return (
    <>
    <section className="first-about">
      <Firsthead />

      <div
        className="about-hero"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="about-overlay"></div>

        <div className="about-content">
          <h1>Our team cares about your full relax</h1>

          <p>
            But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give
            you a complete account of the system, and expound the actual
            teachings of the great explorer of the truth, the
            master-builder of human happiness.
          </p>

          <button className="about-btn">
            View our Tour Packages
          </button>
        </div>
      </div>
    </section>

    <Second/>
    <Comments/>
    <Foot/>
    </>


  );
}

export default About;