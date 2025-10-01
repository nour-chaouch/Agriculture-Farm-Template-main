import React from "react";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineUser, AiOutlineComment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const BlogCard = ({ elm }) => {
  const navigate = useNavigate();
  return (
    <div
      className="blog-grid-box md:h-[62vh] h-[50vh]"
      onClick={() => navigate(`/blogDetail/${elm.id}`)}
    >
      <div className="rounded-lg relative overflow-hidden md:h-[69%] h-[69%]  ">
        <img src={elm.imageUrl} alt="" className="w-full h-full" />
        <p className="absolute top-3 left-3 bg-white py-2 px-2">{elm.date}</p>
      </div>

      <div className="flex flex-col gap-3 mt-3 ">
        {/* Admin and Comment in a single line */}
        <div className="flex items-center gap-5 text-gray-500">
          <div>
            <AiOutlineUser size={20} className="inline mr-1" />
            <span className="hover:text-[#CCB100] cursor-pointer">
              {elm.author}
            </span>
          </div>
          <div>
            <AiOutlineComment size={20} className="inline mr-1" />

            <span className="hover:text-[#CCB100] cursor-pointer">
              {elm.comments} Comment
            </span>
          </div>
        </div>

        {/* Heading on a new line */}
        <h2 className="text-xl hover:text-[#CCB100]  cursor-pointer">
          {elm.title}
        </h2>

        {/* Read more button with icon on a new line */}
        <div className="text-decoration-line: underline text-green-900 hover:text-[#CCB100] font-semibold cursor-pointer">
          <p className="inline ">Read More</p>
          <GoArrowRight size={20} className="inline ml-1" />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
