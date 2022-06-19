import React,{ useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CartState } from "../context/Context";
import CartItem from "./CartItem";

function Cart() {
  let [totalPrice,setTotalPrice] = useState(0);
  const {state : { cart }} = CartState();

  useEffect(()=>{
    let total = 0 ; 
    cart.map((item)=>{
      total = total + Number(item.price)*item.qty;
      return item;
    });
    setTotalPrice(total);
  },[cart]);

  return (
    <div className="cartPage">
      <div className="PriceTracker">
        <h1>Total Purchase : ${totalPrice.toFixed(2)}</h1>
      </div>
      <div className="cartProducts">
        {
          cart.map((product)=>{
            return <CartItem key={product.id} product={product} />
          })
        }
      </div>
    </div>
  );
}

export default Cart;
