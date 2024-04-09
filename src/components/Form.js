import React from "react";
import Navbar from "./Navbar";

const Form = () => {
    return(
        <>
             <Navbar />

             <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"/>
                </div>

                <div>
                    <label htmlFor="methodofcontact">How should we contact you?</label>
                    <input type="text" name="methodofcontact" id="methodofcontact"/>
                </div>

                <div>
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="number" name="contactNumber" id="contactNumber"/>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address"/>
                </div>

                <div>
                    <label htmlFor="currsitu">Current Situation</label>
                    <input type="text" name="currsitu" id="currsitu"/>
                </div>

                <div>
                    <label htmlFor="safety">Safety Concerns</label>
                    <input type="text" name="safety" id="safety"/>
                </div>

                <div>
                    <label htmlFor="child">Children or dependencies</label>
                    <input type="number" name="child" id="child"/>
                </div>

                <div>
                    <label htmlFor="his">History of abuse</label>
                    <input type="text" name="his" id="his"/>
                </div>

                <div>
                    <label htmlFor="message">Your message for the team</label>
                    <input type="text" name="message" id="message"/>
                </div>

                <div>
                    <label htmlFor="health">Describe physical and emotional health</label>
                    <input type="text" name="health" id="health"/>
                </div>

                <div>
                    <label htmlFor="con">Have you contacted us before?</label>
                    <label> 
                    <input type="checkbox" name="con1" id="con1"/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="con2" id="con2"/>
                    No
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="legalhelp">Want legal assistance?</label>
                    <label> 
                    <input type="checkbox" name="help1" id="help1"/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="help2" id="help2"/>
                    No
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="legalhelp">Want confidential counselling services?</label>
                    <label> 
                    <input type="checkbox" name="coun1" id="coun1"/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="coun2" id="coun2"/>
                    No
                    </label>
                    
                </div>
                <button type="submit">Submit</button>
             </form>
            
        </>
       

    )
}
export default Form