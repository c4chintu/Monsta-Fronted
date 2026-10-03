import HomeBanner from "./compontes/home-comopents/HomeBanner";
import Collection from "./compontes/home-comopents/Collection";
import NewSection from "./compontes/home-comopents/NewSection";
import FreeShop from "./compontes/home-comopents/FreeShop";
import Custumers from "./compontes/home-comopents/Custumers";
import { ProductTabs, getAllProductsApi } from "./api-services/home-api";
import ArivalNew from "./compontes/home-comopents/ArivalNew";

export const metadata = {};

export default async function Home() {
  let productTab;
  let allProducts;
  try {
    productTab = await ProductTabs();
    allProducts = await getAllProductsApi();
  } catch (err) {}

  metadata.title = "Home - E-Commerce - App";
  metadata.description = "Home E-Commerce App for furniture details";
  return (
    <div>
      <HomeBanner />
      <Collection />
      {productTab && (
        <ArivalNew path={productTab?.path} data={productTab?.data} />
      )}

      <NewSection />
      <FreeShop />
      <Custumers initialData={allProducts?.data} initialPath={allProducts?.path} />
    </div>
  );
}
