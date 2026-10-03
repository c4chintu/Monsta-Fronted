import React from "react";
import { BiImageAdd } from "react-icons/bi";

import { MdImageSearch } from "react-icons/md";

export default function AddTestimonial() {
  return (
    <>
      <section className="w-full ">
        <ul className="border-b flex gap-3 text-[18px] items-center  px-5  py-2">
          <li className="hover:text-indigo-500" s>
            Home
          </li>
          <li>/</li>
          <li className="hover:text-indigo-500">Testimonial</li>
          <li>/</li>
          <li className="font-medium">Add Testimonial</li>
        </ul>
        <div className="w-7xl m-auto rounded-[10px] mt-2 shadow-around ">
          <h2 className="bg-[#574CFB] p-2 text-white  rounded-t-[10px] text-2xl ">
            Add New Testimonial
          </h2>
          <div className="px-4 py-6 grid grid-cols-[20%_auto] gap-4 ">
            <div className="">
              <h2 className="font-medium">Image</h2>
              <div className="flex items-center justify-center mx-2 mt-4 h-[250px] rounded-[10px] bg-gray-400">
                <div>
                  <BiImageAdd className="text-8xl" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <form>
              <label  className="block font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Name"
                className="w-full border-[#ccc] p-2 border rounded-[10px] my-3"
              />
              <label  className="block font-medium">
                Massage
              </label>
              <textarea
                name="massage"
                required
                placeholder="Enter Massage"
                className="w-full p-2 my-3 border rounded-[10px] border-[#ccc]"
              
              ></textarea>
              <div className="grid grid-cols-2 gap-3">
                <label  className="font-medium">
                  Rating
                </label>
                <label  className="font-medium">
                  Order
                </label>
                <input
                  type="number"
                  min={1}
                  max={5}
                  required
                  name="Rating"
                  placeholder="Enter Rating Number"
                  className="mt-2 p-2 border border-[#ccc] rounded-[10px] "
                />
                <input
                  type="number"
                  required
                  name="Order"
                  placeholder="Enter Order Number"
                  className="mt-2 p-2 border border-[#ccc] rounded-[10px] "
                />
              </div>
              <div className="flex justify-end ">
                <button
                  type="submit"
                  className="mt-3 cursor-pointer  text-white 
                bg-indigo-600 hover:bg-indigo-700
                focus:ring-4 focus:ring-indigo-300
                font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
