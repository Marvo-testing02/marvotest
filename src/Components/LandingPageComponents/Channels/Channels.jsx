// import React from "react";
// import ChannelsImg from "../../../assets/images/Channels.png";
// import texturebg from "../../../assets/images/texturebg.png"; // your uploaded texture

// const Channels = () => {
//   return (
//     <div
//       className="w-full xl:min-h-screen flex justify-center items-center bg-[#EEF7FF] px-4 sm:px-8"
//       style={{
//         backgroundImage: `url(${texturebg})`,
//         backgroundSize: "132px", // Larger pattern for big screens
//         backgroundRepeat: "repeat",
//       }}
//       // 300
//     >
//       <img
//         src={ChannelsImg}
//         alt="Channels Overview"
//         className="w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-[946px] h-auto object-contain"
//       />
//     </div>
//   );
// };

// export default Channels;

import React from "react";
import backgroundRole from "../../../assets/background/backgroundRole.png";
import ellipse from "../../../assets/images/Ellipse.png";
import centerdesign from "../../../assets/images/centerdesign.png";
import rectangle from "../../../assets/images/Rectangle.png";

const Channels = () => {
  return (
    <div
      className="w-full bg-[#EEF7FF] relative overflow-hidden px-2 md:px-4 py-8 md:py-12"
      style={{
        backgroundImage: `url(${backgroundRole})`,
        backgroundSize: "132px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Top Ellipse */}
      <div className="relative w-[200px] h-[100px] md:w-[427px] md:h-[212px] mx-auto z-20">
        <img
          src={ellipse}
          alt="Top Circle"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
          <p className="text-white text-[11px] md:text-[16px] font-semibold leading-tight">
            Where You’ll Reach <br />
            <span className="font-bold">Your Leads</span>
          </p>
          <p className="text-white text-[8px] md:text-[12px] mt-1">
            One tool. Every major channel.
          </p>
        </div>
      </div>

      {/* Center Section with Overlapping Columns */}
      <div className="relative flex justify-center items-center md:max-w-[504px] mx-auto z-10">
        {/* Center Image */}
        <div className="relative z-10 w-full max-w-[220px] md:max-w-[450px]">
          <img src={centerdesign} alt="center design" className="w-full h-auto" />
        </div>

        {/* Left Column */}
        <div className="absolute pb-14 md:pb-0 left-0 top-1/2 -translate-y-1/2 flex flex-col gap-[60px] md:gap-[150px] items-start z-20 md:-ml-8 ml-2">
          <div className="text-left text-[10px] md:text-sm md:w-[180px]">
            <h3 className="text-[#0057FF] font-bold mb-1 text-[10px] md:text-[26px]">
              1. WhatsApp
            </h3>
            <p className="md:mt-4">
              Blazing fast follow-ups <br />
              Auto-replies
            </p>
          </div>

          <div className="text-left text-[10px]  md:mb-[0px] md:text-sm md:w-[180px]">
            <h3 className="text-[#0057FF] font-bold mb-1 text-[10px]  md:text-[26px]">
              3. Instagram
            </h3>
            <p className="md:mt-4">
              DMs <br />
              Story replies <br />
              Automation
            </p>
          </div>

          <div className="text-left text-[10px] md:text-sm md:w-[180px] md:mb-[130px]">
            <h3 className="text-[#0057FF] font-bold mb-1 text-[10px]  md:text-[26px]">
              5. Messenger
            </h3>
            <p className="md:mt-4">
              Automate chat <br />
              Handover to team
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="absolute pt-[58px] md:pt-[0px] right-0 top-1/2 -translate-y-1/2 flex flex-col gap-[64px] md:gap-[109px] items-center md:mt-[52px] z-20 md:-mr-8 mr-0">
          <div className="text-left text-[10px] md:text-sm md:w-[170px] ">
            <h3 className="text-[#0057FF] font-bold mb-1 text-[10px]  md:text-[26px]">
              2. Email
            </h3>
            <p className="md:mt-4">
              High open rates <br />
              Sequences that convert
            </p>
          </div>

          <div className="text-left text-[10px] pt-[9px] md:pt-[0px] md:text-sm md:w-[180px] md:mt-[70px]">
            <h3 className="text-[#0057FF] font-bold mb-1 text-[10px]  md:text-[26px]">
              4. LinkedIn
            </h3>
            <p className="md:mt-4">
              Personal outreach <br />
              Feels human
            </p>
          </div>

          <div className="text-left  text-[10px] md:text-sm md:w-[180px] md:mt-[35px]">
            <h3 className="text-[#0057FF] font-bold mb-1 text-[10px]  md:text-[26px]">
              6. SMS
            </h3>
            <p className="md:mt-4">
              Reminders <br />
              Alerts <br />
              Quick touchpoints
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Rectangle */}
      <div className="relative z-20 w-full max-w-xs md:max-w-md mx-auto  md:mt-0">
        <img src={rectangle} alt="No tab switching" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-2 md:px-4">
          <p className="text-white font-semibold text-[10px] md:text-sm leading-snug">
            No tab switching. Just one smooth inbox.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Channels;

