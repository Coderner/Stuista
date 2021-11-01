import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="main-footer">
           <div className="container">
               <div className="row">
                   <div className="col">
                       <ul className="footerlist">
                           <li>Teach on Stuista</li>
                           <li>Get the app</li>
                           <li>About us</li>
                           <li>Contact us</li>
                       </ul>
                   </div>
                   <div className="col">
                       <ul className="footerlist">
                           <li>Careers</li>
                           <li>Blog</li>
                           <li>Help and Support</li>
                           <li>Affiliate</li>
                       </ul>
                   </div>
                   <div className="col">
                       <ul className="footerlist">
                           <li>Terms</li>
                           <li>Privacy policy</li>
                           <li>Sitemap</li>
                       </ul>
                   </div>
             </div>
             <div className="row">
               <p className="col-sm">Stuista</p>
               <p className="col-sm">
                 Stuista. Inc.
               </p>
             </div>
           </div>
        </div>
        )
    }
    
export default Footer;

