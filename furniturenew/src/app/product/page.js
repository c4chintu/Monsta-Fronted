import React from "react";
import ProductITem from "../compontes/product-compontes/ProductITem";
import MainHeading from "../compontes/comman/MainHeading";
import { getproducts } from "../api-services/products-api";
export const metadata = {};

export default async function Product() {
  metadata.title = "Product-Page";
  metadata.description = "product";
  let dataProduct = await getproducts();

  return (
    <div>
      <MainHeading title="Product" />
      <ProductITem data={dataProduct} />
    </div>
  );
}
