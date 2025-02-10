import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import carouselReducer from "./category/carouselSlice"; // carouselReducer ni to‘g‘ri import qilish
import { thunk } from "redux-thunk"; // thunk ni import qilish

export default configureStore({
  reducer: {
    category: categorySlice,
    carousel: carouselReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
