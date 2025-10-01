import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import { HashLoader } from "react-spinners";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Import images
import aboutUs1 from "./images/about us1.png";
import aboutUs4 from "./images/about us4.png";
import secImg from "./images/TriasseaIcon.png";
import mainImage1 from "./images/h1-banner01.jpg";
import mainImage2 from "./images/h1-banner02.jpg";
import hero1 from "./images/hero1jpg.jpg";
import hero2 from "./images/hero2.jpg";
import hero3 from "./images/hero3.jpg";
import Wheat from "./assest/Wheat.jpg";
import Barley from "./assest/Barley.jpg";
import Fieldpeas from "./assest/Fieldpeas.jpg";
import Holstein from "./assest/Holstein.jpg";
import Ayrshire from "./assest/Ayrshire.jpg";

// Data
const sliderData = [
  {
    image: hero1,
    heading: "Slide One",
    desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    image: hero2,
    heading: "Slide Two",
    desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
    heading: "Slide Three",
    desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    image: hero3,
    heading: "Slide Four",
    desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
];

const serviceData = [
  {
    imageUrl: Wheat,
    altText: 'Wheat',
    linkText: 'Wheat',
  },
  {
    imageUrl: Barley,
    altText: 'Barley',
    linkText: 'Barley',
  },
  {
    imageUrl: Fieldpeas,
    altText: 'Field Peas',
    linkText: 'Field Peas',
  },
  {
    imageUrl: Holstein,
    altText: 'Holstein Cattle',
    linkText: 'Holstein Cattle',
  },
  {
    imageUrl: Ayrshire,
    altText: 'Ayrshire Cattle',
    linkText: 'Ayrshire Cattle',
  },
];

const testimonialData = [
  {
    description:
      "ERP Business Management System:streamlines operations by managing products and inventory, tracking customers and sales, and controlling user access with role-based permissions. It also supports file management and provides an analytics dashboard with key business performance metrics and reports. This comprehensive system helps businesses optimize their operations, reduce costs, and improve overall efficiency through integrated data management and real-time insights.",
  },
  {
    description:
      "Farm Management: optimize agricultural operations by mapping farm boundaries using GPS, tracking crops such as wheat, barley, peas, and lupins, and providing real-time weather. It also includes livestock management tools to monitor herds and manage feed requirements efficiently. The system enables farmers to make data-driven decisions, improve crop yields, and ensure sustainable farming practices while reducing environmental impact and maximizing profitability.",
  },
  {
    description:
      "The AI & Smart Features : provide advanced support for farming, including AI-powered crop disease detection from photos, machine learning predictions for feed requirements and milk production, and a conversational AI chat to offer farming advice. These intelligent features help farmers identify problems early, optimize resource allocation, and access expert knowledge through automated systems that learn and improve over time.",
  },
  {
    description:
      "The Community & Learning features :offer educational courses on sustainable farming, discussion forums for knowledge sharing among farmers, informative articles, and a gamified system of achievements with levels and badges to encourage engagement. This platform fosters collaboration, continuous learning, and skill development within the farming community, helping farmers stay updated with latest techniques and best practices.",
  },
];

const teamData = [
  {
    name: "🌱 Improved Productivity :",
    role: "Farm management helps farmers plan and monitor operations. Using real-time data and smart tools increases yields and improves overall farm efficiency.",
  },
  {
    name: "💰 Better Financial Control :",
    role: "Integrated inventory and cost tracking reduce waste and improve profitability. Farmers can manage budgets, expenses, and sales to make smarter financial decisions.",
  },
  {
    name: "🌍 Sustainability and Resource Efficiency : ",
    role: "Farm management promotes sustainable practices by optimizing water, soil, and feed usage. This reduces environmental impact while maintaining long-term soil health.",
  },
  {
    name: "🐄 Enhanced Livestock Management : ",
    role: "Farmers can track herd health, feeding schedules, and production levels. This ensures proper animal care and leads to better productivity and healthier livestock.",
  },
];

const aboutData = [
  {
    image: aboutUs1,
    tag: "Supported Crops",
    description:
      "Our farm management system supports key crops such as Wheat, Field Peas, and Barley, helping farmers monitor growth, improve yields, and optimize their production.",
  },
  {
    image: aboutUs4,
    tag: "Supported Herd Breeds",
    description:
      "For livestock management, we cover major dairy breeds like Holstein, Guernsey, and Ayrshire, ensuring better animal health, nutrition, and productivity.",
  },
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-green-400">
          <HashLoader className="text-gray-700" size={80} />
        </div>
      ) : (
        <div>
          {/* Hero Section */}
          <section className="">
            <div className="slider">
              <div className="slide current">
                <div>
                  <img src={sliderData[0].image} alt="slide" className="image" />
                  <div className="content">
                    <h2>{sliderData[0].heading}</h2>
                    <p>{sliderData[0].desc}</p>
                    <hr />
                    <button className="--btn --btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="grid grid-cols-1 mt-20 mr-10 gap-20 md:grid-cols-2 lg:grid-cols-2">
            <div className="md:ml-8 lg:ml-2">
              <span className="flex justify-start ml-6 items-center gap-2">
                <img className="w-8" src={secImg} alt="" />
                <h3 className="text-xl md:text-2xl lg:text-3xl antialiased font-sans">
                  About Us
                </h3>
              </span>
              <h1 className="mb-4 ml-6 text-xl lg:text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
                Organic & Healthy Food
              </h1>
              <p className="text-gray-500 ml-6 mb-4 text-sm md:text-base lg:text-lg">
                We are a dedicated team of developers and business analysts focused on building a localized mobile and web application for business performance analysis.
                Our mission is to empower enterprises with real-time insights, smart decision-making tools, and collaborative workflows, connecting trade data, supply-demand matching, and existing enterprise systems in one intuitive platform.
              </p>
              <div className="px-4">
                {aboutData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row justify-center items-center gap-3 item-center mb-4 md:mb-8 lg:mb-10 mr-3 md:mr-6"
                  >
                    <img
                      className="h-15 w-15 md:h-24 md:w-20 lg:h-23 lg:w-28 rounded-full bg-lime-100 hover:bg-orange-300 fill-white ml-3 md:ml-0"
                      src={data.image}
                      alt=""
                    />
                    <div className="text-center md:text-left">
                      <h4 className="text-lg lg:text-3xl md:text-2xl cursor-pointer hover:text-orange-400">
                        {data.tag}
                      </h4>
                      <p className="text-sm md:text-base lg:text-lg">
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 text-base md:text-lg lg:text-xl font-medium text-center text-white bg-red-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-4 mt-8"
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

            <div className="image-container mt-8 md:mt-0 lg:ml-20 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                className="hover:scale-110 transition duration-500 cursor-pointer w-full md:w-auto md:max-w-1/2"
                src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/h1-banner03.svg"
                alt=""
              />
              <img
                className="hover:scale-110 transition duration-500 cursor-pointer w-full mt-4 md:mt-0 md:w-auto md:max-w-1/2"
                src={mainImage1}
                alt=""
              />
              <img
                className="hover:scale-110 transition duration-500 cursor-pointer w-full mt-4 md:mt-0 md:w-auto md:max-w-1/2"
                src={mainImage2}
                alt=""
              />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                Our Services
              </h1>
              <div className="md:px-4 p-1 py-6 testimonial-box">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testimonialData.map((elm, index) => (
                    <div key={index} className="md:p-4 p-2 bg-transparent">
                      <div className="h-full text-black p-8 rounded-lg shadow-lg">
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
                </div>
              </div>
            </div>
          </section>

          {/* Service Section */}
          <section className="service-div">
            <div className="lg:mt-20">
              <div className="">
                <span className="flex justify-center items-center gap-2">
                  <img className="w-8" src={secImg} alt="" />
                  <h3 className="flex justify-center items-center text-xl md:text-xl lg:text-2xl antialiased font-sans">
                    Our Service
                  </h3>
                </span>
                <h1 className="hedding flex justify-center items-center text-xl md:text-3xl lg:text-4xl antialiased font-sans">
                  Supported crops and Herd Breeds
                </h1>
              </div>
            </div>
            <div className="px-[6%]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.map((slide, index) => (
                  <div key={index}>
                    <div className="bg-green-900 rounded-lg text-black transform transition-all ease-in-out duration-300 hover:text-white overflow-hidden h-80">
                      <a href="#" className="flex flex-col text-3xl mt-4 h-full">
                        <img className="w-full h-48 object-cover" src={slide.imageUrl} alt={slide.altText} />
                        <span className="block text-sm md:text-base mt-2 mb-2 px-2 text-white text-center break-words">
                          {slide.linkText}
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <div className="px-8 pt-24 pb-28 xl:px-5 min-h-screen place-content-center grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto teams">
              <h1
                style={{ color: "var(--orange-color)" }}
                className="capitalize text-center mb-5 md:mb-10 sm:col-span-2 lg:col-span-4 text-4xl sm:text-5xl xl:text-4xl font-extrabold"
              >
                Beneficiaries
              </h1>
              {teamData.map((team, index) => (
                <div
                  key={index}
                  className="bg-green-800 shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-green-600 duration-300 cursor-pointer"
                >
                  <div className="pt-5 pb-7 px-5 text-center">
                    <h2 className="text-xl font-semibold text-white">{team.name}</h2>
                    <span className="text-gray-200 capitalize inline-block mt-1 mb-4">
                      {team.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
