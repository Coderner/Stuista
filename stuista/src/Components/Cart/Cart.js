import React from "react";
import './Cart.css';
import CoursegridImage from "../Images/coursegrid.png";
import {Link,useHistory} from "react-router-dom";

const Cart= () => {

        const history = useHistory();
        let item = {
              title: history.location.state.title,
              instructorName: history.location.state.instructorName,
              imageUrl: history.location.state.imageUrl
          }
        return(
                <div className="Cart">
                        <div className="CartSummary">
                                <h1 className="CartTitle">Shopping Cart</h1>
                                <div className="CartInfo">
                                        <h3>Total Items</h3>
                                        <h3>Total Price</h3>
                                </div>
                                <button className="Buynow">Buy Now</button>
                        </div>
                        <div className="CourseTable">
                               <div className="CourseContentblock">
                               <div className="CourseItem">
                                 <figure><img src={"https://stuista.herokuapp.com/" + item.imageUrl } alt="Course pic" className="carouselimage" /></figure>
                                 <div className="CourseInfo">
                                   <h3>{item.title}</h3>
                                   <h4>By {item.instructorName}</h4>
                                   <h4>Remove</h4>
                                 </div>
                               </div>
                               </div>
                        </div>
                </div>
        )
}

export default Cart;