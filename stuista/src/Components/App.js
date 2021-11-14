import React,{useState} from "react";
import './App.css';
import Navbar from "./Navbar/Navbar";
import Signup from "./Authpages/Signup";
import Login from "./Authpages/Login";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import Forgetpassword from "./Authpages/Forgetpassword";
import SignupOtpverification from "./Authpages/signupOTPverification";
import ResetOtpverification from "./Authpages/resetOTPverification";
import Resetpassword from "./Authpages/Resetpassword";
import Course from "./Course/Course";
import InstructorDashboard from "./Instructor/InstructorDashboard";
import UserDashboard from "./User/UserDashboard";
// import Categories from "./Categories";
// import Cart from "./Cart";
import {Route,Switch} from 'react-router-dom';

function App() {


  return (
    <div className="app">
      
      <div class="pagecontainer">
      <Navbar/>
      <Switch>
      <Route path="/Signup"><Signup/></Route>
      <Route path="/Login"><Login/></Route>
      <Route path="/forgotpassword"><Forgetpassword/></Route>
      <Route path="/signupotpverification"><SignupOtpverification/></Route>
      <Route path="/resetotpverification"><ResetOtpverification/></Route>
      <Route path="/resetpassword"><Resetpassword/></Route>
      <Route path="/course"><Course/></Route>
      <Route path="/userdashboard"><UserDashboard/></Route>
      <Route path="/instructordashboard"><InstructorDashboard/></Route>
      <Route path="/"><Homepage/></Route>
      </Switch>

      </div>

      <Footer/>
       
    </div>
    );
}

export default App;
