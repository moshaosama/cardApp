import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Products from "../../components/Products";

const CartSlice = createSlice({
    name: "CartSlice",

    initialState:[],

    reducers:{
        add_Product: (state ,action) => {
            state.push(action.payload)
        }
    }
})



export default CartSlice.reducer;

export const {add_Product ,Clear ,Remove_Cart} = CartSlice.actions;