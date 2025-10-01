import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import dataArray from "./projectData";
import faqimage from "../../images/Faq12.jpg";
import secImg from "../../images/TriasseaIcon.png";
import { IoArrowForward } from "react-icons/io5";
import CompoHeader from "../common/CompoHeader";
import { useNavigate } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(dataArray[0]);
  const [state, setState] = useState(1);

  const handclick1 = () => {
    setData(dataArray[0]);
    setState(1);
  };
  const handclick2 = () => {
    setData(dataArray[1]);
    setState(2);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <section>
        <CompoHeader name="Projects" image={faqimage} />
      </section>
      <section className="mt-20">
        <div className="mb-6 md:ml-1 lg:ml-2 ">
          <span className="flex justify-center items-center gap-1">
            <img className="w-6" src={secImg} alt="" />
            <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
              Our Project
            </h3>
          </span>
          <h1
            className="form-hedding flex justify-center items-center"
            style={{ fontSize: "50px" }}
          >
            Completed Projects
          </h1>
        </div>
      </section>

      <section className="mb-20">
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto lg:max-w-none max-w-2xl">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
                {data.map((callout) => (
                  <div key={callout.id} className="group relative">
                    <div className="project-content  relative w-full h-[440px] mb-8 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-[440px] rounded-lg w-full object-cover object-center"
                      />
                      {/* Display on hover */}
                      <div
                        className="absolute top-0 bottom-0 left-0 right-0 project-detail bg-green-600 opacity-0 transition-all duration-500 ease-linear transform hover:scale-110 hover:opacity-60 flex flex-col justify-center items-center text-center px-10"
                        onClick={() => navigate(`/projectdetail/${callout.id}`)}
                      >
                        <h3 className="text-3xl font-semibold text-white mb-2">
                          {callout.name}
                        </h3>
                        <p className="text-white text-base">
                          {callout.description}
                        </p>
                        <IoArrowForward className="absolute bottom-5 right-5 text-white font-bold text-4xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex content-center justify-center gap-1">
        <button
          onClick={handclick1}
          className={
            state !== 2
              ? `hidden`
              : `text-green-600 hover:text-white border border-gray-400 hover:bg-green-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>

        <button
          onClick={handclick1}
          type="button"
          style={{
            backgroundColor: state === 1 ? "#16a34a" : "",
            color: state === 1 ? "white" : "",
          }}
          className={`text-green-600 border border-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 ${
            state === 1
              ? "!hover:bg-green-600"
              : "text-green-600 hover:text-white hover:bg-green-600"
          }`}
        >
          1
        </button>

        <button
          onClick={handclick2}
          type="button"
          style={{
            backgroundColor: state === 2 ? "#16a34a" : "",
            color: state === 2 ? "white" : "",
          }}
          className={`text-green-600 border border-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 ${
            state === 2
              ? "!hover:bg-green-600"
              : "text-green-600 hover:text-white hover:bg-green-600"
          }`}
        >
          2
        </button>

        <button
          onClick={handclick2}
          type="button"
          className={
            state === 2
              ? `hidden`
              : `text-green-600 hover:text-white border border-gray-400 hover:bg-green-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Projects;
