import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { styled } from "styled-components";

const Container = styled.div`
  flex: 7;
`;
const CartView = () => {
  const cartItem = useSelector((state) => state.cart.value);
  return (
    <Container>
      <div>
        {cartItem.map((item, i) => {
          if (item.qty) {
            return (
              <CartCard
                key={i}
                id={item.id}
                name={item.name}
                price={item.price}
                imageSrc={item.imageSrc}
                qty={item.qty}
              />
            );
          }
        })}
      </div>
    </Container>
  );
};

export default CartView;
