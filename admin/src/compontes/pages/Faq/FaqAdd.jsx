import React from "react";

export default function FaqAdd() {
  return (
    <>
      <section className="w-full ">
        <ul className="border-b flex gap-3 text-[18px] items-center  px-5  py-2">
          <li className="hover:text-indigo-500" s>
            Home
          </li>
          <li>/</li>
          <li className="hover:text-indigo-500">Faq</li>
          <li>/</li>
          <li className="font-medium">Add Faq</li>
        </ul>
        <div className="w-7xl m-auto rounded-[10px] mt-2 shadow-around ">
          <h2 className="bg-[#574CFB] p-2 text-white  rounded-t-[10px] text-2xl ">
            Add New Faq
          </h2>
          <div className="px-4 py-6 grid  gap-4 ">
            <form>
              <label className="block font-medium">Faq </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Faq quetion (e.g.,what is your fav color)"
                className="w-full border-[#ccc] p-2 border rounded-[10px] my-3"
              />
              <label className="block font-medium">Answer</label>
              <textarea
                name="massage"
                required
                placeholder="Enter Answer"
                className="w-full p-2 my-3 border rounded-[10px] border-[#ccc]"
              ></textarea>
              <div className="grid ">
                <label className="font-medium">Order</label>
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
