import { configureStore } from "@reduxjs/toolkit";
// import slider slice
import sliderReducer from "../features/slices/SliderSlice";
// import product slice 
import productsReducer from "../features/slices/productsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer
  },
});
;
