import React,{ useEffect } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context"; 
import Ratings from "./Ratings";
import CartItem from "./CartItem";
import { Button } from "bootstrap";

function Header() {

  const { state : {cart,products}, dispatch } = CartState();

  return (
    <div className="Header">
      <Navbar bg="dark" fixed="top" variant="dark">
        <Container>
          <NavbarBrand className="brand-title">
            <Link to="/">Shopping Cart</Link>
          </NavbarBrand>
          <NavbarBrand>
            <Link to="/cart">Cart({cart.length})</Link>
          </NavbarBrand>
          {/* <Nav className="me-auto cart">
            <NavDropdown title={cart.length} id="basic-nav-dropdown">
              <div  className="cartMenu">
                {
                  cart.length > 0 ? 
                  
                    cart.map((product)=>{
                      return <CartItem key={product.id} product={product} />
                    })

                  : 
                  <span style={{marginLeft:"5px",marginRight:"5px"}}> Add Something</span>
                }
              </div>
            </NavDropdown>
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
