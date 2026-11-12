import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./secondhead.css"; 

function Secondhead() {
    return (
        <header className="second-header">
            <div className="header-container">
                
                
                <div className="header-logo">
                    <img src={logo} alt="Tuscany Logo" />
                </div>

              
                <nav className="header-nav">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                       
                        <li><Link to="/packages" >Tour Packages</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>

               
                <div className="header-actions">
                    <div className="language-selector">
                        Eng <span className="chevron-down">v</span>
                    </div>
                    <Link to="/login" className="login-link">Login</Link>
                    <button className="signup-btn">Sign Up</button>
                </div>

            </div>
        </header>
    );
}

export default Secondhead;