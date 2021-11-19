import React from "react";
import "./Course.css";
import star from "../Images/CourseImages/star.png";
import avatar1 from "../Images/CourseImages/Avatar1.svg";
import avatar2 from "../Images/CourseImages/Avatar2.svg";
import avatar3 from "../Images/CourseImages/Avatar3.svg";
import  third from "../Images/career-coach.webp";
import first from "../Images/real-world-projects.webp";
import  fourth from "../Images/self-paced.webp";
import  second from "../Images/mentor.webp";
import user from "../Homepage/Homepage";
import {Link,useHistory} from "react-router-dom";

const Course = () =>{

      const history = useHistory();
      let object = {
            title: history.location.state.title,
            introduction: history.location.state.introduction,
            duration : history.location.state.duration,
            price: history.location.state.price,
            preRequisites: history.location.state.preRequisites,
            description: history.location.state.description,
            language: history.location.state.language,
            imageUrl: history.location.state.imageUrl,
            instructorName: history.location.state.instructorName,
            instructorEmail: history.location.state.instructorEmail,
            instructorExperience: history.location.state.instructorExperience,
            // reviews: history.location.state.reviews,
        }

  return(
     <div>   
           <div className="Coursebg">
                <div  className="CourseIntro">
                                <div className="CourseIntroLines">  
                                   <h1>{object.title}</h1>
                                   <p>{object.introduction}</p>
                                   <button className="CourseButton syllabus">DOWNLOAD SYLLABUS</button>
                                   <button className="CourseButton enroll">BUY NOW</button>
                                </div>
                </div>

                <div className="courseInfo">
                      <div className="Info">
                         <div className="infocol">
                               <h6 className="Infoheading">ESTIMATE TIME</h6>
                               <p className="infodata">{object.duration}</p>
                               <p>At 5-10 hrs a week</p>
                         </div>
                         <div className="infocol">
                               <h6 className="Infoheading">Price</h6>
                               <p className="infodata">{object.price}</p>
                               <p>Access classroom immediately</p>
                         </div>
                         <div className="infocol">
                               <h6 className="Infoheading">PREREQUISITES</h6>
                               <p className="infodata">{object.preRequisites}</p>
                               <p className="infodata">{object.language}</p>
                         </div>
                     </div>
                </div>

                <h2 className="WhatLearn">What you will learn</h2>

                <div className="CourseContentblock">
                      <div className="CourseContent">
                      <div className="CourseBrief">
                            <h1>{object.title}</h1>
                            <p className="aboutCourse">{object.description}</p>
                            <h3 className="Instructor">Instructor Details</h3>
                            <p className="aboutCourse">{object.instructorName}</p>
                            <p className="aboutCourse">{object.instructorEmail}</p>
                            <p className="aboutCourse">{object.instructorExperience}</p>
                      </div>
                            <div className="Imagecourse"><figure><img src={"https://stuista.herokuapp.com/" + object.imageUrl } alt="Course pic" className="carouselimage" /></figure></div>
                      </div>
                </div>

                <div>
                                   <h1 id="buylater">Wanna buy later?</h1>
                                   <Link to={{ 
                                                 pathname: "/cart", 
                                                 state: object
                                             }}> <button className="buylaterbuttons">ADD TO CART</button></Link>
                                  
                                   <button className="buylaterbuttons">ADD TO FAVOURITES</button>
                </div>

                <div className="ProgramsOverview">
            
                   <h1 className="programs">All our Programs include</h1>

                   <div className="Programfeatures">
                        <div className="featureImage"><figure><img src={first} alt="overview pic" className="programOverviewimage" /></figure></div>
                        <div className="feature">
                        <h6 className="title">Real-world projects from industry experts</h6>
                        <p className="paracontent">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
                        </div>
                   </div>

                   <div className="Programfeatures">
                        <div className="featureImage"><figure><img src={second} alt="overview pic" className="programOverviewimage" /></figure></div>
                        <div className="feature">
                        <h6 className="title">Technical mentor support</h6>
                        <p className="paracontent">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
                        </div>
                  </div>
                   <div className="Programfeatures">
                        <div className="featureImage"><figure><img src={third} alt="overview pic" className="programOverviewimage" /></figure></div>
                        <div className="feature">
                        <h6 className="title">Career services</h6>
                        <p className="paracontent">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
                        </div>
                  </div>
                   <div className="Programfeatures">
                        <div className="featureImage"><figure><img src={fourth} alt="overview pic" className="programOverviewimage" /></figure></div>
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
                           {/* <p>{object.reviews}</p> */}
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