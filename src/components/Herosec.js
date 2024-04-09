import React from 'react'
import Navbar from './Navbar'
import './style.css'
import pot from "./pot.jpg";


const Herosec = () => {
    return(
        <div>
            <Navbar />
            <div className='Helplinecode'>
            <span className='helpline'>
                Contact us 24/7  1-800-72544-38
            </span>
            </div>
        <div className='Herosection'>

            <div class='hs'>
                <div class='container1'>
                    <div class='container1-text'>
                    Domestic violence affects 30% of women in India.<br />
                    If you or someone you know is experiencing abuse, <br />
                    know that help is available. You are not alone, and <br />
                    there's nothing to be afraid of. Your safety and <br />
                    well-being are our priority, and all information shared <br />
                    will be kept strictly confidential.
                    </div>

                    <div class='container1-buttons'>
                    <button>Get Help Now</button>
                    <button className='Learnmore'>Learn more</button>
                    </div>
                </div>

                <div className='girlimage'>
                    <img src= {pot} alt='portrait1' class='container1-img'></img>
                </div>
            </div>

        </div>
            
            
        </div>

    )
}
export default Herosec