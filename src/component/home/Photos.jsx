// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/hero/img1.png";
import img2 from "../../assets/hero/img2.png";
import img3 from "../../assets/hero/img3.png";
import img4 from "../../assets/hero/img4.png";

const Photos = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, delay },
        }),
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row h-auto lg:h-[589px] w-full">

                {/* COLUMN 1 */}
                <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="cursor-pointer flex-1"
                    onClick={() => setSelectedImage(img1)}
                >
                    <motion.img
                        whileHover={{ scale: 0.9 }}
                        src={img1}
                        alt="image1"
                        className="object-cover w-full h-[200px] md:h-[260px] lg:h-full"
                        loading="lazy"
                    />
                </motion.div>

                {/* COLUMN 2 */}
                <motion.div
                    custom={0.15}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="flex flex-row lg:flex-col flex-1"
                >
                    <motion.img
                        whileHover={{ scale: 0.9 }}
                        src={img2}
                        alt="image2"
                        className="object-cover w-1/2 lg:w-full h-[200px] md:h-[260px] lg:h-1/2 cursor-pointer"
                        loading="lazy"
                        onClick={() => setSelectedImage(img2)}
                    />

                    <motion.img
                        whileHover={{ scale: 0.9 }}
                        src={img3}
                        alt="image3"
                        className="object-cover w-1/2 lg:w-full h-[200px] md:h-[260px] lg:h-1/2 cursor-pointer"
                        loading="lazy"
                        onClick={() => setSelectedImage(img3)}
                    />
                </motion.div>

                {/* COLUMN 3 (original 4th image) */}
                <motion.div
                    custom={0.3}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="cursor-pointer flex-1"
                    onClick={() => setSelectedImage(img4)}
                >
                    <motion.img
                        whileHover={{ scale: 0.9 }}
                        src={img4}
                        alt="image4"
                        className="object-cover w-full h-[200px] md:h-[260px] lg:h-full"
                        loading="lazy"
                    />
                </motion.div>
            </div>

            {/* LIGHTBOX POPUP */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer"
                >
                    <motion.img
                        src={selectedImage}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
                    />
                </div>
            )}
        </>
    );
};

export default Photos;
