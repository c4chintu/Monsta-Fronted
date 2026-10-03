"use client";

import { getToken } from "@/app/slice/loginSlice";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

export default function LogInRegister() {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let [loading, setloading] = useState(false);
  let [loginloading, setloginloading] = useState(false);
  let [errors, seterror] = useState(null);
  let dispatch = useDispatch();

  let logIn = (event) => {
    setloginloading(true);
    event.preventDefault();

    let obj = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    axios
      .post(`${apiUrl}auth/login`, obj)
      .then((res) => res.data)
      .then((finalyRes) => {
        setloginloading(false);
        if (finalyRes.status) {
          toast.success(finalyRes.message);
          event.target.reset();
          dispatch(getToken({ token: finalyRes.token }));
          redirect("my-dashboard");
        } else {
          toast.error(finalyRes.message);
        }
      });
  };

  let createUser = (event) => {
    setloading(true);
    event.preventDefault();

    let obj = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    axios
      .post(`${apiUrl}auth/register`, obj)
      .then((res) => res.data)
      .then((finalyRes) => {
        setloading(false);
        if (finalyRes.status) {
          toast.success(finalyRes.message);
          event.target.reset();
        } else {
          toast.error(finalyRes.message);
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <ToastContainer />
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Login */}
        <div>
          <h1 className="text-5xl font-serif text-[#1d1d1d] mb-8">Login</h1>

          <form onSubmit={logIn} className="border rounded-md p-7 bg-white">
            <div className="mb-6">
              <label className="block text-lg font-medium mb-3">
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full h-14 border border-gray-200 px-6 outline-none focus:border-[#C1916A]"
              />
            </div>

            <div className="mb-8">
              <label className="block text-lg font-medium mb-3">
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-14 border border-gray-200 px-6 outline-none focus:border-[#C1916A]"
              />
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="/forget-password"
                className="text-[#C1916A] text-lg hover:underline"
              >
                Lost your password?
              </Link>

              <button className="bg-[#C1916A] text-white uppercase font-semibold px-8 py-3 rounded-full hover:bg-[#b3805b] duration-300">
                {loginloading ? "login...." : "login"}
              </button>

             
            </div>
          </form>
        </div>

        {/* Register */}
        <form onSubmit={createUser}>
          <h1 className="text-5xl font-serif text-[#1d1d1d] mb-8">Register</h1>

          <div className="border rounded-md p-7 bg-white">
            <div className="mb-6">
              <label className="block text-lg font-medium mb-3">
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="name"
                name="name"
                placeholder="Full Name"
                className="w-full h-14 border border-gray-200 px-6 outline-none focus:border-[#C1916A]"
              />
              {/* {errors?.name && (
                <span className="text-red-400 ">{errors.name}</span>
              )} */}
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-3">
                Email address <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full h-14 border border-gray-200 px-6 outline-none focus:border-[#C1916A]"
              />
              {/* {errors?.email && (
                <span className="text-red-400">{errors.email}</span>
              )} */}
            </div>

            <div className="mb-8">
              <label className="block text-lg font-medium mb-3">
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-14 border border-gray-200 px-6 outline-none focus:border-[#C1916A]"
              />
              {/* {errors?.password && (
                <span className="text-red-400">{errors.password}</span>
              )} */}
            </div>

            <div className="flex justify-end">
              <button className="bg-[#C1916A] text-white uppercase font-semibold px-8 py-3 rounded-full hover:bg-[#b3805b] duration-300">
                {loading ? "Register..." : "Register"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
