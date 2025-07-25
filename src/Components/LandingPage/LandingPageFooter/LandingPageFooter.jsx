import React from 'react';
import footerimg from "../../../assets/logo.png";
import fl from "../../../assets/footer/fl.png";
import fR from "../../../assets/footer/fR.png";

import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import TikTokIcon from '@mui/icons-material/MusicNote';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';

function LandingPageFooter() {
    const navigate = useNavigate();

    const fadeInFromLeft = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    const fadeInFromRight = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };
    return (
        <footer
            style={{ padding: '0px 40px 20px 40px' }}
            className="relative bg-white text-center py-8 w-full lg:h-90 md:h-90"
        >
            {/* Left Ring Image */}
            <img
                src={fl}
                alt="left-ring"
                className="absolute hidden md:block left-0 bottom-0 w-40 md:w-50"
            />

            {/* Right Ring Image */}
            <img
                src={fR}
                alt="right-ring"
                className="absolute hidden md:block right-0 bottom-0 w-40 md:w-50"
            />

            <div className="flex flex-col items-center gap-4 md:gap-5 relative z-10">
                {/* Logo */}
                <div className="  mb-20 md:mb-20 lg:mb-[132px] ">
                    <img src={footerimg} alt="MARVO" className="h-8" />
                </div>
                <div className="flex flex-col gap-6 md:gap-10 w-full">
                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-between md:justify-center gap-6 md:gap-32 lg:gap-48 text-xs md:text-sm font-medium text-gray-800 w-full">
                        {[
                            { label: "About", path: "/about" },
                            { label: "Blog", path: "/blog" },
                            { label: "Terms", path: "/terms" },
                            { label: "Privacy", path: "/privacy" },
                            { label: "Support", path: "/support" },
                        ].map((item, index) => (
                            <motion.span
                                key={item.label}
                                variants={index < 3 ? fadeInFromRight : fadeInFromLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                onClick={() => navigate(item.path)}
                                className="cursor-pointer  text-gray-800 text-sm md:text-base"
                            >
                                {item.label}
                            </motion.span>
                        ))}

                    </div>

                    {/* Horizontal Line with Icons */}
                    <div className="flex flex-wrap items-center justify-between md:justify-center gap-4 md:gap-5 w-full px-4">
                        <hr className="border-t border-black flex-1 md:max-w-65 lg:max-w-80 hidden md:block" />
                        {[
                            LinkedInIcon,
                            InstagramIcon,
                            GitHubIcon,
                            TwitterIcon,
                            TikTokIcon,
                            GoogleIcon
                        ].map((Icon, index) => (
                            <motion.div
                                key={index}
                                variants={index < 3 ? fadeInFromRight : fadeInFromLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Icon className="text-gray-600 hover:text-black cursor-pointer" />
                            </motion.div>
                        ))}
                        <hr className="border-t border-black flex-1 md:w-65 lg:max-w-80 hidden md:block" />
                    </div>
                </div>

                {/* Copyright */}
                <motion.p
                    className="text-xs md:text-sm text-black text-center normal-case px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    © 2024 The Tricky Coders. All rights reserved.
                </motion.p>

            </div>
        </footer>
    );
}

export default LandingPageFooter;
