import React from "react";
import './style.css'
import Vector from "./Vector.png"
import Vector1 from "./Vector-1.png"
import Vector2 from "./Vector-2.png"
import Vector3 from "./Vector-3.png"
import Vector4 from "./Vector-4.png"
import house from "./house.png"

const Features = () => {
    return(
        <div className="Features"> {/* Add a class to the Features container */}

            <div className="Features1">

            <p className="ques">How can we help you today?</p>

            <div className="buttonContainer"> {/* Use a common class for both button rows */}
                <div className="buttonRow1"> {/* Add a class for the first button row */}
                    <button className="optForHelp">
                        <img src={Vector} alt="help"></img><p className="opt-for-help-1">Opt for help</p>
                    </button>
                    <button className="Accommodation">
                        <img src={house} alt="house"></img><p className="accommodation-1">Residence</p>
                    </button>
                  
                </div>

                <div className="buttonRow2"> {/* Add a class for the second button row */}
                <button className="Legal">
                        <img src={Vector1} alt="law"></img><p className="legal-assistance">Legal Assistance</p>
                    </button>
                    <button className="counselling">
                        <img src={Vector2} alt="coun"></img><p className="confidential-counselling">Confidential Counselling</p>
                    </button>
                </div>
                <div className="buttonRow3"> {/* Add a class for the second button row */}
                    
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
            </div>

        </div>
        
    )
}
export default Features
