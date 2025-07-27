import React from "react";

const logos = [1, 2, 3, 4, 5, 6]; // just placeholders

const Freelancers = () => {
  return (
    <div className="py-12 px-6">
      {/* Heading */}
      <h2 className="text-center text-lg md:text-xl font-semibold text-gray-800">
        Loved by Freelancers, Agencies & Roofers
      </h2>

      {/* Logos Row */}
      <div className="mt-6 flex flex-wrap justify-center items-center gap-8">
        {logos.map((_, index) => (
          <div
            key={index}
            className="w-[185px] h-[100px] bg-[#A9A9A9] rounded-md shadow-sm"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Freelancers;
