import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addCertain, addToCart, removeFromCart } from "../redux/cart";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SelectQty = styled.select`
  padding: 5px;
  font-size: 16px;
`;

const OptionQty = styled.option``;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Icon = styled.span`
  display: inline-block;
`;

const AddToCartIcon = () => <Icon>Add To Cart</Icon>;
const RemoveFromCartIcon = () => <Icon>Remove From Cart</Icon>;

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [temCart, settemCart] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };
  const addToCartfun = () => {
    settemCart(true);
    let foundCart = null;
    let qt = 0;
    if (cart) {
      foundCart = cart.find((obj) => obj.id == product.id);
      console.log(foundCart);
    }
    if (!foundCart) {
      dispatch(
        addCertain({
          id: product.id,
          name: product.name,
          price: product.price,
          imageSrc: product.imageSrc,
          qty: quantity,
        })
      );
    } else {
      dispatch(removeFromCart({ id: foundCart.id, qty: foundCart.qty }));
      qt = foundCart.qty;
      dispatch(
        addCertain({
          id: foundCart.id,
          name: foundCart.name,
          price: foundCart.price,
          imageSrc: foundCart.imageSrc,
          qty: quantity + qt,
        })
      );
    }
  };

  const removeFromCartfun = () => {
    dispatch(removeFromCart({ id: product.id, qty: quantity }));
    settemCart(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Container>
        <SelectQty value={quantity} onChange={handleQuantityChange}>
          <OptionQty value={1}>1</OptionQty>
          <OptionQty value={2}>2</OptionQty>
          <OptionQty value={3}>3</OptionQty>
          <OptionQty value={4}>4</OptionQty>
          <OptionQty value={5}>5</OptionQty>
        </SelectQty>
      </Container>
      {temCart ? (
        <Button onClick={removeFromCartfun}>
          <RemoveFromCartIcon />
        </Button>
      ) : (
        <Button onClick={addToCartfun}>
          <AddToCartIcon />
        </Button>
      )}
    </div>
  );
};

export default AddToCart;
