import React, {useState} from "react";
import forgetpasswordimage from "../Images/Forgetpassword.svg";
import './Auth.css';
import {Link,useHistory} from "react-router-dom";
import "./Signup";

const Otpverification = () => {

    const [user, setUser] = useState({otp:""});
    const history = useHistory();

    const [counter, setCounter] = React.useState(120);
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

    const PostData = async (e) => {
        e.preventDefault();
         let object = {
           otp:user,
           email:history.location.state.email
         }
        //  const {otp} = user;
         const res = await fetch("http://1f10-2401-4900-ea4-aa30-499-290e-1dc7-54b2.ngrok.io/auth/verifyotp",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
             },
            body:JSON.stringify({
              object
            })
         });
         const data = await res.json();
    
         if( !data){
           window.alert("Verification failed");
           console.log("Verification failed");
         }else{
          window.alert("Verified");
          console.log("Verified");
         }
         history.push("/signup");
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
                             <h6>Didn't receive the code? <input type="submit" name="otpverification" id="otpverification" value="Resend Now" className="resend" onClick={PostData}/></h6>
                         </form>
                        </div>
         </section>
        </>
    )
}

export default Otpverification;