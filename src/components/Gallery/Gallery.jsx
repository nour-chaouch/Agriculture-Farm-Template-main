import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import galleryHead from "../../images/gallaryHead.jpg";
import secImg from "../../images/TriasseaIcon.png";
import CompoHeader from "../common/CompoHeader";
import { media } from "./media";
import { IoClose } from "react-icons/io5";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./gallery.css";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleArrowClick = (direction) => {
    if (currentIndex !== null) {
      let newIndex =
        direction === "left"
          ? (currentIndex - 1 + media.length) % media.length
          : (currentIndex + 1) % media.length;
      setCurrentIndex(newIndex);
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <section>
        <CompoHeader name="Gallery" image={galleryHead} />
      </section>
      <section className="mt-20">
        <div className="md:ml-1 lg:ml-2 ">
          <span className="flex justify-center items-center gap-1">
            <img className="w-6" src={secImg} alt="" />
            <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
              Our Media
            </h3>
          </span>
          <h1
            className="form-hedding flex justify-center items-center"
            style={{ fontSize: "50px" }}
          >
            Gallery Section
          </h1>
        </div>
      </section>

      <section className="gallery-container">
        <div className="media-container">
          {media.map((el, index) => (
            <div
              className="media"
              key={index}
              onClick={() => handleImageClick(index)}
            >
              {el.type === "image" ? (
                <img src={el.url} alt="" />
              ) : (
                <video src={el.url} muted></video>
              )}
            </div>
          ))}
        </div>
        <div
          className="popup-media"
          style={{ display: currentIndex !== null ? "block" : "none" }}
        >
          <IoClose
            className="gallery-closeBtn hover:text-green-600 transition-all transform ease-linear duration-300"
            onClick={() => setCurrentIndex(null)}
          />
          {currentIndex !== null && currentIndex !== 0 && (
            <GoArrowLeft
              className="gallery-leftBtn hover:text-green-600 transition-all transform ease-linear duration-300"
              onClick={() => handleArrowClick("left")}
            />
          )}
          {currentIndex !== null && currentIndex !== media.length - 1 && (
            <GoArrowRight
              className="gallery-rightBtn hover:text-green-600 transition-all transform ease-linear duration-300"
              onClick={() => handleArrowClick("right")}
            />
          )}

          {currentIndex !== null && (
            <>
              {media[currentIndex].type === "video" ? (
                <video src={media[currentIndex].url} muted autoPlay controls />
              ) : (
                <img src={media[currentIndex].url} alt="" />
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
