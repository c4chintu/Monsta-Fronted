import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

export default function ViewTestimonial() {
  let [page, setpage] = useState(false);
  return (
    <>
      <section className="w-full">
        <ul className="border-b flex gap-3 text-[18px] items-center  px-5  py-2">
          <li className="hover:text-indigo-500" s>
            Home
          </li>
          <li>/</li>
          <li className="hover:text-indigo-500">Testimonial</li>
          <li>/</li>
          <li className="font-medium">View Testimonial</li>
        </ul>
        {/* fitler section */}
        <form
          action=""
          className={`p-4 relative border border-[#ccc] shadow-lg m-4 rounded-[5px] transition-all duration-1000 overflow-hidden ${page ? "max-h-[500px] opacity-100":"max-h-0 opacity-0"} `}
        >
          <h1 className=" font-medium text-2xl mb-3"> Filter</h1>
          <span onClick={()=>setpage(false)} className="text-3xl absolute top-2 right-3 cursor-pointer">
            &times;
          </span>

          <div className="flex gap-4 ">
            <div className=" ">
              <label htmlFor="" className="block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="border rounded-[5px] mt-2 bg-gray-100 border-[#ccc] p-2"
                s
              />
            </div>
            <div className=" gap-2">
              <label htmlFor="" className="block">
                Rating
              </label>
              <input
                type="number"
                min={1}
                max={5}
                placeholder="Enter"
                className="border  rounded-[5px] mt-2 bg-gray-100 border-[#ccc] p-2"
              />
            </div>
          </div>
          <div className="flex gap-4  mt-4">
            <button className=" rounded-[5px] border py-2 px-4  text-white bg-gray-500 hover:bg-gray-300">
              {" "}
              Clear
            </button>
            <button className=" rounded-[5px] border py-2 px-4 text-white bg-blue-500 hover:bg-blue-300">
              {" "}
              Apply
            </button>
          </div>
        </form>
        {/* Table data */}
        <div className="max-w-7xl m-auto border border-[#ccc] rounded-t-[5px] bg-[#F1F5F9]">
          <div className="p-2 flex items-center justify-between">
            <h1 className="font-medium text-4xl">View Testimonials</h1>
            <div className="flex gap-4 ">
              {" "}
              <button onClick={()=>setpage(true)} className="border flex items-center gap-2 bg-[#F1F5F9] rounded-[5px] text-gray-400 py-2 px-4">
                <FiFilter /> Filter
              </button>
              <button className="border rounded-[5px] text-white bg-gray-500 py-2 px-4">
                Delete All
              </button>
              <button className="border rounded-[5px] text-white bg-gray-500 py-2 px-4">
                Change Status
              </button>{" "}
            </div>
          </div>
        </div>
        {/* tabel */}
        <div className="overflow-x-auto max-w-7xl border border-[#ccc] m-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b ">
                <th className="w-[100px] px-2 py-4">
                  <input type="checkbox" />
                  Select
                </th>
                <th className="w-[100px] px-2 py-4">S. No. </th>
                <th className="w-[100px] px-2 py-4">Name</th>
                <th className=" px-2 py-4">Message</th>
                <th className="w-[100px] px-2 py-4">Rating </th>
                <th className="w-[100px] px-2 py-4"> Image</th>
                <th className="w-[100px] px-2 py-4">Order</th>
                <th className="w-[100px] px-2 py-4">Status</th>
                <th className="w-[100px] px-2 py-4">Action</th>
              </tr>
            </thead>
            <tbody >
              <tr className="border-b">
                <td className="px-2"><input type="checkbox" />
                </td>
                <td>1</td>
                <td>red</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>5</td>
                <td className="py-4"><img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fimages%2Fhome-images%2Fjaipur-center.png&w=256&q=75" className="w-[50px]" alt="" /></td>
                <td>1</td>
                <td>Active</td>
                <td className="text-[24px]"><BiPencil/></td>
              </tr>
              <tr className="border-b">
                <td className="px-2"><input type="checkbox" />
                </td>
                <td>1</td>
                <td>red</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>5</td>
                <td className="py-4"><img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fimages%2Fhome-images%2Fjaipur-center.png&w=256&q=75" className="w-[50px]" alt="" /></td>
                <td>1</td>
                <td>Inactive</td>
                <td className="text-[24px]"><BiPencil/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
