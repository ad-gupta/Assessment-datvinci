import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 3,
      name: "Product 1",
      price: 19.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 4,
      name: "Product 2",
      price: 29.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 5,
      name: "Product 1",
      price: 19.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 6,
      name: "Product 2",
      price: 29.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 7,
      name: "Product 1",
      price: 19.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 8,
      name: "Product 2",
      price: 29.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 9,
      name: "Product 1",
      price: 19.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 10,
      name: "Product 2",
      price: 29.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 11,
      name: "Product 1",
      price: 19.99,
      imageSrc: "/logo512.png",
    },
    {
      id: 12,
      name: "Product 2",
      price: 29.99,
      imageSrc: "/logo512.png",
    },
    // Add more products here
  ],
};

export const productSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
