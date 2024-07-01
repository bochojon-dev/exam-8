import React from "react";
import Hero from "../../components/hero/Hero";
import Katalog from "../../components/katalog/Katalog";
import Company from "../../components/company/Company";
import Brand from "../../components/brand/Brand";
import BlogSection from "../../components/blog-section/BlogSection";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
// import Products from "../../components/products/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <Katalog />
      <Company />
      <Products />
      <Brand />
      <BlogSection />
    </>
  );
};

export default Home;
