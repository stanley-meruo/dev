import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import ArrowR from "/arrow-r-black.svg";
import ArrowL from "/arrow-l-black.svg";
import Quote0 from "/quote-0.svg";
import Quote1 from "/quote-1.svg";



const slides = [
  {
    image: "src/assets/John.png",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta esse, odio voluptas et harum minima cupiditate ex, sequi voluptates itaque quos? Inventore et saepe, magnam blanditiis libero sunt esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente odio tempore earum minima molestias, at voluptatum magnam perferendis rem esse aliquam dolorum necessitatibus deserunt impedit incidunt fuga accusamus commodi blanditiis. Lorem ipsum dolor sitamet consectetur, adipisicing elit. Animi error nesciunt accusantium praesentium explicabo esse id quos molestias",
    name: "S.T - JOHN",
    location: "-london",
  },
  {
    image: "src/assets/John.png",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta esse, odio voluptas et harum minima cupiditate ex, sequi voluptates itaque quos? Inventore et saepe, magnam blanditiis libero sunt esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente odio tempore earum minima molestias, at voluptatum magnam perferendis rem esse aliquam dolorum necessitatibus deserunt impedit incidunt fuga accusamus commodi blanditiis. Lorem ipsum dolor sitamet consectetur, adipisicing elit. Animi error nesciunt accusantium praesentium explicabo esse id quos",
    name: "S.T - JOHN",
    location: "-london",
  },
  {
    image: "src/assets/John.png",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta esse, odio voluptas et harum minima cupiditate ex, sequi voluptates itaque quos? Inventore et saepe, magnam blanditiis libero sunt esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente odio tempore earum minima molestias, at voluptatum magnam perferendis rem esse aliquam dolorum necessitatibus deserunt impedit incidunt fuga accusamus commodi blanditiis. Lorem ipsum dolor sitamet consectetur, adipisicing elit. Animi error nesciunt accusantium praesentium explicabo esse id quos",
    name: "S.T - JOHN",
    location: "-london",
  },
  {
    image: "src/assets/John.png",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta esse, odio voluptas et harum minima cupiditate ex, sequi voluptates itaque quos? Inventore et saepe, magnam blanditiis libero sunt esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente odio tempore earum minima molestias, at voluptatum magnam perferendis rem esse aliquam dolorum necessitatibus deserunt impedit incidunt fuga accusamus commodi blanditiis. Lorem ipsum dolor sitamet consectetur, adipisicing elit. Animi error nesciunt accusantium praesentium explicabo esse id quos",
    name: "S.T - JOHN",
    location: "-london",
  },
];

const Testimony = () => {
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
    <div className="relative w-full mx-auto my-5" {...handlers}>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center lg:flex-row-reverse lg:gap-10 lg:my-6 lg:p-8 xl:gap-16"
            >
              <div className="text-center lg:text-left lg:w-3/5">
                <div className="flex -mb-8 mx-2 lg:mb-1">
                  <img src={Quote0} className="w-4 lg:w-6" />
                  <img src={Quote0} className="w-4 lg:w-6" />
                </div>
                <p className="text-gray-600 py-4 px-6 indent-8">
                  {slide.comment}
                </p>
                <div className="flex justify-end -mt-8 mx-2 lg:mt-1 ">
                  <img src={Quote1} className="scale-y-[-1] w-4 lg:w-6" />
                  <img src={Quote1} className="scale-y-[-1] w-4 lg:w-6" />
                </div>
                <div className="py-4 lg:ml-6">
                  <p className="">{slide.name}</p>
                  <p className="text-gray-600">{slide.location}</p>
                </div>
              </div>
              <div>
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="w-full flex-shrink lg:w-[500px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 -left-16 transform -translate-y-1/2"
      >
        <img src={ArrowL} className="w-8 hidden lg:block lg:w-12" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 -right-16 transform -translate-y-1/2"
      >
        <img src={ArrowR} className="w-8 hidden lg:block lg:w-12" />
      </button>
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center lg:mb-2">
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

export default Testimony;
