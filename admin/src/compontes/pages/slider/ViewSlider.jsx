import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { MdDelete } from "react-icons/md";

export default function ViewSlider() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND || "http://localhost:8000/admin/";
  let [data, setData] = useState([]);
  let [path, setPath] = useState("");
  let [loading, setLoading] = useState(false);

  let getSliders = () => {
    setLoading(true);
    axios
      .get(`${apiurl}slider/view`)
      .then((res) => res.data)
      .then((resData) => {
        setLoading(false);
        if (resData.status) {
          setData(resData.data || []);
          setPath(resData.path || "");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error("Slider fetch error:", err);
      });
  };

  useEffect(() => {
    getSliders();
  }, []);

  let deleteSlider = (id) => {
    if (!window.confirm("Are you sure you want to delete this slider?")) return;
    axios
      .delete(`${apiurl}slider/delete/${id}`)
      .then((res) => res.data)
      .then((resData) => {
        if (resData.status) {
          toast.success("Slider deleted successfully");
          getSliders();
        } else {
          toast.error(resData.message || "Failed to delete slider");
        }
      })
      .catch((err) => {
        toast.error("Error deleting slider");
      });
  };

  let toggleStatus = (id) => {
    axios
      .post(`${apiurl}slider/changeStatus`, { id })
      .then((res) => res.data)
      .then((resData) => {
        if (resData.status) {
          toast.success("Status updated");
          getSliders();
        }
      })
      .catch((err) => {
        toast.error("Error updating status");
      });
  };

  return (
    <section className="w-full">
      <ToastContainer />
      <ul className="border-b flex gap-3 text-[18px] items-center px-5 py-2">
        <li className="hover:text-indigo-500">Home</li>
        <li>/</li>
        <li className="hover:text-indigo-500">Slider</li>
        <li>/</li>
        <li className="font-medium">View Sliders</li>
      </ul>

      <div className="w-7xl m-auto rounded-[10px] mt-4 shadow-around bg-white p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Slider List</h2>
          <Link
            to="/slider/add"
            className="bg-[#574CFB] hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg transition"
          >
            + Add New Slider
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading sliders...</div>
        ) : data.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No sliders found. Click "+ Add New Slider" to add your first slider image.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead className="bg-gray-100 text-gray-700 text-sm font-semibold uppercase">
                <tr>
                  <th className="p-3 border border-gray-200">Sr No</th>
                  <th className="p-3 border border-gray-200">Image</th>
                  <th className="p-3 border border-gray-200">Title</th>
                  <th className="p-3 border border-gray-200">Subtitle</th>
                  <th className="p-3 border border-gray-200">Order</th>
                  <th className="p-3 border border-gray-200">Status</th>
                  <th className="p-3 border border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {data.map((item, index) => (
                  <tr key={item._id || index} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">
                      {index + 1}
                    </td>
                    <td className="p-3 border border-gray-200">
                      <div className="w-24 h-14 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                        <img
                          src={path + item.image}
                          alt={item.title || "Slider"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">
                      {item.title || "—"}
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">
                      {item.subTitle || "—"}
                    </td>
                    <td className="p-3 border border-gray-200 text-center font-semibold">
                      {item.order}
                    </td>
                    <td className="p-3 border border-gray-200">
                      <button
                        onClick={() => toggleStatus(item._id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-red-100 text-red-700 hover:bg-red-200"
                        }`}
                      >
                        {item.status ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="p-3 border border-gray-200">
                      <button
                        onClick={() => deleteSlider(item._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <MdDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
