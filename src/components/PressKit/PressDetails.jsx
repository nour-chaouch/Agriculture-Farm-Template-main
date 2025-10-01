// PressDetails.js

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import pressKitData from "./pressData";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import compoheaderimg from "../../images/contactus1.jpg";
import PressCard from "./PressCard";
import CompoHeader from "../common/CompoHeader";

const PressDetails = () => {
  const { id } = useParams();
  const press = pressKitData[Number(id)];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!press) {
    return <div>Press not found</div>;
  }

  return (
    <div>
      <CompoHeader name="press detail" image={compoheaderimg} />

      <div className="max-w-4xl mx-auto mt-12">
        <img
          className="w-full h-64 object-cover object-center mb-6"
          src={`https://picsum.photos/200/300?image=${Number(id) + 999}`}
          alt={`Press Kit ${press.id}`}
        />
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {press.title}
          </h2>
          <p className="text-sm text-gray-600 mt-2">Date: {press.date}</p>
          <p className="text-sm text-gray-600 mb-2">Author: {press.author}</p>
          <p className="text-sm text-gray-600 mb-6">{press.description}</p>
          <div className="w-full mt-14">
            <h2 className="md:text-5xl text-4xl font-semibold my-8">
              About press
            </h2>
            <p className="opacity-[.8] mb-8 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              porttitor dolor eu fringilla tristique. Curabitur eget velit
              facilisis, egestas diam sed, ultrices dolor. Ut quis suscipit
              metus, non aliquet neque. Quisque porta consectetur luctus.
              Praesent eros tortor, sagittis ut magna a, venenatis ultrices
              enim. Mauris id commodo nibh. Integer a rhoncus eros, ac lobortis
              felis. Aenean convallis luctus augue.
            </p>
            <p className="opacity-[.8] mb-8 text-[16px]">
              Phasellus vitae dapibus neque. Sed ac augue viverra, volutpat erat
              sed, aliquam turpis. Quisque commodo metus quis ex condimentum
              maximus. Sed eget dui pharetra, ornare ex lamcorpe, vulputate
              sapien. Maecenas quis fringilla enim. Sed sodales ultricies orci,
              a vehicula nisl tincidunt et. Vestibulum id tellus lectus. Nam
              arcu risus, luctus vitae pulvinar blandit, aliquam non lacus.
              Aliquam id turpis semper.
            </p>
          </div>
          <div className="my-6">
            <p className="font-bold mb-4">Share this press release:</p>
            <div className="social-icons flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl mx-2" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl mx-2" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-3xl mx-2" />
              </a>
            </div>
          </div>
          <div className="related-press-container my-8">
            <h2 className="text-2xl font-bold mb-4">Related Press Releases</h2>
            <div className="flex flex-wrap gap-4">
              {[...new Array(3)].map(() => (
                <div className="w-full md:w-[31%]" key={press.id}>
                  <div className="bg-white border border-gray-300 rounded-md overflow-hidden transition-transform transform hover:scale-105">
                    <img
                      src={`https://picsum.photos/200/300?image=${
                        press.id + 999
                      }`}
                      alt={`Related Press ${press.id}`}
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold mb-2">
                        Related Press Title
                      </p>
                      <p className="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Additional details can be added here */}
        </div>
      </div>
    </div>
  );
};

export default PressDetails;
