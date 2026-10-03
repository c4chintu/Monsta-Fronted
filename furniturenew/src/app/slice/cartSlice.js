import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";


export const fetchCartById = createAsyncThunk("carts/fetchById", async () => {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let token = Cookies.get("token") ? Cookies.get("token") : "";
  console.log("TOKEN:-", Cookies.get("token"));
  try {
    return axios
      .get(`${apiUrl}cart/view-cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((finalyRes) => finalyRes.data);
  } catch (error) {
    return [];
  }
});

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    cart: [],
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCartById.fulfilled, (state, action) => {
      // Add user to the state array
      state.cart = action.payload;
    });
  },
});


export default cartSlice.reducer