import React from "react";
import '../components/Home.css'
//  import logos from "./Images/logo.png"
const Home = () =>{
    return(
        <>
        <div className="container">
                <div className="logo1">
                    <img src="./Images/logo.png" alt="error" className="img-one"/>
                </div>
                <div className="content">
                    <img src="./Images/1.png" alt="" className="img-two"/>
                    <div className="content-two">
                    <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY
                                 CONSERVATION AWARD 2018 for the 4th time.</p>
                        <ul>
                                 <li>C.R.I.'s energy efficient products are well recognized 
                                    by various Government Institutions, as trustworthy
                                     products for various projects across the globe to
                                      save energy.</li>
                                <li> C.R.I. is the highest contributor in the country for the
                                     projects of EESL (Energy Efficiency Services Limited)
                                      to replace the old inefficient pumps with 5 Star 
                                       energy efficient smart pumps with IoT enabled control
                                        panel. </li>
                        </ul>
                        <div className="content-three">
                            <img src="./Images/2.png" alt="" className="img-three"/>
                        </div>
                        <ul>
                                Government of India has awarded the <b>"National Energy Conservation
                                     Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I.
                                     Group received the award from Smt. Sumitra Mahajan, Speaker of 
                                     Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                                </ul>
                    </div>
                </div>
                <div className="paragraph">
                    <p>
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE
                     SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
                    </p>
                </div>
                <div className="bottom-paragraph">
                    <img src="./Images/3.png" alt="" className="img-four"/>
                    <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
                         - Solar Systems - Motors </p>
                        
                </div>
               <div className="line"></div>
               <div className="bottom-paragraph">
                <p><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
                <p>CHEMICALS & PROCESS
                 <b className="straight">|</b>POWER 
                 <b className="straight">|</b> WATER & WASTE WATER
                 <b className="straight">|</b> OILS & GAS 
                 <b className="straight">|</b>PHARMA 
                 <b className="straight">|</b>SUGARS &  DISTILLERIES 
                 <b className="straight">|</b>PAPER & PULP 
                 <b className="straight">|</b>MARINE & DEFENCE 
                 <b className="straight">|</b>METAL & MINING 
                 <b className="straight">|</b>FOOD & BEVERAGE
                 <b className="straight">|</b> PETROCHEMICAL & REFINERIES 
                 <b className="straight">|</b>SOLAR 
                 <b className="straight">|</b>BUILDING 
                 <b className="straight">|</b>HVAC 
                 <b className="straight">|</b>FIRE FIGHTING 
                 <b className="straight">|</b>AGRICULTURE & RESIDENTIAL</p>
               </div>
               <footer>
               <p>
               <i class="fa-solid fa-phone"></i>
                    Toll free <b>1800 200 1734</b>
                 </p>
                 <p>
                    
                 <i class="fa-brands fa-facebook"></i>
                    www.facebook.com/cripumps
                 </p>
                 <p>
                 <i class="fa-solid fa-globe"></i>
                    www.crigroups.com
                 </p>
               </footer>
            </div>            
        
        </>
    )
}
export default Home;