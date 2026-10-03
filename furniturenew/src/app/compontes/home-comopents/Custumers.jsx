"use client";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartById } from "@/app/slice/cartSlice";
import { toast } from "react-toastify";

export default function Custumers({ initialData, initialPath }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://monsta-backend-production.up.railway.app/web/";
  const baseOrigin = apiUrl.replace(/\/web\/?$/, "");

  const resolvePath = (p) => {
    if (!p || (p.includes("localhost:8000") && !apiUrl.includes("localhost:8000"))) {
      return `${baseOrigin}/uploads/product/`;
    }
    return p;
  };

  const [products, setProducts] = useState(initialData || []);
  const [imagePath, setImagePath] = useState(resolvePath(initialPath));
  const [loading, setLoading] = useState(!initialData || initialData.length === 0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const token = useSelector((myStore) => myStore.userStore?.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialData && initialData.length > 0) {
      setProducts(initialData);
      if (initialPath) setImagePath(resolvePath(initialPath));
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiUrl}home/all-products`);
        if (res.data && res.data.status) {
          setProducts(res.data.data || []);
          if (res.data.path) {
            setImagePath(resolvePath(res.data.path));
          }
        }
      } catch (err) {
        console.error("Error fetching all products for Customers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [initialData, initialPath, apiUrl]);

  const handleAddToCart = (item) => {
    if (!token) {
      toast.warning("please first login");
      return;
    }

    const cartObj = {
      name: item.name,
      image: imagePath + item.image,
      price: item.price,
      qty: 1,
      productId: item._id,
    };

    axios
      .post(`${apiUrl}cart/add-to-cart`, cartObj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(fetchCartById());
        toast.success("Product added to cart!");
      })
      .catch((err) => {
        toast.error("Failed to add to cart");
      });
  };

  const itemsPerPage = 5;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const displayedProducts =
    products.length > itemsPerPage
      ? products.slice(currentIndex, currentIndex + itemsPerPage)
      : products;

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full">
          <h2 className="text-black font-bold text-2xl sm:text-3xl px-3 py-1 whitespace-nowrap">
            Best Products
          </h2>
          <div className="flex-1 h-px bg-gray-300 ml-4"></div>
        </div>

        {products.length > itemsPerPage && (
          <div className="flex gap-3 ml-5 text-3xl text-gray-600 select-none">
            <button
              onClick={handlePrev}
              className="hover:text-orange-500 transition px-2"
              aria-label="Previous Products"
            >
              &lsaquo;
            </button>
            <button
              onClick={handleNext}
              className="hover:text-orange-500 transition px-2"
              aria-label="Next Products"
            >
              &rsaquo;
            </button>
          </div>
        )}
      </div>

      {/* Loading Skeleton */}
      {loading && products.length === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="bg-white rounded shadow-lg p-4 animate-pulse h-80 flex flex-col justify-between"
            >
              <div className="bg-gray-200 h-44 w-full rounded"></div>
              <div className="bg-gray-200 h-4 w-3/4 mx-auto my-2 rounded"></div>
              <div className="bg-gray-200 h-4 w-1/2 mx-auto rounded"></div>
              <div className="bg-gray-200 h-8 w-full mt-4 rounded"></div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && products.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No products found from Compass database.</p>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {displayedProducts.map((item) => {
          const productImg = item.image
            ? `${imagePath}${item.image}`
            : "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60";
          const categoryName =
            typeof item.parent === "object" && item.parent !== null
              ? item.parent.name
              : "Furniture";
          const oldPrice = item.price ? Math.round(item.price * 1.25) : 0;

          return (
            <div
              key={item._id || item.id}
              className="bg-white rounded shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden border border-gray-100"
            >
              <div className="w-full h-48 sm:h-44 overflow-hidden bg-gray-50 flex items-center justify-center">
                <img
                  src={productImg}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60";
                  }}
                />
              </div>

              <div className="p-4 sm:p-5 text-center flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
                    {categoryName}
                  </p>

                  <h3
                    className="font-semibold text-base sm:text-lg mt-2 text-gray-900 line-clamp-1"
                    title={item.name}
                  >
                    {item.name}
                  </h3>
                </div>

                <div>
                  <div className="mt-3 flex justify-center items-center gap-2">
                    {oldPrice > 0 && (
                      <span className="text-gray-400 line-through text-xs sm:text-sm">
                        Rs. {oldPrice.toLocaleString()}
                      </span>
                    )}

                    <span className="text-orange-500 font-bold text-base sm:text-lg">
                      Rs. {Number(item.price || 0).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-2 mt-4">
                    <button
                      className="p-2 sm:px-3 sm:py-2 bg-gray-100 hover:bg-[#C09578] hover:text-white rounded transition"
                      title="Add to Wishlist"
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-gray-100 text-xs sm:text-[14px] px-4 py-2 hover:text-white hover:bg-[#C09578] rounded transition font-medium"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
