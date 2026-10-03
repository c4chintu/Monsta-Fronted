import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Links, useParams } from "react-router";

export default function ProductView() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;

  let [page, setpage] = useState(false);
  let [data, setdata] = useState(null);
  let [path, setpath] = useState("");
  let { id } = useParams();

  let getProdutData = () => {
    axios
      .get(`${apiurl}product/details/${id}`)
      .then((res) => res.data)
      .then((finallyRes) => {
        if (finallyRes.status) {
          setdata(finallyRes.data);
          setpath(finallyRes.path);
        }
      });
  };

  useEffect(() => {
    getProdutData();
  }, [id]);

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">
        {data && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 p-8">
              {/* Left Side - Images */}
              <div>
                {/* Main Image */}
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src={path + data.image}
                    alt="Product"
                    className="w-full h-[500px] object-fit-cover"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="flex gap-4 mt-5">
                  {data.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={path + img}
                      className="w-24 h-24 object-fit-cover rounded-lg border cursor-pointer hover:border-black"
                      alt={data.name}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-6">
                {/* Category */}
                Category &nbsp;
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {data.parent.name}
                </span>
                {/* Product Name */}
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="text-yellow-500 text-xl">
                    {" "}
                    {data.subparent.name}
                  </div>
                  <span className="text-gray-500">( Sub Category)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-yellow-500 text-xl">
                    {" "}
                    {data.subsubparent.name}
                  </div>
                  <span className="text-gray-500">(Sub Sub Category)</span>
                </div>
                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-red-600">
                    {data.price}
                  </span>

                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                    22% OFF
                  </span>
                </div>
                {/* Description */}
                <p className="text-gray-600 leading-7">
                  <span className="font-bold"> Short Description -</span>{" "}
                  {data.shortdescription}
                </p>
                <p className="text-gray-600 leading-7">
                  <span className="font-bold"> Long Description -</span>{" "}
                  {data.longdescription}
                </p>
                {/* Color */}
                <span className="font-bold"> Color</span>
                <div className="flex  items-center my-3   gap-2 font-semibold mb-2">
                  {data.color.map((color, index) => (
                    <div
                      key={index}
                      className="flex py-2 px-6  gap-1 border rounded  "
                    >
                      <span
                        className="w-5 h-5 rounded-full border "
                        style={{ backgroundColor: color.code }}
                      ></span>
                      <span className="text-sm text-gray-700">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
                  <span className="font-bold"> Material -</span>
                <div className="flex py-2  items-center mt-2 gap-2 font-semibold mb-2">
                  {data.material.map((material, index) => (
                    <div
                      key={index}
                      className="flex py-2 px-6  gap-1 border rounded  "
                    >
                      <span className="text-sm text-gray-700">
                        {material.name}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Buttons */}
                {/* <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-black text-white py-4 rounded-lg hover:bg-gray-800">
                   <Link to={`/product/edit/`}  >
                   Edit Data
                   </Link>
                  </button>

                  <button className="flex-1 bg-red-600 text-white py-4 rounded-lg hover:bg-red-700">
                    Delete
                  </button>
                </div> */}
                {/* Features */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
