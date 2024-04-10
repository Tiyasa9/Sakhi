import React, { useState } from "react";

const Donateform = () => {
    const [userHelp, setUserHelp] = useState({
        name: "",
        email: "",
        contactNumber: "",
        amount: "",
        card:"",
        expiry:"",
        cvv:""
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
             <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" autoComplete="off" value={userHelp.name}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" id="email" autoComplete="off" value={userHelp.email}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="text" name="contactNumber" id="contactNumber" autoComplete="off" value={userHelp.contactNumber}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="amount">Enter Amount</label>
                    <input type="text" name="amount" id="amount" autoComplete="off" value={userHelp.amount}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="card">Card Number</label>
                    <input type="text" name="card" id="card" autoComplete="off" value={userHelp.card}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="expiry">Expiry Date</label>
                    <input type="text" name="expiry" id="expiry" autoComplete="off" value={userHelp.expiry}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="cvv">CVV</label>
                    <input type="number" name="cvv" id="cvv" autoComplete="off" value={userHelp.cvv}
                    onChange={handleInput}/>
                </div>

                <button type="submit">Pay Now</button>
             </form>
            
        </>
       

    )
}
export default Donateform