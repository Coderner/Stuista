import React from "react";
import "./Homepage.css";
import homepage from "../Images/Homepage.svg";
import { Link} from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Instructor from "../Images/instructor.svg";
import CoursegridImage from "../Images/coursegrid.png";
import  third from "../Images/career-coach.webp";
import first from "../Images/real-world-projects.webp";
import  fourth from "../Images/self-paced.webp";
import  second from "../Images/mentor.webp";


const Homepage= () => {
 
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 }
      ];

        return(
            <div>

                <div  className="Homepage flex-container">
                                <div className="Content">  
                                    <figure>
                                     <img src={homepage} alt="homepage pic" className="homeimage" />
                                    </figure>
                                  <h1 className="learnwith">Learn with joy on</h1>
                                  <h1 className="stuista">Stuista</h1>  
                                  <p className="para">Take the next step in your career with a world class learning <br/> Experience.</p>  
                                </div>
                                    
               </div>

               <div className="Coursebar">
                   <div className="course-list">
                   <ul class="course-list-ul">
                       <li><Link className = "course-list-li" to="">DATA SCIENCE</Link></li>
                       <li><Link className = "course-list-li" to="">AUTONOMOUS SYSTEM</Link></li>
                       <li><Link className = "course-list-li" to="">PRODUCT MANAGEMENT</Link></li>
                       <li><Link className = "course-list-li" to="">CLOUD MANAGEMENT</Link></li>
                       <li><Link className = "course-list-li" to="">AI</Link></li>
                       <li><Link className = "course-list-li" to="">PROGRAMMING</Link></li>
                       <li><Link className = "course-list-li" to="">BUSINESS</Link></li>
                       <li><Link className = "course-list-li" to="">CYBER SECURITY</Link></li>
                      </ul>
                   </div>
               </div>

                <div className="CourseCarousel">
                  <Carousel breakPoints={breakPoints}>
                        <div className="coursecard">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                          <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                        </div>
                        <div className="coursecard">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                          <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                        </div>
                        <div className="coursecard">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                          <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                        </div>
                        <div className="coursecard">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                          <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                        </div>
                        <div className="coursecard">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                          <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                        </div>
                        <div className="coursecard">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                          <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                        </div>
                        <div className="coursecard">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                          <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                        </div>
                        <div className="coursecard">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                          <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                        </div>
                </Carousel>
              </div>
              
              <div className="ProgramsOverview">
            
                   <h3 className="programs">All our Programs include</h3>

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
                 <div className="InstructorContent">
                   <div className="becomeInstructor">
                     <h1 className="instructor">Become an Instructor </h1>
                     <button className="instructorbutton">Proceed</button>
                    </div>
                   <div className="Image"><figure><img src={Instructor} alt="instructor pic" className="instructorimage" /></figure></div>
                 </div>
              </div>

              <div className="SuccessStories">
                  <div className="success-list">
                      <ul class="success-list-ul">
                         <li className = "success-list-li">
                             <h5>Alex</h5>
                             <p>"The curriculum was directly targeted <br/> toward applied techniques with high profile <br/> projects – real datasets with industry<br/> partners. It helped me achieve my career<br/> transition goal."</p>
                             <h6>NOW AT</h6>
                             <h6>Raytheon | Data Scientist</h6>
                        </li>
                         <li className = "success-list-li">
                             <h5>Alex</h5>
                             <p>"The curriculum was directly targeted <br/> toward applied techniques with high profile <br/> projects – real datasets with industry<br/> partners. It helped me achieve my career<br/> transition goal."</p>
                             <h6>NOW AT</h6>
                             <h6>Raytheon | Data Scientist</h6>
                        </li>
                         <li className = "success-list-li">
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