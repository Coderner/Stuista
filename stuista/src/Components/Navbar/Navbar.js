import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink,Link } from "react-router-dom";
import logo from "../Images/Stuista.png";
import cart from "../Images/shopping-cart.png";
import "./Navbar.css";

const Navbar = () => {
        return(
            <>
              <nav className="navbar navbar-custom navbar-expand-lg ">
              <NavLink className="navbar-brand" to="/">
                  <img src={logo} alt="logo" />
              </NavLink>
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
              </button> */}

              <div>
              <ul className="navbar-nav mr-auto list">
                 
                <li className="nav-item dropdown">
                   <NavLink className="nav-link dropdown-toggle text categories" to="/categories" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                   </NavLink>
                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <NavLink className="dropdown-item" to="#">Action</NavLink>
                   <NavLink className="dropdown-item" to="#">Another action</NavLink>
                   <div className="dropdown-divider"></div>
                   <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                 </div>
                </li>
                 
                <li>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                </li>

                <li className="nav-item cart">
                   <NavLink className="nav-link" to="/cart">
                      <img src={cart} alt="cart" />
                   </NavLink>
                 </li>
                 
                 <li className="nav-item Instructor">
                   <NavLink className="nav-link text" to="/Instructor">Instructor</NavLink>
                 </li>

                 <li className="nav-item login">
                 <NavLink to="/login"><button className="log-signbuttons">Log in</button></NavLink>
                 </li>

                 <li className="nav-item signup">
                 <NavLink to="/signup"><button className="log-signbuttons">Sign Up</button></NavLink>
                 </li>
                 
           </ul>
          </div>
        </nav>
            </>
        )
}

export default Navbar;