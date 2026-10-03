import React, { useState } from "react";
import { Link } from "react-router";
import { BsPersonFillGear } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { BiCheckShield, BiData } from "react-icons/bi";
import { GiMaterialsScience } from "react-icons/gi";
import { FaQuestion, FaQuoteLeft } from "react-icons/fa";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { MdOutlineDashboard, MdLocationCity, MdOutlineViewCarousel } from "react-icons/md";
import { FiBox } from "react-icons/fi";


export default function Sidebar() {
  let [menuopen, setMenuOpen] = useState(0);

  return (
    <div className="bg-slate-900 h-screen p-3 overflow-y-scroll">
      <h2 className="text-2xl font-bold text-white p-2 tracking-wide mb-6 border-b border-slate-700 pb-3">
        Admin Panel
      </h2>
      <li>
        <Link to={"/deshboared"}>
          <button
            className="flex w-full  items-center gap-3 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <BsPersonFillGear />
              Dashboard
            </span>
          </button>
        </Link>
      </li>
      <span className="border-b border-slate-700  mt-4 block"></span>
      {/* Testimonial */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 1 ? 0 : 1)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium text-[18px]">
              <FaQuoteLeft />
              Testimonial
            </span>
          </button>
          {menuopen == 1 && (
            <ul>
              <li>
                <Link
                  className="block px-3 py-2  rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/testimonial/add"}
                  data-discover="true"
                >
                  Add Testimonial
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/testimonial/view"}
                  data-discover="true"
                >
                  View Testimonials
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* enquriy */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 2 ? 0 : 2)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3  font-medium ">
              <BiData className="text-2xl" />
              Enquiry Data
            </span>
          </button>
          {menuopen == 2 && (
            <ul>

              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/enquiry/view"}
                  data-discover="true"
                >
                  View Enquiry 
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* why choose us */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 3 ? 0 : 3)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium ">
              <BiCheckShield className="text-2xl" />
              Why Choose Us
            </span>
          </button>
          {menuopen == 3 && (
            <ul>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/why-choose-us/add"}
                  data-discover="true"
                >
                  Add Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/why-choose-us/view"}
                  data-discover="true"
                >
                  View Why Choose Us
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* color */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 4 ? 0 : 4)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <IoIosColorPalette className="text-2xl" />
              Color
            </span>
          </button>
          {menuopen == 4 && (
            <ul>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/color/add"}
                  data-discover="true"
                >
                  Add Color
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/color/view"}
                  data-discover="true"
                >
                  View Color
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* material */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 5 ? 0 : 5)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <GiMaterialsScience className="text-2xl" />
              Material
            </span>
          </button>
          {menuopen == 5 && (
            <ul>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/material/add"}
                  data-discover="true"
                >
                  Add Material
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/material/view"}
                  data-discover="true"
                >
                  View Material
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* category */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 6 ? 0 : 6)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <TbTriangleSquareCircle className="text-2xl" />
              Category
            </span>
          </button>
          {menuopen == 6 && (
            <ul>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/category/add"}
                  data-discover="true"
                >
                  Add Category
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 rounded-mdtext-[15px] text-white hover:bg-slate-800"
                  to={"/category/view"}
                  data-discover="true"
                >
                  View Category
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* sub category */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 7 ? 0 : 7)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <MdOutlineDashboard className="text-2xl" />
              Sub Category
            </span>
          </button>
          {menuopen == 7 && (
            <ul>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/sub-category/add"}
                  data-discover="true"
                >
                  Add Sub Category
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/sub-category/view"}
                  data-discover="true"
                >
                  View Sub Category
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* Sub Sub category */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 8 ? 0 : 8)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <BsPersonFillGear className="text-2xl" />
              Sub Sub Category
            </span>
          </button>
          {menuopen == 8 && (
            <ul>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/sub-sub-category/add"}
                  data-discover="true"
                >
                  Add Sub Sub Category
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/sub-sub-category/view"}
                  data-discover="true"
                >
                  View Sub Sub Category
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* product */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 9 ? 0 : 9)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <FiBox className="text-2xl" />
              Product
            </span>
          </button>
          {menuopen == 9 && (
            <ul>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/product/add"}
                  data-discover="true"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                  to={"/product/view"}
                  data-discover="true"
                >
                  View Product
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* Faq */}
      <li className="p-2">
        <Link>
          <button
            onClick={() => setMenuOpen(menuopen == 10 ? 0 : 10)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"
            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <FaQuestion className="text-2xl" />
              FAQ
            </span>
          </button>
          {menuopen == 10 && (
            <ul>
              <li>
                <Link
                  to={"/faq/add"}
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                >
                  faq Add
                </Link>
              </li>
              <li>
                <Link
                  to={"/faq/view"}
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                >
                  faq view
                </Link>
              </li>
            </ul>
          )}
        </Link>
      </li>
      {/* Country */}
      <li className="p-2">
        <div>
          <button
            onClick={() => setMenuOpen(menuopen == 11 ? 0 : 11)}
            className="flex w-full  items-center gap-3 p-2 rounded-lg  text-white transition"

            fdprocessedid="gz413i"
          >
            <span className="flex items-center gap-3 font-medium">
              <MdLocationCity className="text-2xl" />
              Country
            </span>
          </button>
          {menuopen == 11 && (
            <ul>
              <li>
                <Link
                  to={"/country/add"}
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                >
                  Add country
                </Link>
              </li>
              <li>
                <Link
                  to={"/country/view"}
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                >
                  view country
                </Link>
              </li>
            </ul>
          )}
        </div>
      </li>
      {/* Slider */}
      <li className="p-2">
        <div>
          <button
            onClick={() => setMenuOpen(menuopen == 12 ? 0 : 12)}
            className="flex w-full items-center gap-3 p-2 rounded-lg text-white transition hover:bg-slate-800"
          >
            <span className="flex items-center gap-3 font-medium">
              <MdOutlineViewCarousel className="text-2xl" />
              Slider Images
            </span>
          </button>
          {menuopen == 12 && (
            <ul>
              <li>
                <Link
                  to={"/slider/add"}
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                >
                  Add Slider
                </Link>
              </li>
              <li>
                <Link
                  to={"/slider/view"}
                  className="block px-3 py-2 rounded-md text-[15px] text-white hover:bg-slate-800"
                >
                  View Sliders
                </Link>
              </li>
            </ul>
          )}
        </div>
      </li>
    </div>
  );
}

