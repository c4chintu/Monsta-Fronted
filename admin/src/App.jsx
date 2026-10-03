import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./compontes/comman/Layout";
import Login from "./compontes/pages/Login";
import Deshboerd from "./compontes/pages/Deshboerd";
import AddTestimonial from "./compontes/pages/testimonial/AddTestimonial";
import ViewTestimonial from "./compontes/pages/testimonial/ViewTestimonial";
import AddWhoChoose from "./compontes/pages/whoChooseus/AddWhoChoose";
import ViewWhyChoose from "./compontes/pages/whoChooseus/ViewWhyChoose";
import AddMaterial from "./compontes/pages/material/AddMaterial";
import ViewMaterial from "./compontes/pages/material/ViewMaterial";
import AddCategory from "./compontes/pages/category/AddCategory";
import ViewCategory from "./compontes/pages/category/ViewCategory";
import AddSubCategory from "./compontes/pages/subcategory/AddSubCategory";
import ViewSubCategory from "./compontes/pages/subcategory/ViewSubCategory";
import AddSubSubCategory from "./compontes/pages/subsubcategory/AddSubSubCategory";
import ViewSubSubCategory from "./compontes/pages/subsubcategory/ViewSubSubCategory";
import AddProduct from "./compontes/pages/product/AddProduct";
import ViewProduct from "./compontes/pages/product/ViewProduct";
import AddColor from "./compontes/pages/color/AddColor";
import ViewColor from "./compontes/pages/color/ViewColor";
import FaqAdd from "./compontes/pages/Faq/FaqAdd";
import CountryAdd from "./compontes/pages/Country/CountryAdd";
import Viewfaq from "./compontes/pages/Faq/Viewfaq";
import CountryView from "./compontes/pages/Country/CountryView";
import { ToastContainer } from "react-toastify";
import ProductView from "./compontes/pages/product/productDeteail";
import EnquiryView from "./compontes/pages/Enquiry/EnquiryView";
import AddSlider from "./compontes/pages/slider/AddSlider";
import ViewSlider from "./compontes/pages/slider/ViewSlider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/deshboared" element={<Deshboerd />} />
          {/* Testimonial */}
          <Route path="testimonial">
            <Route path="add" element={<AddTestimonial />} />
            <Route path="view" element={<ViewTestimonial />} />
          </Route>
          {/* enquiry */}
          <Route path="enquiry">
            <Route path="view" element={<EnquiryView />} />
          </Route>
          {/* whochooseus */}
          <Route path="why-choose-us">
            <Route path="add" element={<AddWhoChoose />} />
            <Route path="view" element={<ViewWhyChoose />} />
          </Route>
          {/* color */}
          <Route path="color">
            <Route path="add" element={<AddColor />} />
            <Route path="edit/:id" element={<AddColor />} />
            <Route path="view" element={<ViewColor />} />
          </Route>
          {/* Material */}
          <Route path="material">
            <Route path="add" element={<AddMaterial />} />
            <Route path="view" element={<ViewMaterial />} />
          </Route>
          {/* Category */}
          <Route path="category">
            <Route path="add" element={<AddCategory />} />
            <Route path="edit/:id" element={<AddCategory />} />
            <Route path="view" element={<ViewCategory />} />
          </Route>
          {/* Sub Category */}
          <Route path="sub-category">
            <Route path="add" element={<AddSubCategory />} />
            <Route path="edit/:id" element={<AddSubCategory />} />
            <Route path="view" element={<ViewSubCategory />} />
          </Route>
          {/* Sub Sub Category */}
          <Route path="sub-sub-category">
            <Route path="add" element={<AddSubSubCategory />} />
            <Route path="edit/:id" element={<addEventListener />} />
            <Route path="view" element={<ViewSubSubCategory />} />
          </Route>
          {/* Product */}
          <Route path="product">
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<AddProduct />} />
            <Route path="view/:id" element={<ProductView />} />
            <Route path="view" element={<ViewProduct />} />
          </Route>
          {/* faQ */}
          <Route path="faq">
            <Route path="add" element={<FaqAdd />} />
            <Route path="view" element={<Viewfaq />} />
          </Route>
          {/* country */}
          <Route path="country">
            <Route path="add" element={<CountryAdd />} />
            <Route path="view" element={<CountryView />} />
          </Route>
          {/* slider */}
          <Route path="slider">
            <Route path="add" element={<AddSlider />} />
            <Route path="view" element={<ViewSlider />} />
          </Route>
        </Route>


        <Route path={"/"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
