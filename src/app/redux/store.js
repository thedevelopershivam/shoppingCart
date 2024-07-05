import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import { UserLoginApi } from "./query/UserLogin";
import { ProductsPage } from "./query/Queries";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "./slices/userSlice"; // Assuming removeUser is an action creator
import authPopUpSlice from "./slices/authPopUpSlice";

export const store = configureStore({
  
  reducer: {
    // RTK Queries
    [UserLoginApi.reducerPath]: UserLoginApi.reducer,
    [ProductsPage.reducerPath]: ProductsPage.reducer,
    // Slices
    user: userSlice,
    popUp: authPopUpSlice,
    cart: cartSlice,
  },

  // middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      UserLoginApi.middleware,
      ProductsPage.middleware
    ),

});

setupListeners(store.dispatch);
