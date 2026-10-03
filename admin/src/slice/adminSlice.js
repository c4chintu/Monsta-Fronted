import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export let adminSlice = createSlice({
  name: "userData",
  initialState: {
    adminToken: Cookies.get("adminToken") ? Cookies.get("adminToken") : "",
  },
  reducers: {
    getToken: (oldstate, { payload }) => {
      oldstate.adminToken = payload.token;

      Cookies.set("adminToken", oldstate.adminToken);
    },
    logOut: (oldstate) => {
      oldstate.adminToken = "";
      Cookies.remove("adminToken");
    },
  },
});
export const { getToken, logOut } = adminSlice.actions;
export default adminSlice.reducer;
