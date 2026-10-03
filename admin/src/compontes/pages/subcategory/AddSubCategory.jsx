import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export default function AddSubCategory() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;
  let [parnet, setparent] = useState([]);
  let [error, seterror] = useState(null);
  let [getEDit, setGetEDit] = useState(null);
  let { id } = useParams();

  //  sub category data create
  let saveSUbData = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    // console.log(e.target.file);

    if (id) {
      // let fromData = new FormData(e.target);
      axios
        .put(`${apiurl}subcategory/update/${id}`, fromData)
        .then((res) => res.data)
        .then((finallyRes) => {
          if (finallyRes.status) {
            seterror(null);
            toast.success(finallyRes.message);
            seterror(finallyRes.error);
          } else {
            toast.error(finallyRes.message);
          }
        });
    } else {
      axios
        .post(`${apiurl}subcategory/create`, formData)
        .then((res) => res.data)
        .then((finallyRes) => {
          if (finallyRes.status) {
            seterror(null);
            toast.success(finallyRes.message);
          } else {
            seterror(finallyRes.error);
          }
        });
    }
  };

  let parentget = () => {
    axios
      .get(`${apiurl}subcategory/parent`)
      .then((res) => res.data)
      .then((finallyRes) => {
        setparent(finallyRes.data);
      });
  };

  useEffect(() => {
    parentget();

    if (id) {
      axios
        .get(`${apiurl}subcategory/getEdit/${id}`)
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
        <li className="hover:text-indigo-500" s>
          Home
        </li>
        <li>/</li>
        <li className="hover:text-indigo-500"> Sub Category</li>
        <li>/</li>
        <li className="font-medium">Add Sub Category</li>
      </ul>
      <form
        onSubmit={saveSUbData}
        className="w-7xl m-auto rounded-[10px] mt-2 shadow-around "
      >
        <h2 className="bg-[#574CFB] p-2 text-white  rounded-t-[10px] text-2xl ">
          Add New Sub Category
        </h2>
        <div className="px-4 py-6 grid grid-cols-[20%_auto] gap-4 ">
          <div className="w-full">
            <h2 className="font-medium">Image</h2>
            <div className="flex mx-2 mt-4 h-[250px] rounded-[10px] bg-gray-400">
              <div className="flex flex-col justify-center items-center text-center p-2">
                <BiImageAdd className="text-8xl" />
                <input
                  type="file"
                  name="image"
                  defaultValue={getEDit?.image}
                  className="border w-full text-center "
                />
                {error?.image && (
                  <span className="text-red-500">{error.image}</span>
                )}
              </div>
            </div>
          </div>
          <div>
            <label className="block font-medium">Select Parent Category</label>
            <select
              name="parent"
              id="subCategory"
              defaultValue={getEDit?.parnet }
              className="mt-2 w-full py-3 px-2 border border-[#ccc] rounded-[10px] "
            >
              <option value=""> Select Category </option>
              {parnet.map((obj, index) => {
                return <option  value={obj._id}>{obj.name} </option>;
              })}
            </select>
            <label className="block font-medium mt-2">Sub Category Name</label>
            <input
              type="text"
              required
              defaultValue={getEDit?.name}
              placeholder="Enter category name"
              className="my-2 w-full py-3 px-2 border border-[#ccc] rounded-[10px] "
              name="name"
            />
            {error?.name && <span className="text-red-500">{error.name}</span>}

            <label className="block font-medium">Order</label>
            <input
              type="number"
              className="w-full border-[#ccc] p-2 border rounded-[10px] my-3"
              name="order"
              required
              defaultValue={getEDit?.order}
              placeholder="Enter Order Number"
            />
            {error?.order && (
              <span className="text-red-500">{error.order}</span>
            )}
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
