import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 2px;
//   width: 100%;
background-color: rgb(29, 40, 65);
color: white;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: auto;
    max-width: 200px;
    margin-bottom: 0;
    margin-right: 20px;
    border: 1px solid #ccc;
  }
`;

const ProductDetails = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProductName = styled.h3`
  margin-bottom: 5px;
`;

const ProductQuantity = styled.p`
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  margin-bottom: 10px;
`;

const ProceedButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CartCard = ({ id, price, name, imageSrc, qty }) => {

  return (
    <CardWrapper>
      <ProductImage src={imageSrc} alt={name} />
      <ProductDetails>
        <ProductName>{name}</ProductName>
        <ProductQuantity>Quantity: {qty}</ProductQuantity>
        <ProductPrice>Price: $ {price}</ProductPrice>
        <ProceedButton>Proceed to Buy</ProceedButton>
      </ProductDetails>
    </CardWrapper>
  );
};

export default CartCard;
