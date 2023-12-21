import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducersAndMiddlewares";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["favorites", "cart", "products", "search"],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
