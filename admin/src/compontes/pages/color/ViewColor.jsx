import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export default function ViewColor() {
  let [page, setpage] = useState(false);
  let apiurl = import.meta.env.VITE_APIURLBACKEND;
  let [data, setdata] = useState([]);
  let [ids, setIds] = useState([]);
  let [searchname, setsearchname] = useState("");
  let [searchOrder, setSearchOrder] = useState("");

  // table mai data dikhne ka kam
  let getcolor = () => {
   
    let searchObj = {
      name: searchname,
      order: searchOrder,
    };

    axios
      .get(`${apiurl}color/view`, {
        params: searchObj,
      })
      .then((res) => res.data)
      .then((finalyRes) => {
        console.log(finalyRes);
        if (finalyRes.status) {
          setdata(finalyRes.data);
        }
      });
  };

  useEffect(() => {
    getcolor();
  }, []);

  // checked box kai data ko select kr raha hai....

  let CheckValue = (e) => {
    let valueBoxChenked = e.target.value;
    if (e.target.checked) {
      setIds([...ids, valueBoxChenked]);
    } else {
      setIds(ids.filter((id) => id != valueBoxChenked));
    }
  };

  // data ko ek ya bluck mai delete karne kai liyeee...
  let multiDelete = () => {
    if (ids.length >= 1) {
      let obj = {
        ids,
      };
      axios
        .post(`${apiurl}color/multidelete`, obj)
        .then((res) => res.data)
        .then((finalyRes) => {
          if (finalyRes.status) {
            getcolor();
            toast.success(finalyRes.message);
            
          }
        });
    } else {
      toast("Please Select At least One value");
    }
  };

  // status ko true /or false mai convert krna kai fun()
  let changeStatus = () => {
    if (ids.length >= 1) {
      let obj = {
        ids,
      };
      axios
        .post(`${apiurl}color/changeStatus`, obj)
        .then((res) => res.data)
        .then((finalyRes) => {
          if (finalyRes.status) {
            getcolor();
            toast.success(finalyRes.message);
            setIds([]);
          }
        });
    } else {
      toast.warning("Please Select At least One value");
    }
  };

  // sbhi chekebox ko ek sath select krna kai fun ()
  let allChecked = (e) => {
    if (e.target.checked) {
      let GetALlId = data.map((obj) => obj._id);
      setIds(GetALlId);
    } else {
      setIds([]);
    }
  };

  return (
    <section className="w-full">
      <ul className="border-b flex gap-3 text-[18px] items-center  px-5  py-2">
        <li className="hover:text-indigo-500" s>
          Home
        </li>
        <li>/</li>
        <li className="hover:text-indigo-500">Color</li>
        <li>/</li>
        <li className="font-medium">View Color</li>
      </ul>
      {/* fitler section */}
      <form
        onSubmit={getcolor}
        action=""
        className={`p-4 relative border border-[#ccc] shadow-lg m-4 rounded-[5px] transition-all duration-1000 overflow-hidden ${page ? "show" : "hidden"} `}
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
              Name
            </label>
            <input
              type="text"
              value={searchname}
              onChange={(e) => setsearchname(e.target.value)}
              placeholder="Enter Name"
              className="border rounded-[5px] mt-2 bg-gray-100 border-[#ccc] p-2"
            />
          </div>
          <div className=" ">
            <label htmlFor="" className="block">
              order
            </label>
            <input
              type="number"
              value={searchOrder}
              onChange={(e) => setSearchOrder(e.target.value)}
              placeholder="Enter Name"
              className="border rounded-[5px] mt-2 bg-gray-100 border-[#ccc] p-2"
            />
          </div>
        </div>

        <div className="flex gap-4  mt-4">
          <button
            onClick={getcolor}
            className=" rounded-[5px] border py-2 px-4 text-white bg-blue-500 hover:bg-blue-300"
          >
            Search
          </button>
          <button
            onClick={() => {
              setsearchname("");
              setSearchOrder("");
              getcolor();
            }}
            className=" rounded-[5px] border py-2 px-4  text-white bg-gray-500 hover:bg-gray-300"
          >
            {" "}
            Clear
          </button>
        </div>
      </form>
      {/* Table data */}
      <div className="max-w-7xl mt-5 m-auto border border-[#ccc] rounded-t-[5px] bg-[#F1F5F9]">
        <div className="p-2 flex items-center justify-between">
          <h1 className="font-medium text-4xl">View Color</h1>
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
              Delete selected
              <ToastContainer className="text-[18px]" />
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
      <div className="overflow-x-auto max-w-7xl border border-[#ccc] m-auto h-[500px] overflow-y-scroll">
        <table className="w-full text-left ">
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
              <th className=" px-2 py-4">Name</th>
              <th className="w-[100px] px-2 py-4"> Color Code</th>
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
                        onChange={CheckValue}
                        value={obj._id}
                        checked={ids.includes(obj._id)}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{obj.name}</td>

                    <td className="py-4">{obj.code}</td>
                    <td>{obj.order}</td>
                    {obj.status ? (
                      <td className="text-green-500">Active</td>
                    ) : (
                      <td className="text-red-600">Deactive</td>
                    )}

                    <td className="text-[24px]">
                      <Link to={`/color/edit/${obj._id}`}>
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
