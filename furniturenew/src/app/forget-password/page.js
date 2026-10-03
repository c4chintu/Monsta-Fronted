"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Forgetpassword() {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let [loadingfor, setloading] = useState(false);
  
  let forpass = (e) => {
    
    e.preventDefault();
    setloading(true);
    let obj = {
      email: e.target.email.value,
    };
    axios
      .post(`${apiUrl}auth/forget-password`, obj)
      .then((res) => res.data)
      .then((finalyRes) => {
        if (finalyRes.status) {
          toast.success(finalyRes.message);
          setloading(false);
        } else {
          toast.error(finalyRes.message);
        }
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#b3805b]" />
          </div>
        </div>


        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Forgot Password?
        </h2>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Enter your registered email address and we'll send you a password
          reset link.
        </p>

        {/* Form */}
        <form onSubmit={forpass} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#b3805b] transition text-white font-semibold py-3 rounded-lg"
          >
            {loadingfor ? "sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Back to Login */}
        <div className="text-center">
          <Link href="/login" className="text-[#b3805b] font-medium">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
