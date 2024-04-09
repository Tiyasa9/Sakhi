import React from "react";
import Herosec from "./Herosec";
import './style.css'
import Vector from "./Vector.png"
import Vector1 from "./Vector-1.png"
import Vector2 from "./Vector-2.png"
import Vector3 from "./Vector-3.png"
import Vector4 from "./Vector-4.png"
import house from "./house.png"

const Features = () => {
    return(
        <div>
            <Herosec />

            <p className="ques">How can we help you today?</p>

            <div className="buttonRow1">
                <button className="optForHelp">
                    <img src={Vector} alt="help"></img><p className="opt-for-help-1">Opt for help</p>
                </button>
                <button className="Accomodation">
                    <img src={house} alt="house"></img><p className="accomodation-1">Accomodation</p>
                </button>
                <button className="Legal">
                    <img src={Vector1} alt="law"></img><p className="legal-assistance">Legal Assistance</p>
                </button>
            </div>

            <div className="buttonRow2">
                <button className="counselling">
                    <img src={Vector2} alt="coun"></img><p className="confidential-counselling">Confidential Counselling</p>
                </button>
                <button className="Community">
                    <img src={Vector3} alt="resources"></img><p className="community-resources">Community<br />
            Resources</p>
                </button>
                <button className="rights">
                    <img src={Vector4} alt="rights"></img><p className="know-about-your-rights"> Know about<br />
            your rights</p>
                </button>
            </div>

        </div>
        
    )
}
export default Features