import React, { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaBuilding } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { logOut } from "../../slice/adminSlice";

export default function 
Header() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let token = useSelector((myallstore) => myallstore.adminStore.adminToken);
  let AdmindLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <header className="w-full bg-white border-b mb-1 px-6 py-4 flex items-center justify-between">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* Right Side */}
      <div className="relative group">
        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-11 h-11 rounded-full object-cover border-2 border-gray-300 cursor-pointer"
        />

        {/* Dropdown */}
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <ul className="py-2">
            <li>
              <Link
                to={"#"}
                className="flex px-4 py-3 text-gray-700 hover:bg-gray-100  items-center gap-2"
              >
                <CgProfile /> Profile
              </Link>
            </li>

            <li>
              <Link
                to={"#"}
                className="flex px-4 py-3 text-gray-700 hover:bg-gray-100 items-center gap-2 "
              >
                <FaBuilding /> Company Profile
              </Link>
            </li>

            <li className="border-t border-[#ccc]">
              <button
                onClick={AdmindLogout}
                className="flex px-4 py-3 text-red-600 hover:bg-red-50 items-center gap-2"
              >
                <BiLogOut /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
