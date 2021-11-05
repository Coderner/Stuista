import React from "react";
import login from "../Images/Signup.svg";
import './Auth.css';
import { Link } from "react-router-dom";
import useForm from "./inputform";
import validate from "./Validate"

const Login = () => {
   
    const{handleChange,values,handleSubmit,errors}=useForm(validate);
    return(
        <>
           <section className="Login">
                  <div className="signupImage">
                             <figure>
                                 <img src={login} alt="pic" className="signimage" />
                            </figure>
                  </div>
                     <div className="Login-form">
                         <h2 className="FormTitle">Reset Password</h2>
                         <form className="login-form " id="login-form" onSubmit={handleSubmit} >
                             <div className="form group forminput">
                                 <label htmlFor="password"> </label>
                                 <input type="email" 
                                 className="input" 
                                 name="password" 
                                 id="password" 
                                 placeholder="Email"
                                 value={values.password}
                                 onChange={handleChange}
                                 />
                                  <p className="error">{errors.password}</p>
                             </div>
                             <div className="form group forminput">
                                 <label htmlFor="password"> </label>
                                 <input type="password" 
                                 className="input" 
                                 name="password" 
                                 id="password" 
                                 placeholder="Password"
                                 value={values.password}
                                 onChange={handleChange}
                                 />
                                 <p className="error">{errors.password}</p>
                             </div>
                             <div className="form group form button">
                                 <input type="submit" name="login" id="login" className="authbutton form-submit" value="Proceed"/>
                             </div>
                         </form>
                        </div>
         </section>
        </>
    )
}

export default Login;