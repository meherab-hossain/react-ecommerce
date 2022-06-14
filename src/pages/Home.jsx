import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Newsletter from "../components/Newsletter";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
    </div>
  );
};

export default Home;
