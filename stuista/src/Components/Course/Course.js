import React from "react";
import "./Course.css";
import star from "../Images/CourseImages/star.png";
import avatar1 from "../Images/CourseImages/Avatar1.svg";
import avatar2 from "../Images/CourseImages/Avatar2.svg";
import avatar3 from "../Images/CourseImages/Avatar3.svg";

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
                                   <button className="CourseButton syllabus">DOWNLOAD SYLLABUS</button>
                                   <button className="CourseButton enroll">ENROLL NOW</button>
                                </div>
                </div>

                <div className="courseInfo">
                      <div className="Info">
                         <div className="infocol">
                               <h6 className="Infoheading">ESTIMATE TIME</h6>
                               <p className="infodata">5 Months</p>
                               <p>At 5-10 hrs a week</p>
                         </div>
                         <div className="infocol">
                               <h6 className="Infoheading">PRICE</h6>
                               <p className="infodata"></p>
                               <p>Get access to classroom immediately on enrollment</p>
                         </div>
                         <div className="infocol">
                               <h6 className="Infoheading">PREREQUISITES</h6>
                               <p className="infodata"></p>
                         </div>
                     </div>
                </div>

                <h2 className="WhatLearn">What you will learn</h2>

                <div className="CourseContentblock">
                      <div className="CourseContent">
                      <div className="CourseBrief">
                            <h1>Data Engineering</h1>
                            <p className="aboutCourse"> Learn to design data models, build data warehouses and data lakes, automate data pipelines, and work with massive datasets.
                                At the end of the program, you’ll combine your new skills by completing a capstone project.</p>
                      </div>
                      <p id="hideDetails">HIDE DETAILS</p>
                      </div>
                </div>



                <div className="ProgramsOverview">
            
                   <h1 className="programs">All our Programs include</h1>

                   <div className="Programfeatures">
                        {/* <div className="featureImage"><figure><img src={first} alt="overview pic" className="programOverviewimage" /></figure></div> */}
                        <div className="feature">
                        <h6 className="title">Real-world projects from industry experts</h6>
                        <p className="paracontent">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
                        </div>
                   </div>

                   <div className="Programfeatures">
                        {/* <div className="featureImage"><figure><img src={second} alt="overview pic" className="programOverviewimage" /></figure></div> */}
                        <div className="feature">
                        <h6 className="title">Technical mentor support</h6>
                        <p className="paracontent">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
                        </div>
                  </div>
                   <div className="Programfeatures">
                        {/* <div className="featureImage"><figure><img src={third} alt="overview pic" className="programOverviewimage" /></figure></div> */}
                        <div className="feature">
                        <h6 className="title">Career services</h6>
                        <p className="paracontent">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
                        </div>
                  </div>
                   <div className="Programfeatures">
                        {/* <div className="featureImage"><figure><img src={fourth} alt="overview pic" className="programOverviewimage" /></figure></div> */}
                        <div className="feature">
                        <h6 className="title">Flexible learning program</h6>
                        <p className="paracontent">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
                        </div>
                   </div>
                  
                </div>

                

                <div className="Reviews">
                      <div className="ReviewContent">
                        <h5 className="reviewtitle">Top Student Reviews</h5>
                        <div className="Reviewsblock">
                          <div className="Reviewcard">
                           <figure><img src={avatar1} className="Avatarimage" /></figure>
                           <h5 className="name">Alexa</h5>
                           <button className="reviewbutton"><img src={star}/></button>
                           <p>ESTIMATE TIME</p>
                           <p>1 Month</p>
                          </div>
                          <div className="Reviewcard">
                           <figure><img src={avatar2} className="Avatarimage" /></figure>
                           <h5 className="name">Alexa</h5>
                           <button className="reviewbutton"><img src={star}/></button>
                           <p>ESTIMATE TIME</p>
                           <p>1 Month</p>
                          </div>
                          <div className="Reviewcard">
                           <figure><img src={avatar3} className="Avatarimage" /></figure>
                           <h5 className="name">Alexa</h5>
                           <button className="reviewbutton"><img src={star}/></button>
                           <p>ESTIMATE TIME</p>
                           <p>1 Month</p>
                          </div>
                          <div className="Reviewcard">
                           <figure><img src={avatar2} className="Avatarimage" /></figure>
                           <h5 className="name">Alexa</h5>
                           <button className="reviewbutton"><img src={star}/></button>
                           <p>ESTIMATE TIME</p>
                           <p>1 Month</p>
                          </div>
                          <div className="Reviewcard">
                           <figure><img src={avatar1} className="Avatarimage" /></figure>
                           <h5 className="name">Alexa</h5>
                           <button className="reviewbutton"><img src={star}/></button>
                           <p>ESTIMATE TIME</p>
                           <p>1 Month</p>
                          </div>
                          <div className="Reviewcard">
                           <figure><img src={avatar3} className="Avatarimage" /></figure>
                           <h5 className="name">Alexa</h5>
                           <button className="reviewbutton"><img src={star}/></button>
                           <p>ESTIMATE TIME</p>
                           <p>1 Month</p>
                          </div>
                        </div>
                    </div>
                </div>

           </div>
             
     </div>
  )
}

export default Course;