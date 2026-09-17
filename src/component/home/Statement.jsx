// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/hero/event1.png";
import img2 from "../../assets/hero/event2.png";
import img3 from "../../assets/hero/event3.png";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const Statement = () => {
    return (
        <section id="itinerary-section" className="w-full py-16 px-8 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* SECTION TITLE */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="md:text-center text-[20px] md:text-[32px] font-bold text-[#0637A2] mb-3"
                >
                    THE ROYAL GOLF CLASSIC EXPERIENCE
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:text-center text-[#0637A2] font-libre text-[16px] max-w-3xl mx-auto mb-10"
                >
                    An exclusive tournament hosted by Stanbic Bank in collaboration with His Majesty
                    Otumfuo Osei Tutu II celebrating excellence, sportsmanship, and lasting partnerships.
                    Explore the itinerary for this distinguished weekend of golf, fellowship, and ceremony.
                </motion.p>

                {/* ===================== EVENT BLOCK 1 ===================== */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="bg-[#FCFAFA] overflow-hidden mb-8 flex flex-col md:flex-row lg:h-[290px]"
                >
                    {/* LEFT - TEXT */}
                    <div className="p-6 w-full md:w-1/2">
                        <p className="text-sm uppercase font-semibold text-[#0637A2]">
                            Saturday December
                        </p>
                        <h3 className="text-[48px] font-bold text-[#003087]">6TH</h3>

                        <p className="font-semibold text-[24px] leading-[40px] text-[#003087] mt-2">
                            Event Day 1 – The Friday Night
                        </p>

                        <p className="text-sm font-semibold mt-1 text-[#003087]">
                            Start Time: 6:00 PM
                        </p>

                        <ul className="list-disc ml-5 mt-2 text-[#003087]">
                            <li>Evening Cocktail</li>
                        </ul>
                    </div>

                    {/* RIGHT - IMAGE */}
                    <img
                        src={img1}
                        alt="event"
                        className="w-full md:w-1/2 h-full object-cover rounded-[10px]"
                    />
                </motion.div>

                {/* ===================== EVENT BLOCK 2 ===================== */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="bg-[#FCFAFA] lg:h-[425px] overflow-hidden mb-8 flex flex-col md:flex-row"
                >
                    {/* LEFT - TEXT */}
                    <div className="p-6 w-full md:w-1/2">
                        <p className="text-sm uppercase font-semibold text-[#0637A2]">
                            Sunday December
                        </p>
                        <h3 className="text-[48px] font-bold text-[#003087]">7TH</h3>

                        <p className="font-semibold text-[24px] leading-[40px] text-[#003087] mt-2">
                            Event Day 2 – Ceremonial Tee & Game Day
                        </p>

                        <p className="text-sm font-semibold mt-1 text-[#003087]">
                            Start Time: 6:00 AM
                        </p>

                        <ul className="list-disc ml-5 mt-2 text-[#003087] space-y-1">
                            <li>Ceremonial Tee Off</li>
                            <li>Prize Presentation – 3:00 PM</li>
                            <li>Dinner with Exco – 7:00 PM</li>
                        </ul>
                    </div>

                    {/* RIGHT - IMAGE */}
                    <img
                        src={img2}
                        alt="event"
                        className="w-full md:w-1/2 h-full object-cover rounded-[10px]"
                    />
                </motion.div>

                {/* ===================== EVENT BLOCK 3 ===================== */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="bg-[#FCFAFA] lg:h-[323px] overflow-hidden flex flex-col md:flex-row"
                >
                    {/* LEFT - TEXT */}
                    <div className="p-6 w-full md:w-1/2">
                        <p className="text-sm uppercase font-semibold text-[#0637A2]">
                            Monday December
                        </p>
                        <h3 className="text-[48px] font-bold text-[#003087]">8TH</h3>

                        <p className="font-semibold text-[24px] leading-[40px] text-[#003087] mt-2">
                            Day 3 – Departures
                        </p>

                        <ul className="list-disc ml-5 mt-2 text-[#003087] space-y-1">
                            <li>Check-Out Support</li>
                            <li>Airport Check-In Assistance</li>
                            <li>Thank You Packs & Notes</li>
                        </ul>
                    </div>

                    {/* RIGHT - IMAGE */}
                    <img
                        src={img3}
                        alt="event"
                        className="w-full md:w-1/2 h-full object-cover rounded-[10px]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Statement;
