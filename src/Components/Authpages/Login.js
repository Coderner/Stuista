import React, {useState} from "react";
import login from "../Images/Login.svg";
import './Auth.css';
import { Link,useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();
    const [allEntry, setallEntry] = useState([]);

    const [user, setUser] = useState({
        email:"",
        password:""
    });

    const [errors,setErrors]= useState({});
    const [myCourse,setMyCourse]= useState([]);
    
    const validate = (user)=> {
        let errors = {}
    
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
        const {email,password} = user;
         const res = await fetch("https://stuista.herokuapp.com/auth/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              email,password
            })
         });
         const data = await res.json();
         console.log(data);
        
        const {accesstoken}=data;
        
        setMyCourse(data.mycourses);
        console.log(myCourse);
        localStorage.setItem("myCourse",myCourse);
        localStorage.setItem("loginToken",accesstoken);
    
        console.log(localStorage.getItem("loginToken"));
        console.log(localStorage.getItem("myCourse"));

         if( !data || data.Error){
           window.alert(data.Error);
           console.log(data.Error);
           if(data.Error==="user not verified. kindly check your mail for otp and verify your account")
           {    
                const newEntry = { ...user }
                 setallEntry([...allEntry, newEntry]);
                  let object ={
                     email:newEntry.email,
                     password:newEntry.password
                  }
                 history.push({
                  pathname : "/signupotpverification",
                  state : object
                });
           }
         }
        else if(data.instructor==="true"){
          history.push("/continueas");
        }else{
          window.alert("Successful Login");
          console.log("Successful Login");
          history.push("/");
         }
      }

    return(
        <>
           <section className="Login">
                  <div className="loginImage">
                             <figure>
                                 <img src={login} alt="login pic" className="logimage" />
                            </figure>
                  </div>
                     <div className="Login-form">
                        <h2 className="Signlogtitle FormTitle">Welcome Back</h2>
                         <form method="POST" className="login-form " id="login-form">
                             <div className="form group forminput">
                                 <label htmlFor="email"> </label>
                                 <input type="email" 
                                 className="input" 
                                 name="email" 
                                 id="email" 
                                 placeholder="Email"
                                 value={user.email}
                                 onChange={handleInput}
                                 />
                                  <p className="error">{errors.email}</p>
                             </div>
                             <div className="form group forminput">
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
                             <div className="form group form button">
                                 <input type="submit" name="login" id="login" className="authbutton form-submit" value="Log in" onClick={PostData}/>
                             </div>
                         </form>
                         <p><Link to="/forgotpassword">Forgot password</Link><br/>No account?<Link to="/signup">Create One</Link></p>
                        </div>
         </section>
        </>
    )
}

export default Login;