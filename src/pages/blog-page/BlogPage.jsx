import React from "react";
import BlogSection from "../../components/blog-section/BlogSection";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="blog_page">
          <div className="payment__title">
            <h5>
              <Link to={"/"}>Главная</Link> <span>{">"}</span>
            </h5>
            <h5 className="payment_page_title">Возврат</h5>
          </div>
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
