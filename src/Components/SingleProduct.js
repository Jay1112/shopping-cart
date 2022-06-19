import React from "react";
import { Card, Button } from "react-bootstrap";
import Ratings from "./Ratings";
import { CartState } from "../context/Context";


function SingleProduct({product}){

	const { state :  {cart},
			dispatch,
	 } = CartState();

	return (
		<div className="singleItem">
			<Card>
				<Card.Img variant="top" src={product.filename} style={{ width:"200px" ,height:"250px" }}/>
				<div className="CartDetails">
					<Card.Body>
						<Card.Title>
							{product.title}({product.type})
						</Card.Title>
						<Card.Subtitle>
							<span>${product.price}</span>
						</Card.Subtitle>
						<Card.Text>
							{product.description}	
						</Card.Text>
						<Ratings rating={product.rating}/>	
						{
							cart.some(p=>p.id === product.id) ?
							<Button variant="danger" onClick={()=>{
								dispatch({
									type : "REMOVE_FROM_CART",
									payload : product,
								})
							}}>
								Remove From Cart
							</Button> :
							<Button onClick={()=>{
								dispatch({
									type : "ADD_TO_CART",
									payload : product,
								})
							}}>
								Add to Cart
							</Button>
						}
					</Card.Body>
				</div>
			</Card>
		</div>
	);
}

export default SingleProduct;