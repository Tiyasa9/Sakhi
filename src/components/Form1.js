import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Form1 = () => {
    const [userHelp, setUserHelp] = useState({
        name: "",
        methodofcontact: "",
        contactNumber: "",
        address: "",
        current: "",
        safety: "",
        child: "",
        info: "",
        duration: "",
        language: "",
        trans1: "",
        trans2: "",
        consent1: "",
        consent2: "",
    });

    const[records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserHelp({... userHelp, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...userHelp , id : new Date().getTime.toString()}
        console.log(records);
        setRecords([...records , newRecord]);
        console.log(records);

    }
    return(
        <>
             <Navbar />

             <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" autoComplete="off" value={userHelp.name}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="methodofcontact">How should we contact you?</label>
                    <input type="text" name="methodofcontact" id="methodofcontact" autoComplete="off" value={userHelp.methodofcontact}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="text" name="contactNumber" id="contactNumber" autoComplete="off" value={userHelp.contactNumber}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" autoComplete="off" value={userHelp.address}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="current">Current Living Condition</label>
                    <input type="text" name="current" id="current" autoComplete="off" value={userHelp.current}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="safety">Safety Concerns</label>
                    <input type="text" name="safety" id="safety" autoComplete="off" value={userHelp.safety}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="child">Children or dependencies</label>
                    <input type="number" name="child" id="child" autoComplete="off" value={userHelp.child}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="info">Legal Information</label>
                    <input type="text" name="info" id="info" autoComplete="off" value={userHelp.info}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="duration">Preferred duration of accomodation</label>
                    <input type="text" name="duration" id="duration" autoComplete="off" value={userHelp.duration}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="language">Language prefernces</label>
                    <input type="text" name="language" id="language" autoComplete="off" value={userHelp.language}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="con">Transportation needs?</label>
                    <label> 
                    <input type="checkbox" name="trans1" id="trans1" autoComplete="off" value={userHelp.trans1}
                    onChange={handleInput}/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="trans2" id="trans2" autoComplete="off" value={userHelp.trans2}
                    onChange={handleInput}/>
                    No
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="legalhelp">Confirm consent to store and process provided 
information for the purpose of arranging
 accommodation.</label>
                    <label> 
                    <input type="checkbox" name="consent1" id="consent1" autoComplete="off" value={userHelp.consent1}
                    onChange={handleInput}/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="consent2" id="consent2" autoComplete="off" value={userHelp.consent2}
                    onChange={handleInput}/>
                    No
                    </label>
                    
                </div>
                <button type="submit">Submit</button>
             </form>

             <Footer/>
            
        </>
       

    )
}
export default Form1