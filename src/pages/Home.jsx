import React from "react";
import MainSlide from "../components/MainSlide";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Notice />
      <Navbar />
      <MainSlide />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
