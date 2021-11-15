import React from "react";
import './Cart.css';
import CoursegridImage from "../Images/coursegrid.png";

const Cart= () => {
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
                                 <div className="Courseitemimage"><figure><img src={CoursegridImage}/></figure></div>
                                 <div className="CourseInfo">
                                   <h3>Course Name</h3>
                                   <p>By instructor name</p>
                                   <h2>Remove</h2>
                                 </div>
                               </div>
                               </div>
                        </div>
                </div>
        )
}

export default Cart;