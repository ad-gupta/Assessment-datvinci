import React, { useState } from "react";
import CartView from "../components/CartView";
import CheckoutComponent from "../components/CheckOut";

const CheckoutAll = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(12, 19, 35)", height: '100vh'}}>
      <CartView />
      <CheckoutComponent/>
    </div>
  );
};

export default CheckoutAll;
