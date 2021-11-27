import React from "react";
import "./Footer.css";
import language from "../Images/language.png";

const Footer = () => {
    return(
        <div className="main-footer">
           <div className="container">
               <div className="row">
                   <div className="col">
                       <div className="footerlist">
                           <li>Teach on Stuista</li>
                           <li>About us</li>
                           <li>Contact Us</li>
                       </div>
                   </div>
                   <div className="col">
                       <div className="footerlist">
                           <li>Careers</li>
                           <li>Help and Support</li>
                           <li>Affiliate</li>
                       </div>
                   </div>
                   <div className="col">
                       <div className="footerlist">
                           <li>Terms</li>
                           <li>Privacy policy</li>
                       </div>
                   </div>
                   <div className="col">
                    <button className="language-button"><img src={language} alt="language"/> English</button>
                   </div>
             </div>
             <div className="row second">
               <p className="col">Stuista</p>
               <p className="col copyright"> ©{(new Date().getFullYear())} Stuista. Inc.</p>
             </div>
           </div>
        </div>
        )
    }
    
export default Footer;

