// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import M1 from "../../assets/hero/m1.png";
import M2 from "../../assets/hero/m2.png";
import M3 from "../../assets/hero/m3.png";
import M4 from "../../assets/hero/m4.png";
import M5 from "../../assets/hero/m5.png";

export default function Grid() {
    const itemsLeft = [
        { title: "Kejetia Market (Kumasi Central Market)", img: M1 },
        { title: "Kumasi Zoo (Zoological Gardens)", img: M2 },
    ];

    const middle = { title: "Owabi Wildlife Sanctuary", img: M4 };

    const itemsRight = [
        { title: "Manhyia Palace Museum", img: M3 },
        { title: "Okomfo Anokye Sword Site", img: M5 },
    ];

    return (
        <section className="w-full py-14 px-8 md:px-12 lg:px-[151px] h-auto lg:h-[756px]">
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

            >
                {/* LEFT SIDE */}
                <div className="grid grid-rows-2 gap-6">
                    {itemsLeft.map((item, i) => (
                        <Card
                            key={i}
                            index={i}
                            title={item.title}
                            img={item.img}
                            heightClass="h-[333px]"
                        />
                    ))}
                </div>

                {/* CENTER TALL CARD */}
                <div className="md:col-span-2 md:order-last lg:order-none">
                    <Card
                        index={2}
                        title={middle.title}
                        img={middle.img}
                        heightClass="h-[686px] md:h-[420px] lg:h-[686px]"
                    />
                </div>

                {/* RIGHT SIDE */}
                <div className="grid grid-rows-2 gap-6">
                    {itemsRight.map((item, i) => (
                        <Card
                            key={i + 3}
                            index={i + 3}
                            title={item.title}
                            img={item.img}
                            heightClass="h-[333px]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------
   Reusable Card Component
------------------------------ */
function Card({ img, title, index, heightClass }) {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1 },
        }),
    };

    return (
        <motion.div
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`rounded-xl overflow-hidden shadow-lg relative group cursor-pointer w-full flex justify-center items-center ${heightClass}`}
        >
            {/* Image */}
            <img
                src={img}
                alt={title}
                className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold text-lg">{title}</p>
            </div>
        </motion.div>
    );
}

/* ------------------------------
   PropTypes Validation
------------------------------ */
Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    heightClass: PropTypes.string.isRequired,
};
