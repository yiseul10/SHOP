import React from "react";
import MainSlide from "../components/MainSlide";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Notice />
      <Navbar />
      <MainSlide />
      <Products />
    </div>
  );
};

export default Home;
