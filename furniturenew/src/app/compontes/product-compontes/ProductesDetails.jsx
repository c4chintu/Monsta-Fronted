import React from "react";

export default function ProductesDetails({ data }) {
  let { description, title, images, thumbnail, price, stock, rating } = data;

  console.log("this is data  ", description);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <div className="overflow-hidden rounded-xl border">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <img
              src={images}
              className="w-20 h-20 object-cover border rounded-lg cursor-pointer hover:border-black"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {stock}
          </span>

          <h1 className="text-4xl font-bold mt-4">{title}</h1>

          <div className="flex items-center gap-3 mt-3">
            <div className="flex text-yellow-400 text-lg">{rating}</div>
            <span className="text-gray-500">(120 Reviews)</span>
          </div>

          <div className="flex items-center gap-4 mt-5">
            <span className="text-3xl font-bold text-red-600">Rs {price}</span>
            <span className="text-gray-400 line-through text-xl">
              Rs {price}
            </span>
            {/* <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
              {discountPercentage}
            </span> */}
          </div>

          <p className="text-gray-600 mt-5 leading-7">{description}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-black text-white py-4 rounded-lg hover:bg-gray-800">
              Add To Cart
            </button>

            <button className="flex-1 bg-red-500 text-white py-4 rounded-lg hover:bg-red-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
