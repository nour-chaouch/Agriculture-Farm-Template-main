import React, { useEffect, useRef, useState } from "react";
// import logo from "../../assest/agri_logo.png";
import logo from "../../images/logonew.png";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menu, setMenu] = useState(false);
  const [More, setMore] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 30);
    setMore(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleMenuBar = () => {
    setMenu(!menu);
  };

  const hideNavItems = () => {
    setMenu(false);
  };

  return (
    <div
      className={`w-[100%] max-w-[2600px]  h-[60px] responsive-header pl-6 pr-20 ${
        isScrolled ? "scrolled" : "no-scrolled"
      } 
      }   ${menu ? "bg-white max-h-max" : ""} fixed top-0 z-10`}
    >
      <header className="h-full w-full box-border flex justify-between items-center">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {}}
          src={logo}
          alt=""
          className={`${
            isMobile ? "w-[40px] h-[34px]" : "w-[57px] h-[45px] logo-img"
          }  `}
        />
        {isMobile && menu && (
          <RxCross2
            cursor="pointer"
            color={isScrolled ? "black" : "white"}
            size={25}
            onClick={toggleMenuBar}
          />
        )}
        {isMobile && !menu && (
          <RiMenu2Fill
            cursor="pointer"
            size={25}
            color={isScrolled ? "black" : "white"}
            onClick={toggleMenuBar}
          />
        )}

        <ul
          onClick={hideNavItems}
          className={
            isMobile
              ? `flex flex-col gap-2 nav-bg py-3 w-full  absolute h-max top-[50px] ${
                  !menu
                    ? "-right-[100%] "
                    : "right-0 transition-all .5s ease-in"
                } items-center  text-lg cursor-pointer scrolled`
              : `flex justify-between items-center gap-10 nav-text ${
                  isScrolled ? "text-black " : "text-white"
                }`
          }
        >
          <Link
            to="/"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} 
               
          `}
          >
            Blog
          </Link>
         

          <Link
            to="/projects"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
          >
            Projects
          </Link>
          <Link
            to="/aboutus"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
          >
            About
          </Link>
          <Link
                  to="/contactUs"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
                >
                  Contact us
                </Link>
                <li className="relative group">
            <Link
              to="#"
              className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
                isMobile ? " hidden" : ""
              } `}
              onClick={() => setMore(!More)}
            >
              More
              <IoChevronDownOutline
                size={17}
                className={`md:inline-block none ${
                  More ? "rotate-nav-icon" : ""
                }`}
              />
            </Link>

            {/* Dropdown menu for "About Us" */}

            <ul
              className={`${
                isMobile
                  ? "flex flex-col text-black items-center gap-2"
                  : `absolute ${
                      More ? "block" : "hidden"
                    } max-w-max whitespace-nowrap    space-y-2 py-2  px-4 -right-14  rounded`
              }   ${
                !isScrolled && !isMobile
                  ? "no-scrolled"
                  : " bg-white text-black"
              }`}
              onClick={() => setMore(false)}
            >
              <li>
                <Link
                  to="/gallery"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/partnership"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
                >
                  Patners
                </Link>
              </li>
              <li>
                <Link
                  to="/involved"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
                >
                  Invloved
                </Link>
              </li>
              <li>
                <Link
                  to="/presskit"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
                >
                  press kit
                </Link>
              </li>
              <li>
                <Link
                  to="/successstories"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/ouraproach"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
                >
                  our Aproach
                </Link>
              </li>
              <li>
              <Link
            to="/faq"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
          >
            FAQ
          </Link>
               
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
