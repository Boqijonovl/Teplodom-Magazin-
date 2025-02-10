import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextSlide, setSlide } from "../../features/category/carouselSlice";

const CustomCarousel = () => {
  const dispatch = useDispatch();
  const { images, currentIndex } = useSelector((state) => state.carousel);

  // ✅ Har 3 soniyada slayd avtomatik o'zgaradi
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, 3000);

    return () => clearInterval(interval); // Cleanup effect
  }, [dispatch]);

  return (
    <div className="container mx-auto px-[30px] sm:px-[30px] lg:px-[150px]">
      <div className="container relative w-full mx-auto pt-8">
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full object-cover transition-transform duration-500"
          />
        </div>

        {/* ✅ Indicatorlar past chapda joylashgan va bosilganda tegishli slaydga o'tadi */}
        <div className="absolute sm:bottom-14 bottom-[-30px] left-1/2 sm:left-16 transform -translate-x-1/2 sm:translate-x-0 flex space-x-1 sm:space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => dispatch(setSlide(index))}
              className={`h-1  rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index
                  ? "bg-gray-500 w-6 sm:w-8"
                  : "bg-gray-400   w-4 "
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
