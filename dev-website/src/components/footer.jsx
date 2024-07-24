import React from "react";
import logo from "/WESTON-footer.svg"
import Button from "./button";
import email from "/message.svg";
import SocialMedia from "./social-media";


const Footer = () => {

    return (
      <>
        <div className="bg-black text-white p-4">
          <div className="text-center py-8">
            <img src={logo} className="mx-auto my-4" />
            <p className=" text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              ulla
            </p>
          </div>
          <div className="py-5">
            <p className="text-xs">
              For exclusive news and market updates sign up for our newsletter
            </p>
            <div className="flex gap-4 py-4 relative">
              <input
                type="email"
                id="text"
                placeholder="Enter Your Email Address"
                className="text-xs text-center w-full sm:text-left"
              />
              <div className="absolute bottom-7 left-2">
                <img src={email} className="w-5" />
              </div>
              <Button
                title="SUBMIT"
                type="button"
                className="bg-black text-white text-sm py-2 px-5 hover:bg-white hover:text-black border-2 border-white mx-auto"
              />
            </div>
          </div>
            <div className="flex justify-between text-sm">
               <div className="grid gap-4 mt-px">
                  <p>CONTACT US</p>
                  <p>(+234)70 6345 5405</p>
                  <p>Contact@dormain.com</p>
                  <p>24 Estate View, Florida, <br/> New York, USA</p>
               </div>
               <div>
                 <SocialMedia/>
               </div>
            </div>
            <div className="text-xs my-4 text-gray-300">
               <div className="border border-white w-full mb-2"></div>
               <p>Copyright 2024 @Weston All Right Resreved.</p>
            </div>
            
        </div>
      </>
    );
};
export default Footer;