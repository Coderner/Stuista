import React from "react";
import "./Instructor.css";
import { Link} from "react-router-dom";
import profile from "../Images/CourseImages/Avatar3.svg";
import CoursegridImage from "../Images/coursegrid.png";

const InstructorDashboard= () => {
  
//   const Instructorgetdata = async () => {
//     try {
//        const res = await fetch("http://08ca-27-63-132-161.ngrok.io/courses/webd"",
//         {
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
        <div className="InstructorDashboard">

              <div className="InstructorContentblock">

                      <div className="InstructorContent">
                         <div className="ProfileAvatar"><figure><img src={profile}/></figure></div>
                         <div className="InstructorInfo">
                            <h1>Hi Shreya Shukla</h1>
                            <h2>shreya@gmail.com</h2>
                            <p>Area of Expertise</p>
                            <p>years of Experience</p>
                         </div>
                      </div>

                      <div className="CreateCourseSection">
                            <h1 className="CourseCreationHeading">Jump Into Course Creation</h1>
                            <button className="CreateCourse"><Link to="/courseupload">Create your course</Link></button>
                     </div>
              
              </div>
              <div className="InstructorsCourses">
                      <div className="CoursesHeading"><h1>MY COURSES</h1></div>
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

export default InstructorDashboard;
