import "./companyvisit.css"
import photo from "../../../assets/about picture.png"
import photo1 from "../../../assets/ABOUT US.png"
import girl from "../../../assets/girl.png"


function Company(){
    return(
        <>
        <section className="company-section">

            <div className="logo-area">
            <div className="company-logo">
                <img src={photo} alt="" />
            </div>
            </div>
            <div className="company-info">
                <div className="company-desc">
                <h5>WELCOME TO OUR SITE</h5>
                <h2>We Are The Best Company For Your Visit</h2>
                <br />
                <p>After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!</p>

                <br />
              <img src={photo1} alt="" />
              </div>



              
            </div>


            
        </section>
        <section className="offer-section">
        <div className="offer-container">

          <div className="offer-card">
            <h2>Get Special Offers for Organizations</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>

            <button>Contact Us</button>
          </div>

          <div className="offer-image">
            <img src= {girl} alt="" />
          </div>

        </div>
      </section>

      </>
    )
}
export default Company