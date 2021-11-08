import React, {useState} from "react";
import resetimage from "../Images/Signup.svg";
import './Auth.css';
import { Link,useHistory } from "react-router-dom";

const Resetpassword = () => {
    
    const history = useHistory();

    const [user, setUser] = useState({
        password:"",
        cpassword:""
    });

    const [errors,setErrors]= useState({});
    
    const validate = (user)=> {
        let errors = {}

        if(!user.password.trim()){
            errors.password = "Password required"
        }else if(user.password.length < 8){
            errors.password = "Password needs to be 8 characters or more"
        }
        if(!user.cpassword.trim()){
            errors.cpassword = "Confirm Password required"
        }else if(user.cpassword !== user.password){
            errors.cpassword = "Passwords do not match"
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
        const {password,cpassword} = user;
         const res = await fetch("http://3f0d-137-59-242-139.ngrok.io/auth/signup",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              
            },
            body:JSON.stringify({
              password,cpassword
            })
         });
         const data = await res.json();
    
         if( !data){
           window.alert("Attempt to change password Failed");
           console.log("Attempt to change password Failed");
         }else{
          window.alert("Password changed Successfully");
          console.log("Password changed Successfully");
          history.push("/");
         }
      }
    
    return(
        <>
           <section className="Login">
                  <div className="signupImage">
                             <figure>
                                 <img src={resetimage} alt="pic" className="signimage" />
                            </figure>
                  </div>
                     <div className="Forgetpassword-form">
                         <h2 className="othertitles FormTitle">Reset Password</h2>
                         <form className="forgetpassword-form" id="forgetpassword-form">
                             <div className="form group forminput">
                                 <h4>Enter New Password</h4>
                                 <label htmlFor="password"> </label>
                                 <input type="password" 
                                 className="input" 
                                 name="password" 
                                 id="password" 
                                 placeholder="Password"
                                 value={user.password}
                                 onChange={handleInput}
                                 />
                                  <p className="error">{errors.password}</p>
                             </div>
                             <div className="form group forminput">
                             <h4>Confirm Password</h4>
                                 <label htmlFor="cpassword"> </label>
                                 <input type="password" 
                                 className="input" 
                                 name="cpassword" 
                                 id="cpassword" 
                                 placeholder="Password"
                                 value={user.cpassword}
                                 onChange={handleInput}
                                 />
                                 <p className="error">{errors.cpassword}</p>
                             </div>
                             <div className="form group form button">
                                 <input type="submit" name="resetpassword" id="resetpassword" className="authbutton form-submit" value="Proceed" onClick={PostData}/>
                             </div>
                         </form>
                        </div>
         </section>
        </>
    )
}

export default Resetpassword;