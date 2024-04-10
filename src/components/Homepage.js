import React from "react";
import Navbar from "./Navbar";
import Herosec from "./Herosec";
import Features from "./Features";
import Mission from "./Mission";
import Newsletter from "./Newsletter";
import Footer from "./Footer";


const Homepage = () => {
    return(
        <>
            <Navbar/>
            <Herosec/>
            <Features/>
            <Mission/>
            <Newsletter/>
            <Footer/>
        </>

    )
}
export default Homepage