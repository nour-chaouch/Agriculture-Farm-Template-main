import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import contactUsImage from "../../images/contactus1.jpg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import secImg from "../../images/TriasseaIcon.png";
import "./ContactUsPage.css";
import CompoHeader from "../common/CompoHeader";

const ContactUsPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <CompoHeader name="contact" image={contactUsImage} />

      <div className="main-box grid md:grid-cols-3 mt-[6%] mb-[6%] gap-4 md:px-6">
        <div
          className="idenity grid grid-cols-2 "
          style={{
            backgroundColor: "rgb(248, 240, 232)",
          }}
        >
          <div className="flex justify-center items-center mr-20">
            <IoLocationOutline
              className="text-yellow-400"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="contact grid grid-cols-1 justify-center items-center">
            <p>Our Location</p>
            <h1>2nd Block Melbourne</h1>
          </div>
        </div>
        <div
          className="idenity grid grid-cols-2 "
          style={{
            backgroundColor: "rgb(248, 240, 232)",
          }}
        >
          <div className="flex justify-center items-center mr-20">
            <MdOutlinePhoneInTalk
              className="text-red-500"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="contact grid grid-cols-1 justify-center items-center">
            <p>Hotline</p>
            <h1>+000 (123) 456 88</h1>
          </div>
        </div>
        <div
          className="idenity grid grid-cols-2 "
          style={{
            backgroundColor: "rgb(202, 229, 247)",
          }}
        >
          <div className="flex justify-center items-center mr-20">
            <MdOutlineMailOutline
              className="text-pink-500"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="contact grid grid-cols-1 justify-center items-center">
            <p>Email Address</p>
            <h1>support@gmail.com</h1>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 mb-10 mt-20 mr-5 md:grid-cols-2 lg:grid-cols-2 gap-8 md:px-6  ">
        <form onSubmit={handleSubmit} className="ml-6 mb-4">
          <div className="mb-10 md:ml-1 lg:ml-2 ">
            <span className="flex justify-start ml-0 items-center gap-1">
              <img className="w-6" src={secImg} alt="" />
              <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
                Contact With Us
              </h3>
            </span>
            <h1 className="form-hedding text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex justify-center items-center">
              Ready to Work With Us
            </h1>
          </div>

          <div className="grid grid-cols-2 justify-center items-center">
            <label
              htmlFor="name"
              className="block text-sm ml-2 font-medium text-gray-700"
            >
              Name
            </label>

            <label
              htmlFor="email"
              className="block text-sm ml-4 font-medium text-gray-700"
            >
              Email Address
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="name"
              name="name"
              required={true}
              placeholder="Your Full Name"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              id="email"
              name="email"
              required={true}
              placeholder="email"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 justify-center items-center">
            <label
              htmlFor="phone"
              className="block mt-4 ml-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <label
              htmlFor="category"
              className="block mt-4 ml-4 text-sm font-medium text-gray-700"
            >
              Select Service
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              required={true}
              placeholder="Phone"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
            <select
              id="category"
              name="category"
              required={true}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Service</option>
              <option value="agriculture">Agriculture Products</option>
              <option value="fresh">Fresh Vegetable</option>
              <option value="dairy">Dairy Products</option>
              <option value="organic">Organic Products</option>
              <option value="farm">Farm House</option>
              <option value="harvest">Harvest Incentive</option>
              <option value="vegetable">Vegetable Firms</option>
              <option value="water">Water Management</option>
            </select>
          </div>

          <label
            htmlFor="message"
            className="block mt-4 ml-2 text-sm font-medium text-gray-700"
          >
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 w-full h-[200px] border border-gray-300 rounded-md"
            style={{ resize: "none" }}
          ></textarea>
          <div className="mt-4">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              required={true}
              className="mr-2"
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-700">
              Save my name and email in this browser for the next time I
              comment.
            </label>
          </div>
          <button type="submit" className="submitButton">
            submit
          </button>
        </form>

        <div className="last-imgDiv mt-8 md:mt-0 lg:ml-10 lg:mt-5">
          <img
            className="final-img rounded-md cursor-pointer w-[600px] h-[600px]"
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/10/Contact-1.jpg"
            alt=""
          />
        </div>
      </section>

      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 md:px-6  ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
