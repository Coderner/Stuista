import React,{useState,useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink,Link,useHistory } from "react-router-dom";
import logo from "../Images/Stuista.png";
import cartimage from "../Images/Icons/shopping-cart.png";
import "./Navbar.css";
import {UserContext} from "../App";

const Navbar = () => {

   const history = useHistory();
   const [allcourseData,setAllcourseData]= useState([]);
   const [cart,setCart]= useState();
   const [fav,setFav]= useState();
   const {state,dispatch} = useContext(UserContext);
   
   const clear = () => {
      // dispatch({type:"USER", payload:false});
      localStorage.removeItem("loginToken");
      localStorage.setItem("isAuthenticatedLogin", false);
      console.log(localStorage.getItem("isAuthenticatedLogin"));
      window.alert("logged out");
      history.push("/");
   }

  const ToggleMenu = () =>{
    // console.log(state);
    if(localStorage.getItem("loginToken")) {
          return(
            <>
                <li className="navlist fav">
                 <NavLink className="text" onClick={getfav} to="">Fav</NavLink>
               </li>
                <li className="navlist signup">
                  <NavLink to="/" onClick={clear}><button className="log-signbuttons">Log Out</button></NavLink>
                </li>
            </>
       )
    }
    else{
      return(
      <>
                  <li className="navlist signup">
                   <NavLink to="/signup"><button className="log-signbuttons">Sign Up</button></NavLink>
                   </li>
                
                   <li className="navlist login">
                   <NavLink to="/login"><button className="log-signbuttons">Log in</button></NavLink>
                  </li>
      </>
      )
    }
  }

   const getallCourses = async () => {
       try {
                const res = await fetch("https://stuista.herokuapp.com/courses/allCourses",
                 { method:"GET",
                     headers: {
                         Accept: "application/json", 
                        "Content-Type": "application/json"
                     }
                  });
                  const response= await res.json();
                  setAllcourseData(response.course);
                  console.log(response);
                } catch (err) {
                console.log(err);
              }
          }
       
        const [filteredData,setFilteredData]= useState([]);
        
        const handleFilter = (e) => {
            const searchWord= e.target.value;
            const newFilter = allcourseData.filter((value)=> {
                  return value.title.toLowerCase().includes(searchWord.toLowerCase());
            });

            if (searchWord==="") {
              setFilteredData([])
            } else{
              setFilteredData(newFilter);
            }
        };

        const getcart = async () => {
          try {
                   const res = await fetch("https://stuista.herokuapp.com/courses/cart",
                    { method:"GET",
                        headers: {
                            "Authorization": "Bearer "+localStorage.getItem("loginToken"),
                            Accept: "application/json", 
                           "Content-Type": "application/json"
                        }
                     });
                     const cartinfo= await res.json();
                     if(cartinfo.message){
                       window.alert("Login First");
                     }else {
                      setCart(cartinfo);
                      if(cart){
                       history.push({
                         pathname : "/cart",
                         state : cart})
                      console.log(cartinfo);
                       }
                     }
              } catch (err) {
                   console.log(err);
                 }
             }

             const getfav = async () => {
              try {
                       const res = await fetch("https://stuista.herokuapp.com/courses/favourites",
                        { method:"GET",
                            headers: {
                                "Authorization": "Bearer "+localStorage.getItem("loginToken"),
                                Accept: "application/json", 
                               "Content-Type": "application/json"
                            }
                         });
                         const cartinfo= await res.json();
                         if(cartinfo.message){
                           window.alert("Login First");
                         }else {
                          setFav(cartinfo);
                          if(fav){
                           history.push({
                             pathname : "/favourite",
                             state : fav})
                          console.log(cartinfo);
                           }
                         }
                  } catch (err) {
                       console.log(err);
                     }
                 }



        return(
          
            <nav className="navbar">
            <ul className="list">
                 
              <li className="navbar-brand navlist"><NavLink to="/">
                  <img src={logo} alt="logo" />
                  </NavLink>
              </li>

                <li className="categories navlist" ><NavLink className= "text" to="/filter">
                    Categories
                   </NavLink>
                </li>
                 
                <li className="navlist navsearch"><form>
                       <input className="search" type="search" placeholder="Search" onClick={getallCourses} onChange={handleFilter}/>
                            {filteredData.length !== 0 && (
                                <div className="dataresult">
                                    {filteredData.map((value,key)=>{
                                       return (
                                        <Link to={{ 
                                          pathname: "/course", state: value
                                         }}><div>{value.title}</div></Link>
                                       )
                                     })}
                                </div>
                            )}
                      </form>
                </li>

                <li className="navlist cart">
                   <NavLink onClick={getcart} to=""><img src={cartimage} alt="cart" /></NavLink>
                 </li>
         
                 <li className="navlist Instructor">
                   <NavLink className="text" to="/instructordashboard">As Instructor</NavLink>
                 </li>

                 <ToggleMenu/>
                  
            </ul>
        </nav>
        )
}

export default Navbar;