import React, {useState} from "react";
import signup from "../Images/Signup.svg";
import './Auth.css';
import { Link,useHistory} from "react-router-dom";

const ContinueAs = () => {
     return(
         <div className="ContinueAs">
             <div className="ContinueAsform">
                <Link to="/"><button className="authbutton" >Continue as User</button></Link>
                <Link to="/"><button className="authbutton" >Continue as Instructor</button></Link>
             </div>
         </div>
     )
}

export default ContinueAs;