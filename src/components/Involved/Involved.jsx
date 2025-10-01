import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Involved = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen flex items-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2022/07/05/08/41/agriculture-7302617_1280.jpg"
            alt="Farm Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center text-white absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Get Involved</h1>
          <p className="text-lg mt-4">
            Agricultural producers like you are the backbone of what we do.
            You’re not only who we serve, but who we learn from. We rely on your
            expertise to help us develop programs and offer services that best
            suit local needs. Your relationships with other producers in your
            community help us expand our reach to ensure all farmers, ranchers
            and forest landowners have access to available USDA programs.
          </p>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-8">
            Join Now
          </button>
        </div>
      </section>
      <div className="md:px-6  px-3">
        {/* Volunteer Opportunities Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Discover Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer Opportunity 1 */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src="https://cdn.pixabay.com/photo/2018/06/29/22/45/wheat-3506758_1280.jpg"
                alt="Volunteer at a local farm"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Help at a Local Farm</h4>
              <p className="text-gray-700">
                Lend a hand with planting, harvesting, animal care, and more.
              </p>
            </div>

            <div className="rounded-lg shadow-md p-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/01/02/00/40/green-1117267_1280.jpg"
                alt="Educate others about agriculture"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">
                Educate Others about Agriculture
              </h4>
              <p className="text-gray-700">
                Share your knowledge about agriculture with schools,
                communities, or fairs.
              </p>
            </div>

            <div className="rounded-lg shadow-md p-4">
              <img
                src="https://cdn.pixabay.com/photo/2014/11/26/15/33/man-546322_1280.jpg"
                alt="Advocate for sustainable agriculture"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">
                Advocate for Sustainable Agriculture
              </h4>
              <p className="text-gray-700">
                Support policies that promote sustainable farming practices for
                a greener future.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Stay Informed: Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src="https://cdn.pixabay.com/photo/2014/06/18/13/56/tractor-371250_1280.jpg"
                alt="Upcoming Event 1"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Agriculture Symposium</h4>
              <p className="text-gray-700">
                Join us for an insightful symposium on the latest trends in
                agriculture.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Date: January 15, 2024
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                View Event Details
              </button>
            </div>

            {/* Event Card 2 */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/25/16/18/agriculture-8275498_1280.jpg"
                alt="Upcoming Event 2"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Farmers Market Festival</h4>
              <p className="text-gray-700">
                Experience the best local produce and crafts at our Farmers
                Market Festival.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Date: February 20, 2024
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                View Event Details
              </button>
            </div>
          </div>
        </section>

        {/* Lead Locally Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Lead Locally</h2>

          <div className="flex flex-wrap justify-center">
            {/* Research and Promotion Program Boards */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Research and Promotion Program Boards
              </h3>
              <p className="text-gray-700 mb-4">
                Be a voice for your industry by serving on a Research and
                Promotion Program Board. These programs, which are overseen by
                USDA Agricultural Marketing Service, focus on research,
                marketing, and consumer outreach efforts that improve, maintain,
                and develop opportunities for agricultural commodities. There
                are 22 Research and Promotion programs serving a variety of
                commodity industries, from eggs to soybeans, lumber to lamb.
              </p>
              <div className="flex items-center justify-end mr-4">
                <span className="text-green-500 underline mr-2">
                  Learn More
                </span>
                <FaArrowRight className="text-green-500" />
              </div>
            </div>

            {/* 4-H */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-2xl font-bold mb-2">4-H</h3>
              <p className="text-gray-700 mb-4">
                Be a part of 4-H and engage in hands-on learning experiences
                that promote leadership, citizenship, and life skills. Join
                clubs, participate in projects, and make a positive impact in
                your community.
              </p>
              <div className="flex items-center justify-end mr-4">
                <span className="text-green-500 underline mr-2">
                  Learn More
                </span>
                <FaArrowRight className="text-green-500" />
              </div>
            </div>

            {/* FFA */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-2xl font-bold mb-2">FFA</h3>
              <p className="text-gray-700 mb-4">
                Join Future Farmers of America (FFA) to develop your potential
                for premier leadership, personal growth, and career success
                through agricultural education. Engage in activities that
                enhance your agricultural knowledge and leadership skills.
              </p>
              <div className="flex items-center justify-end mr-4">
                <span className="text-green-500 underline mr-2">
                  Learn More
                </span>
                <FaArrowRight className="text-green-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Community Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Join Our Agriculture Community
          </h2>
          <div className="text-center text-gray-700">
            <p className="mb-4">
              Join our community and enjoy networking, collaboration, exclusive
              resources, and events.
            </p>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
              Join Now
            </button>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-12 bg-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-gray-700 mb-2">Email: example@example.com</p>
              <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
            </div>
            <div className="col-span-2">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-lg mx-auto"
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none h-40 resize-none"
                      id="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Involved;
