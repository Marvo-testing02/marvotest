
import { motion, } from 'framer-motion';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AI1 from "../../../../assets/LandingPage/AI1.png";
import AI2 from "../../../../assets/LandingPage/AI2.png";
import AI3 from "../../../../assets/LandingPage/AI3.png";
import AI4 from "../../../../assets/LandingPage/AI4.png";
import { Card } from "@mui/material";
import Styles from "./LandingPageSection3.module.css"



function LandingPageSection3() {

    return (
        <div

            className={`${Styles.maincontainer} w-full flex flex-col justify-center items-center mt-0 px-4 md:px-4 lg:px-4`} >
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col max-w-auto  justify-center items-center mt-12 gap-5">
                {/* Heading */}
                <div className="lg:text-4xl font-bold">
                    <h1 className="text-center text-2xl md:text-4xl font-bold">
                        Introducing{" "}
                        <span className="relative inline-block">
                            <motion.span
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: "100%", opacity: 1 }}
                                transition={{ duration: 0.9, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="absolute inset-0 bg-blue-300 -skew-x-12"
                            />
                            <span className="relative text-black px-3 py-1">Our Products</span>
                        </span>{" "}
                        <span>
                            <HorizontalRuleIcon style={{ fontSize: "40px" }} className="mt-[-2px] font-bold" />
                        </span>{" "}
                        Your AI Growth Team
                    </h1>
                </div>

                {/* Numbered items */}


                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                    {["AI Chatbot", "Automation", "CRM", "Campaigns"].map((title, index) => (
                        <div key={index} className="flex flex-row items-end gap-2">
                            <p
                                style={{ WebkitTextStroke: "1px #1646B7", color: "transparent" }}
                                className="text-4xl md:text-6xl font-bold text-transparent"
                            >
                                {index + 1}
                            </p>
                            <h2 className="text-xl md:text-3xl font-bold text-[#1646B7]">{title}</h2>
                        </div>
                    ))}
                </div>


                {/* Scrollable Image Section */}
                <div style={{ scrollbarWidth: 'none' }} className='relative  h-[200px] lg:h-[440px] overflow-y-auto  mt-5' >

                    <Card
                        className={Styles.card}
                        sx={{

                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderRadius: "12px",
                            padding: 0,
                            marginBottom: '30px'

                        }}
                    >
                        <img
                            src={AI1}
                            alt='aimg-1'
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Card>
                    {/* img-2 */}
                    <Card
                        className={Styles.card}

                        sx={{

                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderRadius: "12px",
                            padding: 0,
                            marginBottom: '30px'

                        }}
                    >
                        <img
                            src={AI2}
                            alt='aimg-1'
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Card>

                    <Card
                        className={Styles.card}

                        sx={{

                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderRadius: "12px",
                            padding: 0,
                            marginBottom: '30px'

                        }}
                    >
                        <img
                            src={AI3}
                            alt='aimg-1'
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Card>
                    <Card
                        className={Styles.card}

                        sx={{

                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderRadius: "12px",
                            padding: 0,
                            marginBottom: '30px',


                        }}
                    >
                        <img
                            src={AI4}
                            alt='aimg-1'
                            style={{
                                width: "100%",
                                height: "auto",
                                marginTop: '0px',
                                objectFit: "contain",

                            }}
                        />
                    </Card>



                </div>

            </motion.div >
        </div >
    );
}

export default LandingPageSection3;