import React from "react";
import './Auth.css';
import {Link} from "react-router-dom";

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