import React from "react";
import ChannelsImg from "../../../assets/images/Channels.png";
import texturebg from "../../../assets/images/texturebg.png"; // your uploaded texture

const Channels = () => {
  return (
    <div
      className="w-full xl:min-h-screen flex justify-center items-center bg-[#EEF7FF] px-4 sm:px-8"
      style={{
        backgroundImage: `url(${texturebg})`,
        backgroundSize: "132px", // Larger pattern for big screens
        backgroundRepeat: "repeat",
      }}
      // 300
    >
      <img
        src={ChannelsImg}
        alt="Channels Overview"
        className="w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-[946px] h-auto object-contain"
      />
    </div>
  );
};

export default Channels;
