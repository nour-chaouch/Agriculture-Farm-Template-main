import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { GoStarFill } from "react-icons/go";
const testimonialData = [
  {
    description:
      "ERP Business Management System:streamlines operations by managing products and inventory, tracking customers and sales, and controlling user access with role-based permissions. It also supports file management and provides an analytics dashboard with key business performance metrics and reports. This comprehensive system helps businesses optimize their operations, reduce costs, and improve overall efficiency through integrated data management and real-time insights.",
    imgurl: "https://dummyimage.com/106x106",},
    
  {
    description:
      "Farm Management: optimize agricultural operations by mapping farm boundaries using GPS, tracking crops such as wheat, barley, peas, and lupins, and providing real-time weather. It also includes livestock management tools to monitor herds and manage feed requirements efficiently. The system enables farmers to make data-driven decisions, improve crop yields, and ensure sustainable farming practices while reducing environmental impact and maximizing profitability.",
    imgurl: "https://dummyimage.com/106x106",
    
  },
  {
    description:
      "The AI & Smart Features : provide advanced support for farming, including AI-powered crop disease detection from photos, machine learning predictions for feed requirements and milk production, and a conversational AI chat to offer farming advice. These intelligent features help farmers identify problems early, optimize resource allocation, and access expert knowledge through automated systems that learn and improve over time.",
    imgurl: "https://dummyimage.com/106x106",
    
  },
  {
    description:
      "The Community & Learning features :offer educational courses on sustainable farming, discussion forums for knowledge sharing among farmers, informative articles, and a gamified system of achievements with levels and badges to encourage engagement. This platform fosters collaboration, continuous learning, and skill development within the farming community, helping farmers stay updated with latest techniques and best practices.",
    imgurl: "https://dummyimage.com/106x106",
  
  },
];
const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 668);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: !isMobile ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Our Services
        </h1>
        <div className="md:px-4 p-1 py-6 testimonial-box">
          <Slider {...settings}>
            {testimonialData.map((elm, index) => (
              <div className="md:p-4 p-2 md:w-1/2 w-full bg-transparent">
                <div
                  className={`h-full text-black p-8 rounded-lg  ${
                    index % 2 === 0 ? "card-test" : "card-test2"
                  } shadow-lg`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-green-900 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <h3 className="text-black font-semibold text-2xl mt-1">
                    {elm.description.split(':')[0]}
                  </h3>
                  <p className="leading-relaxed mb-6">{elm.description.split(':')[1]}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
