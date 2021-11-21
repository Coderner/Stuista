import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink,Link } from "react-router-dom";
import logo from "../Images/Stuista.png";
import cart from "../Images/Icons/shopping-cart.png";
import "./Navbar.css";


const Navbar = () => {

   const [allcourseData,setAllcourseData]= useState([]);

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
                   <NavLink to="/cart"><img src={cart} alt="cart" /></NavLink>
                 </li>
                 
                 <li className="navlist Instructor">
                   <NavLink className="text" to="/instructordashboard">As Instructor</NavLink>
                 </li>

                 <li className="navlist login">
                 <NavLink to="/login"><button className="log-signbuttons">Log in</button></NavLink>
                 </li>

                 <li className="navlist signup">
                 <NavLink to="/signup"><button className="log-signbuttons">Sign Up</button></NavLink>
                 </li>
                 
           </ul>
        </nav>
        )
}

export default Navbar;