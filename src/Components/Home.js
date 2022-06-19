import React from "react";
import { Container } from "react-bootstrap";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct"
import "./style.css";

function Home() {

  const {state : { products }} = CartState();

  return (
    <Container>
      <div className="home">
        <div  className="productContainer">
          {
            products.map((pro,index)=>{
              return <SingleProduct product={pro} key={index}/>
            })
          }
        </div>
      </div>
    </Container>

    );
}

export default Home;
