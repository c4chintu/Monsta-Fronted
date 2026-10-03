import { configureStore } from '@reduxjs/toolkit'
import  loginSlice  from '../slice/loginSlice'
import  cartSlice  from '../slice/cartSlice'

export let store=configureStore({
    reducer:{
        userStore:loginSlice,
        cartStore:cartSlice
    }

})