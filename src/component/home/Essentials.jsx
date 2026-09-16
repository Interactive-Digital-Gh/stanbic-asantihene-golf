// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import ess from "../../assets/hero/ess.png";
import ess1 from "../../assets/hero/ess1.png";

export default function Essentials() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const listItem = {
        hidden: { opacity: 0, x: -15 },
        show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.section
            className="w-full py-16 px-8 md:px-12 lg:px-[151px] flex flex-col lg:flex-row gap-20"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Images */}
            <motion.div className="flex flex-row gap-5 items-center px-2 lg:items-start">
                <motion.img
                    src={ess}
                    alt="Sunglasses on wood"
                    className="lg:w-[255px] md:w-[220px] w-[130px] lg:h-[395px] md:h-[340px] h-[230px] object-cover shadow-md rounded-xl"
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                />
                <motion.img
                    src={ess1}
                    alt="Golf bag outdoors"
                    className="lg:w-[255px] md:w-[220px] w-[130px]  lg:h-[395px] md:h-[340px] h-[230px] object-cover shadow-md mt-20 lg:mt-[70px] rounded-xl"
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                />
            </motion.div>

            {/* Text Content */}
            <motion.div variants={fadeUp} className="space-y-4 flex-1">
                <h2 className="text-[20px] md:text-[40px] font-bold text-[#494949] text-left">
                    Don’t Forget the Essentials
                </h2>

                <motion.ul
                    className="list-disc pl-5 space-y-4 text-gray-700 text-[16px] font-libre"
                    variants={container}
                >
                    {[
                        "Sun protection – hats, shades, fans.",
                        "Power bank / charger.",
                        "Healthy snacks – granola, trail mix, etc.",
                        "First aid materials.",
                        "Comfortable shoes (for non-players).",
                        "Golf equipment – clubs, balls, tees.",
                    ].map((item, index) => (
                        <motion.li key={index} variants={listItem}>
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.section>
    );
}
