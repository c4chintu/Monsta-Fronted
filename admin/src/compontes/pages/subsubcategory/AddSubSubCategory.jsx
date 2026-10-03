import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export default function AddSubSubCategory() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;
  let [parnet, setparent] = useState([]);
  let [subparent, setsubparent] = useState([]);
  let [error, seterror] = useState(null);
  let [getEDit, setGetEDit] = useState(null);
  let { id } = useParams();

  let datacreate = (e) => {
    e.preventDefault();

    let formdata = new FormData(e.target);
    axios
      .post(`${apiurl}subsubcategory/create`, formdata)
      .then((res) => res.data)
      .then((finellyRes) => {
        if (finellyRes.status) {
          seterror(null);
          toast.success(finellyRes.message);
        } else {
          seterror(finellyRes.error);
        }
      });
  };
  let getCatparent = () => {
    axios
      .get(`${apiurl}subsubcategory/parent`)
      .then((res) => res.data)
      .then((finellyRes) => {
        setparent(finellyRes.data);
      });
  };

  let getSubCatparent = (event) => {
    let parentId = event.target.value;
    axios
      .get(`${apiurl}subsubcategory/subparent/${parentId}`)
      .then((res) => res.data)
      .then((finellyRes) => {
        setsubparent(finellyRes.data);
      });
  };

  useEffect(() => {
    getCatparent();

    if (id) {
      axios
        .get(`${apiurl}subsubcategory/getEdit/${id}`)
        .then((res) => res.data)
        .then((finallyRes) => {
          setGetEDit(finallyRes.data);
        });
    } else {
      setGetEDit(null);
    }
  }, [id]);
  return (
    <section className="w-full ">
      <ul className="border-b flex gap-3 text-[18px] items-center  px-5  py-2">
        <li className="hover:text-indigo-500">Home</li>
        <li>/</li>
        <li className="hover:text-indigo-500"> Sub Category</li>
        <li>/</li>
        <li className="font-medium">Add Sub Category</li>
      </ul>
      <form
        onSubmit={datacreate}
        className="w-7xl m-auto rounded-[10px] mt-2 shadow-around "
      >
        <h2 className="bg-[#574CFB] p-2 text-white  rounded-t-[10px] text-2xl ">
          Add New Sub Category
        </h2>
        <div className="px-4 py-6 grid grid-cols-[20%_auto] gap-4 ">
          <div className="">
            <h2 className="font-medium">Image</h2>
            <div className="flex mx-2 mt-4 h-[250px] rounded-[10px] bg-gray-400">
              <div className="flex flex-col justify-center items-center text-center p-2">
                <BiImageAdd className="text-8xl" />
                <input type="file" name="image" className="w-full" />
              </div>
            </div>sub-sub-category
          </div>
          <div>
            <label className="block font-medium ">Select Parent Category</label>
            <select
              onChange={getSubCatparent}
              name="parent"
              // id="subCategory"
              className="mt-2 w-full py-3 px-2 border border-[#ccc] rounded-[10px] "
            >
              {" "}
              <option value=""> Select Category </option>
              {parnet.map((obj, index) => {
                return (
                  <option key={index} value={obj._id}>
                    {obj.name}{" "}
                  </option>
                );
              })}
              x
            </select>
            <label className="block font-medium mt-4">
              Select Sub Category
            </label>
            <select
              name="subparent"
              // id="subCategory"
              className="mt-2 w-full py-3 px-2 border border-[#ccc] rounded-[10px] "
            >
              <option value=""> Select Sub Category</option>
              {subparent.map((obj, index) => {
                return (
                  <option key={index} value={obj._id}>
                    {obj.name}
                  </option>
                );
              })}
            </select>
            <label className="block font-medium mt-4">
              Sub Sub Category Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter category name"
              className="my-2 w-full py-3 px-2 border border-[#ccc] rounded-[10px] "
              name="name"
            />

            <label className="block font-medium mt-4">Order</label>
            <input
              type="number"
              className="w-full border-[#ccc] p-2 border rounded-[10px] my-3"
              name="order"
              required
              placeholder="Enter Order Number"
            />
            <div className="flex justify-end ">
              <button
                type="submit"
                className="mt-3 cursor-pointer  text-white 
                    bg-indigo-600 hover:bg-indigo-700
                    focus:ring-4 focus:ring-indigo-300
                    font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all"
              >
                {id ? "update" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
