import React from "react";
import styled from "styled-components";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  width: 35vh;
  height: 45vh;
  margin: 20px;
  background-color: white;

  //   @media (min-width: 768px) {
  //     width: 50%;
  //   }

  //   @media (min-width: 1200px) {
  //     width: 33.33%;
  //   }
`;

const ProductImage = styled.img`
  width: 25vh;
  height: 25vh;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #888;
`;

const ProductComponent = ({ product }) => {
  return (
    <ProductContainer key={product.id}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <ProductImage src={product.imageSrc} alt={product.name} />
        <ProductName>{product.name}</ProductName>
      </Link>
      <ProductPrice>{product.price}</ProductPrice>

      <AddToCart product = {product}/>
    </ProductContainer>
  );
};

export default ProductComponent;
