"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { fetchCartById } from "../slice/cartSlice";

import axios from "axios";

export default function CheckoutPage() {
  let cart = useSelector((myAllstore) => myAllstore.cartStore.cart);

  let token = useSelector((myAllstore) => myAllstore.userStore.token);
  let dispatch = useDispatch();
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let [form, setform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  let [message, setmessge] = useState("");
  let [payment, setPayment] = useState("cod");

  let subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);

  function updateField(event) {
    setform({ ...form, [event.target.name]: event.target.value });
  }

  function orderplace() {
    if (!cart.length) {
      setmessge("Cart is empty hai. Add first producted...");
      return;
    }

    let orderObj = {
      item: cart.map((item) => ({
        image: item.image,
        name: item.name,
        price: item.price,
        qty: item.qty,
      })),
      totalAmount: subtotal,
      shippingAddress: form,
      paymentMethod: payment,
    };

    try {
      axios
        .post(`${apiUrl}order/save-order`, orderObj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data.status) {
            toast.success(response.data.message);
            dispatch(fetchCartById());
          }
        });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          <p className="text-gray-500 mt-2">
            Complete your order by filling in your details.
          </p>
        </div>
        {message && (
          <div
            className="p-4 mb-4 text-sm text-red-400 rounded-[10px] bg-red-100"
            role="alert"
          >
            <span className="font-medium">Note :- </span>
            {message}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Billing Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstname"
                      value={form.firstname}
                      onChange={updateField}
                      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C1916A] outline-none"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastname"
                      value={form.lastname}
                      onChange={updateField}
                      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C1916A] outline-none"
                      placeholder="last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C1916A] outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C1916A] outline-none"
                    placeholder="Enter your number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Address
                  </label>

                  <textarea
                    rows={4}
                    name="address"
                    value={form.address}
                    onChange={updateField}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C1916A] outline-none"
                    placeholder="Enter your full address"
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={form.city}
                      onChange={updateField}
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      placeholder="Enter your state"
                      value={form.state}
                      onChange={updateField}
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      ZIP Code
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter your pincode"
                      value={form.pincode}
                      onChange={updateField}
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>
                </div>

                {/* Payment */}
                <div className="pt-5">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

                  <div className="space-y-3">
                    {[
                      ["cod", "Cash on Delivery"],
                      ["online", "UPI / Google Pay / PhonePe"],
                    ].map(([value, label]) => (
                      <label
                        key={value}
                        className="flex gap-4 items-center border rounded-lg p-4 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={payment === value}
                          onChange={() => setPayment(value)}
                          className="mt-1"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                {cart.length ? (
                  cart.map((item) => (
                    <div key={item._id} className="flex justify-between">
                      <span>
                        {item.name} × {item.qty}
                      </span>
                      <span>₹{(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))
                ) : (
                  <div>No products in cart</div>
                )}

                <hr />

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹Free</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={orderplace}
                className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition"
              >
                {payment === "cod" ? "Place Order" : "Continue To Payment"}
              </button>

              <Link
                href="/cartpage"
                className="block text-center mt-4 text-[#C1916A] hover:underline"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
