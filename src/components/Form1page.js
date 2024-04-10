import React from "react";
import Navbar from "./Navbar";
import Form1 from "./Form1";
import Footer from "./Footer";

const Form1page = () => {
    return(
        <>
            <Navbar />
            <div className="top2">
                <div className="housing">Accomodation</div>
                    <div className="housing-text">Safe, temporary accomodation for women and children 
                    escaping domestic abuse with emotional support and guidance</div>
            </div>
            <div>
                <Form1/>
            </div>

            <Footer />
        
        
        </>
    )
}
export default Form1page