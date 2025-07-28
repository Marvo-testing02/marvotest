import React from "react";
import robert from "../../../assets/images/robert.png";
import background_circle from "../../../assets/images/background_circle.png";
import { motion } from "framer-motion";
import EastIcon from "@mui/icons-material/East";

export default function Marvo() {
  return (
    <div>
      <div className="relative w-full min-h-screen bg-gradient-to-r from-[#f9f9fc] to-[#eff3ff] overflow-hidden flex items-center justify-center px-4 sm:px-6 py-10">
        <div className="absolute top-100 left-0 -translate-y-1/2 w-[500px] h-[441px] overflow-hidden pointer-events-none">
          {/* Circles */}
          <div className="absolute left-[-157px] top-[98px] w-[314px] h-[304px] rounded-full border-2 border-[#e6e6fa] animate-pulse-slow"></div>
          <div className="absolute left-[-134px] top-[119px] w-[269px] h-[261px] rounded-full border-2 border-[#e6e6fa] animate-pulse-slower"></div>
          <div className="absolute left-[-113px] top-[140px] w-[227px] h-[220px] rounded-full border-2 border-[#e6e6fa] animate-pulse-slowest"></div>
        </div>

        <div className="z-10 max-w-7xl w-full flex flex-col items-center justify-between gap-12">
          <div className="w-full text-left lg:text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight whitespace-normal">
              So, What Exactly is{" "}
              <span className="relative inline-block px-2 py-2">
                <span className="relative z-10 text-black-600"> MARVO?</span>
                <span className="absolute inset-0 -skew-x-12 bg-blue-300 z-0"></span>
              </span>
            </h2>
          </div>

          {/* Responsive Stack on Mobile */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-13 md:w-full items-center justify-center">
            {/* Text Content */}
            <div className="text-left w-full sm:w-[90%] md:w-[648px]">
              <div>
                <p className="text-lg text-gray-700 mt-4 font-medium">
                  Think of MARVO as your{" "}
                  <span className="font-bold">
                    AI-powered marketing manager
                  </span>{" "}
                  that never takes a day off. <br />
                  Built by entrepreneurs (not just coders), it solves one major
                  headache:
                </p>
                <p className="text-lg text-[#1979FF] font-semibold mt-4">
                  “How do I handle leads and follow-ups without wasting my whole
                  day?”
                </p>
                <ul className="list-disc text-gray-800 flex flex-col font-semibold lg:font-normal gap-5 md:gap-0 lg:gap-0 justify-center mt-4 ml-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1979FF] mt-1">●</span>{" "}
                    Multi-platform messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1979FF] mt-1">●</span> Smart
                    follow-ups & replies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1979FF] mt-1">●</span> Import your
                    leads via CSV and start in minutes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1979FF] mt-1">●</span> Built for
                    people who don’t want complex tech
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Whether you're a freelancer, roofer, agency, or small biz
                  owner — this is built for you.
                </p>
                <button className="w-full sm:w-[184px] h-[49px] mt-6 bg-blue-600 text-white px-6 py-3 rounded-[10px] font-semibold text-[20px] flex items-center justify-center hover:bg-blue-700 transition duration-300">
                  Learn more{" "}
                  <span className="ml-2">
                    <EastIcon />
                  </span>
                </button>
              </div>
            </div>

            {/* Robot Image */}
            <div className="relative w-full sm:w-[80%] md:w-auto flex justify-center items-center">
              <style>
                {`
                @keyframes pulse-scale {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.15); }
                }
                .animate-pulse-scale {
                  animation: pulse-scale 2s ease-in-out infinite;
                }
                .animate-float {
                  animation: float 3s ease-in-out infinite;
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
              `}
              </style>

              {/* Background Circle */}
              <div className="ml-4 h-[100%] absolute top-0 left-0 w-[250px] sm:w-[300px] md:h-[280px] ">
                <img
                  src={background_circle}
                  alt="background circles"
                  className="absolute w-full h-full top-0 opacity-60 pointer-events-none animate-pulse-scale"
                />
              </div>

              {/* Robot */}
              <img
                src={robert}
                alt="Marvo Robot"
                className="w-[260px] sm:w-[400px] md:w-[567px] h-auto max-w-md mx-auto animate-float relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
