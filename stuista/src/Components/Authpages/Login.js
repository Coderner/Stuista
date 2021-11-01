import React from "react";
import login from "../Images/Login.svg";
import './Auth.css';
import { Link } from "react-router-dom";
import useForm from "./inputform";
import validate from "./Validate"

const Login = () => {
   
    const{handleChange,values,handleSubmit,errors}=useForm(validate);
    return(
        <>
           <section className="Login">
                  <div className="loginImage">
                             <figure>
                                 <img src={login} alt="login pic" className="logimage" />
                            </figure>
                  </div>
                     <div className="Login-form">
                         <h2 className="FormTitle">Welcome Back</h2>
                         <form className="login-form " id="login-form" onSubmit={handleSubmit} >
                             <div className="form group forminput">
                                 <label htmlFor="email"> </label>
                                 <input type="email" 
                                 className="input" 
                                 name="email" 
                                 id="email" 
                                 placeholder="Email"
                                 value={values.email}
                                 onChange={handleChange}
                                 />
                                  <p>{errors.email}</p>
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
                                 <p>{errors.password}</p>
                             </div>
                             <div className="form group form button">
                                 <input type="submit" name="login" id="login" className="authbutton form-submit" value="Log in"/>
                             </div>
                         </form>
                         <p><Link to="/forgotpassword">Forgot password</Link><br/>No account?<Link to="/signup">Create One</Link></p>
                        </div>
         </section>
        </>
    )
}

export default Login;