import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {  toast } from "react-toastify";

export default function AddColor() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;
  let [error, seterror] = useState(null);
  let [getEDit, setGetEDit] = useState(null);
  let { id } = useParams();

  let SaveData = (e) => {
    e.preventDefault();
    let obj = {
      name: e.target.name.value,
      code: e.target.code.value,
      order: e.target.order.value,
    };
    if (id) {
      axios
        .put(`${apiurl}color/update/${id}`, obj)
        .then((res) => res.data)
        .then((finalyRes) => {
          if (finalyRes.status) {
            seterror(null);
            toast.success(finalyRes.message);
            seterror(finalyRes.error);
          } else {
           toast.error(finalyRes.message)
          }
        });
    } else {
      axios
        .post(`${apiurl}color/create`, obj)
        .then((res) => res.data)
        .then((finalyRes) => {
          if (finalyRes.status) {
            seterror(null);
            toast.success(finalyRes.message);
          } else {
            seterror(finalyRes.error);
          }
        });
    }
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${apiurl}color/getEdit/${id}`)
        .then((res) => res.data)
        .then((finalyRes) => {
          setGetEDit(finalyRes.data);
        });
    } else {
      setGetEDit(null);
    }
  }, [id]);

  return (
    <>
      <section className="w-full ">
        <ul className="border-b flex gap-3 text-[18px] items-center  px-5  py-2">
          <li className="hover:text-indigo-500">Home</li>
          <li>/</li>
          <li className="hover:text-indigo-500">Color</li>
          <li>/</li>
          <li className="font-medium">Add Color</li>
        </ul>
        <div className="w-7xl m-auto rounded-[10px] mt-2 shadow-around ">
          <h2 className="bg-[#574CFB] p-2 text-white  rounded-t-[10px] text-2xl ">
            {id ? "Updata color" : "Add color "}
          </h2>
          <div className="px-4 py-6 grid  gap-4 ">
            <form onSubmit={SaveData}>
              <label className="block font-medium">Color Name</label>

              <input
                type="text"
                name="name"
                required
                defaultValue={getEDit?.name}
                placeholder="Enter color name (e.g., Red)"
                className="w-full border-[#ccc] p-2 border rounded-[10px] my-3"
              />
              {error?.name && (
                <span className="text-red-500 font-bold">{error.name}</span>
              )}
              <label className="block font-medium mt-2">Color Code</label>
              <input
                type="text"
                name="code"
                required
                defaultValue={getEDit?.code}
                placeholder="Hex code (e.g., #FF5733)"
                className="w-full border-[#ccc] p-2 border rounded-[10px] my-3"
              />
              {error?.code && (
                <span className="text-red-500 font-bold">{error.code}</span>
              )}
              <div className="grid ">
                <label className="font-medium">Order</label>
                <input
                  type="number"
                  required
                  name="order"
                  defaultValue={getEDit?.order}
                  placeholder="Enter Order Number"
                  className="mt-2 p-2 border border-[#ccc] rounded-[10px] "
                />
                {error?.order && (
                  <span className="text-red-500 font-bold">{error.order}</span>
                )}
              </div>
              <div className="flex justify-end ">
                <button
                  type="submit"
                  className="mt-3 cursor-pointer  text-white 
                   bg-indigo-600 hover:bg-indigo-700
                   focus:ring-4 focus:ring-indigo-300
                   font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all"
                >
                  {id ? "update" : "sumbit"}
                 
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
