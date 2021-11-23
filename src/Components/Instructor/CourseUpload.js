import React, {useState}  from "react";
import "./CourseUpload.css";
import { Link,useHistory} from "react-router-dom";

const CourseUpload= () => {

    const history = useHistory();
    const [allEntry, setallEntry] = useState([]);

    const [user, setUser] = useState({
        title:"",category:"",duration:"",PreRequisites:"",introduction:"",
        description:"",price:"",language:"",skillsLearned:""
    });

    const [errors,setErrors]= useState({});
    const validate = (user)=> {
        let errors = {}
        if(!user.title.trim()){
            errors.title = "Title required"
        }
        if(!user.category.trim()){
            errors.category = "Category required"
        }
        if(!user.duration.trim()){
            errors.duration = "Duration required"
        }
        if(!user.PreRequisites.trim()){
            errors.PreRequisites = "PreRequisites required"
        }
        if(!user.introduction.trim()){
            errors.introduction = "Introduction required"
        }
        if(!user.description.trim()){
            errors.description = "Description required"
        }
        if(!user.price.trim()){
            errors.price = "Price required"
        }
        if(!user.language.trim()){
            errors.language = "Language required"
        }
        if(!user.skillsLearned.trim()){
            errors.skillsLearned = "Skills Learned required"
        }
        return errors;
    }
        
    let name,value;
    const handleInput = (e) =>{
        console.log(e)
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
        setErrors(validate(user));
    }

    const PostData = async (e) => {
        e.preventDefault();

         const newEntry = { ...user }
         setallEntry([...allEntry, newEntry]);
         let object ={
            title:newEntry.title,
            category:newEntry.category,
            duration:newEntry.duration,
            PreRequisites:newEntry.PreRequisites,
            introduction:newEntry.introduction,
            description:newEntry.description,
            price:newEntry.price,
            language:newEntry.language,
            skillsLearned:newEntry.skillsLearned,
          }
        //   console.log(object);

         const res = await fetch("http://5f4d-2401-4900-5a34-abe3-49b2-f93a-8c24-6907.ngrok.io/auth/signup",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
             },
            body:JSON.stringify(object)
         });
         const data = await res.json();
         console.log(data);
    
         if( !data || data.Error){
           window.alert(data.Error);
           console.log(data.Error);
         }
          else if(data.message){
            window.alert(data.message);
            console.log(data.message);
            history.push({
            pathname : "/",
            state : object
        });
      }
    }

    return(
            <div className="CourseUpload">
                <div id="CourseUploadTitle"><h1>Create Course</h1></div>

                    <div className="CourseUpload-form">
                             <form method="POST" className="courseupload-form">
                                   <div className="Formupload">
                                       <div className="form group forminput">
                                           <label htmlFor="title">Title </label>
                                           <input className="input" 
                                           name="title" 
                                           id="title" 
                                           value={user.title}
                                           onChange={handleInput}
                                            />
                                            <p className="error">{errors.title}</p>
                                        </div>
                                        <div className="form group forminput">
                                            <label htmlFor="category">Category </label>
                                            <input className="input" 
                                             name="category" 
                                             id="category" 
                                             value={user.category}
                                             onChange={handleInput}
                                             />
                                             <p className="error">{errors.category}</p>
                                        </div>
                                        <div className="form group forminput">
                                             <label htmlFor="duration">Duration </label>
                                             <input className="input" 
                                             name="duration" 
                                             id="duration" 
                                             value={user.duration}
                                             onChange={handleInput}
                                             />
                                             <p className="error">{errors.duration}</p>
                                        </div>
                                 
                                        <div className="form group forminput">
                                            <label htmlFor="PreRequisites">Pre-Requisites </label>
                                            <input className="input"
                                            name="PreRequisites"
                                            id="PreRequisites" 
                                            value={user.PreRequisites}
                                            onChange={handleInput}
                                            />
                                            <p className="error">{errors.PreRequisites}</p>
                                        </div>

                                        <div className="form group forminput">
                                            <label htmlFor="introduction">Course Intro </label>
                                            <input className="input" 
                                             name="introduction" 
                                             id="introduction" 
                                             value={user.introduction}
                                             onChange={handleInput}
                                             />
                                             <p className="error">{errors.introduction}</p>
                                        </div>

                                         <div className="form group forminput">
                                             <label htmlFor="description">Course Description</label>
                                             <input className="input" 
                                              name="description" 
                                              id="description" 
                                              value={user.description}
                                              onChange={handleInput}
                                              />
                                              <p className="error">{errors.description}</p>
                                         </div>
                                         
                                         <div className="form group forminput">
                                             <label htmlFor="price">Price</label>
                                              <input className="input" 
                                              name="price" 
                                              id="price" 
                                              value={user.price}
                                              onChange={handleInput}
                                              />
                                              <p className="error">{errors.price}</p>
                                         </div>

                                         <div className="form group forminput">
                                             <label htmlFor="language">Language</label>
                                             <input className="input" 
                                             name="language" 
                                             id="language" 
                                             value={user.language}
                                             onChange={handleInput}
                                             />
                                             <p className="error">{errors.language}</p>
                                         </div>

                                         <div className="form group forminput">
                                             <label htmlFor="skillsLearned">Skills Learned</label>
                                             <input className="input" 
                                              name="skillsLearned" 
                                              id="skillsLearned" 
                                              value={user.skillsLearned}
                                              onChange={handleInput}
                                              />
                                             <p className="error">{errors.skillsLearned}</p>
                                         </div>
                                         
                                         <div className="form group forminput">
                                              <label htmlFor="Image">ADD IMAGE    : </label>
                                              <input type="file"
                                               name="Image"
                                               id="Image"
                                               value={user.image}
                                               />
                                         </div>

                                         <div className="form group forminput">
                                              <label htmlFor="Vedio">ADD Vedio     : </label>
                                              <input type="file"
                                               name="Vedio"
                                               id="Vedio"
                                               value={user.Vedio}
                                               />
                                         </div>
                                   
                                   </div>

                                 <div className="form group form button">
                                     <input type="submit" name="courseUpload" id="courseUpload" className="CourseUploadButton form-submit" value="Upload" onClick={PostData} />
                                 </div>
                              
                             </form>
                         
                   </div>
        </div>
    )
}

export default CourseUpload;