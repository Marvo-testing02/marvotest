import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import botIcon from "../../assets/images/botIcon.png";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-11 md:right-6 z-50 md:mb-[85px] md:mr-8">
      {/* Button (icon or close) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[48px] h-[48px] bg-[#1A6DF6] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition relative"
      >
        {!isOpen ? (
          <img src={botIcon} alt="Bot" className="w-8 h-8" />
        ) : (
          <RxCross2 className="text-white w-5 h-5" />
        )}
      </button>

      {/* Chat Bubble (opens above the button) */}
      {isOpen && (
        <div className="absolute bottom-16 w-[298px] right-0 md:w-[300px]  bg-white shadow-lg rounded-lg p-4">
          <p className="text-[#1254DC] text-[16px] md:text-sm leading-[24px]">
            <strong className="text-[#1254DC]">"Hey! I’m MARVO.</strong><br />
            Want Help Automating Your Leads?"
          </p>
          {/* Bubble Tip */}
          <div className="absolute bottom-[-12px] right-6 w-0 h-0 border-t-[12px] border-t-white border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
