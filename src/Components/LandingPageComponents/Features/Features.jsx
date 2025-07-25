import React from "react";
import templet from "../../../assets/images/templet.png";
import csv from "../../../assets/images/csv.png";
import dashboard from "../../../assets/images//dashboard.png";

const Features = () => {
  return (
    <div className="bg-[#E0F0FF] py-12 px-4">
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-[8px] max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-[35px] font-bold text-gray-900">
          Getting Started ={" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-black">Stupid Easy</span>
            <span className="absolute inset-0 -skew-x-12 bg-blue-300 z-0"></span>
          </span>
        </h2>
        <p className="mt-3 text-gray-700 text-[16px] md:text-[18px] font-medium">
          We know tech sucks when it's confusing. That’s why MARVO is made to be simple.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Feature 1 */}
        <div
          className="bg-white h-auto md:h-[370px] w-full sm:w-[320px] rounded-lg shadow-md p-3 flex flex-col items-center text-center
                     border-2 border-transparent hover:border-blue-400 
                     hover:shadow-lg hover:shadow-blue-200 
                     transition-all duration-300 ease-in-out transform hover:scale-105 mx-auto"
        >
          <h3 className="w-[85%] text-[18px] md:text-[22px] font-bold text-blue-600 mb-3 border-b-2 border-blue-600">
            Ready Templates
          </h3>
          <img
            src={templet}
            alt="Templates"
            className="w-[180px] md:w-[256px] h-[200px] md:h-[272px] object-contain mt-2"
          />
        </div>

        {/* Feature 2 */}
        <div
          className="bg-white h-auto md:h-[370px] w-full sm:w-[320px] rounded-lg shadow-md p-3 flex flex-col items-center text-center
                     border-2 border-transparent hover:border-blue-400 
                     hover:shadow-lg hover:shadow-blue-200 
                     transition-all duration-300 ease-in-out transform hover:scale-105 mx-auto"
        >
          <h3 className="w-[85%] text-[18px] md:text-[22px] font-bold text-blue-600 mb-3 border-b-2 border-blue-600">
            Bulk CSV Upload
          </h3>
          <img
            src={csv}
            alt="Bulk CSV Upload"
            className="w-[180px] md:w-[256px] h-[200px] md:h-[272px] object-contain mt-2"
          />
        </div>

        {/* Feature 3 */}
        <div
          className="bg-white h-auto md:h-[370px] w-full sm:w-[320px] rounded-lg shadow-md p-3 flex flex-col items-center text-center
                     border-2 border-transparent hover:border-blue-400
                     hover:shadow-lg hover:shadow-blue-200 
                     transition-all duration-300 ease-in-out transform hover:scale-105 mx-auto"
        >
          <h3 className="w-[85%] text-[18px] md:text-[22px] font-bold text-blue-600 mb-3 border-b-2 border-blue-600">
            Clean, Friendly UI
          </h3>
          <img
            src={dashboard}
            alt="Clean Friendly UI"
            className="w-[180px] md:w-[256px] h-[210px] md:h-[288px] object-contain mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
