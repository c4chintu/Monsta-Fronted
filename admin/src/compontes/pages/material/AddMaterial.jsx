import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export default function AddMaterial() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;
  let [error, seterror] = useState(null);
  let [getEDit, setGetEDit] = useState(null);
  let { id } = useParams(null);

  let materieAdd=(e)=>{
    e.preventDefault()
    let obj={
      name:e.target.name.value,
      order:e.target.order.value
    }
    axios.post(`${apiurl}materail/create`,obj)
    .then(((res)=>res.data))
    .then((finalRes)=>{
      if(finalRes){
        seterror(null)
        toast.success(finalRes.message)
        seterror(finalRes.error)
      }else{
        toast.error(finalRes.error)
      }
    })

  }
  return (
    <section className="w-full ">
      <ul className="border-b flex gap-3 text-[18px] items-center  px-5  py-2">
        <li className="hover:text-indigo-500" s>
          Home
        </li>
        <li>/</li>
        <li className="hover:text-indigo-500">Color</li>
        <li>/</li>
        <li className="font-medium">Add Material</li>
      </ul>
      <div className="w-7xl m-auto rounded-[10px] mt-2 shadow-around ">
        <h2 className="bg-[#574CFB] p-2 text-white  rounded-t-[10px] text-2xl ">
          Add New Material
        </h2>
        <div className="px-4 py-6 grid  gap-4 ">
          <form onSubmit={materieAdd}>
            <label className="block font-medium">Material Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Material Name"
              className="w-full border-[#ccc] p-2 border rounded-[10px] my-3"
            />
            <div className="grid ">
              <label className="font-medium">Order</label>
              <input
                type="number"
                required
                name="order"
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
  );
}
