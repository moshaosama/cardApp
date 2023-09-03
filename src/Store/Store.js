
import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from './Reducers/ProductSLice'
import CartReducer from './Reducers/CartSlice'

export const store = configureStore({
    reducer:{
        Products: ProductReducer,
        Carts: CartReducer,
    }
})