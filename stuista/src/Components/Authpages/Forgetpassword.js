import React, {useState} from "react";
import forgetpasswordimage from "../Images/Forgetpassword.svg";
import './Auth.css';
import { Link,useHistory } from "react-router-dom";


const Forgetpassword = () => {
   
    const history = useHistory();
    const [allEntry, setallEntry] = useState([]);
    const [user, setUser] = useState({email:""});

    const [errors,setErrors]= useState({});
    
    const validate = (user)=> {
        let errors = {}
    
        if(!user.email.trim()){
            errors.email = "Email required"
        }
        else if(!/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i.test(user.email)){
            errors.email = "Email address is invalid"
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
        // const {email} = user;
        const newEntry = { ...user }
        setallEntry([...allEntry, newEntry]);
        let object ={
           fullname:newEntry.fullname,
           email:newEntry.email,
           password:newEntry.password
         }
         const res = await fetch("http://7de0-2401-4900-30cd-7aa2-ad8b-d123-c68b-76b9.ngrok.io/auth/verifybeforereset",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify(object)
         });
         const data = await res.json();
    
         if( !data || data.Error){
           window.alert(data.Error);
           console.log(data.Error);
         }else{
          window.alert("Successfully requested");
          console.log("Successfully requested");
           history.push({
            pathname : "/resetotpverification",
            state : object
        });
         }
      }

    return(
        <>
           <section className="forgetpassword">
                  <div className="passwordImage">
                             <figure>
                                 <img src={forgetpasswordimage} alt="forget password image" className="forgetpasswordimage" />
                            </figure>
                  </div>
                     <div className="Forgetpassword-form">
                         <h2 className="othertitles FormTitle space">Forgot Password</h2>
                         <p>Please provide the email address you used when you signed for your Stuista account.</p> 
                         <form method="POST"  className="forgetpassword-form " id="forgetpassword-form" >
                             <div className="form group forminput">
                                 <label htmlFor="email"> </label>
                                 <input type="email" 
                                 className="input password-email-input" 
                                 name="email" 
                                 id="email" 
                                 placeholder="Email"
                                 value={user.email}
                                 onChange={handleInput}
                                 />
                                  <p className="error">{errors.email}</p>
                             </div>
                             <div className="form group form button">
                                 <input type="submit" name="forgetpassword" id="forgetpassword" className="authbutton form-submit" value="Next"  onClick={PostData}/>
                             </div>
                         </form>
                        </div>
         </section>
        </>
    )
}

export default Forgetpassword;