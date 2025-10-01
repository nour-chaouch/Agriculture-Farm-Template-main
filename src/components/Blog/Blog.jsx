import React, { useEffect, useState } from "react";
import "./blog.css";
// import { AiOutlineUser, AiOutlineComment } from "react-icons/ai";
import CompoHeader from "../common/CompoHeader";
import compoheaderimg from "../../images/contactus1.jpg";

import blogData from "./blogdata";
import { useNavigate, useLocation } from "react-router-dom";

import BlogCard from "./BlogCard";
import ButtonSection from "./buttonSection";
const Blog = () => {
  const [BlogData, setBlogData] = useState(blogData[0]);
  const [page, setpage] = useState(1);
  const navigate = useNavigate();
  const handclick1 = () => {
    setBlogData(blogData[0]);
    setpage(1);
  };
  const handclick2 = () => {
    setBlogData(blogData[1]);
    setpage(2);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <CompoHeader name="Blog" image={compoheaderimg} />

      <div
        style={{ rowGap: "2rem", columnGap: "2rem" }}
        className="blog-grid-container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  md:px-8 px-3 py-4 mt-10"
      >
        {BlogData.map((elm) => (
          <BlogCard elm={elm} />
        ))}
      </div>

      <ButtonSection
        page={page}
        handclick1={handclick1}
        handclick2={handclick2}
      />
    </div>
  );
};

export default Blog;
