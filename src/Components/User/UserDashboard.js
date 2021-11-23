import React from "react";
import "./User.css";
import "../Instructor/Instructor.css";
import { Link} from "react-router-dom";
import profile from "../Images/CourseImages/Avatar3.svg";
import CoursegridImage from "../Images/coursegrid.png";

const UserDashboard= () => {
 
// const usergetdata = async () => {
//     try {
//        const res = await fetch(link,{
//             method:"GET",
//             headers: {
//                 Accept: "application/json", 
//                "Content-Type": "application/json"
//             }
//          });
//          const data= await res.json();
//          console.log(data);
//     } catch (err) {
//        console.log(err);
//     }
// }


return(
           <div className="userDashboard">

                  <div className="userContentblock">
                     <div className="userContent">
                        <div className="ProfileAvatar"><figure><img src={profile}/></figure></div>
                        <div className="userInfo">
                            <h1>Hi Shreya Shukla</h1>
                            <h2>shreya@gmail.com</h2>
                        </div>
                     </div>
                  </div>

                  <div className="InstructorsCourses">
                      <div className="CoursesHeading">
                         <h1>ALL COURSE</h1>
                          <div className="Toggle">
                             <h3>My learnings</h3>
                             <h3>My Wishlist</h3>
                          </div>
                      </div>
                     <div className="InstructorCourses">
                           <div className="coursecard">
                             <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                             <h5>Intro Data Analysis</h5>
                             <p >Progress</p>
                             <p>1 Month</p>
                           </div>
                           <div className="coursecard">
                             <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                             <h5>Intro Data Analysis</h5>
                             <p >Progress</p>
                             <p>1 Month</p>
                           </div>
                           <div className="coursecard">
                             <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                             <h5>Intro Data Analysis</h5>
                             <p >Progress</p>
                             <p>1 Month</p>
                           </div>
                     </div>
              </div>
              


        </div>
              
    )
}

export default UserDashboard;