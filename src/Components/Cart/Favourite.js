import React from "react";
import './Cart.css';
import {Link,useHistory} from "react-router-dom";

const Favourite= () => {

        const history = useHistory();
        let cartitem = {
              favourites: history.location.state.favourites,
          }

        return(
                <div className="Fav">
                        <div className="CartSummary">
                                <h1 className="CartTitle">Favourites</h1>
                        </div>
                        <div className="CourseTable">
                               <div className="CourseContentblock">
                                         {cartitem.favourites.map((user) => (
                                              <div className="CourseItem">
                                                  <figure><img src={"https://stuista.herokuapp.com/" + user.imageUrl } alt="Course pic" className="carouselimage" /></figure>
                                                  <div className="CourseInfo">
                                                  <Link to={{ pathname: "/course", state: user}}>
                                                      <h3>{user.title}</h3>
                                                  </Link>
                                                      <h4>{user.price}</h4>
                                                      <h4 id="removebutton" >Remove</h4>
                                                  </div>
                                               </div>
                                       ))}
                               </div>
                        </div>
                </div>
        )
}

export default Favourite;