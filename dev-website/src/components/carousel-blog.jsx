import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Button from './button';
import ArrowR from '/arrow-r-black.svg';
import ArrowL from '/arrow-l-black.svg';


const slides = [
  {
    image: "src/assets/Carousel-Blog/estate-1.png",
    content_0: "LUXURY REAL ESTATE MARKET COMPARISON IN LOS ANGELES",
    content_1:
      "We have the oppoturnity to interview John Verhoff owner of Plumbing  Nerds. They are a full service Plumbing Company Serving the Southwest Florida Area. Discover how he grew to 10 trucks and is up over $800k year over year (on pace for $2.7M this year). He shares some amazing insights on how they keep the ..",
  },
  {
    image: "src/assets/Carousel-Blog/estate-2.png",
    content_0: "LUXURY REAL ESTATE MARKET COMPARISON IN LOS ANGELES",
    content_1:
      "We have the oppoturnity to interview John Verhoff owner of Plumbing  Nerds. They are a full service Plumbing Company Serving the Southwest Florida Area. Discover how he grew to 10 trucks and is up over $800k year over year (on pace for $2.7M this year). He shares some amazing insights on how they keep the ..",
  },
  {
    image: "src/assets/Carousel-Blog/estate-3.png",
    content_0: "LUXURY REAL ESTATE MARKET COMPARISON IN LOS ANGELES",
    content_1:
      "We have the oppoturnity to interview John Verhoff owner of Plumbing  Nerds. They are a full service Plumbing Company Serving the Southwest Florida Area. Discover how he grew to 10 trucks and is up over $800k year over year (on pace for $2.7M this year). He shares some amazing insights on how they keep the ..",
  },
];

const Carouselblog = () => {
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto my-5 lg:hidden" {...handlers}>
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
              <div className="p-5 text-center">
                <p className="text-xl font-medium">{slide.content_0}</p>
                <p className="text-gray-600 py-4">{slide.content_1}</p>
                <div className="grid text-sm font-medium font-montserrat">
                  <Button
                    title="LEARN MORE"
                    type="button"
                    className="bg-white text-black py-3 px-8 hover:bg-black  hover:text-white border-2 border-black mx-auto my-4 lg:flex"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPreviousSlide}
        className="absolute top-[55%] -left-2 transform -translate-y-1/2 sm:-left-10 lg:hidden"
      >
        <img src={ArrowL} className="w-8" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-[55%] -right-2 transform -translate-y-1/2 lg:hidden sm:-right-10"
      >
        <img src={ArrowR} className="w-8" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2">
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

export default Carouselblog;
