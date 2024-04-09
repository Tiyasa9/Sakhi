import React from "react";
import Features from "./Features";
import './style.css'
import woman from "./woman.png";


const Mission = () => {
    return(
        <div className="homepage">
        <Features />

        <img src={woman} alt="womanPic" className="missionPic"></img>
        <p>Providing holistic support and resources for survivors of domestic violence,
            ensuring confidentiality, empowerment, and access to essential services.</p>
        
        <div className="mission">
            <p>Our mission is to empower survivors of domestic violence by 
                providing access to critical support services, resources, and information 
                in a safe and user-friendly online environment. We believe in the 
                importance of raising awareness, promoting education, and fostering 
                community collaboration to address the root causes of domestic violence 
                and create a future free from abuse.
            </p>
            <button>Learn more</button>
        </div>
        </div>

    )
}

export default Mission