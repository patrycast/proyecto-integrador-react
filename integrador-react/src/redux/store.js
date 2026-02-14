import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { productsReducer, suggestedReducer, categoriesReducer, cartReducer} from "./slices"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"




const reducers= combineReducers({
    products: productsReducer,
    suggested: suggestedReducer,
    categories: categoriesReducer,
    cart: cartReducer
})

const persistConfig={
    key: "root",
    storage,
    whitelist: ["products", "cart"] 
} 

const persistedReducer= persistReducer(persistConfig, reducers)

export const store= configureStore({
    reducer: persistedReducer, 
});

export const persistor= persistStore(store); 