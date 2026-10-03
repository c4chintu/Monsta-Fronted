"use client";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchCartById } from "../slice/cartSlice";
import { toast, ToastContainer } from "react-toastify";

export default function CartPage() {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let dispatch = useDispatch();
  let token = useSelector((myAllStore) => myAllStore.userStore.token);
  // api ka kam slice kai ander se call ho raha hai...
  let { cart } = useSelector((myAllStore) => myAllStore.cartStore);

  let deleteCartIiem = (id) => {
    axios
      .delete(`${apiUrl}cart/remove-cart/${id}`)
      .then((res) => res.data)
      .then((finalyRes) => {
        if (finalyRes.status) {
          toast.success(finalyRes.message);
          dispatch(fetchCartById());
        }
      });
  };

  let cartTotal = cart.reduce((total, obj) => total + obj.price * obj.qty, 0);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>

          <Link
            href="/product"
            className="text-[#C1916A] font-medium hover:underline"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Item */}
            {cart.map((obj, index) => (
              <CartITemRow
                key={index}
                obj={obj}
                index={index}
                deleteCartIiem={deleteCartIiem}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              {/* Coupon */}
              <div className="flex mb-6">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 border rounded-l-lg px-4 py-3 outline-none"
                />

                <button className="bg-[#C1916A] text-white px-5 rounded-r-lg ">
                  Apply
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition">
                <Link href={"/checkout"}>Proceed to Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartITemRow({ obj, index, deleteCartIiem }) {
  let dispatch = useDispatch();
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let changeqty = (type) => {
    let id = obj._id;

    let finalQty = obj.qty;

    if (type == "+" && obj.qty < 10) {
      finalQty = obj.qty + 1;
    } else if (type == "-" && obj.qty > 1) {
      finalQty = obj.qty - 1;
    }
    axios
      .put(`${apiUrl}cart/changeQty/${id}`, { qty: finalQty })
      .then((res) => res.data)
      .then((finalyRes) => {
        if (finalyRes.status) {
          toast.success(finalyRes.message);
          dispatch(fetchCartById());
        }
      });
  };
  return (
    <div
      key={index._id}
      className="bg-white rounded-xl shadow-sm p-5 flex flex-col md:flex-row gap-5"
    >
      {/* Product Image */}
      <div className="w-36 h-36 relative rounded-lg overflow-hidden bg-gray-100">
        <img src={obj.image} />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold">{obj.name}</h2>
          <p className="text-2xl font-bold text-amber-500 mt-3">{obj.price}</p>
        </div>

        <div className="flex items-center justify-between mt-5">
          {/* Quantity */}
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => changeqty("-")}
              className="p-3 text-[18px] font-bold hover:bg-gray-100"
            >
              -
            </button>

            <span className="px-5 font-semibold">{obj.qty}</span>

            <button
              onClick={() => changeqty("+")}
              className="p-3 text-[18px] hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={() => deleteCartIiem(obj._id)}
            className="flex items-center gap-2 text-red-500 hover:text-red-600"
          >
            <Trash2 size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
