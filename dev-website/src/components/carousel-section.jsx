import React from "react";
import LivingRoom from "../assets/Carousel/living-house.png";
import HouseApartment from "../assets/Carousel/house-apartment.png";
import HouseVilla from "../assets/Carousel/house-villa.png";
import OfficeFloor from "../assets/Carousel/office-floor.png";



const CarouselSection = () => {

    return (
      <>
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-8 md:gap-y-8 lg:grid-cols-4">
          <div className="sm:mx-auto">
            <img src={LivingRoom} />
            <div className="sm:relative sm:bg-transparent sm:backdrop-brightness-50 sm:w-full sm:py-4 sm:bottom-[60px]">
              <p className="font-bold text-xl text-center text-white">
                Living Room
              </p>
            </div>
          </div>
          <div className="sm:mx-auto">
            <img src={HouseApartment} />
            <div className="sm:relative sm:bg-transparent sm:backdrop-brightness-50 sm:w-full sm:py-4 sm:bottom-[60px]">
              <p className="font-bold text-xl text-center text-white">
                House Apartment
              </p>
            </div>
          </div>
          <div className="sm:mx-auto">
            <img src={HouseVilla} />
            <div className="sm:relative sm:bg-transparent sm:backdrop-brightness-50 sm:w-full sm:py-4 sm:bottom-[60px]">
              <p className="font-bold text-xl text-center text-white">
                House Villa
              </p>
            </div>
          </div>
          <div className="sm:mx-auto">
            <img src={OfficeFloor} />
            <div className="sm:relative sm:bg-transparent sm:backdrop-brightness-50 sm:w-full sm:py-4 sm:bottom-[60px]">
              <p className="font-bold text-xl text-center text-white">
                Office Floor
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
export default CarouselSection;