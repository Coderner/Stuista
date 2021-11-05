import React, {useState} from "react";
import signup from "../Images/Signup.svg";
import './Auth.css';
import { Link,useHistory} from "react-router-dom";


const SignUp = () => {

        const history = useHistory();

        const [user, setUser] = useState({
            fullname:"",
            email:"",
            password:""
        });

        const [errors,setErrors]= useState({});
        
        const validate = (user)=> {
            let errors = {}
        
            if(!user.fullname.trim()){
                errors.fullname = "Username required"
            }
        
            if(!user.email.trim()){
                errors.email = "Email required"
            }
            else if(!/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i.test(user.email)){
                errors.email = "Email address is invalid"
            }
        
            if(!user.password.trim()){
                errors.password = "Password required"
            }else if(user.password.length < 8){
                errors.password = "Password needs to be 8 characters or more"
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
            const {fullname,email,password} = user;
             const res = await fetch("http://3f0d-137-59-242-139.ngrok.io/auth/signup",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                  
                },
                body:JSON.stringify({
                  fullname,email,password
                })
             });
             const data = await res.json();
        
             if( !data){
               window.alert("INVALID Registration");
               console.log("INVALID Registration");
             }else{
              window.alert("Successful Registration");
              console.log("Successful Registration");
              history.push("/login");
             }
          }

        return(
            <>
               <section className="Signup">
                      <div className="signupImage">
                                 <figure>
                                     <img src={signup} alt="sign-up pic" className="signimage" />
                                </figure>
                      </div>
                         <div className="Signup-form">
                             <h2 className="FormTitle">Join Stuista</h2>
                             <form method="POST" className="signup-form" id="signup-form" >
                                 <div className="form group forminput">
                                     <label htmlFor="fullname"> </label>
                                     <input className="input" 
                                      type="text" 
                                      name="fullname" 
                                      id="fullname" 
                                      value={user.fullname}
                                      onChange={handleInput}
                                      placeholder="Full Name"
                                  />
                                   <p className="error">{errors.fullname}</p>
                                 </div>
                                 <div className="form group forminput">
                                     <label htmlFor="email"> </label>
                                     <input className="input"
                                      type="email"
                                      name="email"
                                      id="email" 
                                      value={user.email}
                                      onChange={handleInput}
                                      placeholder="Email"
                                  />
                                    <p className="error">{errors.email}</p>
                                 </div>
                                 <div className="form group forminput">
                                     <label htmlFor="password"> </label>
                                     <input className="input"
                                      type="password"
                                      name="password"
                                      id="password" 
                                      value={user.password}
                                      onChange={handleInput}
                                      placeholder="Password"
                                   />
                                    <p className="error">{errors.password}</p>
                                 </div>
                                 <div className="form group form button">
                                     <input type="submit" name="signup" id="signup" className="authbutton form-submit" value="Sign up" onClick={PostData} />
                                 </div>
                             </form>
                             <p>By signing up you agree to our <Link to="/terms">Terms & conditions</Link><br/>Already have an account?<Link to="/login">Log in</Link></p>
                            </div>
             </section>
            </>
        )
}

export default SignUp;