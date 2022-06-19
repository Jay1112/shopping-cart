import React from "react";
import Ratings from "./Ratings";
import { Button } from "react-bootstrap";
import { CartState } from "../context/Context";

function CartItem({product}){

    const {dispatch} = CartState();

    return (
            <div className="cartItem">
                <div className="imagePart">
                    <img src={product.filename} style={{width:"100px",height:"100px",borderRadius:"50px"}} className="cartItemImage" />
                </div>
                <div className="details">
                    <span>{product.title}({product.type})</span>
                    <span>${product.price}</span>
                    <input type="number" value={product.qty} min="1" max="10" onChange={(e)=>{
                        dispatch({type:"UPDATE_QUANTITY",payload : { id : product.id , qty : e.target.value}});
                    }}/>
                    <Ratings rating={product.rating} />
                </div>
                <div className="removeButton">
                        <Button variant="danger" onClick={()=>{
							dispatch({
								type : "REMOVE_FROM_CART",
								payload : product,
							})
						}}>
							X
						</Button>
                </div>
                {/* <div className="rightPart">
                    
                    <div className="cartItemDetails">
                        <span>{product.title}</span>
                        <span> ${product.price}</span>
                    </div>
                    
                </div>
                <div className="leftPart">
                        
                </div> */}
            </div>
    )
}

export default CartItem;