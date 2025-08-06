import React from "react";
import { motion } from 'framer-motion';
import background_circle from "../../../assets/images/background_circle.png"; // <-- your background circles image

const Trynow = () => {
  return (
    <div className="relative flex justify-center items-center py-12 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden">


      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-[700px]"
      >
        {/* Background Image */}
        <img
          src={background_circle}
          alt="background circles"
          className="absolute top-20 left-[985px] transform -translate-x-1/2 w-[200px] sm:w-[250px] opacity-80 pointer-events-none"
        />

        {/* Heading */}
        <h2 className="text-[24px] sm:text-[31px] leading-[32px] sm:leading-[42px] font-semibold text-gray-800 text-center z-10">
          You Can Also Learn It Easily!
        </h2>
        <p className="mt-1 text-[24px] sm:text-[31px] leading-[32px] sm:leading-[42px] text-black text-center font-semibold z-10">
          Watch Demo,
          <span className="relative inline-block ml-1">
            <span className="relative z-10 p-2  text-black"> Right Now</span>
            <span className="absolute inset-0 -skew-x-12 bg-blue-300 z-0"></span>
          </span>
        </p>

        {/* Video/Demo Container */}
        <div className="mt-6 w-full max-w-[600px] h-[200px] sm:h-[300px] bg-blue-100 border-2 border-blue-400 rounded-xl flex items-center justify-center relative z-10 shadow-md">
          <button
            className="bg-blue-600 text-white text-sm sm:text-lg font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow hover:bg-blue-700 transition animate-[pulseScale_1.8s_ease-in-out_infinite]"
            style={{
              animation: "pulseScale 1.8s ease-in-out infinite",
            }}
          >
            Step-By-Step <br /> Try It Now
          </button>
        </div>

        {/* Bottom Text & Button */}
        <div className="mt-6 flex flex-col md:flex-row items-center md:justify-between gap-4 z-10 w-full max-w-[600px]">
          <p className="text-black text-center md:text-left text-sm sm:text-base font-semibold">
            Launch your first multichannel campaign in under 3 minutes. Get started
            with Skylead for free.
          </p>
          <button className="w-100 md:w-[354px] bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition">
            Launch Your Campaign
          </button>
        </div>

        {/* Bottom Background Circle */}
        <img
          src={background_circle}
          alt="background circles"
          className="absolute top-[320px] left-[400px] transform -translate-x-1/2 w-[120px] sm:w-[157px] h-[120px] sm:h-[147px] opacity-80 pointer-events-none"
        />

        {/* Inline Keyframes */}
        <style>
          {`
          @keyframes pulseScale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
        `}
        </style>
      </motion.div>
    </div>
  );
};

export default Trynow;
