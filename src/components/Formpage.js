import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Footer from "./Footer";
import './index.css';

const Formpage = () => {
    return(
        <>
            <Navbar />
            <div className="top1">
                <div className="opt">Opt for help</div>
                    <div className="opt-text">If you are seeking support, call the Helpline. You can also contact the Helpline 
                    – in confidence – via the form below.</div>
            </div>
            <div>
                <Form/>
            </div>

            <Footer />
        
        
        </>
    )
}
export default Formpage