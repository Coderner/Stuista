import React from "react";
import "./Course.css";
import star from "../Images/CourseImages/star.png";
import  third from "../Images/career-coach.webp";
import first from "../Images/real-world-projects.webp";
import  fourth from "../Images/self-paced.webp";
import  second from "../Images/mentor.webp";
import {useHistory} from "react-router-dom";

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
            _id: history.location.state._id,
            videosArray: history.location.state.videosArray,
            eachrating: history.location.state.eachrating,
        }

        const Download = async () => {
            try {
               const res = await fetch(`https://stuista.herokuapp.com/courses/syllabus/${object._id}/download`,
                { method:"GET",
                    headers: {
                        Accept: "*/*", 
                    }
                 });
                 const data= res;
                 console.log(data);
               } catch (err) {
               console.log(err);
             }
           }

           const AddtoCart = async () => {
            try {
               const res = await fetch(`https://stuista.herokuapp.com/courses/addtocart/${object._id}`,
                { method:"POST",
                    headers: {
                        "Authorization": "Bearer "+localStorage.getItem("loginToken"),
                        Accept: "application/json", 
                        "Content-Type": "application/json"
                    }
                 });
                 const data= res;
                 console.log(data);
                 window.alert("Added to Cart");
               } catch (err) {
               console.log(err);
             }
           }

           const AddtoFav = async () => {
            try {
               const res = await fetch(`https://stuista.herokuapp.com/courses/addtofavourites/${object._id}`,
                { method:"POST",
                    headers: {
                        "Authorization": "Bearer "+localStorage.getItem("loginToken"),
                        Accept: "application/json", 
                        "Content-Type": "application/json"
                    }
                 });
                 const data= res;
                 console.log(data);
                 window.alert("Added to Favourites");
               } catch (err) {
               console.log(err);
             }
           }

           const Buy = async () => {
            try {
               const res = await fetch(`https://stuista.herokuapp.com/courses/buynow/${object._id}`,
                { method:"POST",
                    headers: {
                        "Authorization": "Bearer "+localStorage.getItem("loginToken"),
                        Accept: "application/json", 
                        "Content-Type": "application/json"
                    }
                 });
                 const data= res;
                 console.log(data);
                 window.alert("Course Bought");
               } catch (err) {
               console.log(err);
             }
           }

           const CourseVideos = () =>{
            if(localStorage.getItem("loginToken")){
                  return(
                    <>
                        {object.videosArray.map((video) => (
                              <video className="video" width="500" height="350" controls><source src={"https://stuista.herokuapp.com/" + video} type="video/mp4"/></video>
                        ))}
                   </>
               )
            }
            else{
                  return(
                        <p>Buy course to access videos</p>
                  )
            }
          }


  return(
     <div>   
           <div className="Coursebg">
                <div  className="CourseIntro">
                                <div className="CourseIntroLines">  
                                   <h1>{object.title}</h1>
                                   <p>{object.introduction}</p>
                                   <button onClick={Download} className="CourseButton syllabus">DOWNLOAD SYLLABUS</button>
                                   <button onClick={Buy} className="CourseButton enroll" >BUY NOW</button>
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
                            <div>
                           
                            </div>
                      </div>
                            <div className="Imagecourse"><figure><img src={"https://stuista.herokuapp.com/" + object.imageUrl } alt="Course pic" className="carouselimage" /></figure></div>
                      </div>
                            <div className="videos"><CourseVideos/></div>
                      </div>

                <div>
                                   <h1 id="buylater">Wanna buy later?</h1>
                                   <button className="buylaterbuttons" onClick={AddtoCart}>ADD TO CART</button>
                                  
                                   <button className="buylaterbuttons" onClick={AddtoFav}>ADD TO FAVOURITES</button>
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
                          
                            {object.eachrating.map((rating) => (
                              <div className="Reviewcard">
                              <figure><img src={"https://stuista.herokuapp.com/" + rating.user.imageUrl} className="Avatarimage" alt="userpic"/></figure>
                              <h5 className="name">{rating.user.fullname}</h5>
                              <button className="reviewbutton"><img src={star} alt="star"/>{rating.rate}</button>
                              <p>{rating.userreview}</p>
                              </div>
                          ))}
                         
                          
                     </div>
                    </div>
                </div>

           </div>
             
     </div>
  )
}

export default Course;