import React from "react";
import Mission from "./Mission";
import './style.css'

const Newsletter = () => {
    return(
        <>
            <Mission />
        <div className="news">
            <div className="newsletter">
                <p className="newletter">Newsletter Subscription</p>
                <p className="texttext">Subscribe to our newsletter to get to know about women rights and articles </p>
                <form>
                    <div className="formdiv">
                        <input type="text" placeholder="Enter your email address"></input>
                        <input type="submit"></input>
                        
                    </div>
                </form>
            </div>
        </div>
        </>

    )
}
export default Newsletter