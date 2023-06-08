import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Layout from "../component/Layout";
import FilteredProducts from "../component/FilteredProducts/FilteredProducts";
import SingleProduct from "../component/FilteredProducts/SingleProduct";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
        <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
export default PublicRoutes;
