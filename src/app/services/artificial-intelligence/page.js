"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Workflow, FlaskConical, TrendingUp, Settings2, Settings, Zap, Users } from "lucide-react";
import { Manrope } from "next/font/google";
import Script from "next/script";
import AIAssessment from "@/components/AIAssessment";
import { Brain, DollarSign } from "lucide-react";
import AIDeliveryLifecycle from "@/components/AIDeliveryLifecycle";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

import { Urbanist } from 'next/font/google'
import MetricCard from "@/components/AIMetrics";
import Link from "next/link";

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

const ArtificialIntelligence = () => {

    const [start, setStart] = React.useState(false);

    return (
        <div className="w-full overflow-x-hidden">

            {/* HERO */}
            <section className="relative bg-white py-20 min-h-screen overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/Artificial-Intelligence.png"
                        alt="Artificial Intelligence Image"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
                </div>

                <div className="relative max-w-6xl z-20 mx-auto px-4 md:px-6">

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`${urbanist.className} text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-4 mt-60`}
                    >
                        AI Services @ <span className="text-blue-300">Techylla</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={`${urbanist.className} text-md md:text-3xl font-light text-white tracking-wide leading-10 mb-20`}
                    >
                        Solving real business problems with powerful <span className="text-blue-200">AI solutions.</span>
                    </motion.h2>

                </div>
            </section>

            {/* SECTION 2 */}
            <section className={`${urbanist.className} relative bg-blue-100 px-6 md:px-12 py-20 md:py-10 overflow-hidden`}>

                {/* Background visuals */}
                <img src="/Bg Network Pattern.png" className="absolute -top-40 -left-40 w-[400] opacity-20 pointer-events-none" />
                <img src="/Bg Network Pattern.png" className="absolute -bottom-40 -right-40 w-[500] opacity-20 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center">

                    {/* HEADLINE */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className={`${urbanist.className} text-black text-4xl md:text-6xl font-light`}>
                        Is <span className="text-blue-800 font-medium">AI</span> right for Your Supply Chain?
                    </motion.h2>

                    {/* SUBTEXT */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className="text-gray-700 mt-6 text-lg md:text-xl">
                        Answer a few quick questions to uncover where AI can reduce cost, improve resilience, and optimize your operations.
                    </motion.p>

                    {/* CTA BUTTON (Optional but recommended) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className="mt-8">
                        <AnimatePresence>
                            {!start && (
                                <motion.div
                                    key="start-btn"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{
                                        duration: 1.35,
                                        ease: "easeOut",
                                    }}
                                    className="mt-8 will-change-transform will-change-opacity"
                                // style={{ transform: "translateZ(0)" }} // 👈 forces GPU acceleration
                                >
                                    <button
                                        onClick={() => setStart(true)}
                                        className="bg-blue-700 hover:bg-blue-800 text-white text-xl px-8 py-3 rounded-xl transition cursor-pointer"
                                    >
                                        Start Assessment
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* ASSESSMENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeIn"
                        }} className="mt-12">
                        {start && (
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeIn",
                                }}
                                className="bg-black/90 rounded-3xl backdrop-blur-xl p-4 md:p-6 shadow-2xl will-change-transform will-change-opacity"
                            // style={{ transform: "translateZ(0)" }}
                            >
                                <AIAssessment />
                            </motion.div>
                        )}
                    </motion.div>

                </div>
            </section>

            <section className={`${urbanist.className} bg-blue-900 py-10 md:py-10 px-4 md:px-12 overflow-hidden`}>

                <div className="max-w-6xl mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} className="text-5xl md:text-6xl font-light text-white">
                        Techylla Impact
                    </motion.h2>

                </div>

                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* LEFT */}
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <MetricCard title="Prediction Accuracy" value="92%" highlight icon={TrendingUp} />

                            <MetricCard
                                title="Gen AI Use Cases Implemented"
                                value="20+"
                                highlight
                                icon={Brain}
                            />

                            <div className="sm:col-span-2">
                                <MetricCard
                                    title="Operational Cost Savings"
                                    value="$5M"
                                    large
                                    highlight
                                    icon={DollarSign}
                                />
                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col gap-5">

                            <MetricCard
                                title="Increase in User Adoption"
                                value="40%"
                                tall
                                highlight
                                icon={Users}
                            />

                            <div className="grid grid-cols-2 gap-5">
                                <MetricCard title="Faster Decision-Making" value="2X" highlight icon={Zap} />
                                <MetricCard title="Reduction in Manual Efforts" value="30%" highlight icon={Settings} />
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <AIDeliveryLifecycle />





            <section className={`${urbanist.className} relative bg-black text-white py-16 px-6 md:px-12 overflow-hidden`}>

                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-70 -left-70 w-[500] rotate-40 opacity-80 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-55 -right-40 w-[600] rotate-340 opacity-80 pointer-events-none select-none"
                />

                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-5xl md:text-6xl font-light">
                        Proven Outcomes
                    </h2>
                </div>

                {/* Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Card 1 */}
                    <Link href="/case-studies/story-3" className="group block">
                        <div className="rounded-3xl overflow-hidden border border-white/20 bg-black/80 
                          hover:border-white/20 transition duration-300
                          shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1">

                            <div className="overflow-hidden">
                                <img
                                    src="/SmartFactory-1.png"
                                    alt="AI implemented smart factory Image"
                                    className="w-full h-[200px] sm:h-[220px] object-cover 
                           group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-5 md:p-6 flex flex-col justify-between h-[140px] md:h-[160px]">
                                <h3 className="text-base md:text-lg font-medium leading-snug mb-4">
                                    AI-Powered Early Warning for Smarter Production Decisions
                                </h3>

                                <button className="w-fit px-4 py-2 text-sm md:text-md rounded-full bg-white text-black hover:bg-gray-200 transition cursor-pointer">
                                    Read Case Study
                                </button>
                            </div>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link href="/case-studies/story-4" className="group block">
                        <div className="rounded-3xl overflow-hidden border border-white/20 bg-black/80 
                          hover:border-white/20 transition duration-300
                          shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1">

                            <div className="overflow-hidden">
                                <img
                                    src="/MedTech-1.png"
                                    alt="AI implemented in medtech Image"
                                    className="w-full h-[200px] sm:h-[220px] object-cover 
                           group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-5 md:p-6 flex flex-col justify-between h-[140px] md:h-[160px]">
                                <h3 className="text-base md:text-lg font-medium leading-snug mb-4">
                                    Transforming Data Silos into AI-Driven Quality Systems
                                </h3>

                                <button className="w-fit px-4 py-2 text-sm md:text-md rounded-full bg-white text-black hover:bg-gray-200 transition cursor-pointer">
                                    Read Case Study
                                </button>
                            </div>
                        </div>
                    </Link>


                </div>
            </section>

            <section id="contact-section" className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-12 overflow-hidden min-h-screen">

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
                        <h2 className={`${urbanist.className} text-5xl font-semibold text-black leading-tight mb-6 mt-10`}>
                            Have an Idea? Let’s Build It <span className="text-blue-800 font-bold">Together</span>
                        </h2>

                        <p className={`${urbanist.className} text-gray-800 text-xl max-w-[700]`}>
                            From concept to reality, we make it happen.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE FORM */}
                    <div className="relative mt-10 p-6 sm:p-8 rounded-xl shadow-lg bg-white overflow-hidden">

                        <h3 className={`${urbanist.className} text-2xl sm:text-3xl font-semibold mb-4`}>
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
                                data-form-id="2d512c76-1898-499f-a646-13ff510d1f49"
                                data-portal-id="245721089"
                            ></div>
                        </div>

                        {/* RESPONSIVE MASK (SAFE) */}
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-30 sm:h-20 bg-gradient-to-t from-blue-100 to-white"></div>

                    </div>


                </div>
            </section>


        </div >
    );
};


export default ArtificialIntelligence;