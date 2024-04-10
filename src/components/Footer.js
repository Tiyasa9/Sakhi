import React from "react";
import Newsletter from "./Newsletter";
import './style.css'
import logo from "./logo.png";
import insta from "./insta.png";
import fb from "./fb.png";
import twitter from "./twitter.png";
import location from "./location.png";
import phone from "./phone.png";
import email from "./email.png";

const Footer = () => {
    return(
        <>
        <Newsletter />

        <div className="footer">
            <div className="details">
                <img src={logo} alt="logo" className="logoImg"></img>
                <p>Empowering Lives, Ending Silence: Together Against Domestic Violence</p>
                <div className="instaHandles">
                <img src={insta} alt="insta"></img>
                <img src={fb} alt="fb"></img>
                <img src={twitter} alt="twitter"></img>
            </div>
            </div>
            

            <div >
                <ul className="footerpart2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Donate</li>
                </ul>
            </div>

            <div>
                <h2>Call Us</h2>
                <div className="callusgroup">
                <img src = {location} alt="location"></img><p>Prayagraj, India</p>
                </div>
                <div className="callusgroup">
                <img src = {phone} alt="phone"></img><p>1-800-72544-38</p>
                </div>
                <div className="callusgroup">
                <img src = {email} alt="email"></img><p>support@sakhiDV.org</p>
                </div>
            </div>

        </div>

        
    
        </>
    )
    
}
export default Footer