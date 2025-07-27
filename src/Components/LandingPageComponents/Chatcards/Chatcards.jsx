import React, { useRef } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import userprofile from "../../../assets/images/userprofile.png"; 

const testimonials = [
  {
    name: "Jacob",
    title: "Tradie Boost Agency (Melbourne)",
    text: "“I've Tried 6 CRMs. Nothing Is This Fast. We Grew From 3 To 12 Clients In 2 Months Using MARVO.”",
    img: userprofile,
    rating: 4,
  },
  {
    name: "Sneha",
    title: "Freelance Marketer (Delhi)",
    text: "“Honestly, It's Like Having A Mini-Team. Clients Think I'm Super Organized... It's Just MARVO Doing The Work.”",
    img: userprofile,
    rating: 5,
  },
  {
    name: "Ryan",
    title: "BlueSky Roofing (Sydney)",
    text: "“We've Booked 40% More Jobs In 3 Months. MARVO Handles The Follow-Up — I Just Show Up And Quote.”",
    img: userprofile,
    rating: 4,
  },
  {
    name: "Aditi",
    title: "Marketing Consultant (Bangalore)",
    text: "“MARVO helped me scale my freelancing operations and client management efficiently.”",
    img: userprofile,
    rating: 5,
  },
];

export default function Chatcards() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 py-12 px-4 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        What People Say
      </h2>

      <div className="relative w-full max-w-6xl">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll("left")}
          className="hidden md:flex items-center justify-center p-3 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-600 hover:text-white transition absolute -left-8 top-1/2 -translate-y-1/2 z-10 shadow-md cursor-pointer"
        >
          <FaArrowLeft />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 h-[300px] overflow-x-auto overflow-y-hidden scroll-smooth px-4 md:px-0"
          onWheel={(e) => {
            e.preventDefault();
            scrollContainerRef.current.scrollLeft += e.deltaY;
          }}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {/* Hide scrollbar in WebKit */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white h-[250px] rounded-xl shadow-md p-6 min-w-[280px] max-w-xs flex-shrink-0 relative flex flex-col "
            >
              <div className="flex flex-row items-center  gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full mb-3 object-cover"
                />
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={`mx-0.5 ${
                        idx < t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-baseline">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500 mb-4">{t.title}</p>
              </div>
              <p className="text-gray-700 w-[95%] text-sm">{t.text}</p>

              {/* Tail */}
              <div className="absolute -bottom-2 left-[86%] transform -translate-x-1/2 w-[23px] h-5 bg-white rotate-45 shadow-md" />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll("right")}
          className="hidden md:flex items-center justify-center p-3 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-600 hover:text-white transition absolute -right-8 top-1/2 -translate-y-1/2 z-10 shadow-md cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
