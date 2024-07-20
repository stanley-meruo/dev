import React from "react";
import Header from "../components/header";
import Button from "../components/button"
import hero from "../assets/hero.png"

const Home = () => {

    return (
      <>
        <Header />
        <img src={hero} />
        <div className="text-center px-6">
          <p className="font-medium text-3xl my-4">
            Trusted Real Estate Property for you
          </p>
          <p className="text-gray-600">
            Looking for your dream house or property. Search here and select
            your best one from more than 1 million listing
          </p>
          <div className="flex justify-center gap-4 my-6">
            <Button
              title="Discover More"
              type="button"
              className="bg-black text-white py-3 px-5 hover:bg-white hover:text-black"
            />
            <Button
              title="Learn More"
              type="button"
              className="bg-white py-3 px-5 hover:bg-black hover:text-white"
            />
          </div>
          <div className="flex items-center justify-center gap-4 text-sm font-medium border-t-0 shadow-lg drop-shadow-lg shadow-gray-300 my-8">
            <p className="grid">
              35+<span className="text-[10px]">YEARS IN BUSINESS</span>
            </p>
            <p className="grid">
              200+M<span className="text-[10px]">DEAL VOLUME IN PAST 12 YEARS</span>
            </p>
            <p className="grid">
              $1B<span className="text-[10px]">IN TOTAL SALES</span>
            </p>
          </div>
        </div>
      </>
    );
};

export default Home;
