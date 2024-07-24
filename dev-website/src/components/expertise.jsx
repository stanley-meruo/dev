import React from "react";
import LoadMore from "./image-toggle";
import washington from "../assets/Expertise/washington.png";
import franklin from "../assets/Expertise/franklin.png";
import clinton from "../assets/Expertise/clinton.png";
import greenville from "../assets/Expertise/greenville.png";
import bristol from "../assets/Expertise/bristol.png";
import fairview0 from "../assets/Expertise/fairview-0-mobile.png";
import fairview1 from "../assets/Expertise/fairview-1-mobile.png";
import salem from "../assets/Expertise/salem.png";
import madison from "../assets/Expertise/madison.png";


const Expertise = () => {
  return (
    <>
      <div className="grid mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <img src={washington} className="w-full" />
        <img src={franklin} className="w-full" />
        <img src={clinton} className="w-full" />
        <img src={greenville} className="w-full" />
        <img src={bristol} className="w-full hidden lg:block" />
        <img src={fairview0} className="w-full hidden lg:block" />
        <img src={fairview1} className="w-full hidden lg:block" />
        <img src={salem} className="w-full hidden lg:block" />
        <img src={madison} className="w-full hidden lg:block" />
      </div>
    </>
  );
};
export default Expertise;
