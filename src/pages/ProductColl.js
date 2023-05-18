import React from 'react'
import ProductComponent from '../components/Product'
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(29, 40, 65);

`;


const ProductColl = () => {
  const products = useSelector(state => state.product.value)
  return (
    <div>
      <Container>
        {
          products.map((product) => (
            <ProductComponent product={product}/>
          ))
        }
      </Container>
    </div>
  )
}

export default ProductColl
