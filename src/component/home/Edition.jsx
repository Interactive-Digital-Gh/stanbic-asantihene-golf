// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";
import editionbg from "../../assets/hero/editionbg.png";
import RegisterModal from "./RegisterModal";

const Edition = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section
            className="w-full h-[650px] bg-cover bg-center flex items-center justify-center md:px-6 px-8 overflow-hidden"
            style={{ backgroundImage: `url(${editionbg})` }}
            loading='lazy'
        >
            {/* Center Box */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl text-center text-white"
            >
                <h1 className="text-[20px] md:text-[40px] md:font-extrabold font-bold mb-6 leading-tight md:text-center text-left">
                    WELCOME TO THE 8TH<br className="md:hidden block" /> EDITION<br className="hidden md:block" />
                    OF THE OTUMFUO GOLF TOURNAMENT
                </h1>

                <p className="text-[16px] font-libre md:text-base leading-relaxed mb-8 md:text-center text-left">
                    Stanbic Bank is the title sponsor of the 8th Otumfuo Invitational Golf Tournament Championship 2026,
                    celebrating the 27th anniversary of the Asantehene and the bank. The event aims to connect with
                    clients, and the golfing community, and foster growth opportunities. It also includes side activities
                    for non-players and families, promoting community bonding and the sport of golf.
                    <br /><br />
                    Join us in honouring tradition, building lasting connections, and exemplifying our commitment to
                    exceptional experiences and unparalleled excellence.
                </p>
                {/* Button Wrapper */}
                <motion.div className="flex justify-start md:justify-center w-full">
                    <motion.button
                        onClick={() => setOpenModal(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-8 py-3 text-[16px] font-libre bg-white text-[#0033A1] font-semibold rounded-[4px] shadow-lg hover:bg-gray-200 transition"
                    >
                        Confirm Your Details
                    </motion.button>
                </motion.div>

            </motion.div>
            <RegisterModal open={openModal} onClose={() => setOpenModal(false)} />
        </section>
    );
};

export default Edition;
