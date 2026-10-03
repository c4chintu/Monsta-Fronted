import axios from "axios";
import React from "react";
import { getToken } from "../../slice/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;
  let dispatch = useDispatch();
  let navigete = useNavigate();

  let loginchecked = (e) => {
    let obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(`${apiurl}authAdmin/adminLogIn`, obj)
      .then((res) => res.data)
      .then((finalyRes) => {
        if (finalyRes.status) {
          dispatch(getToken({ token: finalyRes.token }));
          navigete("/deshboared");
          toast.success(finalyRes.message);
        } else {
          toast.error(finalyRes.message);
        }
      });
    e.preventDefault();
  };

  return (
    <section className="bg-[#E5E7EB] h-screen  flex items-center justify-center">
      <ToastContainer/>
      <div className="bg-white w-3xl shadow-lg p-5 rounded-[15px] flex  items-center gap-4">
        <form onSubmit={loginchecked} action="" className="w-[50%] p-3">
          <h2 className="text-[#002D74] py-4 font-semibold  text-2xl">Login</h2>
          <label className="py-2 block" htmlFor="">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="border p-2 bg-[#E5E7EB] w-full outline-none rounded-[5px]"
            placeholder="Enter Email Address"
          />
          <label className="py-2 block" htmlFor="">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border p-2 w-full outline-none bg-[#E5E7EB] rounded-[5px]"
            placeholder="Enter password"
          />
          <button className="bg-blue-500 p-2 mt-3 w-full text-xl rounded-[5px]">
            Log in
          </button>
        </form>
        <div className="w-[50%]">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              className="rounded-[10px]"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
