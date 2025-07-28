// import React, { useState, useEffect } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaWhatsapp,
//   FaLinkedinIn,
//   FaTwitter,
//   FaTiktok,  
//   FaGoogle,
//   FaSnapchatGhost,
// } from "react-icons/fa";
// import { SiMessenger } from "react-icons/si";
// import { FaQuora } from "react-icons/fa6";

// const bubbles = [
//   // { icon: <FaGoogle />, color: "bg-yellow-300", top: "-60px", left: "-130px" },
//   { icon: <FaGoogle />, color: "bg-yellow-300", top: "-80px", left: "-250px" },

//   // { icon: <FaWhatsapp />, color: "bg-green-500", top: "10px", left: "-140px" },
//   { icon: <FaWhatsapp />, color: "bg-green-500", top: "10px", left: "-290px" },

//   // { icon: <FaInstagram />, color: "bg-gradient-to-r from-pink-500 to-yellow-500", top: "80px", left: "-110px" },
//   { icon: <FaInstagram />, color: "bg-gradient-to-r from-pink-500 to-yellow-500", top: "80px", left: "-200px" },


//   // { icon: <FaLinkedinIn />, color: "bg-blue-600", top: "150px", left: "-90px" },
//   { icon: <FaLinkedinIn />, color: "bg-blue-600", top: "150px", left: "-270px" },

//   // { icon: <FaTwitter />, color: "bg-black", top: "220px", left: "-70px" },
//   { icon: <FaTwitter />, color: "bg-black", top: "220px", left: "-200px" },

//   // { icon: <FaQuora />, color: "bg-red-600", top: "-60px", right: "-120px" },
//   { icon: <FaQuora />, color: "bg-red-600", top: "-60px", right: "-250px" },

//   // { icon: <FaFacebookF />, color: "bg-blue-500", top: "10px", right: "-140px" },
//   { icon: <FaFacebookF />, color: "bg-blue-500", top: "10px", right: "-290px" },

//   //  { icon: <FaSnapchatGhost />, color: "bg-yellow-400", top: "200px", right: "-150px" },
//    { icon: <FaSnapchatGhost />, color: "bg-yellow-400", top: "190px", right: "-200px" },

//   // { icon: <SiMessenger />, color: "bg-blue-600", top: "80px", right: "-110px" },
//   { icon: <SiMessenger />, color: "bg-blue-600", top: "80px", right: "-270px" },

//   { icon: <FaTiktok />, color: "bg-gradient-to-r from-purple-500 to-pink-500", top: "240px", right: "-270px" },
// ];

// // Random sizes and slight inward positions for natural randomness
// const initialPositions = [
//   { top: "-20px", left: "-40px", size: "w-16 h-16" },
//   { top: "30px", left: "-50px", size: "w-10 h-10" },
//   { top: "90px", left: "-30px", size: "w-12 h-12" },
//   { top: "160px", left: "-40px", size: "w-14 h-14" },
//   { top: "210px", left: "-20px", size: "w-10 h-10" },
//   { top: "-20px", right: "-40px", size: "w-14 h-14" },
//   { top: "30px", right: "-50px", size: "w-14 h-14" },
//   { top: "90px", right: "-30px", size: "w-10 h-10" },
//   { top: "160px", right: "-40px", size: "w-16 h-16" },
//   { top: "190px", right: "-40px", size: "w-16 h-16" },

// ];

