import { getProDeatils } from "@/app/api-services/products-api";

import ProductesDetails from "@/app/compontes/product-compontes/ProductesDetails";
import React from "react";
export const metadata = {};

export default async function ProductsDeatils(req) {
  metadata.title = "ProductDetails";
  let { pid } = await req.params;

  let dataPro = await getProDeatils(pid);

  console.log("dataPro =>", dataPro);

  return (
    <div>
      <ProductesDetails data={dataPro} />
    </div>
  );
}
