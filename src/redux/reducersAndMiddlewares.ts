import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

const reducer = combineReducers({
    //   favorites: favoritesReducer,
    cart: cartReducer,
    //   products: productsReducer,
    //   search: searchReducer,
});

export default reducer;
