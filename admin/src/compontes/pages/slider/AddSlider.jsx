import axios from "axios";
import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";

export default function AddSlider() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND || "http://localhost:8000/admin/";
  let [preview, setPreview] = useState(null);
  let [loading, setLoading] = useState(false);

  let handleImageChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  let sliderSave = (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData(e.target);

    axios
      .post(`${apiurl}slider/create`, formData)
      .then((res) => res.data)
      .then((resData) => {
        setLoading(false);
        if (resData.status) {
          toast.success(resData.message || "Slider added successfully");
          e.target.reset();
          setPreview(null);
        } else {
          toast.error(resData.message || "Failed to add slider");
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response?.data?.message || "Error adding slider");
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
        <li className="font-medium">Add Slider</li>
      </ul>

      <form
        onSubmit={sliderSave}
        className="w-7xl m-auto rounded-[10px] mt-4 shadow-around bg-white overflow-hidden"
      >
        <h2 className="bg-[#574CFB] p-3 text-white rounded-t-[10px] text-2xl font-medium">
          Add New Slider
        </h2>

        <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-[25%_auto] gap-8">
          {/* Image Upload Box */}
          <div className="w-full flex flex-col items-center">
            <label className="block text-gray-700 font-medium mb-2 text-center">
              Slider Image *
            </label>
            <div className="relative border-2 border-dashed border-gray-300 rounded-xl w-full h-[220px] flex flex-col items-center justify-center overflow-hidden hover:border-indigo-500 transition cursor-pointer">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                  <BiImageAdd className="text-5xl mb-2 text-indigo-500" />
                  <span className="text-sm font-medium text-gray-600">
                    Click to choose image
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    PNG, JPG, WEBP (Wide recommended)
                  </span>
                </div>
              )}
              <input
                type="file"
                name="image"
                required
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Slider Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Modern Wooden Furniture Collection"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subtitle / Description
              </label>
              <input
                type="text"
                name="subTitle"
                placeholder="e.g. Up to 40% off on all living sets"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Display Order
              </label>
              <input
                type="number"
                name="order"
                defaultValue={1}
                placeholder="Display Order (1, 2, 3...)"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#574CFB] hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-lg transition shadow-md"
              >
                {loading ? "Uploading..." : "Save Slider"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
