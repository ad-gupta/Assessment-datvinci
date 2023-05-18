import React from "react";
import ShowDescription from "../components/ShowDesc";
import { styled } from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCertain, removeFromCart } from "../redux/cart";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: rgb(29, 40, 65);
  height: 100vh;

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
  background-color: white;

  @media (min-width: 768px) {
    width: auto;
    max-width: 35vw;
    margin-bottom: 0;
    margin-right: 20px;
    border: 1px solid #ccc;
  }
`;

const ProductDetails = styled.div`
  text-align: center;

  background-color: white;

  @media (min-width: 768px) {
    padding: 50px;
    text-align: left;
  }
`;

const ProductName = styled.h1`
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

const ProductView = () => {
  const { id } = useParams();
  console.log(id);

  const products = useSelector((state) => state.product.value);
  const cartItem = useSelector((state) => state.cart.value);

  const foundObject = products.find((obj) => obj.id == id);

  const dispatch = useDispatch();
  const addToCart = () => {
    const foundCart = cartItem.find((obj) => obj.id == id);
    console.log(foundCart);
    if (!foundCart) {
      dispatch(
        addCertain({
          id: foundObject.id,
          name: foundObject.name,
          price: foundObject.price,
          imageSrc: foundObject.imageSrc,
          qty: 1,
        })
      );
    }
  };
  return (
    <CardWrapper>
      <ProductImage src={foundObject.imageSrc} alt={foundObject.name} />
      <ProductDetails>
        <ProductName>{foundObject.name}</ProductName>
        <ProductQuantity>Quantity: 1</ProductQuantity>
        <ProductPrice>Price: {foundObject.price}</ProductPrice>
        <ProceedButton onClick={addToCart}>
          <Link to="/cart" style={{color: "white", textDecoration: "none"}}>Proceed to Buy</Link>
        </ProceedButton>
        <ShowDescription />
      </ProductDetails>
    </CardWrapper>
  );
};

export default ProductView;
