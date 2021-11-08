import React from "react";
import "./Homepage.css";
import signup from "../Images/Signup.svg";

const Homepage= () => {
        return(
            <div>
                <div  className="Homepage flex-container">
                                <div className="Content">  
                                    <figure>
                                     <img src={signup} alt="sign-up pic" className="signimage" />
                                    </figure>
                                  <h1 className="learnwith">Learn with joy on</h1>
                                  <h1 className="stuista">Stuista</h1>  
                                  <p>Take the next step in your career with a world class learning <br/> Experience.</p>  
                                </div>
                                    
               </div>
               <div className="Coursebar">
                   <div className="course-list">
                   <ul class="course-list-ul">
                       <li><a className = "course-list-li" href="">DATA SCIENCE</a></li>
                       <li><a className = "course-list-li" href="">AUTONOMOUS SYSTEM</a></li>
                       <li><a className = "course-list-li" href="">PRODUCT MANAGEMENT</a></li>
                       <li><a className = "course-list-li" href="">CLOUD MANAGEMENT</a></li>
                       <li><a className = "course-list-li" href="">AI</a></li>
                       <li><a className = "course-list-li" href="">PROGRAMMING</a></li>
                       <li><a className = "course-list-li" href="">BUSINESS</a></li>
                       <li><a className = "course-list-li" href="">CYBER SECURITY</a></li>
                      </ul>
                   </div>
               </div>

            </div>
            
        )
}

export default Homepage;