import React from "react";
import "./User.css";
import { Link} from "react-router-dom";
import profile from "../Images/CourseImages/Avatar3.svg";

const UserDashboard= () => {
return(
           <div className="userDashboard">

                  <div className="userContentblock">
                     <div className="userContent">
                        <div className="ProfileAvatar"><figure><img src={profile}/></figure></div>
                        <div className="userInfo">
                          <h1>Data Engineering</h1>
                          <p>email</p>
                        </div>
          
                   </div>
           </div>


       </div>
              
    )
}

export default UserDashboard;