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
                if (state.cartId.includes(data?.id)) {
                    // Item exists, remove it
                    state.cartId = state.cartId.filter(item => item !== data.id);
                    state.cart = state.cart.filter(item => item.id !== data.id);
                } else {
                    state.cartId.push(data.id);
                    state.cart.push(data);
                }
            
        }
    }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
