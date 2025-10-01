import React, { useEffect, useState } from "react";
import CompoHeader from "../common/CompoHeader";
import compoheaderimg from "../../images/contactus1.jpg";
import { AiOutlineUser, AiOutlineComment } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { projectsData } from "../ProjectDetail/PorojectsData";
import { RiReplyLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import secImg from "../../images/TriasseaIcon.png";
import blogDetailData from "./BlogDetailData";
const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProject, setCurrentProject] = useState({
    id: Number(id),
    project: {},
    nextproject: null,
    preproject: null,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const index = blogDetailData.findIndex((elm) => elm.id === Number(id));

    const preproject = blogDetailData[index - 1] || null;

    const nextproject = blogDetailData[index + 1] || null;

    setCurrentProject({
      ...currentProject,
      project: blogDetailData[index],
      preproject,
      nextproject,
      id: Number(id),
    });
  }, [id]);

  return (
    <div>
      <CompoHeader name="blogDetail" image={compoheaderimg} />

      <div className="md:px-8 px-4 py-8 md:flex gap-[6rem]  ">
        {/* blog detail left box */}
        <div className="w-full md:w-[60%] scroll-slow">
          <h1 className="md:text-4xl  text-[25px]">
            {currentProject.project.title}
          </h1>

          <div className="flex md:flex-row flex-col-reverse md:items-center md:gap-8 gap-1 text-gray-500 md:mt-6 mt-3">
            <div>
              <AiOutlineUser size={20} className="inline md:mr-1 mr-2" />
              <span className="hover:text-[#CCB100] cursor-pointer">Admin</span>
            </div>
            <div>
              <AiOutlineComment size={20} className="inline md:mr-1 mr-2 " />

              <span className="hover:text-[#CCB100] cursor-pointer">
                {currentProject.project.comments} Comment
              </span>
            </div>

            <div>
              <AiOutlineComment size={20} className="inline md:mr-1 mr-2" />

              <span className="hover:text-[#CCB100] cursor-pointer">
                {currentProject.project.date}
              </span>
            </div>
          </div>

          <img
            src={currentProject.project.imageUrl}
            alt=""
            className="rounded-lg mt-6 md:h-[70vh] h-[35vh]  w-full"
          />

          <p className="md:mt-10 mt-8 text-[15px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            arcu metus, sollicitudin nec nulla et, euismood aliquam nisl.
            Vivamus eleifend ullamcorper orci pellentesque suscipit. Sed
            dapibus, nulla eu accumsan fringilla, odio nisl blandit augue, vel
            tristique elit dolor non libero.
          </p>
          <p className="md:mt-10 mt-8 text-[15px] text-gray-500">
            Maecenas id urna ornare, tempor augue eu, rutrum nunc. Curabitur
            vulputate dui orci, ullamcorper commodo elit rhoncus eu. Nunc
            vulputate, urna eu elementum dapibus, odio ante tempor augue, vitae
            consequat leo orci vel diam. Suspendisse et nisi vitae libero
            bibendum cursus. Vivamus volutpat scelerisque dictum. Cras
            imperdiet, magna sed consequat egestas, tortor tortor ultricies
            tortor.
          </p>

          <div className="flex gap-3  md:py-10 py-8 md:px-10 px-6 bg-gray-200 md:mt-10 mt-7 rounded-lg md:text-2xl text-base">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent
                arcu metus, sollicitudin nec nulla et. Vivamus eleifend
                ullamcorper orci.
              </p>
              <p className="mt-6 w-max cursor-pointer text-green-900 hover:text-[#CCB100] text-base">
                {" "}
                <span className="mr-1    text-black">-</span>Dipanshu{" "}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="md:opacity-100 opacity-0 w-20 h-20 text-green-900 -mt-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </div>

          <h2 className="md:text-2xl text-[1.3rem]  mt-7">
            Setting the mood with incense
          </h2>
          <p className="mt-6 text-[15px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            arcu metus, sollicitudin nec nulla et, euismood aliquam nisl.
            Vivamus eleifend ullamcorper orci pellentesque suscipit. Sed
            dapibus, nulla eu accumsan fringilla, odio nisl blandit augue, vel
            tristique elit dolor non libero.
          </p>
          <p className="mt-6 text-[15px] text-gray-500">
            Maecenas id urna ornare, tempor augue eu, rutrum nunc. Curabitur
            vulputate dui orci, ullamcorper commodo elit rhoncus eu. Nunc
            vulputate, urna eu elementum dapibus, odio ante tempor augue, vitae
            consequat leo orci vel diam. Suspendisse et nisi vitae libero
            bibendum cursus. Vivamus volutpat scelerisque dictum. Cras
            imperdiet, magna sed consequat egestas, tortor tortor ultricies
            tortor.
          </p>

          <div className="md:flex justify-between mt-10 next-pre-box py-10">
            <div className="flex flex-wrap gap-3">
              <h1 className="text-2xl font-semibold mr-3">Tags:</h1>
              {currentProject?.project?.tags?.map((elm) => (
                <p className="py-1 px-3 bg-gray-300 hover:bg-[#CCB100] hover:text-white cursor-pointer ">
                  {elm}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0 ">
              <h1 className="text-2xl font-semibold mr-3">Share:</h1>
              <FaFacebookF
                size={21}
                className="text-green-900 hover:text-[#CCB100] cursor-pointer"
              />
              <FaTwitter
                size={21}
                className="text-green-900 hover:text-[#CCB100] cursor-pointer"
              />
              <FaInstagram
                size={21}
                className="text-green-900 hover:text-[#CCB100] cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-between  border-b-gray-500 md:py-10 py-6 ">
            {Number(id) !== 1 && (
              <div
                className="flex gap-3 cursor-pointer"
                onClick={() => navigate(`/blogDetail/${Number(id) - 1}`)}
              >
                <GoArrowLeft size={20} />
                <div>
                  <p className="md:text-xl text-lg text-gray-400"> Previous </p>
                  <h2 className="mt-1 text-2xl next-pre-heading  text-green-900 hover:text-[#CCB100] font-semibold">
                    {currentProject?.preproject?.title}
                  </h2>
                </div>
              </div>
            )}

            {Number(id) !== projectsData.length && (
              <div
                className="flex ml-auto gap-3 cursor-pointer"
                onClick={() => navigate(`/blogDetail/${Number(id) + 1}`)}
              >
                <div className="flex flex-col items-end">
                  <p className="md:text-xl text-lg text-gray-400 float-right">
                    Next
                  </p>
                  <h2 className="mt-1 text-2xl next-pre-heading text-green-900 hover:text-[#CCB100] font-semibold ">
                    {currentProject?.nextproject?.title}
                  </h2>
                </div>
                <GoArrowRight size={20} />
              </div>
            )}
          </div>

          <h2 className="md:text-3xl text-[26px] my-6 font-semibold">
            3 Comments
          </h2>

          <div>
            {currentProject?.project?.commentsData?.map((elm) => (
              <div className="bg-white md:px-12  w-full md:py-9 px-6 py-8 flex gap-8  rounded-lg shadow-2xl mt-3">
                <img
                  src="https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=100&d=mm&r=g"
                  alt=""
                  className="w-[20%] rounded-lg none-comment-img"
                />
                <div className="w-full">
                  <div className="flex w-full justify-between items-center">
                    <div>
                      <h2 className="md:text-lg text-base md:font-semibold">
                        {elm.commenter}
                      </h2>
                      <p className="text-[#CCB100]">{elm.commentDate}</p>
                    </div>
                    <button className="bg-green-900 hover:bg-[#CCB100] md:px-[12px] px-[8px] md:py-2 py-1 rounded-md text-white ">
                      <RiReplyLine className="inline text-xl -mt-1" /> Reply
                    </button>
                  </div>
                  <p className="mt-4 md:text-[16px]  text-gray-500">
                    {elm.commentText}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="md:mt-16 mt-12 mb-2 md:text-4xl text-2xl ">
            Leave a Reply
          </h2>
          <p className="text-[16px] text-gray-500">
            Your email address will not be published. Required fields are marked{" "}
            <span className="text-xl text-red-700">*</span>
          </p>

          <form action="" className="mt-8">
            <div className="flex md:flex-row flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="bg-transparent outline-none px-5 py-3 rounded focus"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="bg-transparent outline-none border-gray-400 px-5 py-3 rounded focus"
              />
            </div>
            <textarea
              placeholder="Comment"
              id=""
              rows="5"
              className="mt-7 bg-transparent outline-none border-gray-400 w-full px-5 py-3 rounded focus"
              style={{ resize: "none" }}
            ></textarea>
            <div className="mt-6 flex items-center text-[15px]">
              <input type="checkbox" id="save-info" className="mr-2" />
              <label htmlFor="save-info">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button className="bg-green-900 px-6 py-3 rounded text-white post-button font-semibold mt-6">
              Post Comment
            </button>
          </form>
        </div>
        {/* blog detail right box */}
        <div className="flex-1   blog-detail-right-box  mt-5 scroll-fast">
          <div className="rounded bg-white px-8 recent-posts py-10 box-border">
            <span className="flex justify-start items-center gap-2">
              <img className="w-8" src={secImg} alt="" />
              <h3 className="text-xl md:text-2xl antialiased font-sans">
                Recent Posts
              </h3>
            </span>
            {[...blogDetailData?.slice(0, 6)].map((elm) => (
              <div
                className="flex gap-4 mt-8 recent-post-div cursor-pointer"
                onClick={() => navigate(`/blogDetail/${elm.id}`)}
              >
                <div className="w-[22%] recent-post-img-div rounded-lg overflow-hidden">
                  <img
                    src={elm.imageUrl}
                    alt=""
                    className=" w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center detail-recent-post gap-5">
                    <div>
                      <AiOutlineUser size={13} className="inline mr-1" />
                      <span className="hover:text-[#CCB100] cursor-pointer">
                        Admin
                      </span>
                    </div>
                    <div>
                      <AiOutlineComment size={13} className="inline mr-1" />

                      <span className="hover:text-[#CCB100] cursor-pointer">
                        {elm.comments} Comment
                      </span>
                    </div>
                  </div>
                  <h1 className="mt-2 font-semibold hover:text-green-900 cursor-pointer">
                    {elm.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded bg-white px-8 py-10 box-border mt-10">
            <span className="flex justify-start mb-8 items-center gap-2">
              <img className="w-8" src={secImg} alt="" />
              <h3 className="text-xl md:text-2xl antialiased font-sans">
                Tags
              </h3>
            </span>
            <div className="flex gap-3 flex-wrap">
              {currentProject?.project?.leftTags?.map((elem) => (
                <p className="py-1 px-3 bg-gray-300 hover:bg-[#CCB100] hover:text-white cursor-pointer rounded-sm">
                  {elem}
                </p>
              ))}
            </div>
          </div>

          <div className="relative  h-[63vh]   rounded bg-white overflow-hidden box-border mt-10">
            <img
              src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/blog-12.jpg"
              alt=""
              width="100%"
              className="object-cover"
            />

            <div
              className="absolute bottom-0 left-0 w-full flex gap-3 px-8 py-6 items-center"
              style={{
                background: "linear-gradient(to top, black, transparent)",
              }}
            >
              <span className="bg-[#CCB100] p-[13px] rounded text-3xl text-white">
                {" "}
                <LuPhoneCall />
              </span>

              <div className="text-white">
                <p className="mt-0">Hotline</p>
                <p className="text-3xl">+919999999999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
