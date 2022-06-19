import React, { createContext, useReducer, useContext, useEffect } from "react";
import { data } from "../Data";
import { cartReducer } from "./Reducer";
import axios from "axios";

const AppContext = createContext();

function Context({ children }) {

  const [state, dispatch] = useReducer(cartReducer, {
    products : [],
    cart : [],
  });

  useEffect(()=>{
    let url = 'https://api4286.s3.ap-south-1.amazonaws.com/products.json';
      fetch(url)
        .then(res => res.json())
        .then((data) => {
          dispatch({ type : "FETCH_DATA", payload : data } );
        })
        .catch(err => { throw err });
  },[])

  return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
}

export default Context;

export const CartState = () => {
  return useContext(AppContext);
};
