import React, { useState } from "react";
import styled from "styled-components";

// Styled component for the container
const Container = styled.div`
  flex: 2;
  padding: 10px;
  background-color: white;
`;

// Styled component for the button
const Button = styled.button`
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

// Styled component for the description
const Description = styled.p`
  margin-top: 10px;
  max-width: 35vw;
`;

const ShowDescription = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Button onClick={handleClick}>Toggle Description</Button>
      {show && (
        <Description>
          <strong>Description:</strong> 2.5mm Twin & Earth TPS Electrical Cable
          <br />
          <strong>Length:</strong> 100mtr Roll
          <br />
          <strong>Usage:</strong> Mainly Used for Power Circuits
          <br />
          <strong>Wire Type:</strong> Stranded Wire
          <br />
          <strong>Meter Marked:</strong> Yes
          <br />
          <strong>Rating:</strong> V90 Rated
          <br />
          <strong>Standards:</strong> Australian Standards / Approval Marked
          <br />
          <strong>Note:</strong> Brand may vary from picture - we sell Electra
          Cables, Olex & Prysmian - whatever we can offer for the best price at
          the time of your order.
        </Description>
      )}
    </Container>
  );
};

export default ShowDescription;
