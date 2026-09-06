import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
