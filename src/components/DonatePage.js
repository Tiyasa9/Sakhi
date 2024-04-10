import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Donateform from "./Donateform";

const DonatePage = () => {
    return(
        <>
            <Navbar/>

            <div className="top">
                <div className="don">Donate</div>
                <div className="don-text">Your donation can make a life-changing difference for survivors of domestic violence.
                 With your support, we can provide critical services such as safe accommodation, 
                 counseling, legal assistance, and empowerment resources to those in need.</div>
            </div>
            <div className="body">
                <img src="mother.jpg" alt="mother"></img>
                <Donateform />
            </div>

            <Footer/>
        
        </>
    )
}
export default DonatePage