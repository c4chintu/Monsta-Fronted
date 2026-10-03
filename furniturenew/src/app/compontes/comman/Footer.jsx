"use client";
import React from "react";
import { BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="w-full">
        <div className="max-w-[1320px] py-12 sm:py-16 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact  div */}
          <div className="text-[#717171]">
            <h3 className="font-medium text-black py-3 text-2xl">Contact Us</h3>
            <p className="my-2 text-[14px]">
              Address: Claritas est etiam processus dynamicus
            </p>
            <p className="my-3 text-[14px]">
              Phone: <a href="tel:98745612330">98745612330</a>
            </p>
            <p className="my-3 text-[14px]">
              Email: <a href="email:furniture@gmail.com">furniture@gmail.com</a>
            </p>
            <ul className="flex gap-3 items-center pt-3 font-normal text-2xl my-2">
              <li>
                <a href="https://instagram.com" target="_blank">
                  < BsInstagram/>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <FaSquareFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank">
                  <BsTwitter/>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank">
                  <BsYoutube />
                </a>
              </li>
              <li>
                <a href="https://telegram.com" target="_blank">
                  <BsTelegram />
                </a>
              </li>
            </ul>
          </div>
          {/* Information div */}
          <div className="text-[#717171]">
            <h3 className="font-medium text-black py-3 text-2xl">
              Information
            </h3>
            <ul>
              <li className="my-3 text-[14px]">
                <a href="/about-us">About Us</a>
              </li>
              <li className="my-3 text-[14px]">
                <a href="/contect-us">Contact Us</a>
              </li>

              <li className="my-3 text-[14px]">
                <a href="#">Frequently Questions</a>
              </li>
            </ul>
          </div>
          {/* Account div */}
          <div className="text-[#717171]">
            <h3 className="font-medium text-black py-3 text-2xl">My Account</h3>
            <ul>
              <li className="my-3 text-[14px]">
                <a href="/">My Dashboard</a>
              </li>
              <li className="my-3 text-[14px]">
                <a href="#">Wishlist</a>
              </li>
              <li className="my-3 text-[14px]">
                <a href="/cartpage">Cart</a>
              </li>
              <li className="my-3 text-[14px]">
                <a href="/checkout">Checkout</a>
              </li>
            </ul>
          </div>
          {/* Products div */}
          <div className="text-[#717171]">
            <div className="bg-white">
              <h3 className="text-xl font-semibold text-black my-3" >
                Top Rated Products
              </h3>

              <div className="space-y-4">
                {/* Product 1 */}
                <div className="flex gap-4">
                  <div className="w-24 h-24 overflow-hidden rounded-md border">
                    <img
                      src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg"
                      alt="Dorian Shoe Rack"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-gray-500">Display Unit</span>

                    <h3 className="font-medium text-gray-800 mt-1 hover:text-blue-600">
                      <a href="/product-details/dorian-shoe-rack">
                        Dorian Shoe Rack
                      </a>
                    </h3>

                    <div className="mt-2">
                      <span className="text-gray-400 line-through mr-2">
                        Rs. 3,500
                      </span>

                      <span className="text-red-600 font-semibold">
                        Rs. 2,800
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="flex gap-4">
                  <div className="w-24 h-24 overflow-hidden rounded-md border">
                    <img
                      src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg"
                      alt="Isaac Chest of Drawer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-gray-500">
                      Chest Of Drawers
                    </span>

                    <h3 className="font-medium text-gray-800 mt-1 hover:text-blue-600">
                      <a href="/product-details/isaac-chest-of-drawer">
                        Isaac Chest of Drawer
                      </a>
                    </h3>

                    <div className="mt-2">
                      <span className="text-gray-400 line-through mr-2">
                        Rs. 32,000
                      </span>

                      <span className="text-red-600 font-semibold">
                        Rs. 25,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="py-4 border-t border-b max-w-[1320px] m-auto border-[#ccc] m-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
            <li>
              <a
                href="/"
                className="hover:text-blue-600 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/online-store"
                className="hover:text-blue-600 transition duration-300"
              >
                Online Store
              </a>
            </li>

            <li>
              <a
                href="/privacy-policy"
                className="hover:text-blue-600 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="/term-of-use"
                className="hover:text-blue-600 transition duration-300"
              >
                Terms Of Use
              </a>
            </li>
          </ul>
        </div>
        <div className=" py-6">
          <div className="max-w-[1320px] flex justify-center m-auto px-4">
            <div className="">
              <p className="text-sm text-gray-600 text-center">
                All Rights Reserved By Furniture | © 2026
              </p>

              <img
                src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
                alt="Payment Methods"
                className="h-8 my-4 object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
