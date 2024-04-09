import React from 'react'
import Navbar from './Navbar'
import './style.css'
import pot from "./pot.jpg";


const Herosec = () => {
    return(
        <div>
            <Navbar />

            <span className='helpline'>
                Contact us 24/7  1-800-72544-38
            </span>

            <div className='hs'>

            <div className='container1'>
               <div className='container1-text'>
                Domestic violence affects 30% of women in India.<br />
                If you or someone you know is experiencing abuse, <br />
                know that help is available. You are not alone, and <br />
                there&#39;s nothing to be afraid of. Your safety and <br />
                well-being are our priority, and all information shared <br />
                will be kept strictly confidential.
                </div>

                <div className='container1-buttons'>
                        <button>Get Help Now</button>
                        <button>Learn more</button>
                    </div>
                
                </div>

                <div>
                    <img src= {pot} alt='potrait1' className='container1-img'></img>
                </div>


            </div>

            
            
        </div>

    )
}
export default Herosec