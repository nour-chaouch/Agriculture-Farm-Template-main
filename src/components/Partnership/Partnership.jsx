import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./partnership.css";
import CompoHeader from "../common/CompoHeader";
import { slideData } from "./PartnershipData";
import PartnershipImage from "../../images/partnership.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./partnership.css";
import { Pagination, Autoplay } from "swiper/modules";

function Partnership() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    if (screenWidth <= 400) {
      return 1; // For mobile screens
    } else if (screenWidth <= 600) {
      return 2; // For tablet screens
    } else {
      return 3; // For laptop screens
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <section>
        <CompoHeader className="" name="Partnership" image={PartnershipImage} />
      </section>

      <section className=" mt-20">
        <div>
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            Partnerships for Sustainable Agriculture
          </h1>
          <p class="text-center text-lg md:text-lg lg:text-xl xl:text-2xl text-green-900">
            Agriculture’s far-reaching impacts make it equally crucial to widen
            our view and gain new insights by entering multidisciplinary
            partnerships across agricultural value chains. Partnership is
            essential if we are to successfully drive advances in sustainable
            agriculture. Together, we can help farmers grow healthy, affordable,
            high-quality food safely and protect the land that we all hold in
            trust for future generations.
          </p>

          <p class="text-center text-sm md:text-base mt-4 md:mt-10 text-gray-800">
            We are a team of dedicated people who care about the future of
            farming. We apply our knowledge and passion to help farmers find the
            right balance to achieve better yield.
          </p>
        </div>
        <div class="ml-3 mr-3 mx-auto mt-20 p-4 md:p-10 shadow-2xl rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <div class="flex flex-col justify-center">
            <h1 class="text-2xl md:text-3xl lg:text-4xl text-start mb-4">
              Transformation requires partnership
            </h1>
            <p class="text-base md:text-lg mb-4">
              We fully support the implementation of the United Nations
              Sustainable Development Goals (SDGs) to establish and foster
              sustainable business practices at economic, social, and
              environmental levels.
            </p>
            <p class="text-base md:text-lg">
              We focus on topics where we as a company can make a significant
              contribution, such as food security, climate action, responsible
              consumption, and partnership.
            </p>
          </div>
          <div class="flex justify-center">
            <img
              class="w-full md:w-[600px] h-[220px] lg:h-[800px] xl:h-[380px] rounded-tr-lg md:rounded-br-lg"
              src="https://dynamicassets.basf.com/is/image/basf/E_SDG_logo_without_UN_emblem_square_CMYK:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
              alt=""
            />
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 bg-green-900 mx-5 md:mx-10 rounded-lg shadow-2xl">
        <div class="flex justify-center">
          <img
            class="w-full h-[250px] md:h-[340px] object-cover rounded-tl-lg rounded-tr-lg md:rounded-bl-lg "
            src="https://dynamicassets.basf.com/is/image/basf/United%20for%20the%20Biggest%20Job%20on%20Earth_P293e_1000025247:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center ml-3 mb-3 md:ml-6 mr-3 md:mr-6 mt-5 md:mt-0">
          <h1 class="text-xl md:text-3xl text-gray-300">
            BASF hosts roundtable discussions on cotton at the United Nations
            headquarters
          </h1>
          <p class="text-base md:text-lg text-white mt-5">
            Farmers across the globe are working to meet the ever-increasing
            demand for sustainably grown cotton. BASF brought together a global
            delegation of farmers from Europe and the United States to ensure
            their voices are heard and supported. This is one way how BASF
            contributes to the United Nations Sustainable Development Goals.
          </p>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 bg-green-900 mx-5 md:mx-10 rounded-lg shadow-2xl">
        <div class="flex flex-col justify-center ml-3 md:ml-6 mr-3 md:mr-6 mt-5 md:mt-0">
          <h1 class="text-xl md:text-3xl text-gray-300">
            BASF, Syngenta, and Arisa collaborate to improve labor standards in
            India’s vegetable seeds sector.
          </h1>
          <p class="text-base md:text-lg text-white mt-5">
            Launch of phase two for their multistakeholder collaboration, Wage
            Improvements in Seed Hybrids (WISH). Initiated in 2022, WISH focuses
            on addressing minimum wage compliance issues and child labor issues
            in India’s vegetable seed sector.
          </p>
        </div>
        <div class="flex justify-center">
          <img
            class="w-full md:w-[650px] h-[250px] md:h-[380px] object-cover rounded-bl-lg rounded-br-lg rounded-tr-lg md:rounded-br-lg"
            src="https://dynamicassets.basf.com/is/image/basf/20160725_113653-1:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
            alt=""
          />
        </div>
      </section>

      <section className="mt-20 ml-6 mr-6 md:mx-10 py-4 md:mr-10 shadow-2xl rounded-lg">
        <h1 className="text-3xl md:text-5xl text-center md:ml-8 mt-8 text-[#f8931f] opacity-100">
          Examples of collaborations and joint initiatives
        </h1>

        <div className="opacity-100">
          <Swiper
            slidesPerView={getSlidesPerView()}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="partnership-mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index} className="partner-swiper-slide">
                <div className=" bg-green-900 rounded-lg  transform transition-all ease-in-out duration-300 text-white">
                  <a href="/" className="flex flex-col text-3xl mt-4">
                    <img
                      className=""
                      src={slide.imageUrl}
                      alt={slide.altText}
                    />
                    <span className="block text-base md:text-lg mt-4 md:mt-8 mb-4 md:mb-6 ml-4 md:ml-4 text-white">
                      {slide.description}
                    </span>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 mb-10 bg-green-900 mx-5 md:mx-10 rounded-lg shadow-2xl">
        <div class="flex flex-col justify-center ml-3 md:ml-6 mr-3 md:mr-6 mt-5 md:mt-0">
          <h1 class="text-xl md:text-3xl text-gray-300">
            Partnering With Farmers And Their Communities Around The Globe
          </h1>
          <p class="text-base md:text-lg text-white mt-5">
            Learn more about our collaboration with farmers and their
            communities around the globe and how we create impact together.
          </p>
        </div>
        <div class="flex justify-center mt-5 md:mt-0">
          <img
            class="w-full md:w-[650px] h-[200px] md:h-[330px] object-cover rounded-tr-lg rounded-bl-lg rounded-br-lg md:rounded-br-lg"
            src="https://dynamicassets.basf.com/is/image/basf/empowering-women-in-india:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
            alt=""
          />
        </div>
      </section>

      <section className="bg-green-900 mb-10 w-[80%] ml-10 mr-10 rounded-lg shadow-2xl">
        <h1 className="ml-6 text-3xl py-6 text-gray-300">
          Change drivers within Partnerships for Sustainable Agriculture
        </h1>
        <div className="text-lg ml-6 pb-8 ">
          <div className="flex flex-row items-center gap-2 mb-2 transform transition-all ease-in-out duration-300 cursor-pointer text-cyan-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>SmallHolder Empowerment</p>
          </div>
          <div className="flex flex-row items-center gap-2 mb-2 transform transition-all ease-in-out duration-300 cursor-pointer text-cyan-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Farm Network</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partnership;
