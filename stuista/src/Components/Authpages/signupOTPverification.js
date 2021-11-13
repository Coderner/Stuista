import React, {useState} from "react";
import forgetpasswordimage from "../Images/Forgetpassword.svg";
import './Auth.css';
import {Link,useHistory} from "react-router-dom";
import "./Signup.js";

const SignupOtpverification = () => {

    const [user, setUser] = useState({otp:""});
    const [allEntry, setallEntry] = useState([]);
    const history = useHistory();

    const [counter, setCounter] = React.useState(300);
    React.useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);
    
    const [errors,setErrors]= useState({});
    const validate = (user)=> {
        let errors = {}
        if(!user.otp.trim()){
            errors.otp = "Enter otp"
        }else if(user.otp.length < 6){
            errors.otp = "Enter valid 6 digit OTP"
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

    const handleResendOtp = async (e) => {
      e.preventDefault();
      const resendobject = {
        fullname: history.location.state.fullname,
        email: history.location.state.email,
        password: history.location.state.password
      };
      const response = await fetch("http://7de0-2401-4900-30cd-7aa2-ad8b-d123-c68b-76b9.ngrok.io/auth/resendotp",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
         },
        body:JSON.stringify(resendobject)
     });
     window.alert("OTP Resent");
     const resend_data = await response.json();
     console.log(resend_data);
    }

    const PostData = async (e) => {
        e.preventDefault();
        const newEntry = { ...user}
        setallEntry([...allEntry, newEntry]);

        let object = {
            otp: newEntry.otp,
            fullname: history.location.state.fullname,
            email: history.location.state.email,
            password : history.location.state.password
        }
        // console.log(object);

         const res = await fetch("http://7de0-2401-4900-30cd-7aa2-ad8b-d123-c68b-76b9.ngrok.io/auth/verifyotp",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
             },
            body:JSON.stringify(
              object)
         });
         const data = await res.json();
         console.log(data)
    
         if( !data || data.Error){
           window.alert(data.Error);
           console.log(data.Error);
         }else{
          window.alert("Verified");
          console.log("Verified");
          history.push("/");
         }
         
      }

    

    return(
        <>
           <section className="forgetpassword">
                  <div className="passwordImage">
                             <figure>
                                 <img src={forgetpasswordimage} alt="pic" className="forgetpasswordimage" />
                            </figure>
                  </div>
                     <div className="Forgetpassword-form">
                        <h2 className="othertitles FormTitle">OTP Verification</h2>
                         <form method="POST" className="forgetpassword-form" id="forgetpassword-form" >
                             <div className="form group forminput">
                                 <label htmlFor="otp"> </label>
                                 <input type="text" 
                                 className="input" 
                                 name="otp" 
                                 id="otp" 
                                 placeholder="Enter OTP"
                                 value={user.otp}
                                 onChange={handleInput}
                                 />
                                  <p className="error">{errors.otp}</p>
                             </div>
                             <div className="form group form button">
                             <Link to="/"><input type="submit" name="otpverification" id="otpverification" className="authbutton form-submit" value="Confirm" onClick={PostData}/></Link>
                             </div>
                             <div><h5>{counter} sec</h5></div>
                             <h6>Didn't receive the code? <input type="submit" name="otpverification" id="otpverification" value="Resend Now" className="resend" onClick={handleResendOtp}/></h6>
                         </form>
                        </div>
         </section>
        </>
    )
}

export default SignupOtpverification;