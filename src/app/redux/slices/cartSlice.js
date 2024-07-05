import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartId: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const data = action.payload;
            state.cartId = [];
            state.cart = data;
            
            data && data.filter(item => state.cartId.push(item.id));
        }
    }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
