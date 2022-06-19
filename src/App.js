import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Cart from "./Components/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <div style={{marginTop:"50px"}}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
