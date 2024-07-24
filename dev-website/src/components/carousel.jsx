import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import ArrowR from "/arrow-fill-right.svg";
import ArrowL from "/arrow-fill-left.svg";


const slides = [
  {image: "src/assets/Carousel/living-house.png",
    details: "Living Room",
  },
  {image: "src/assets/Carousel/house-apartment.png",
    details: "House Apartment",
  },
  {image: "src/assets/Carousel/house-villa.png",
    details: "House Villa",
  },
  {image: "src/assets/Carousel/office-floor.png",
    details: "Office Floor",
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(),
    onSwipedRight: () => goToPreviousSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto my-5" {...handlers}>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center"
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full flex-shrink"
              />
              <div className="bg-transparent backdrop-brightness-50 w-full py-4 absolute bottom-0">
                <p className="font-bold text-xl text-center text-white">{slide.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
      >
        <img src={ArrowL} className="w-8" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
      >
        <img src={ArrowR} className="w-8" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center -mb-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 m-1 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

