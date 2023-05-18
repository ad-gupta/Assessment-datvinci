import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { emptyCart } from '../redux/cart';

const CheckoutContainer = styled.div`
    flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border-left: 1px solid white;
`;

const TotalAmount = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: white;
`;

const CheckoutButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
`;

const ThankYouMessage = styled.h2`
  font-size: 24px;
  color: white;
`;

const CheckoutComponent = () => {
    const cartItem = useSelector((state) => state.cart.value);
    const totalItem = useSelector((state) => state.cart.totalCartItem);
    const dispatch = useDispatch()
    let amt =0;
    for(let i=0; i<cartItem.length; i++) {
        amt += cartItem[i].price* cartItem[i].qty;
    }
  const [isThankYou, setIsThankYou] = useState(false);

  const handleCheckout = () => {
    setIsThankYou(true);
    dispatch(emptyCart());
  };

  return (
    <CheckoutContainer>
        <TotalAmount>Total Amount: $ {amt}</TotalAmount> 
      {isThankYou ? (
        <ThankYouMessage>Thank you for your purchase!</ThankYouMessage>
      ) : (
        <div>
          
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </div>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
