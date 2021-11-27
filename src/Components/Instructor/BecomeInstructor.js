import React, {useState}  from "react";
import "./BecomeInstructor.css";
import guideimage1 from "../Images/Guide/image1.png";
import guideimage2 from "../Images/Guide/image2.png";
import guideimage3 from "../Images/Guide/image3.png";
import {useHistory} from "react-router-dom";

const BecomeInstructor= () => {

  const history = useHistory();
  const [user, setUser] = useState({
    areaofexpertise:"",
    experience:""
});

const [allEntry, setallEntry] = useState([]);

let name,value;
const handleInput= (e) =>{
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value});
}

  const setinstructorprofile = async (e) => {
    e.preventDefault();

    const newEntry = { ...user }
    setallEntry([...allEntry, newEntry]);
    let object ={
      areaofexpertise:"",
      experience:""
     }
             const res = await fetch("https://stuista.herokuapp.com/instructor/create-profile",
              { method:"POST",
                  headers: {
                      "Authorization": "Bearer "+localStorage.getItem("loginToken"), 
                      "Content-Type": "application/json"
                  }, body:JSON.stringify(object)
               });
               const data= await res.json();
               console.log(data);
              if( !data || data.Error){
                window.alert(data.Error);
                console.log(data.Error);
              }
               else if(data.message){
                 window.alert(data.message);
                 console.log(data.message);
                 history.push({
                  pathname : "/courseupload",
              });
           }
        
            } 



    return(
      <div className="Becomeinstructorpage">
            <h1>Become An Instructor</h1>
         <form method="POST" className="becomeInstructor-form">
               <div className="Instructorformfields">
                  <div className="form group forminput">
                      <label htmlFor="areaofexpertise">Area of Expertise </label>
                      <textarea rows="3" cols="20" className="input" 
                      name="areaofexpertise" 
                      id="areaofexpertise" 
                      value={user.areaofexpertise}
                      onChange={handleInput}
                       />
                       {/* <p className="error">{errors.title}</p> */}
                   </div>
                   <div className="form group forminput">
                       <label htmlFor="experience">Experience </label>
                       <textarea rows="3" cols="20" className="input" 
                        name="experience" 
                        id="experience" 
                        value={user.experience}
                        onChange={handleInput}
                        />
                        {/* <p className="error">{errors.category}</p> */}
                   </div>
                </div>
                <div className="form group form button">
                   <input type="submit" id="Instructorproceed" onClick={setinstructorprofile} value="Proceed"/>
                </div>
        </form>

        <div className="InstructorGuide">
                          <div className="guidecard">
                             <figure><img src={guideimage1} alt="guide pic"/></figure>
                             <div className="guidecontent">
                               <h1>Create an Engaging Course</h1>
                               <p >Whether you've been teaching for years<br/> or are teaching for the first time,<br/> you can make an engaging course. </p>
                             </div>
                         </div>
                         <div className="guidecard">
                             <figure><img src={guideimage2} alt="guide pic" className="guideimage" /></figure>
                             <div className="guidecontent">
                               <h1>Get Started with Video</h1>
                               <p >Quality video lectures can set your course apart.<br/> Use our resources to learn the basics</p>
                            </div>
                        </div>
                        <div className="guidecard">
                             <figure><img src={guideimage3} alt="guide pic" className="guideimage" /></figure>
                             <div className="guidecontent"> 
                               <h1>Build Your Audience</h1>
                               <p >Set your course up for success by building<br/> your audience.</p>
                             </div> 
                        </div>
        </div>
    </div>  
    )

}

export default BecomeInstructor;