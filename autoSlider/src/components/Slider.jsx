import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const goPrev = () => {
    if (currentSlide == 0) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goNext = () => {
    if (currentSlide == 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const autoSlide = () => {
    if (currentSlide == 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  setTimeout(() => {
    autoSlide();
  }, 3000);

  return (
    <>
      <div className="h-[500px] w-[1000px] m-auto mt-16 relative overflow-hidden">
        <button className="absolute z-10 text-white top-1/2" onClick={goPrev}>
          <FaAngleLeft size={50} />
        </button>
        <button
          className="absolute z-10 text-white top-1/2 right-0"
          onClick={goNext}
        >
          <FaAngleRight size={50} />
        </button>
        <div
          className="flex transition-transform duration-1000 ease-in-out transform "
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <img
            className=""
            src="https://picsum.photos/id/237/1000/500
          "
            alt="pic1"
          />
          <img
            className=""
            src="https://picsum.photos/id/238/1000/500
          "
            alt="pic2"
          />
          <img
            className=""
            src="https://picsum.photos/id/239/1000/500
          "
            alt="pic3"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
