"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Manrope } from "next/font/google";
import Script from "next/script";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});


const Careers = () => {


    return (

        <div className="w-full overflow-x-hidden">
            <section className="relative bg-white py-20 min-h-screen overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/Careers Bg1.jpg"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
                </div>


                <div className="relative max-w-6xl z-20 mx-auto px-4 md:px-6 bg-cover">

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`${manrope.className} text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-tight mb-4 mt-60 md:mt-60`}
                    >
                        Career @ <span className="text-blue-300 font-semibold">Techylla</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className={`${manrope.className} text-md md:text-4xl font-light text-white tracking-wide leading-10 mb-20`}
                    >
                        Drive Change, Shape The Future with Data
                    </motion.h2>

                </div>

            </section >
            <section className="relative bg-blue-100 px-6 md:px-12 min-h-screen overflow-hidden">
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-50 -left-60 w-[500] rotate-350 opacity-30 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-40 -right-30 w-[600] rotate-340 opacity-30 pointer-events-none select-none"
                />
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-3 items-center">

                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src="/Careers Bg2.jpg" // replace with your image
                            alt="Why choose us"
                            width={390}
                            height={500}
                            className="rounded-lg object-cover mt-40 md:mt-30"
                        />

                        {/* Overlay Text */}
                        <div className="absolute top-6 -ml-5">
                            <h2 className={`${manrope.className} text-black text-6xl font-light`}>
                                Why choose us?
                            </h2>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-8 mt-10 md:mt-30 ml-0 md:-ml-10">

                        {[
                            {
                                title: "Accelerate Your Growth",
                                desc: "Solve real challenges and grow faster with hands-on experience.",
                            },
                            {
                                title: "Build Together, Win Together",
                                desc: "Collaborate with a team that supports, challenges, and succeeds together.",
                            },
                            {
                                title: "A Community That Inspires",
                                desc: "Work in a culture that values ideas, curiosity, and shared growth.",
                            },
                            {
                                title: "Create Meaningful Solutions",
                                desc: "Build solutions that create real impact and drive measurable change.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={`${manrope.className} text-2xl md:text-3xl font-medium mb-2`}>
                                    {item.title}
                                </h3>
                                <p className={`${manrope.className} text-gray-700 mb-4`}>{item.desc}</p>

                                {i !== 3 && (
                                    <div className="border-b border-gray-300 mt-6"></div>
                                )}
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>
            <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-12 overflow-hidden min-h-screen">

                {/* Background Pattern */}
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-50 -left-60 w-[500] rotate-350 opacity-30 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-55 -right-40 w-[600] rotate-340 opacity-20 pointer-events-none select-none"
                />

                <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                    {/* LEFT TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`${manrope.className} text-5xl font-semibold text-black leading-tight mb-6 mt-10`}>
                            Join <span className="text-blue-800 font-bold">Techylla</span> and shape the future of Data and AI
                        </h2>

                        <p className={`${manrope.className} text-gray-800 text-xl max-w-[700]`}>
                            Where your skills create impact, and your growth never stops.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE FORM */}
                    <div className="relative mt-10 p-6 sm:p-8 rounded-xl shadow-lg bg-white overflow-hidden">

                        <h3 className={`${manrope.className} text-2xl sm:text-3xl font-semibold mb-4`}>
                            Send us your details
                        </h3>

                        <Script
                            src="https://js-na2.hsforms.net/forms/embed/245721089.js"
                            strategy="afterInteractive"
                        />

                        {/* FORM WRAPPER */}
                        <div className="form-wrapper">
                            <div
                                className="hs-form-frame"
                                data-region="na2"
                                data-form-id="d7e5b28d-ba9d-4975-8388-01c50f224187"
                                data-portal-id="245721089"
                            ></div>
                        </div>

                        {/* RESPONSIVE MASK (SAFE) */}
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-30 sm:h-20 bg-gradient-to-t from-blue-100 to-white"></div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Careers;