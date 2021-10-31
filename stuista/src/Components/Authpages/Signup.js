import React from "react";
import signup from "../Images/Signup.svg";
import './Auth.css';
import { Link } from "react-router-dom";
import mail from "../Images/mail.png";
import account from "../Images/Account.png";
import eye from "../Images/Eye.png";
import lock from "../Images/Lock.png";

const SignUp = () => {
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
                             <form className="signup-form" id="signup-form">
                                 <div className="form group">
                                     <label htmlFor="fullname"> </label>
                                     <input className="input" type="text" name="fullname" id="fullname" placeholder="Full Name"/>
                                 </div>
                                 <div className="form group">
                                     <label htmlFor="email"> </label>
                                     <input type="email" name="email" id="email" placeholder="Email"/>
                                 </div>
                                 <div className="form group">
                                     <label htmlFor="password"> </label>
                                     <input type="password" name="password" id="password" placeholder="Password"/>
                                 </div>
                                 <div className="form group form button">
                                     <input type="submit" name="signup" id="signup" className="form-submit" value="Sign up"/>
                                 </div>
                             </form>
                             <p>By signing up you agree to our <Link to="/terms">Terms & conditions</Link><br/>Already have an account?<Link to="/login">Log in</Link></p>
                            </div>
             </section>
            </>
        )
}

export default SignUp;