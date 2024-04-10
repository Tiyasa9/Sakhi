import React, { useState } from "react";
import './index.css';

const Form = () => {
    const [userHelp, setUserHelp] = useState({
        name: "",
        method: "",
        contactNumber: "",
        address: "",
        current: "",
        safety: "",
        child: "",
        history: "",
        message: "",
        health: "",
        contact1: "",
        contact2: "",
        assistance1: "",
        assistance2: "",
        confi1: "",
        confi2: ""
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

             <div className="form1-container">
             <form onSubmit={handleSubmit}>
                <div className="g1">
                    <label htmlFor="name" className="name">Name</label>
                    <input type="text" name="name" id="name" autoComplete="off" value={userHelp.name}
                    onChange={handleInput}/>
                </div>

                <div className="g2">
                    <label htmlFor="method" className="method">How should we contact you?</label>
                    <input type="text" name="method" id="method" autoComplete="off" value={userHelp.method}
                    onChange={handleInput}/>
                </div>

                <div className="g3">
                    <label htmlFor="contactNumber" className="contact">Contact Number</label>
                    <input type="text" name="contactNumber" id="contactNumber" autoComplete="off" value={userHelp.contactNumber}
                    onChange={handleInput}/>
                </div>

                <div className="g4">
                    <label htmlFor="address" className="address">Address</label>
                    <input type="text" name="address" id="address" autoComplete="off" value={userHelp.address}
                    onChange={handleInput}/>
                </div>

                <div className="g5">
                    <label htmlFor="current" className="current">Current Situation</label>
                    <input type="text" name="current" id="current" autoComplete="off" value={userHelp.current}
                    onChange={handleInput}/>
                </div>

                <div className="g6">
                    <label htmlFor="safety" className="safety">Safety Concerns</label>
                    <input type="text" name="safety" id="safety" autoComplete="off" value={userHelp.safety}
                    onChange={handleInput}/>
                </div>

                <div className="g7">
                    <label htmlFor="child" className="child">Children or dependencies</label>
                    <input type="number" name="child" id="child" autoComplete="off" value={userHelp.child}
                    onChange={handleInput}/>
                </div>

                <div className="g8">
                    <label htmlFor="history" className="history">History of abuse</label>
                    <input type="text" name="history" id="history" autoComplete="off" value={userHelp.history}
                    onChange={handleInput}/>
                </div>

                <div className="g9">
                    <label htmlFor="message" className="message">Your message for the team</label>
                    <input type="text" name="message" id="message" autoComplete="off" value={userHelp.message}
                    onChange={handleInput}/>
                </div>

                <div className="g10">
                    <label htmlFor="health" className="health">Describe physical and emotional health</label>
                    <input type="text" name="health" id="health" autoComplete="off" value={userHelp.health}
                    onChange={handleInput}/>
                </div>

                <div className="g11">
                    <label htmlFor="con" className="con">Have you contacted us before?</label>
                    <label> 
                    <input type="checkbox" name="contact1" id="contact1" autoComplete="off" value={userHelp.contact1}
                    onChange={handleInput}/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="contact2" id="contact2" autoComplete="off" value={userHelp.contact2}
                    onChange={handleInput}/>
                    No
                    </label>
                    
                </div>

                <div className="g12">
                    <label htmlFor="legalhelp" className="leg">Want legal assistance?</label>
                    <label className="yes1"> 
                    <input type="checkbox" name="assistance1" id="assistance1" autoComplete="off" value={userHelp.assistance1}
                    onChange={handleInput}/>
                    Yes
                    </label>

                    <label className="no1"> 
                    <input type="checkbox" name="assistance2" id="assistance2" autoComplete="off" value={userHelp.assistance2}
                    onChange={handleInput}/>
                    No
                    </label>
                    
                </div>

                <div className="g13">
                    <label htmlFor="legalhelp">Want confidential counselling services?</label>
                    <label className="yes2"> 
                    <input type="checkbox" name="confi1" id="confi1" autoComplete="off" value={userHelp.confi1}
                    onChange={handleInput}/>
                    Yes
                    </label>

                    <label className="no2"> 
                    <input type="checkbox" name="confi2" id="confi2" autoComplete="off" value={userHelp.confi2}
                    onChange={handleInput}/>
                    No
                    </label>
                    
                </div>
                <button type="submit">Submit</button>
             </form>


             </div>
            
        </>
       

    )
}
export default Form