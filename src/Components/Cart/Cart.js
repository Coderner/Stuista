import React from "react";
import './Cart.css';
import {Link,useHistory} from "react-router-dom";

const Cart= () => {

        const history = useHistory();
        let cartitem = {
              YourCart: history.location.state.YourCart,
              length: history.location.state.length,
              price: history.location.state.price
          }


        //   const  RemovecartItem= async () => {
        //         try {

        //            const res = await fetch(`https://stuista.herokuapp.com/courses/removefromcart/${user._id}`,
        //             { method:"POST",
        //                 headers: {
        //                     "Authorization": "Bearer "+localStorage.getItem("loginToken"),
        //                     Accept: "application/json", 
        //                     "Content-Type": "application/json"
        //                 }
        //              });
        //              const data= res;
        //              console.log(data);
        //            } catch (err) {
        //            console.log(err);
        //          }
        //        }

        return(
                <div className="Cart">
                        <div className="CartSummary">
                                <h1 className="CartTitle">Shopping Cart</h1>
                                <div className="CartInfo">
                                        <h3>Total Items : {cartitem.length}</h3>
                                        <h3>Total Price : {cartitem.price}</h3>
                                </div>
                                <button className="Buynow">Buy Now</button>
                        </div>
                        <div className="CourseTable">
                               <div className="CourseContentblock">
                                         {cartitem.YourCart.map((user) => (
                                              <div className="CourseItem">
                                                  <figure><img src={"https://stuista.herokuapp.com/" + user.imageUrl } alt="Course pic" className="carouselimage" /></figure>
                                                  <div className="CourseInfo">
                                                  <Link to={{ pathname: "/course", state: user}}>
                                                      <h3>{user.title}</h3>
                                                  </Link>
                                                      <h4>{user.price}</h4>
                                                      <h4 id="removebutton">Remove</h4>
                                                  </div>
                                               </div>
                                       ))}
                               </div>
                        </div>
                </div>
        )
}

export default Cart;