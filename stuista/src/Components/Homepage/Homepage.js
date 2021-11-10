import React from "react";
import "./Homepage.css";
import homepage from "../Images/Homepage.svg";
import { Link} from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Instructor from "../Images/instructor.svg";
import CoursegridImage from "../Images/coursegrid.png";


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
                          <Link to="/course">
                          <figure><img src={CoursegridImage} alt="Course pic" className="carouselimage" /></figure>
                           <p>Intro Data Analysis</p><p>ESTIMATE TIME</p><p>1 Month</p>
                          </Link>
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

              <div className="Instructorsection">
                 <div className="InstructorContent">
                   <h1>Instructor section</h1>
                   <div><figure><img src={Instructor} alt="instructor pic" className="instructorimage" /></figure></div>
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