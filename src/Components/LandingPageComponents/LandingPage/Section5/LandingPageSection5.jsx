import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, Typography, Button } from '@mui/material';
import S51 from '../../../../assets/LandingPage/S51.png';
import S52 from '../../../../assets/LandingPage/S52.png';
import S53 from '../../../../assets/LandingPage/S53.png';
import S54 from '../../../../assets/LandingPage/S54.png';

const items = [
    { icon: S51, text: "Write Replies Based On Lead’s Mood" },
    { icon: S52, text: "Pick The Best Time & Platform To Follow-Up" },
    { icon: S53, text: "Automatically Score & Tag Leads" },
    { icon: S54, text: "Keep Your Messages Sounding Human" },
];

function LandingPageSection5() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <div className="mt-10 px-3">
            {/* Top Headings */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col items-center gap-2 md:gap-4 text-center"
            >
                <h1 className="text-2xl md:text-4xl font-bold">
                    AI That Actually Helps You Work Less
                </h1>
                <h2 className="text-[20px] md:text-[32px]">
                    AI is cool when it’s real-world useful — not just fancy words.
                </h2>
            </motion.div>

            {/* Cards & Lines Container */}
            <div className="relative w-full flex flex-col items-center justify-center py-24 px-4 bg-white">
                {/* Horizontal Dashed Line */}
                <div className="hidden md:block absolute top-[8rem] w-[54rem] max-w-[1000px] border-t-2 border-dashed border-[#007BFF] z-0" />

                {/* Vertical Lines */}
                <div className="hidden md:flex absolute top-[8rem] w-[90rem] max-w-[1150px] justify-between z-0">
                    {items.map((_, idx) => (
                        <div key={idx} className="w-1/4 flex justify-center">
                            <div className="h-32 w-0 border-l-2 border-dashed border-[#007BFF]" />
                        </div>
                    ))}
                </div>

                {/* MARVO Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="z-10 mb-10 md:mb-20 bg-[#007BFF] text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-[26px] md:text-[36px] font-semibold shadow-md mt-[-60px] md:mt-0"
                >
                    MARVO’s AI helps you
                </motion.div>

                {/* Cards */}
                <div className="relative flex flex-col md:flex-row gap-10 justify-center items-start z-10">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: idx * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            {/* Number Circle */}
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full border-4 border-blue-500 mb-4 text-white text-[32px]">
                                {idx + 1}
                            </div>

                            {/* Card */}
                            <Card
                                className="w-[246px] h-[242px] mt-[-16px] flex flex-col items-center justify-center text-center px-4 py-6 shadow-md border-2 border-dashed border-blue-400 hover:border-solid transition-all duration-300"
                                sx={{
                                    borderRadius: '16px', backgroundColor: '#F8FAFC', boxShadow: `
    1px 2px 5px 0px #0000001A,
    5px 7px 8px 0px #00000017,
    10px 16px 11px 0px #0000000D,
    19px 28px 13px 0px #00000003,
    29px 43px 15px 0px #00000000
  ` }}
                            >
                                <div className="flex flex-col items-center gap-5">
                                    <Typography variant="body1" className="text-[20px] font-bold text-[#171717]">
                                        {item.text}
                                    </Typography>
                                    <img src={item.icon} alt={item.text} width="89" height="90" />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10 md:mt-10  lg:mt-10 lg:text-[22px] normal-case">
                    <h4>And yes — it learns from your own campaigns.</h4>
                    <div className="mt-4" >
                        <button className=" bg-[#1A6DF6] rounded-[8px] lg:text-[16px] text-white w-[120px] h-[39px] hover:bg-[#1646B7] ease-out transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPageSection5;
