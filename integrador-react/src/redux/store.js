import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { productsReducer, suggestedReducer, categoriesReducer, cartReducer, userReducer} from "./slices"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"




const reducers= combineReducers({
    products: productsReducer,
    suggested: suggestedReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    user: userReducer
})

const persistConfig={
    key: "root",
    storage,
    whitelist: [ "cart", "user"] 
} 

const persistedReducer= persistReducer(persistConfig, reducers)

export const store= configureStore({
    reducer: persistedReducer, 
});

export const persistor= persistStore(store); 