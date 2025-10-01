import React, { useState, useEffect } from "react";
import aboutUsHeader from "../../images/AboutUs.jpg";
import { useLocation } from "react-router-dom";
import CompoHeader from "../common/CompoHeader";
import About from "../About/About";
import secImg from "../../images/TriasseaIcon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import bgImage from "../../images/aboutus-back.png";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { imageUrls } from "./aboutdata";
import { GiThreeLeaves } from "react-icons/gi";
import { LiaTruckMonsterSolid } from "react-icons/lia";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrDropbox } from "react-icons/gr";

import "./AboutUsPage.css";

const AboutUsPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getSlidesPerView = () => {
    if (screenWidth <= 360) {
      return 3; // For mobile screens
    } else if (screenWidth <= 540) {
      return 4; // For tablet screens
    } else {
      return 6; // For laptop screens
    }
  };

  return (
    <div>
      <section>
        <CompoHeader name="About Us" image={aboutUsHeader} />
      </section>

      <section className="grid grid-cols-1 mb-10 mt-20 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <div className="relative">
            <img src={bgImage} className="opacity-30" alt="" />

            <div className="absolute top-[10%] left-0 ml-4">
              <div className="mb-6 md:ml-1 lg:ml-2">
                <span className="flex justify-start items-center gap-1">
                  <img className="w-6" src={secImg} alt="" />
                  <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
                    Why Choose Us
                  </h3>
                </span>
                <h1 className="form-hedding text-[30px] md:text-[50px]">
                Smart Process Automation
                </h1>
                <p className="my-1 text-lg text-gray-700">
                Automate repetitive tasks like crop monitoring, livestock tracking, and inventory updates to save time and reduce errors.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base md:text-lg lg:text-xl font-medium text-center text-white bg-red-500 rounded-lg hover:bg-green-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-4 mt-8"
                >
                  Read More
                  <svg
                    className="w-5 h-5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[2%] grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-0 lg:ml-10 lg:mt-5 ml-6 text-black">
          <div className="aboutus-grid m-2">
            <div className="aboutus-small flex flex-row mt-5 justify-between gap-40 text-5xl">
              <GiThreeLeaves className="symbol1" />
              <h1 className="">01</h1>
            </div>
            <div>
              <h1 className="aboutus-heading text-xl">Cost Optimization</h1>
              <p className="text-gray-400 text-sm">
              Reduce waste, optimize resources, and improve supply-demand matching to maximize revenue.
              </p>
            </div>
          </div>
          <div className="aboutus-grid m-2">
            <div className="aboutus-small flex flex-row mt-5 justify-between gap-40 text-5xl">
              <LiaTruckMonsterSolid className="symbol1" />
              <h1 className="">02</h1>
            </div>
            <div>
              <h1 className="aboutus-heading text-xl">Localized & User-Friendly</h1>
              <p className="text-gray-400 text-sm">
              Designed with local farmers and businesses in mind, supporting multiple languages, currencies, and easy-to-use interfaces.
              </p>
            </div>
          </div>
          <div className="aboutus-grid m-2">
            <div className="aboutus-small flex flex-row mt-5 justify-between gap-40 text-5xl">
              <CiDeliveryTruck className="symbol1" />
              <h1 className="">03</h1>
            </div>
            <div>
              <h1 className="aboutus-heading text-xl">Data-Driven Decisions</h1>
              <p className="text-gray-400 text-sm">
              Get actionable insights from real-time data (weather, soil conditions, market trends) to improve productivity and profitability.
              </p>
            </div>
          </div>
          <div className="aboutus-grid m-2">
            <div className="aboutus-small flex flex-row mt-5 justify-between gap-40 text-5xl">
              <GrDropbox className="symbol1" />
              <h1 className="">04</h1>
            </div>
            <div className="mt-4">
              <h1 className="aboutus-heading text-xl">Scalable & Flexible</h1>
              <p className="text-gray-400 text-sm">
              Works for small farmers, cooperatives, or large agribusinesses with features that scale as your operations grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10"></section>

      <section className="mb-10">
        <About />
      </section>

      <section className="mt-20 main-aboutus">
        <h2 className="text-center leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="py-5 sm:py-10">
          <div className="bg-orange-400 mx-auto max-w-8xl">
            <Swiper
              slidesPerView={getSlidesPerView()}
              spaceBetween={30}
              modules={[Autoplay]}
              className="About-mySwiper"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {imageUrls.map((imageUrl, index) => (
                <SwiperSlide key={index} className="about-swiper-slide">
                  <img
                    className="transition duration-300 opacity-50 hover:opacity-100 transform"
                    src={imageUrl}
                    alt={`Brand ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
