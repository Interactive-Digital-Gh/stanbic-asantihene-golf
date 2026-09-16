// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Slider1 from "../../assets/hero/slider1.png";
import Slider2 from "../../assets/hero/slider2.png";
import Slider3 from "../../assets/hero/slider3.png";
import Slider4 from "../../assets/hero/slider4.png";

import Slidermobile1 from "../../assets/hero/slidermobile1.png";
import Slidermobile2 from "../../assets/hero/slidermobile2.png";
import Slidermobile3 from "../../assets/hero/slidermobile3.png";
import Slidermobile4 from "../../assets/hero/slidermobile4.png";

export default function Slider() {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen width on load and resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const imagesDesktop = [Slider1, Slider2, Slider3, Slider4];
    const imagesMobile = [Slidermobile1, Slidermobile2, Slidermobile3, Slidermobile4];
    const images = isMobile ? imagesMobile : imagesDesktop;

    // Autoplay every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 10000); // 10000ms = 10s

        return () => clearInterval(interval); // Clean up
    }, [images.length]);

    // Snap to the closest slide after drag ends
    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        const direction = offset + velocity < 0 ? 1 : -1;

        let newIndex = currentIndex + direction;

        if (newIndex < 0) newIndex = 0;
        if (newIndex > images.length - 1) newIndex = images.length - 1;

        setCurrentIndex(newIndex);
    };

    return (
        <section className="w-screen overflow-hidden relative">
            {/* Slider */}
            <motion.div
                ref={sliderRef}
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{ x: -currentIndex * window.innerWidth }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                style={{ height: "557px" }}
            >
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="w-screen h-full flex-shrink-0 relative"
                    >
                        <img
                            src={img}
                            alt={`slide-${index}`}
                            className={`w-full h-full ${isMobile ? "object-contain" : "object-cover md:object-left xl:object-center"}`}
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* DOT NAVIGATION */}
            <div className="absolute bottom-16 left-8 md:left-32 flex gap-3 z-20">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-3 h-3 rounded-full border transition
                            ${currentIndex === i ? "bg-white" : "bg-transparent"}`}
                    />
                ))}
            </div>
        </section>
    );
}
