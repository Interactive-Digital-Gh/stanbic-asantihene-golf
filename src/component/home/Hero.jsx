// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import herobg from '../../assets/hero/stanbichero.png';
import mobilebg from '../../assets/hero/heromobile.png';
import shieldhero from '../../assets/hero/newshield.png';

const Hero = () => {
    return (
        <section className="relative w-full h-[677px] lg:h-[944px] text-white z-10 overflow-hidden">
            {/* Background images with scale animation */}
            <motion.img
                src={mobilebg}
                alt="Hero Background Mobile"
                className="w-full h-full object-cover lg:hidden"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            <motion.img
                src={herobg}
                alt="Hero Background Desktop"
                className="hidden lg:block w-full h-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {/* Content container */}
            <motion.div
                className="
          absolute
          lg:left-[95px] 4xl:left-[250px] left-[20%]
          lg:top-[140px] 4xl:top-[200px] top-[15%]
          -translate-y-1/2
          lg:h-[500px] lg:w-[459px]
          flex flex-col items-center justify-center
          px-4
        "
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
                <motion.img
                    src={shieldhero}
                    alt="shield"
                    className="lg:w-[295px] w-[157px] lg:h-[317px] h-[169px] lg:mb-6 mb-2"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                />

                <motion.p
                    className="md:text-[20px] text-[16px] font-normal text-center lg:text-left"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                >
                    <b>November 7th–9th</b>, 2026 <br />
                    <span className="font-normal"><b>Royal Golf Club</b>, Kumasi</span>
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Hero;
