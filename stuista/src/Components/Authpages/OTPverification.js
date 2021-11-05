import React, {useState} from "react";
import forgetpasswordimage from "../Images/Forgetpassword.svg";
import './Auth.css';
import {useHistory } from "react-router-dom";


const OtpVerification = () => {
   
    const history = useHistory();

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
        const {email} = user;
         const res = await fetch("http://3f0d-137-59-242-139.ngrok.io/auth/signup",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              
            },
            body:JSON.stringify({
              email
            })
         });
         const data = await res.json();
    
         if( !data){
           window.alert("Request Failed");
           console.log("Request Failed");
         }else{
          window.alert("Successfully verified");
          console.log("Successfully verified");
          history.push("/login");
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
                         <h2 className="FormTitle space">OTP Verification</h2>
                         <p>Enter OTP sent to your email address</p> 
                         <form method="POST" className="forgetpassword-form " id="forgetpassword-form" >
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
                                  <p>{errors.email}</p>
                             </div>
                             <div className="form group form button">
                                 <input type="submit" name="OTP" id="OTP" className="authbutton form-submit" value="Confirm" onClick={PostData}/>
                             </div>
                         </form>
                        </div>
         </section>
        </>
    )
}

export default OtpVerification;