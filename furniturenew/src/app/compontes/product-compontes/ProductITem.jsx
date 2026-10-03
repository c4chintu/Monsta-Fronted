"use client";
import React, { useState } from "react";
import ProductCart from "./ProductCart";

export default function ProductITem({ data }) {
  const [product] = useState(data || []);

  return (
    <section className="max-w-[1320px] mx-auto px-4 py-6 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {product.map((obj, index) => (
          <ProductCart pdata={obj} key={obj.id || index} />
        ))}
      </div>
    </section>
  );
}