// const HeroSocialCircle = () => {
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       @keyframes bubbleFloat {
//         0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
//         50% { transform: translateY(-5px) translateX(3px) scale(1); }
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <div className="relative mt-0 w-full flex flex-col justify-center items-center h-[700px] bg-gradient-to-b from-blue-100 to-white px-4 text-center">
//       {/* Heading */}
//       <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
//         Stop Wasting Time. <span className="text-blue-600 underline decoration-blue-400">Start Getting Results.</span>
//       </h1>
//       <p className="mt-2 text-gray-700 text-sm md:text-base md:mb-6 md:mt-4">
//         Marketing should work while you sleep. MARVO makes sure it does.
//       </p>

//       {/* Bubble Container with square */}
//       <div
//         className="relative mt-8 w-[300px] h-[300px] md:w-[450px] md:h-[280px] bg-gray-300 rounded-xl transition-all duration-300"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {bubbles.map((bubble, index) => (
//           <div
//             key={index}
//             className={`
//               absolute rounded-full flex justify-center items-center
//               text-white text-xl transition-all duration-700 ease-in-out z-30
//               ${bubble.color}
//               ${initialPositions[index].size}
//               ${hovered ? "opacity-100" : "opacity-90"}
//             `}
//             style={{
//               top: hovered ? bubble.top : initialPositions[index].top,
//               left: hovered ? bubble.left ?? undefined : initialPositions[index].left,
//               right: hovered ? bubble.right ?? undefined : initialPositions[index].right,
//               animation: hovered ? undefined : "bubbleFloat 4s ease-in-out infinite",
//               transform: hovered ? "scale(1.05)" : undefined,
//             }}
//           >
//             {hovered ? bubble.icon : null}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSocialCircle;




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

const bubbles = [
  { icon: <FaGoogle />, color: "bg-yellow-300", top: "-80px", left: "-250px", size: "w-16 h-16" },
  { icon: <FaWhatsapp />, color: "bg-green-500", top: "10px", left: "-290px", size: "w-10 h-10" },
  { icon: <FaInstagram />, color: "bg-gradient-to-r from-pink-500 to-yellow-500", top: "80px", left: "-200px", size: "w-14 h-14" },
  { icon: <FaLinkedinIn />, color: "bg-blue-600", top: "150px", left: "-270px", size: "w-16 h-16" },
  { icon: <FaTwitter />, color: "bg-black", top: "220px", left: "-200px", size: "w-16 h-16" },
  { icon: <FaQuora />, color: "bg-red-600", top: "-60px", right: "-250px", size: "w-14 h-14" },
  { icon: <FaFacebookF />, color: "bg-blue-500", top: "10px", right: "-290px", size: "w-10 h-10" },
  { icon: <FaSnapchatGhost />, color: "bg-yellow-400", top: "190px", right: "-200px", size: "w-16 h-16" },
  { icon: <SiMessenger />, color: "bg-blue-600", top: "80px", right: "-270px", size: "w-14 h-14" },
  { icon: <FaTiktok />, color: "bg-gradient-to-r from-purple-500 to-pink-500", top: "240px", right: "-270px", size: "w-16 h-16" },
];

// Compact positions (when not hovered)
const initialPositions = [
  { top: "-20px", left: "-40px", size: "w-13 h-16", color: "bg-[radial-gradient(circle_at_center,_#E3F1C7,_#C6AD02)]" }, // Google
  { top: "30px", left: "-50px", size: "w-10 h-10", color: "bg-green-500" }, // WhatsApp
  { top: "90px", left: "-30px", size: "w-12 h-12", color: "bg-gradient-to-r from-pink-500 to-yellow-500" }, // Instagram
  { top: "160px", left: "-40px", size: "w-14 h-14", color: "bg-blue-600" }, // LinkedIn
  { top: "210px", left: "-20px", size: "w-10 h-10", color: "bg-black" }, // Twitter
  { top: "-20px", right: "-40px", size: "w-14 h-14", color: "bg-red-600" }, // Quora
  { top: "30px", right: "-50px", size: "w-14 h-14", color: "bg-blue-500" }, // Facebook
  { top: "90px", right: "-30px", size: "w-10 h-10", color: "bg-yellow-400" }, // Snapchat
  { top: "160px", right: "-40px", size: "w-16 h-16", color: "bg-blue-600" }, // Messenger
  { top: "190px", right: "-40px", size: "w-16 h-16", color: "bg-gradient-to-r from-purple-500 to-pink-500" }, // TikTok
];

const HeroSocialCircle = () => {
  const [hovered, setHovered] = useState(false);

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
    <div className="relative mt-0 w-full flex flex-col justify-center items-center h-[700px] bg-gradient-to-b from-blue-100 to-white px-4 text-center">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
        Stop Wasting Time. 
      <span className="relative inline-block">
    {/* <span className="relative z-10 text-black">Start Getting Results.</span> */}
    <span className="relative inline-block">
            <span className="relative z-10 text-black"> Start Getting Results.</span>
            <span className="absolute inset-0 -skew-x-12 bg-blue-300 z-0"></span>
          </span>
    <span className="absolute inset-0 -skew-x-12 bg-bg-blue-300  z-0"></span>
  </span>
      </h1>
      <p className="mt-2 text-gray-700 text-sm md:text-base md:mb-6 md:mt-4">
        Marketing should work while you sleep. MARVO makes sure it does.
      </p>

      {/* Bubble Container */}
      <div
        className="relative mt-8 w-[300px] h-[300px] md:w-[450px] md:h-[280px] bg-gray-300 rounded-xl transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className={`absolute rounded-full flex justify-center items-center
              text-white text-xl transition-all duration-700 ease-in-out z-30
              ${bubble.color} ${bubble.size} ${hovered ? "opacity-100" : "opacity-90"}
            `}
            style={{
              top: hovered ? bubble.top : initialPositions[index].top,
              left: hovered ? bubble.left : initialPositions[index].left,
              right: hovered ? bubble.right : initialPositions[index].right,
              animation: hovered ? undefined : "bubbleFloat 4s ease-in-out infinite",
              transform: hovered ? "scale(1.05)" : undefined,
            }}
          >
            {hovered ? bubble.icon : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSocialCircle;
