import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SelectQty = styled.select`
  padding: 5px;
  font-size: 16px;
`;

const OptionQty = styled.option``;

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  return (
    <Container>
      <SelectQty value={quantity} onChange={handleQuantityChange}>
        <OptionQty value={1}>1</OptionQty>
        <OptionQty value={2}>2</OptionQty>
        <OptionQty value={3}>3</OptionQty>
        <OptionQty value={4}>4</OptionQty>
        <OptionQty value={5}>5</OptionQty>
      </SelectQty>
    </Container>
  );
};

export default QuantitySelector;
