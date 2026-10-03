import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router";
import { toast } from "react-toastify";

export default function ViewSubCategory() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;

  let [page, setpage] = useState(false);
  let [data, setdata] = useState([]);
  let [path, setpath] = useState("");
  let [ids, setids] = useState([]);


  let dataget = () => {
    axios
      .get(`${apiurl}subcategory/view`)
      .then((res) => res.data)
      .then((finallyRes) => {
        if (finallyRes.status) {
          setdata(finallyRes.data);
          setpath(finallyRes.path);
        }
      });
  };

  useEffect(() => {
    dataget();
  }, []);

  let changeStatus = () => {
    if (ids.length >= 1) {
      let obj = {
        ids,
      };
      console.log(obj);

      axios
        .post(`${apiurl}subcategory/changeStatus`, obj)
        .then((res) => res.data)
        .then((finalyRes) => {
          if (finalyRes.status) {
            dataget();
            toast.success(finalyRes.message);
            setids([]);
          }
        });
    } else {
      toast.warning("Please Select At least One value");
    }
  };

  let checkvalue = (e) => {
    let checkBoxV = e.target.value;
    if (e.target.checked) {
      setids([...ids, checkBoxV]);
    } else {
      setids(ids.filter((id) => id != checkBoxV));
    }
  };

  let multiDelete = () => {
    if (ids.length >= 1) {
      let obj = {
        ids,
      };
      axios
        .post(`${apiurl}subcategory/multidelete`, obj)
        .then((res) => res.data)
        .then((finallyRes) => {
          if (finallyRes.status) {
            dataget();
            toast.success(finallyRes.message);
            setids([]);
          } else {
            toast.warning("Plese at one value select");
          }
        });
    }
  };

  let allChecked = (e) => {
    if (e.target.checked) {
      let GetALlId = data.map((obj) => obj._id);
      setids(GetALlId);
    } else {
      setids([]);
    }
  };

  return (
    <section className="w-full">
      <ul className="border-b flex gap-3 text-[18px] items-center  px-5  py-2">
        <li className="hover:text-indigo-500">Home</li>
        <li>/</li>
        <li className="hover:text-indigo-500">Sub Category</li>
        <li>/</li>
        <li className="font-medium">View Sub Category</li>
      </ul>
      {/* fitler section */}
      <form
        action=""
        className={` p-4 relative border border-[#ccc] shadow-lg m-4 rounded-[5px] duration-1000 overflow-hidden ${page ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} `}
      >
        <h1 className=" font-medium text-2xl mb-3"> Filter</h1>
        <span
          onClick={() => setpage(false)}
          className="text-3xl absolute top-2 right-3 cursor-pointer"
        >
          &times;
        </span>

        <div className="flex gap-4 ">
          <div className=" ">
            <label htmlFor="" className="block">
              Sub Category Name
            </label>
            <input
              type="text"
              placeholder="Enter Sub Category Name"
              className="border rounded-[5px] mt-2 bg-gray-100 border-[#ccc] p-2"
            />
          </div>
          <div className=" ">
            <label htmlFor="" className="block">
              Parent Category Name
            </label>
            <input
              type="text"
              placeholder="Enter Parent Sub Category Name"
              className="border rounded-[5px] mt-2 bg-gray-100 border-[#ccc] p-2"
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
          <h1 className="font-medium text-4xl">View Sub Category</h1>
          <div className="flex gap-4 ">
            {" "}
            <button
              onClick={() => setpage(true)}
              className="border flex items-center gap-2 bg-[#F1F5F9] rounded-[5px] text-gray-400 py-2 px-4"
            >
              <FiFilter /> Filter
            </button>
            <button
              onClick={multiDelete}
              className="border rounded-[5px] text-white bg-gray-500 py-2 px-4"
            >
              Delete All
            </button>
            <button
              onClick={changeStatus}
              className="border rounded-[5px] text-white bg-gray-500 py-2 px-4"
            >
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
                <input
                  type="checkbox"
                  checked={data.length == ids.length}
                  onChange={allChecked}
                />
                Select
              </th>
              <th className="w-[100px] px-2 py-4">S. No. </th>
              <th className="px-2 py-4">Name</th>
              <th> Parent </th>
              <th className=" px-2 py-4"> Image</th>
              <th className="w-[100px] px-2 py-4">Order</th>
              <th className="w-[100px] px-2 py-4">Status</th>
              <th className="w-[100px] px-2 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length >= 1 ? (
              data.map((obj, index) => {
                return (
                  <tr key={index} className="border-b">
                    <td className="px-2">
                      <input
                        type="checkbox"
                        onChange={checkvalue}
                        value={obj._id}
                        checked={ids.includes(obj._id)}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.parent.name}</td>
                    <td className="py-4 ">
                      <img
                        src={path + obj.image}
                        className="w-[100px] h-[100px]"
                        alt=""
                      />
                    </td>
                    <td>{obj.order}</td>
                    {obj.status ? (
                      <td className="text-green-500">Active</td>
                    ) : (
                      <td className="text-red-600">Deactive</td>
                    )}
                    <td className="text-[24px]">
                      <Link to={`/sub-category/edit/${obj._id}`}>
                        <BiPencil />
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-b">
                <td className="" colSpan={7}>
                  No coloer data Found{" "}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
