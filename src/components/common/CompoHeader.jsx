import React from "react";
import "./CompoHeader.css";

const CompoHeader = ({ name, image }) => {
  return (
    <div className="relative text-center commo-header-img ">
      <img className="contactimage" src={image} alt="Contact Us" />
      <div className="links">
        <a
          className="hover:text-yellow-400  transition-all .2s ease-in-out"
          href="/"
        >
          Home
        </a>
        <h1 className="transition-all .2s ease-in-out">{name}</h1>
      </div>
      <h1 className="textOnImageStyle">{name}</h1>
    </div>
  );
};

export default CompoHeader;
