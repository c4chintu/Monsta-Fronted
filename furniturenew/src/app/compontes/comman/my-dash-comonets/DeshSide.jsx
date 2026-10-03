"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const menuItems = [
  "My Dashboard",
  "Orders",
  "Addresses",
  "My Profile",
  "Change Password",
  "Logout",
];

export default function DashboardPage() {
  const [active, setActive] = useState("My Dashboard");
  let token = useSelector((myStore) => myStore.userStore.token);
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let [loading, setloading] = useState(false);
  let [errorPAss, seterrorPAss] = useState(null || '');
  let [data, setdata] = useState(null);
  let [Path, setPath] = useState("");

  let changePass = (e) => {
    e.preventDefault();

    let obj = {
      oldpassword: e.target.oldpassword.value,
      newpassword: e.target.newpassword.value,
      confirmpassword: e.target.confirmpassword.value,
    };
    axios
      .post(`${apiUrl}auth/changepassword`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((finalyRes) => {
      

        if (finalyRes.status) {
          toast.success(finalyRes.message);
          e.target.reset();
        } else {
          seterrorPAss(finalyRes.message);
          // toast.error(finalyRes.message)
          toast.error(finalyRes.message);
        }
      });
  };

  let getPRofile = () => {
    axios
      .get(`${apiUrl}auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((finiyRes) => {
        setPath(finiyRes.path);
        setdata(finiyRes.data);
      });
  };

  let updatePRofile = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target);

    axios
      .post(`${apiUrl}auth/updateprofile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((finalyRes) => {
        if (finalyRes.status) {
          toast.success(finalyRes.message)
          getPRofile()
        } else {
          toast.error(finalyRes.message);
        }
      });
  };

  useEffect(() => {
    getPRofile();
  }, [token]);
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left px-6 py-4 rounded transition-all duration-300 font-semibold text-lg
                ${
                  active === item
                    ? "bg-[#c49572] text-white"
                    : "bg-[#222] text-white hover:bg-[#333]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {active === "My Dashboard" && (
            <>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  My Profile
                </h2>

                <form onSubmit={updatePRofile} className="space-y-8">
                  {/* Profile Image */}
                  <div className="flex flex-col items-center border-b pb-8">
                    <img
                      src={Path + data?.image}
                      alt="Profile"
                      name="image"
                      
                      className="w-36 h-36 rounded-full object-fit-cover border-4  border-[#c49572] shadow-lg"
                    />

                    <label
                      htmlFor="profileImage"
                      className="mt-5 cursor-pointer bg-[#c49572] text-white px-6 py-2 rounded-lg transition"
                    >
                      Change Image
                    </label>

                    <input
                      id="profileImage"
                      name="image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </div>

                  {/* Profile Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={data?.name}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c49572]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        readOnly
                        name="email"
                        defaultValue={data?.email}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c49572]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        defaultValue={data?.phone}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c49572]"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        defaultValue={data?.address}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c49572]"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-[#c49572]  text-white px-8 py-3 rounded-lg font-medium transition"
                    >
                      Update Profile
                    </button>

                    <button
                      type="reset"
                      className="border border-gray-300 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}

          {active === "Orders" && (
            <div id="orders" className="block">
              <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                Orders
              </h3>

              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Order
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">1</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        May 10, 2018
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Rs. 25.00 for 1 item
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="/order-details"
                          className="  text-sm font-medium text-[#C09578] "
                        >
                          View
                        </a>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">2</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        May 10, 2018
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          Processing
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Rs. 17.00 for 1 item
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="/order-details"
                          className="text-sm font-medium text-[#C09578]"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {active === "Addresses" && (
            <div>
              <h1 className="text-4xl font-serif font-bold mb-5">Addresses</h1>

              <div className="border rounded-lg p-5">No Address Available.</div>
            </div>
          )}

          {active === "My Profile" && (
            <div id="my-profile" className="block">
              <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                My Profile
              </h3>

              <form
                id="personal_information"
                autoComplete="off"
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue="tuno@mailinator.com"
                    readOnly
                    className="w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-600"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label
                    htmlFor="mobile_number"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="mobile_number"
                    name="mobile_number"
                    maxLength={15}
                    placeholder="Enter mobile number"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter address"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="updateInfo"
                    className="rounded-md bg-[#C09578] px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-blue-700"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          )}

          {active === "Change Password" && (
            <div>
              <h1 className="text-4xl font-serif font-bold mb-5">
                Change Password
              </h1>

              <form
                onSubmit={changePass}
                className="border rounded-lg p-5 space-y-4"
              >
                <input
                  type="password"
                  required
                  name="oldpassword"
                  placeholder="Current Password"
                  className="w-full border p-3 rounded"
                />
             
                  <span className="text-sm text-red-500">{errorPAss}</span>
                

                <input
                  type="password"
                  required
                  name="newpassword"
                  placeholder="New Password"
                  className="w-full border p-3 rounded"
                />
                {/* {errorPAss?.newpassword && (
                  <span className="text-red-500">{errorPAss.newpassword}</span>
                )} */}
                <input
                  type="password"
                  required
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="w-full border p-3 rounded"
                />
                {/* {errorPAss?.confirmpassword && (
                  <span className="text-red-500">{errorPAss.confirmpassword}</span>
                )} */}

                <button className="bg-[#c49572] text-white px-6 py-3 rounded">
                  Change Password
                </button>
              </form>
            </div>
          )}

          {active === "Logout" && (
            <div>
              <h1 className="text-4xl font-serif font-bold mb-5">Logout</h1>

              <p>You have been logged out successfully.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
