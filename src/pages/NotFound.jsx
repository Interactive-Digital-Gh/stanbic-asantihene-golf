// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import badge from "../assets/hero/newshield.png";
import Socials from "../component/home/Socials";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const NotFound = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#003087] bg-[radial-gradient(ellipse_at_top,_#0a4fd0_0%,_#003087_55%,_#001a4d_100%)] px-6 pt-28 pb-16">
                {/* Faint oversized 404 behind the content */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-white/[0.06] font-bold leading-none text-[42vw] md:text-[24rem]"
                >
                    404
                </span>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-2xl mx-auto text-center text-white"
                >
                    <img
                        src={badge}
                        alt="Stanbic Asantehene Invitational"
                        className="mx-auto w-28 md:w-36 drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                    />

                    <p className="mt-8 text-sm md:text-base font-libre uppercase tracking-[0.3em] text-blue-200">
                        Out of bounds
                    </p>

                    <h1 className="mt-3 text-[40px] md:text-[56px] font-bold leading-tight">
                        Page not found
                    </h1>

                    <p className="mt-4 font-libre text-[16px] md:text-[18px] text-blue-100 max-w-xl mx-auto">
                        The page you are looking for has gone off the fairway. It may have
                        been moved, or the link you followed is out of date.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="px-8 py-3 text-[16px] font-libre bg-white text-[#0033A1] font-semibold rounded-[4px] shadow-lg hover:bg-gray-200 transition"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/table"
                            className="px-8 py-3 text-[16px] font-libre border border-white/70 text-white font-semibold rounded-[4px] hover:bg-white/10 transition"
                        >
                            View Leaderboard
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Socials />
        </div>
    );
};

export default NotFound;
