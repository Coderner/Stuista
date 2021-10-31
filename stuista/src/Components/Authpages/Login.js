import React from "react";
import login from "../Images/Login.svg";
import './Auth.css';
import { Link } from "react-router-dom";

const Login = () => {
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
                         <form className="login-form" id="login-form">
                             <div className="form group">
                                 <label htmlFor="email"> </label>
                                 <input type="email" className="input" name="email" id="email" placeholder="Email"/>
                             </div>
                             <div className="form group">
                                 <label htmlFor="password"> </label>
                                 <input type="password" name="password" id="password" placeholder="Password"/>
                             </div>
                             <div className="form group form button">
                                 <input type="submit" name="login" id="login" className="form-submit" value="Log In"/>
                             </div>
                         </form>
                         <p><Link to="/forgotpassword">Forgot password</Link><br/>No account?<Link to="/signup">Create One</Link></p>
                        </div>
         </section>
        </>
    )
}

export default Login;