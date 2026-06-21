import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./Slices/productsSlice";
import adminReducer from "./Slices/adminSlice";


export const store = configureStore({
  reducer: {
    products: productReducer,
     admin: adminReducer,
  },
});

export default store;
