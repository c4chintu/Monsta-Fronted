import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Hearder from "./Hearder";

export default function Layout() {
  return (
    <>
      <ToastContainer />
      <section className="grid grid-cols-[16%_auto] ">
        <Sidebar />
        <div>
          <Hearder/>
          <Outlet />
        </div>
        
      </section>
    </>
  );
}
