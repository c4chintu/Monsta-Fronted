"use client";
import { fetchCartById } from "@/app/slice/cartSlice";
import { logOut } from "@/app/slice/loginSlice";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const { token } = useSelector((myAllstore) => myAllstore.userStore);
  const { cart } = useSelector((myAllstore) => myAllstore.cartStore);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dispatch = useDispatch();

  const userLogOut = () => {
    dispatch(logOut());
    window.location.href = "/login";
  };

  useEffect(() => {
    dispatch(fetchCartById());
  }, [token, dispatch]);

  const cartList = Array.isArray(cart) ? cart : [];
  const cartTotal = cartList.reduce(
    (acc, item) => acc + Number(item.price || 0) * Number(item.qty || 1),
    0
  );

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="text-black bg-white border-b py-2 text-xs sm:text-sm">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
            <div>
              <p>Contact us 24/7 : +91-98745612330 / furniture@gmail.com</p>
            </div>

            <div>
              {token ? (
                <button
                  onClick={userLogOut}
                  className="hover:text-red-500 transition font-medium"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="hover:text-orange-500 transition font-medium"
                >
                  Login / Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full z-50 bg-white sticky top-0 border-b shadow-xs">
        <div className="max-w-[1320px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Left: Hamburger (Mobile) + Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded border border-gray-300 hover:bg-gray-100 text-gray-700 focus:outline-none transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              <figure>
                <Link href={"/"}>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
                    alt="Furniture Logo"
                    className="w-[140px] sm:w-[180px] md:w-[200px] object-contain"
                  />
                </Link>
              </figure>
            </div>

            {/* Desktop Search */}
            <div className="hidden sm:flex flex-1 max-w-[420px] mx-4">
              <form
                action="/product"
                className="flex items-center w-full rounded-[5px] px-3 py-2 border border-[#ccc] focus-within:border-orange-400 transition"
              >
                <input
                  type="text"
                  name="search"
                  placeholder="Search product..."
                  className="w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
                />
                <button type="submit" aria-label="Search">
                  <CiSearch className="text-[20px] text-gray-500 hover:text-orange-500 transition" />
                </button>
              </form>
            </div>

            {/* Right Icons: Wishlist & Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/cartpage"
                className="border border-[#ccc] rounded-[4px] hover:text-amber-600 p-2 text-gray-700 transition"
                title="Wishlist"
              >
                <Heart size={20} />
              </Link>

              <div className="border flex items-center gap-2 sm:gap-3 border-[#ccc] rounded-[4px] p-2 text-sm text-gray-800">
                <Link
                  className="flex items-center gap-1 hover:text-amber-600 transition"
                  href={"/cartpage"}
                >
                  <ShoppingCart size={20} />
                  <span className="bg-red-500 text-white rounded-full text-xs px-1.5 py-0.2 font-semibold">
                    {cartList.length}
                  </span>
                </Link>

                <span className="hidden sm:inline-block h-[18px] border-r border-gray-400"></span>
                <div className="hidden sm:block hover:text-amber-600 text-xs font-semibold whitespace-nowrap">
                  Rs {cartTotal.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3 shadow-lg">
            {/* Mobile Search */}
            <form
              action="/product"
              onSubmit={() => setMobileMenuOpen(false)}
              className="flex items-center w-full rounded-[5px] px-3 py-2 border border-[#ccc] mb-3"
            >
              <input
                type="text"
                name="search"
                placeholder="Search product..."
                className="w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
              />
              <button type="submit" aria-label="Search">
                <CiSearch className="text-[20px] text-gray-500" />
              </button>
            </form>

            <ul className="divide-y divide-gray-100 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/product"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 hover:text-orange-500 transition"
                >
                  Products
                </Link>
              </li>

              {/* Mobile Living */}
              <li>
                <button
                  onClick={() => toggleDropdown("living")}
                  className="w-full flex justify-between items-center py-2.5 hover:text-orange-500 transition text-left"
                >
                  <span>Living</span>
                  <span className="text-xs text-gray-500">
                    {openDropdown === "living" ? "▲" : "▼"}
                  </span>
                </button>
                {openDropdown === "living" && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded text-xs text-gray-700">
                    <p className="font-semibold text-gray-900">Tables</p>
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Side and End Tables
                    </Link>
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Nest Of Tables
                    </Link>
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Coffee Tables
                    </Link>
                    <p className="font-semibold text-gray-900 pt-2">Mirror & Storage</p>
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Wooden Mirrors
                    </Link>
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Living Storage
                    </Link>
                  </div>
                )}
              </li>

              {/* Mobile Sofa */}
              <li>
                <button
                  onClick={() => toggleDropdown("sofa")}
                  className="w-full flex justify-between items-center py-2.5 hover:text-orange-500 transition text-left"
                >
                  <span>Sofa</span>
                  <span className="text-xs text-gray-500">
                    {openDropdown === "sofa" ? "▲" : "▼"}
                  </span>
                </button>
                {openDropdown === "sofa" && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded text-xs text-gray-700">
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Wooden Sofa Cum Bed
                    </Link>
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Sofa Sets
                    </Link>
                    <Link
                      href="/product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Swing Jhula
                    </Link>
                  </div>
                )}
              </li>

              {/* Mobile Pages */}
              <li>
                <button
                  onClick={() => toggleDropdown("pages")}
                  className="w-full flex justify-between items-center py-2.5 hover:text-orange-500 transition text-left"
                >
                  <span>Pages</span>
                  <span className="text-xs text-gray-500">
                    {openDropdown === "pages" ? "▲" : "▼"}
                  </span>
                </button>
                {openDropdown === "pages" && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded text-xs text-gray-700">
                    <Link
                      href="/about-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/cartpage"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Cart
                    </Link>
                    <Link
                      href="/checkout"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-orange-500"
                    >
                      Checkout
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/contect-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 hover:text-orange-500 transition"
                >
                  Contact Us
                </Link>
              </li>

              <li className="pt-2">
                {token ? (
                  <button
                    onClick={() => {
                      userLogOut();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-2 text-red-600 font-semibold"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-orange-500 font-semibold"
                  >
                    Login / Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Bottom Navigation Bar */}
        <div className="hidden md:block sticky top-0 z-40 text-black bg-white shadow-xs border-t">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-center">
              <ul className="flex items-center gap-8 font-medium">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    className="block py-4 text-orange-500 hover:text-orange-600"
                  >
                    Home
                  </Link>
                </li>

                {/* Living Dropdown */}
                <li className="relative group">
                  <button className="py-4 hover:text-orange-500 transition">
                    Living ▼
                  </button>

                  <div className="absolute left-0 top-full hidden group-hover:grid bg-white shadow-xl p-6 min-w-[700px] grid-cols-3 gap-8 z-50 border border-gray-100">
                    <div>
                      <h4 className="font-semibold mb-3">Tables</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Side and End Tables
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Nest Of Tables
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Coffee Table Sets
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Coffee Tables
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Mirror</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Wooden Mirrors
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Living Storage</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Prayer Units
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Display Unit
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Shoe Racks
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Chest Of Drawers
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Bookshelves
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            TV Units
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Sofa Dropdown */}
                <li className="relative group">
                  <button className="py-4 hover:text-orange-500 transition">
                    Sofa ▼
                  </button>

                  <div className="absolute left-0 top-full hidden group-hover:grid bg-white shadow-xl p-6 min-w-[650px] grid-cols-3 gap-8 z-50 border border-gray-100">
                    <div>
                      <h4 className="font-semibold mb-3">Sofa Cum Bed</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Wooden Sofa Cum Bed
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Sofa Sets</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Sofa Cover
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            L Shape Sofa
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            1 Seater Sofa
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            2 Seater Sofa
                          </Link>
                        </li>
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            3 Seater Sofa
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Swing Jhula</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/product" className="hover:text-orange-500">
                            Wooden Jhula
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Pages Dropdown */}
                <li className="relative group">
                  <button className="py-4 hover:text-orange-500 transition">
                    Pages ▼
                  </button>

                  <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg min-w-[220px] py-2 border border-gray-100 z-50">
                    <li>
                      <Link
                        href="/about-us"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 transition"
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/cartpage"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 transition"
                      >
                        Cart
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/checkout"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 transition"
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    href="/contect-us"
                    className="block py-4 hover:text-orange-500 transition"
                  >
                    Contact Us
                  </Link>
                </li>

                {/* Products */}
                <li>
                  <Link
                    href="/product"
                    className="block py-4 hover:text-orange-500 transition"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
