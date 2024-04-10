import React from "react";
import Navbar from "./components/Navbar";
import Herosec from "./components/Herosec";
import Features from "./components/Features";
import Mission from "./components/Mission";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
// import Form from "./components/Form";

const App = () => {
  return(
    <>
      <Navbar/>
      <Herosec/>
      <Features/>
      <Mission/>
      <Newsletter/>
      <Footer />
    </>
    
  
  )
}
export default App