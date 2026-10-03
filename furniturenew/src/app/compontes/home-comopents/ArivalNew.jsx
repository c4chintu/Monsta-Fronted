"use client";
import { fetchCartById } from "@/app/slice/cartSlice";
import axios from "axios";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

export default function ArivalNew({ path, data }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://monsta-backend-production.up.railway.app/web/";
  const baseOrigin = apiUrl.replace(/\/web\/?$/, "");
  const resolvedPath =
    !path || (path.includes("localhost:8000") && !apiUrl.includes("localhost:8000"))
      ? `${baseOrigin}/uploads/product/`
      : path;

  let [pathImage, setImagepath] = useState(resolvedPath);
  let [Prodata, setProdata] = useState(data || []);

  const [activeTab, setActiveTab] = useState("Featured");

  const tabs = ["Featured", "New Arrivals", "Onsale"];

  // Tab filter: 1 = Featured, 2 = New Arrivals, 3 = Onsale
  let filteredProducts = Prodata.filter((obj) => {
    if (activeTab === "Featured") return obj.productType == 1;
    if (activeTab === "New Arrivals") return obj.productType == 2;
    if (activeTab === "Onsale") return obj.productType == 3;
    return true;
  });

  return (
    <section className="max-w-[1320px] w-full m-auto bg-white py-12 px-4">
      <ToastContainer />
      <div className="mx-auto max-w-[1650px] px-2 sm:px-5">
        {/* Tabs */}
        <div className="mb-10 flex justify-center overflow-x-auto">
          <div className="flex border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`min-w-[120px] sm:min-w-[170px] border-r border-gray-200 px-4 sm:px-8 py-3 sm:py-4 text-[18px] sm:text-[24px] font-semibold transition last:border-r-0
                  ${
                    activeTab === tab
                      ? "border-[#c99270] bg-white text-[#c99270] outline outline-1 outline-[#c99270] -outline-offset-1"
                      : "text-gray-900 hover:text-[#c99270]"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((obj, index) => (
            <ProdDataDiv key={obj._id || index} path={pathImage} productData={obj} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProdDataDiv({ path, productData }) {
  let token = useSelector((myStore) => myStore.userStore.token);
  let cartId = useSelector((myStore) => myStore.cartStore.cart) || [];
  let dispatch = useDispatch();

  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let [loading, setloading] = useState(false);

  let cartItemAdd = () => {
    if (token) {
      let cartObj = {
        name: productData.name,
        image: path + productData.image,
        price: productData.price,
        qty: 1,
        productId: productData._id,
      };
      axios
        .post(`${apiUrl}cart/add-to-cart`, cartObj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
        .then((finlyRes) => {
          console.log(finlyRes);
          dispatch(fetchCartById());
          toast.success("Product added to cart!");
        });
    } else {
      toast.warning("please first login");
    }
  };

  let checkMyProductinCart = cartId.find((obj) => obj.productId == productData._id);

  return (
    <div className="w-full max-w-[380px] m-auto overflow-hidden rounded-md bg-white shadow-[0_2px_15px_rgba(0,0,0,0.15)]">
      {/* Product Image */}
      <div className="h-[240px] w-full overflow-hidden">
        <img
          src={path + productData.image}
          alt={productData.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Content */}
      <div className="text-center p-2">
        {/* Category */}
        <p className="mt-4 text-[17px] font-normal text-gray-700">
          {productData.parent?.name || "Furniture"}
        </p>

        {/* Product Name */}
        <h2 className="mt-4 font-serif text-[20px] font-bold text-gray-900 px-2 line-clamp-1">
          {productData.name}
        </h2>

        {/* Divider */}
        <div className="mt-5 border-t border-gray-200"></div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="text-[20px] font-semibold text-[#bd8b70]">
            Rs.{productData.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="mb-9 mt-6 flex justify-center gap-1">
          {/* Wishlist */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center bg-gray-100 text-gray-900 hover:bg-[#b3805b]"
          >
            <Heart />
          </button>

          {/* Add To Cart */}
          {checkMyProductinCart ? (
            <button className="h-11 min-w-[128px] bg-[#8f1818] text-white px-6 text-[16px] transition-colors duration-300 hover:bg-[#c09578]">
              In Cart
            </button>
          ) : (
            <button
              onClick={cartItemAdd}
              type="button"
              className="h-11 min-w-[128px] bg-[#f3f3f3] px-6 text-[16px] text-[#4a4a4a] transition-colors duration-300 hover:bg-[#c09578] hover:text-white"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
