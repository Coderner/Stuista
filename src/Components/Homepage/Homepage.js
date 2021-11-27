import React, {useState} from "react";
import "./Homepage.css";
import {Link} from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Instructor from "../Images/instructor.svg";
import  third from "../Images/career-coach.webp";
import first from "../Images/real-world-projects.webp";
import  fourth from "../Images/self-paced.webp";
import  second from "../Images/mentor.webp";
import story2 from "../Images/SuccessStoriesImages/Story1.svg";
import story1 from "../Images/SuccessStoriesImages/Story2.svg";
import story3 from "../Images/SuccessStoriesImages/Story3.svg";

const Homepage= () => {
 
  const [courseData, setCourseData] = useState([]);

  const webgetdata = async () => {
    try {
       const res = await fetch("https://stuista.herokuapp.com/courses/Web Development",
        { method:"GET",
            headers: {
                Accept: "application/json", 
               "Content-Type": "application/json"
            }
         });
         const data= await res.json();
         setCourseData(data.course);
         console.log(data);
       } catch (err) {
       console.log(err);
     }
   }
   const androidgetdata = async () => {
    try {
       const res = await fetch("https://stuista.herokuapp.com/courses/Android Development",
        { method:"GET",
            headers: {
                Accept: "application/json", 
               "Content-Type": "application/json"
            }
         });
         const data= await res.json();
         setCourseData(data.course);
         console.log(data);
       } catch (err) {
       console.log(err);
     }
   }
   const datasciencegetdata = async () => {
    try {
       const res = await fetch("https://stuista.herokuapp.com/courses/Data Science",
        { method:"GET",
            headers: {
                Accept: "application/json", 
               "Content-Type": "application/json"
            }
         });
         const data= await res.json();
         setCourseData(data.course);
         console.log(data);
       } catch (err) {
       console.log(err);
     }
   }
   const languagegetdata = async () => {
    try {
       const res = await fetch("https://stuista.herokuapp.com/courses/Programming Languages",
        { method:"GET",
            headers: {
                Accept: "application/json", 
               "Content-Type": "application/json"
            }
         });
         const data= await res.json();
         setCourseData(data.course);
         console.log(data);
       } catch (err) {
       console.log(err);
     }
   }
   const databasegetdata = async () => {
    try {
       const res = await fetch("https://stuista.herokuapp.com/courses/Database Design",
        { method:"GET",
            headers: {
                Accept: "application/json", 
               "Content-Type": "application/json"
            }
         });
         const data= await res.json();
         setCourseData(data.course);
         console.log(data);
       } catch (err) {
       console.log(err);
     }
   }


 
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 430, itemsToShow: 2 },
        { width: 690, itemsToShow: 3 }
      ];

        return(
            <div>

                <div  className="Homepage flex-container">
                                <div className="Content"> 
                                  <h1 className="learnwith">Learn with joy on</h1>
                                  <h1 className="stuista">Stuista</h1>  
                                  <p className="para">Take the next step in your career with a world class learning <br/> Experience.</p>  
                                </div>
                                    
               </div>

               <div className="Coursebar">
                   <div className="course-list">
                   <ul class="course-list-ul">
                       <li onClick={webgetdata}><Link className = "course-list-li" to="">WEB DEVELOPMENT</Link></li>
                       <li onClick={androidgetdata}><Link className = "course-list-li" to="">ANDROID DEVELOPMENT</Link></li>
                       <li onClick={languagegetdata}><Link className = "course-list-li" to="">PROGRAMMING LANGUAGES</Link></li>
                       <li onClick={datasciencegetdata}><Link className = "course-list-li" to="">DATA SCIENCE</Link></li>
                       <li onClick={databasegetdata}><Link className = "course-list-li" to="">DATABASE DESIGN</Link></li>
                    </ul>
                   </div>
               </div>

                <div className="CourseCarousel">
                  <Carousel breakPoints={breakPoints} className="s">
                          
                           {courseData.map((user) => (
                            
                                <div className="coursecard">
                                   <figure><img src={"https://stuista.herokuapp.com/" + user.imageUrl } alt="Course pic" className="carouselimage" /></figure>
                                   <Link to={{ 
                                                 pathname: "/course", 
                                                 state: user
                                             }}><p>{user.title}</p></Link>
                                   <p className="Estimatetime">ESTIMATE TIME</p>
                                   <p>{user.duration}</p>
                                </div>
                             ))}
                          
                 </Carousel>
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


              <div className="Instructorsection">
                 <div id="InstructorContent">
                   <div id="becomeInstructor">
                     <h1 id="instructor">Become an Instructor </h1>
                     <Link to="/becomeInstructor"><button id="instructorbutton">Proceed</button></Link>
                    </div>
                   <div className="Image"><figure><img src={Instructor} alt="instructor pic" className="instructorimage" /></figure></div>
                 </div>
              </div>

              <div className="SuccessStories">
                  <div className="success-list">
                      <ul class="success-list-ul">
                         <li className = "success-list-li">
                            <figure><img src={story1} alt="story"className="Story"/></figure>
                             <h5>Alex</h5>
                             <p>"The curriculum was directly targeted <br/> toward applied techniques with high profile <br/> projects – real datasets with industry<br/> partners. It helped me achieve my career<br/> transition goal."</p>
                             <h6>NOW AT</h6>
                             <h6>Raytheon | Data Scientist</h6>
                        </li>
                         <li className = "success-list-li">
                             <figure><img src={story2} alt="story" className="Story"/></figure>
                             <h5>Alex</h5>
                             <p>"The curriculum was directly targeted <br/> toward applied techniques with high profile <br/> projects – real datasets with industry<br/> partners. It helped me achieve my career<br/> transition goal."</p>
                             <h6>NOW AT</h6>
                             <h6>Raytheon | Data Scientist</h6>
                        </li>
                         <li className = "success-list-li">
                              <figure><img src={story3} alt="story" className="Story"/></figure>
                              <h5>Alex</h5>
                              <p>"The curriculum was directly targeted <br/> toward applied techniques with high profile <br/> projects – real datasets with industry<br/> partners. It helped me achieve my career<br/> transition goal."</p>
                              <h6>NOW AT</h6>
                              <h6>Raytheon | Data Scientist</h6>
                        </li>
                      </ul>
                   </div>
              </div>

           </div> 
        )
}

export default Homepage;