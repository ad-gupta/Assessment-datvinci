import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveNavbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProductColl from "./pages/ProductColl";
import ProductView from "./pages/ProductView";
import CheckoutAll from "./pages/CheckoutAll";
import './App.css'



const App = () => {
  
  return (
    <div>
      <ResponsiveNavbar />
      <Routes>
      <Route path="/" element= {<Home/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/signup" element= {<SignUp/>} />
        <Route path="/product" element= {<ProductColl/>} />
        <Route path="/product/:id" element= {<ProductView/>} />
        <Route path="/cart" element= {<CheckoutAll/>} />
      </Routes>
      
    </div>
  );
};

export default App;
