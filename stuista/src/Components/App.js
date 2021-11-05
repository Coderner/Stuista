import React,{useState} from "react";
import './App.css';
import Navbar from "./Navbar/Navbar";
import Signup from "./Authpages/Signup";
import Login from "./Authpages/Login";
import Footer from "./Footer/Footer";
// import Homepage from "./Homepage";
import Forgetpassword from "./Authpages/Forgetpassword";
import OtpVerification from "./Authpages/OTPverification";
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
      <Route path="/Otpverification"><OtpVerification/></Route>
      </Switch>

      </div>

      <Footer/>
       
    </div>
    );
}

export default App;
