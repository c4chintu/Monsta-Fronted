"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Package, ShoppingBag, ArrowRight } from "lucide-react";

function ThankYouDetails() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "ORD-" + Math.floor(100000 + Math.random() * 900000);
  const total = searchParams.get("total");
  const method = searchParams.get("method") || "cod";

  return (
    <div className="w-full max-w-3xl">
      {/* Success Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Top Success Section */}
        <div className="text-center px-6 py-10 sm:px-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Thank You for Your Order!
          </h1>

          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            Your order has been placed successfully. We’ll send you an email
            confirmation with your order details shortly.
          </p>

          {/* Order Number */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-200 px-5 py-3">
            <span className="text-sm text-gray-500">Order Number:</span>
            <span className="font-semibold text-gray-900">#{orderId}</span>
          </div>
        </div>

        {/* Order Information */}
        <div className="border-t border-gray-100 px-6 py-8 sm:px-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Order Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Order Status */}
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Package className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-semibold text-green-600">Confirmed</p>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-purple-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Payment</p>
                  <p className="font-semibold text-gray-900">
                    {method === "online" ? "Paid Online" : "Cash on Delivery"}
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Package className="h-5 w-5 text-orange-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Estimated Delivery</p>
                  <p className="font-semibold text-gray-900">
                    3–5 Business Days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="mt-8 rounded-xl bg-gray-50 p-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Amount</span>

              <span className="text-2xl font-bold text-gray-900">
                ₹{total ? Number(total).toFixed(2) : "0.00"}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Continue Shopping
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Footer Message */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-5 text-center">
          <p className="text-sm text-gray-500">
            Need help with your order?{" "}
            <Link href="/" className="font-medium text-black hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <Suspense fallback={<div className="text-gray-500">Loading order details...</div>}>
        <ThankYouDetails />
      </Suspense>
    </div>
  );
}


