import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { Paper } from "@mui/material";
import botIcon from "../../../assets/LandingPage/botIcon.png";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-0 lg:bottom-0 right-6 md:right-6 z-50 md:mb-[85px] md:mr-8">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[48px] h-[48px] bg-[#1A6DF6] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition relative"
      >
        <div className="transition-transform duration-150">
          <motion.div
            key={isOpen ? "close" : "bot"}
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.3 }}
          >
            {!isOpen ? (
              <img src={botIcon} alt="Bot" className="w-8 h-8" />
            ) : (
              <RxCross2 className="text-white w-5 h-5" />
            )}
          </motion.div>
        </div>
      </button>

      {/* Chat Bubble with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute bottom-16 -right-2.5"
          >
            <Paper
              elevation={3}
              sx={{
                width: { md: '238px', lg: '283px', sm: "283px", xs: "87vw" },
                maxWidth: "100%",
                borderRadius: "12px",
                padding: "16px",
                position: "relative",
              }}
            >
              <p className="text-[#1254DC] text-[16px] md:text-sm leading-[24px] ">
                <strong className="text-[#1254DC]">"Hey! I’m MARVO.</strong>
                <br />
                Want Help Automating Your Leads?"
              </p>
              {/* Bubble tip */}
              <div className="absolute bottom-[-12px] right-6 w-0 h-0 border-t-[12px] border-t-white border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent"></div>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
