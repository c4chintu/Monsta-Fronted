"use client";
import Link from "next/link";
import { Lock, Eye } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ResetPassword() {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let [loading, setloading] = useState(false);
  let { id } = useParams();
  let restPass = (e) => {
    setloading(true);
    e.preventDefault();

    let obj = {
      newpassword: e.target.newpassword.value,
      confirempassword: e.target.confirempassword.value,
    };

    axios
      .post(`${apiUrl}auth/rest-pass/${id}`, obj)
      .then((res) => res.data)
      .then((finalyRes) => {
        if (finalyRes.status) {
          toast.success(finalyRes.massage);
          setloading(false);
          e.target.reset()
        } else {
          toast.error(finalyRes.massage);
        }
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#b3805b]" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Reset Password
        </h2>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Create a new password for your account.
        </p>

        <form onSubmit={restPass} className="space-y-5">
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="password"
                name="newpassword"
                placeholder="Enter new password"
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b3805b] focus:border-transparent outline-none"
              />

              <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="password"
                name="confirempassword"
                placeholder="Confirm password"
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-[#b3805b] focus:ring-2  outline-none"
              />

              <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full bg-[#b3805b] text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {loading ? "password resting   " : " Reset Password"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Back */}
        <div className="text-center">
          <Link href="/login" className="text-[#b3805b]  font-medium">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
