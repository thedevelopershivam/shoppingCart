import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    popUp: "",
}

const authPopUpSlice = createSlice({
    name: "authPop",
    initialState,
    reducers: {
        popUp: (state, action) => {
            const data = action.payload;
            state.popUp = data;
        }
    }
});

export const { popUp } = authPopUpSlice.actions;
export default authPopUpSlice.reducer;
