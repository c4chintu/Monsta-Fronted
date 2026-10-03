import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export let loginSlice = createSlice({
  name: "userData",
  initialState: {
    token: Cookies.get("token") ? Cookies.get("token") : "",
  },
  reducers: {
    getToken: (oldstate, { payload }) => {
      oldstate.token = payload.token;

      Cookies.set("token", oldstate.token);
    },
    logOut: (oldstate) => {
      oldstate.token = "";
      Cookies.remove("token");
    },
  },
});
export const { getToken, logOut } = loginSlice.actions;
export default loginSlice.reducer;
