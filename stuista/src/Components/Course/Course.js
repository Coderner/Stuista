import React from "react";
import "./Course.css";


const Course = () =>{
  return(
     <div>   
           <div className="Coursebg">
                <div  className="CourseIntro">
                                <div className="CourseIntroLines">  
                                   <h5>NANODEGREE PROGRAM</h5>
                                   <h1>Become a Data Engineer</h1>
                                   <p>Data Engineering is the foundation for the new world of Big Data. Enroll now to build <br/>
                                    production-ready data infrastructure, an essential skill for advancing your data career.</p>
                                   <button className="EnrollNow">ENROLL NOW</button>
                                </div>
                </div>
                <div className="Info">
                         <div className="infocol">
                               <h6>ESTIMATE TIME</h6>
                               <p>5 Months</p>
                               <p>At 5-10 hrs a week</p>
                         </div>
                         <div className="infocol">
                               <h6>ENROLL BY</h6>
                               <p>November 17, 2021</p>
                               <p>Get access to classroom immediately on enrollment</p>
                         </div>
                         <div className="infocol">
                               <h6></h6>
                               <p>5 Months</p>
                         </div>
                </div>
           </div>
             
     </div>
  )
}

export default Course;