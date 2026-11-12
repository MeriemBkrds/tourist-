import "./homepage.css"
import photo from "../../assets/main.jpg"
import Firsthead from "../../utils/firsthead/firsthead"
import PopularDestinations from "../homepage/tourpackages/tourpack"
import Company from "./companyvisit/companyvisit"
import CardPack from "./cardpackages/cardpack"
import Comments from "../../utils/comments/comment";
import Booking from "../../utils/booking/booking"
import Foot from "../../utils/footer/footer"


function Home(){

    return(
        <>
        <section className="Firstpage">
            <Firsthead />
            <div className="img" style={{backgroundImage: `url(${photo})`}}>
                   <div className="hero">

          <h1>Enjoy in the best way!</h1>

          <p>
            Enjoy our services for your trip anytime
          </p>

          <div className="vide">

          <div className="search-box">

            <div className="field">
              <label>Number of people</label>
              <select>
                <option>Choose number</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            <div className="field">
              <label>Date</label>
              <input type="date" />
            </div>

            <div className="field">
              <label>Time</label>
              <input type="time" />
            </div>

            <div className="field">
              <label>Tour</label>
              <select>
                <option>Select Tour</option>
              </select>
            </div>

            <div className="field">
              <label>Transportation</label>
              <select>
                <option>Select Transportation</option>
              </select>
            </div>

            <button className="search-btn">
              🔍
            </button>

          </div>

        </div>
            </div>

            </div>

         


        </section>

        <PopularDestinations />
        <Company/>
        <Booking/>
        <CardPack/>
        
        <Comments/>
        <Foot/>
        </>
    )
}

export default  Home