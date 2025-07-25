import React from "react";
import FunnelImg from "../../../assets/images/MarketingImg.png"; // your side image
import BgCard from "../../../assets/images/Marketingcardimg.png"; // background image

const Marketingcard = () => {
  return (
    <div className="flex justify-center items-center mt-9 mb-9">
      <div
        className="w-[95%] sm:w-[90%] md:w-[80%] h-auto md:h-[300px] rounded-2xl text-white px-4 py-8 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between"
        style={{
          backgroundImage: `url(${BgCard})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col md:flex-row md:gap-[100px] lg:justify-between xl:justify-around  w-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center md:text-left max-w-full md:max-w-lg">
            <h2 className="text-xl sm:text-2xl md:text-[35px] font-bold">
              Let’s Automate Your Marketing
            </h2>
            <p className="mt-2 text-base sm:text-lg font-medium">
              You’ve got the hustle. <span className="font-bold">MARVO’s got the engine.</span>
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-200">
              Let it run your outreach, follow-ups, and client nurturing — while you focus on growing.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button className="bg-transparent border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Get a DEMO
              </button>
              <button className="bg-transparent border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Start free
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-8 md:mt-0 md:ml-8 flex justify-center md:justify-end">
            <img
              src={FunnelImg}
              alt="Funnel Illustration"
              className="w-32 sm:w-40 md:w-50 md:h-[250px] lg:w-72 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketingcard;
