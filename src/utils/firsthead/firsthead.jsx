import "./firsthead.css"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


function Firsthead(){
    return(
        <div className="head">
        <div className="area-head">
        <div className="logo-head">
            <img src={logo} alt="" />
        </div>
        <div className="list-head">
            <ul className="nav-links">
           
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/packages">Tour Packages</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            
            </ul>
        </div>
        <div className="login-head">
            <ul>
            <li> En</li>
            <li>Login</li>
            <button id="btn">Sign up</button>
            </ul>

        </div>
        </div>
       </div>
    )
}

export default Firsthead