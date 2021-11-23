import React,{useState} from "react";
import "./Filter.css";
import filter from "../Images/Filter.png";
import { Link} from "react-router-dom";

const Filter = () => {

  const [allcourseData, setAllcourseData] = useState([]);

  const FilterCourses = async () => {
    try {
             const res = await fetch("https://stuista.herokuapp.com/courses/show?",
              { method:"GET",
                  headers: {
                      Accept: "application/json", 
                     "Content-Type": "application/json"
                  }
               });
               const response= await res.json();
               setAllcourseData(response.course);
               console.log(response);
             } catch (err) {
             console.log(err);
           }
       }

        return(      
            <div  className="Filter">


            <div id="Filterbox"> 
                <div id="filterheading">
                      <img src={filter} alt="overview pic" id="filtericon"/>
                      <h3>Filters</h3>
                </div>

                <div id="filtercriteria">
                    <div id="filter">
                        <h4>Price</h4>
                        <input type="checkbox" id="price1" name="price1" value=""/>
                          <label for="1">Less Than 500</label><br/>
                        <input type="checkbox" id="price2" name="price2" value=""/>
                          <label for="price2">Less Than 1000</label><br />
                        <input type="checkbox" id="price3" name="price3" value=""/>
                          <label for="price3">Less Than 2000</label><br/>
                    </div>
                    <div id="filter">
                        <h4>Prefered Domain</h4>
                        <input type="checkbox" id="domain1" name="domain1" value=""/>
                          <label for="domain1">Web Development</label><br/>
                        <input type="checkbox" id="domain2" name="domain2" value=""/>
                          <label for="domain2">Android Development</label><br/>
                        <input type="checkbox" id="domain3" name="domain3" value=""/>
                          <label for="domain3">Programming Languages</label><br/>
                        <input type="checkbox" id="domain3" name="domain3" value=""/>
                          <label for="domain3">Data Science</label><br/>
                        <input type="checkbox" id="domain3" name="domain3" value=""/>
                          <label for="domain3">Database Design</label><br/>
                    </div>
                   
                    <div id="filter">
                        <h4>Duration</h4>
                        <input type="checkbox" id="1" name="duration1" value="Bike"/>
                          <label for="1">2 weeks</label><br/>
                        <input type="checkbox" id="2" name="duration2" value="Car"/>
                          <label for="2">4 weeks</label><br />
                        <input type="checkbox" id="3" name="duration3" value="Boat"/>
                          <label for="3">6 weeks</label><br/>
                        <input type="checkbox" id="3" name="duration3" value="Boat"/>
                          <label for="3">8 weeks</label><br/>
                    </div>

                    <div id="filter">
                        <h4>Language</h4>
                        <input type="checkbox" id="english" name="english" value="English"/>
                          <label for="english">English</label><br/>
                        <input type="checkbox" id="hindi" name="hindi" value="Hindi"/>
                          <label for="hindi">Hindi</label><br />
                    </div>

                    <div id="filter">
                        <h4>Rating</h4>
                        <input type="checkbox" id="rating1" name="rating1" value="4"/>
                          <label for="rating1">Greater Than 4</label><br/>
                        <input type="checkbox" id="rating2" name="rating2" value="3"/>
                          <label for="rating2">Greater Than 3</label><br />
                        <input type="checkbox" id="rating3" name="rating3" value="2"/>
                          <label for="rating3">Greater Than 2</label><br/>
                    </div>
                  </div>

                  <button id="filterbutton" onClick={FilterCourses}>Filter</button>

                </div>

            <div id="coursesafterfilter">    
                <div id="filteredcourse">
                    {allcourseData.map((user) => (
                            <div className="explorecourse">
                               <figure><img src={"https://stuista.herokuapp.com/" + user.imageUrl } alt="Course pic" className="carouselimage" /></figure>
                               <div className="courseExploreinfo">
                               <h5>{user.title}</h5>
                               <p>{user.instructorName}</p>
                               <p>{user.duration}</p>
                               <p>{user.price}</p>
                               </div>
                               <div className="Explore">
                               <Link to={{ 
                                             pathname: "/course", 
                                             state: user
                                         }}><h6>Explore</h6></Link>
                              </div>
                            </div>
                         ))} 
                </div>
            </div>    

            </div>
        )
}

export default Filter;