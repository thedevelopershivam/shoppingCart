import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: []
}

const userSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = action.payload;
            state.user = data;
        },
        removeUser: (state, action) => {
            state.user = [];
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
