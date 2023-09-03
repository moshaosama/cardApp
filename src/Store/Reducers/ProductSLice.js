import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchReducer = createAsyncThunk("ProductSlice/fetchReducer" ,async() => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data =await res.json();
    return data;
})


const ProductSlice =createSlice({
    name: "ProductSlice",
    initialState:[],
    reducers:{},

    extraReducers: (Builder) => {
        Builder.addCase(fetchReducer.fulfilled ,(state ,action) => {
            return action.payload;
        })
    }
})

export default ProductSlice.reducer;