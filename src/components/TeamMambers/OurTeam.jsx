import React, { useState } from "react";
import { FaFacebook, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./TeamMembers.css";
import shalinipatel from "../../assest/team1.jpg";
import omkarjypuria from "../../assest/team2.jpg";
import Gadadharmartha from "../../assest/team3.jpg";
import Amitkumarpatel from "../../assest/team4.jpg";

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

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
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
            className={`${
              activeIndex === index ? "active" : ""
            } bg-green-800 shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-green-600 duration-300 cursor-pointer`}
            onMouseOver={() => handleMouseOver(index)}
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
  );
};

export default Team;
