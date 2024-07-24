import React, { useState } from "react";
import bristol from "../assets/Expertise/bristol.png";
import fairview0 from "../assets/Expertise/fairview-0-mobile.png";
import fairview1 from "../assets/Expertise/fairview-1-mobile.png";
import salem from "../assets/Expertise/salem.png";
import madison from "../assets/Expertise/madison.png";
import Button from "./button";



const ImageToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="grid">
      {isVisible && (
        <div className="grid sm:grid-cols-2">
          <img src={bristol} className="w-full" />
          <img src={fairview0} className="w-full" />
          <img src={fairview1} className="w-full" />
          <img src={salem} className="w-full" />
          <img src={madison} className="w-full" />
        </div>
      )}
      <button
        onClick={toggleVisibility}
        className="mx-auto my-4 px-5 py-2 border-2 font-montserrat border-black hover:bg-black hover:text-white lg:hidden"
      >
        {isVisible ? "Hide" : "Load"} More
      </button>
    </div>
  );
};

export default ImageToggle;
