import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaGoogle,
  FaSnapchatGhost,
} from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import { FaQuora } from "react-icons/fa6";
import DashboardLaptop from "../../../assets/images/DashboardLaptop.png";

const bubbles = [

  { icon: <FaGoogle />, color: "bg-yellow-300", top: "-80px", left: "-250px", size: "w-16 h-16" },
  { icon: <FaWhatsapp />, color: "bg-green-500", top: "10px", left: "-290px", size: "w-10 h-10" },
  { icon: <FaInstagram />, color: "bg-gradient-to-r from-pink-500 to-yellow-500", top: "80px", left: "-200px", size: "w-14 h-14", link: "https://www.instagram.com/marvotesting02/" },
  { icon: <FaLinkedinIn />, color: "bg-blue-600", top: "150px", left: "-270px", size: "w-16 h-16" },
  { icon: <FaTwitter />, color: "bg-black", top: "220px", left: "-200px", size: "w-16 h-16" },
  { icon: <FaQuora />, color: "bg-red-600", top: "-60px", right: "-250px", size: "w-14 h-14" },
  { icon: <FaFacebookF />, color: "bg-blue-500", top: "10px", right: "-290px", size: "w-10 h-10" },
  { icon: <FaSnapchatGhost />, color: "bg-yellow-400", top: "190px", right: "-200px", size: "w-16 h-16" },
  { icon: <SiMessenger />, color: "bg-blue-600", top: "80px", right: "-270px", size: "w-14 h-14" },
  { icon: <FaTiktok />, color: "bg-gradient-to-r from-purple-500 to-pink-500", top: "240px", right: "-270px", size: "w-16 h-16" },

  { icon: <FaGoogle />, color: "bg-yellow-300", top: "-80px", left: "-250px", size: "w-16 h-16", mobileSize: "w-10 h-10" },
  { icon: <FaWhatsapp />, color: "bg-green-500", top: "10px", left: "-290px", size: "w-10 h-10", mobileSize: "w-8 h-8" },
  { icon: <FaInstagram />, color: "bg-gradient-to-r from-pink-500 to-yellow-500", top: "80px", left: "-200px", size: "w-14 h-14", mobileSize: "w-10 h-10" },
  { icon: <FaLinkedinIn />, color: "bg-blue-600", top: "150px", left: "-270px", size: "w-16 h-16", mobileSize: "w-10 h-10" },
  { icon: <FaTwitter />, color: "bg-black", top: "220px", left: "-200px", size: "w-16 h-16", mobileSize: "w-10 h-10" },
  { icon: <FaQuora />, color: "bg-red-600", top: "-60px", right: "-250px", size: "w-14 h-14", mobileSize: "w-10 h-10" },
  { icon: <FaFacebookF />, color: "bg-blue-500", top: "10px", right: "-290px", size: "w-10 h-10", mobileSize: "w-8 h-8" },
  { icon: <FaSnapchatGhost />, color: "bg-yellow-400", top: "190px", right: "-200px", size: "w-16 h-16", mobileSize: "w-10 h-10" },
  { icon: <SiMessenger />, color: "bg-blue-600", top: "80px", right: "-270px", size: "w-14 h-14", mobileSize: "w-10 h-10" },
  { icon: <FaTiktok />, color: "bg-gradient-to-r from-purple-500 to-pink-500", top: "240px", right: "-270px", size: "w-16 h-16", mobileSize: "w-10 h-10 mt-6" },

];

const initialPositions = [
  { top: "-20px", left: "-40px" }, { top: "30px", left: "-50px" },
  { top: "90px", left: "-30px" }, { top: "160px", left: "-40px" },
  { top: "210px", left: "-20px" }, { top: "-20px", right: "-40px" },
  { top: "30px", right: "-50px" }, { top: "90px", right: "-30px" },
  { top: "160px", right: "-40px" }, { top: "190px", right: "-40px" },
];

const HeroSocialCircle = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes bubbleFloat {
        0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
        50% { transform: translateY(-5px) translateX(3px) scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="relative mt-0 h-[600px] w-full flex flex-col justify-center items-center md:h-[700px] bg-gradient-to-b from-blue-100 to-white px-4 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
        Stop Wasting Time.
        <span className="relative inline-block">

          {/* <span className="relative z-10 text-black">Start Getting Results.</span> */}
          <span className="relative inline-block">
            <span className="relative z-10 text-black"> Start Getting Results.</span>
            <span className="absolute inset-0 -skew-x-12 bg-blue-300 z-0"></span>
          </span>
          <span className="absolute inset-0 -skew-x-12 bg-bg-blue-300  z-0"></span>

          <span className="relative z-10 text-black"> Start Getting Results.</span>
          <span className="absolute inset-0 -skew-x-12 bg-blue-300 z-0"></span>

        </span>
      </h1>
      <p className="mt-2 text-gray-700 text-sm md:text-base md:mb-6 md:mt-4">
        Marketing should work while you sleep. MARVO makes sure it does.
      </p>

      {/* Bubble Container */}
      <div
        className="relative mt-8 w-[200px] h-[160px] sm:w-[300px] sm:h-[250px] md:w-[550px] md:h-[280px] rounded-xl transition-all duration-300"
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
      >
        <img
          src={DashboardLaptop}
          alt="Center Box"
          className="w-full h-full object-contain"
        />
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className={`absolute rounded-full flex justify-center items-center
              text-white text-xl transition-all duration-700 ease-in-out z-30
              ${bubble.color} ${isMobile ? bubble.mobileSize : bubble.size} opacity-100
            `}
            style={{
              top: isMobile ? initialPositions[index].top : (hovered ? bubble.top : initialPositions[index].top),
              left: isMobile ? initialPositions[index].left : (hovered ? bubble.left : initialPositions[index].left),
              right: isMobile ? initialPositions[index].right : (hovered ? bubble.right : initialPositions[index].right),
              animation: hovered && !isMobile ? undefined : "bubbleFloat 4s ease-in-out infinite",
              transform: hovered || isMobile ? "scale(1.05)" : undefined,
            }}
          >

            {hovered && bubble.link ? (
              <a href={bubble.link} target="_blank" rel="noopener noreferrer">
                {bubble.icon}
              </a>
            ) : (
              hovered ? bubble.icon : null
            )}

            {/* Show icons only when mobile OR when hovered */}
            {(isMobile || hovered) && bubble.icon}

          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSocialCircle;
