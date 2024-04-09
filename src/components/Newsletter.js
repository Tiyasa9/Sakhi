import React from "react";
import Mission from "./Mission";
import './style.css'

const Newsletter = () => {
    return(
        <>
            <Mission />

            <div className="newsletter">
                <p>Newsletter Subscription</p>
                <p>Subscribe to our newsletter to get to know about women rights and articles </p>
                <form>
                    <div>
                        <input type="text"></input>
                        <input type="submit"></input>
                        
                    </div>
                </form>
            </div>
        
        </>

    )
}
export default Newsletter