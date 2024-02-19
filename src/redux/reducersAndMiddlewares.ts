import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productApi from "./api/product";

export const reducer = combineReducers({
    //   favorites: favoritesReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,

    //   products: productsReducer,
    //   search: searchReducer,
});

export const middleWares = [productApi.middleware];
