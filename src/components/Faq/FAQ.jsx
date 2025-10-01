import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import dataArray from "./FaqData";
import "./faq.css";
import faqimage from "../../images/Faq12.jpg";
import secImg from "../../images/TriasseaIcon.png";
import CompoHeader from "../common/CompoHeader";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the location (route) changes
    window.scrollTo(0, 0);
  }, [pathname]);

  const [activeArray, setActiveArry] = useState(dataArray[0]);

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeButton, setActiveButton] = useState(1);

  const clickHeader = (event, index) => {
    event.stopPropagation();
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleClickArray1 = () => {
    setActiveArry(dataArray[0]);
    setActiveButton(1);
  };

  const handleClickArray2 = () => {
    setActiveArry(dataArray[1]);
    setActiveButton(2);
  };
  const handleClickArray3 = () => {
    setActiveArry(dataArray[2]);
    setActiveButton(3);
  };

  return (
    <div>
      <section>
        <CompoHeader name="Faqs" image={faqimage} />
      </section>

      <section className="grid grid-cols-1 mb-10 mt-20 mr-5 gap-8 md:grid-cols-2 lg:grid-cols-2">
        <div className="ml-4">
          <div className="mb-6 md:ml-1 lg:ml-2 ">
            <span className="flex justify-start items-center gap-1">
              <img className="w-6" src={secImg} alt="" />
              <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
                Find Your Answer
              </h3>
            </span>
            <h1 className="form-hedding" style={{ fontSize: "50px" }}>
              Frequently asked questions
            </h1>
            <p className="my-4 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do
              eiusmod tempor incididu ut labore et dolore magna aliqu.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 ml-6 text-lg">
            <button
              onClick={() => handleClickArray1()}
              className={`${
                activeButton === 1
                  ? "text-gray-800"
                  : "text-gray-400 hover:text-gray-800"
              }`}
            >
              Our Vision & Statergy
            </button>
            <button
              onClick={handleClickArray2}
              className={`${
                activeButton === 2
                  ? "text-gray-800"
                  : "text-gray-400 hover:text-gray-800"
              }`}
            >
              About Our Product
            </button>
            <button
              onClick={handleClickArray3}
              className={`${
                activeButton === 3
                  ? "text-gray-800"
                  : "text-gray-400 hover:text-gray-800"
              }`}
            >
              About Organic Farming
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 lg:ml-10 lg:mt-5 ml-6 text-black">
          <div
            id="accordion"
            className="w-[100%]  rounded-lg overflow-hidden flex flex-col gap-[1.5px] shadow-xl"
          >
            {activeArray.map((item, index) => (
              <div
                key={index}
                className={`item ${index === activeIndex ? "active" : ""}`}
              >
                <div
                  onClick={(e) => clickHeader(e, index)}
                  className="header p-6 text-lg rounded-lg hover:text-white hover:bg-green-600  flex justify-between items-center cursor-pointer shadow-md"
                >
                  <div>
                    <div className="faq-tag" style={{ letterSpacing: "1.3px" }}>
                      {item.tag}
                    </div>
                  </div>
                  <IoIosArrowUp className="w-6 h-6 activeIcon" />
                  <IoIosArrowDown className="w-6 h-6 inactiveIcon" />
                </div>
                <div className="faq-content text-lg text-grey-700 transition-all duration-500">
                  <p className="faq-descreption">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
