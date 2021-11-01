import React,{useState} from "react";
import './App.css';
import Navbar from "./Navbar/Navbar";
import Signup from "./Authpages/Signup";
import Login from "./Authpages/Login";
import Footer from "./Footer/Footer";
import Forgetpassword from "./Authpages/Forgetpassword";
import Categories from "./Categories";
import Cart from "./Cart";
import {Route} from 'react-router-dom';


function App() {

  //  const [isSubmitted,setIsSubmitted] = useState(false);
  //   function submitForm(){
  //     setIsSubmitted(true);
  //   }

  return (
    <div className="app">
      
      <div class="pagecontainer">
      <Navbar/>
      
      <Route path="/Signup">
       <Signup/>
      </Route>

      <Route path="/Login">
       <Login/>
      </Route>
      </div>

      <Footer/>
       
    </div>
    );
}

export default App;
