"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

const leaders = [
    {
        name: "Sandip Sanyal",
        image: "/leader1.png",
        title: "Stop Guessing Your Duty Costs",
        description:
            "In a fragmented global market, a 2% tariff shift can wipe out your quarterly profit. Our AI engineering turns volatile trade data into a clear simulation of your bottom line. \n\n The era of predictable global trade is over. As supply chains decouple, tariffs have become volatile variables that can erase a year’s margin in a single trading day. Relying on legacy spreadsheets is a high-risk strategy that fails the clean books test.",
        link: "/thought-leadership/sandip-sanyal",
        caseStudyLink: "/case-studies/story-1",
        role: "CEO, Techylla",
    },
    {
        name: "Rajarshi Hore",
        image: "/leader2.png",
        title: "Nearly 85% of enterprises are investing in AI—why isn’t the impact matching the investment?",
        description:
            "Innovation without direction is noise.\n\n With 20+ years of driving SAP transformations and enterprise-scale innovation, Rajarshi reveals that AI delivers up to 5x faster decision-making—but only when strategy leads the way. Backed by global migrations and real-time analytics at scale, he emphasizes that true success lies in turning AI from a buzzword into a business engine that drives measurable impact.",
        link: "/thought-leadership/leader-two",
        role: "COO, Techylla",
        // caseStudyLink: "/case-studies/story-1",
    },
    {
        name: "Vivek Pandey",
        image: "/leader3.jpg",
        title: "Modern Data Platforms",
        description:
            "Modern data platforms are enabling companies to scale analytics and build intelligent data-driven products.",
        link: "/thought-leadership/leader-three",
    },
    {
        name: "Leader Four",
        image: "/leader4.jpg",
        title: "Future of Cloud Transformation",
        description:
            "Cloud transformation is helping companies accelerate digital innovation and operational agility.",
        link: "/thought-leadership/leader-four",
    },
    {
        name: "Leader Five",
        image: "/leader5.jpg",
        title: "Scaling Global Engineering Teams",
        description:
            "Global engineering teams are reshaping how companies deliver technology solutions at scale.",
        link: "/thought-leadership/leader-five",
    },
    {
        name: "Leader Six",
        image: "/leader6.jpg",
        title: "Next Generation AI Platforms",
        description:
            "Next generation AI platforms are redefining automation and business intelligence.",
        link: "/thought-leadership/leader-six",
    },
    {
        name: "Leader Seven",
        image: "/leader7.jpg",
        title: "Digital Supply Chain Evolution",
        description:
            "Digital transformation is enabling smarter and more resilient supply chains.",
        link: "/thought-leadership/leader-seven",
    },
    {
        name: "Leader Eight",
        image: "/leader8.jpg",
        title: "Future of Data Engineering",
        description:
            "Data engineering is becoming a core pillar for modern AI-driven organizations.",
        link: "/thought-leadership/leader-eight",
    },
    {
        name: "Leader Nine",
        image: "/leader9.jpg",
        title: "Product Innovation with AI",
        description:
            "AI-driven product innovation is unlocking new opportunities for enterprises.",
        link: "/thought-leadership/leader-nine",
    },
];

const ThoughtLeadership = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextIndex = (activeIndex + 1) % leaders.length;
    const nextNextIndex = (activeIndex + 2) % leaders.length;

    const activeLeader = leaders[activeIndex];

    return (
        <section className="min-h-screen bg-blue-100 py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-6xl font-light tracking-tighter leading-tight mb-16">
                    Thought Leadership
                </h2>

                <div className="grid grid-cols-2 items-start">

                    {/* LEFT SIDE IMAGE STACK */}
                    <div className="flex items-end gap-1 overflow-hidden">

                        {/* Small Image 1 */}
                        <motion.div
                            layout
                            onClick={() => setActiveIndex(nextNextIndex)}
                            className="relative w-32 h-63 cursor-pointer overflow-hidden rounded-[7px] -ml-14"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <motion.img
                                key={leaders[nextNextIndex].image}
                                src={leaders[nextNextIndex].image}
                                className="w-full h-full object-cover opacity-70"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.8 }}
                                transition={{ duration: 0.4 }}
                            />
                            {/* <p className="absolute bottom-3 left-3 text-white text-sm">
                {leaders[nextNextIndex].name}
              </p> */}
                        </motion.div>

                        {/* Small Image 2 */}
                        <motion.div
                            layout
                            onClick={() => setActiveIndex(nextIndex)}
                            className="relative w-40 h-63 cursor-pointer overflow-hidden rounded-[7px]"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.35 }}
                        >
                            <motion.img
                                key={leaders[nextIndex].image}
                                src={leaders[nextIndex].image}
                                className="w-full h-full object-cover opacity-85"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.9 }}
                                transition={{ duration: 0.4 }}
                            />
                            {/* <p className="absolute bottom-3 left-3 text-white text-sm">
                {leaders[nextIndex].name}
              </p> */}
                        </motion.div>

                        {/* BIG IMAGE */}
                        <motion.div
                            layout
                            className="relative w-64 h-110 overflow-hidden rounded-[7px] shadow-xl"
                            transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeLeader.image}
                                    src={activeLeader.image}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>

                            <div className="absolute bottom-0 left-0 w-full h-30 bg-linear-to-t from-black/70 to-transparent"></div>
                            <motion.p
                                key={activeLeader.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className={`${manrope.className} absolute bottom-2 left-4 text-white text-3xl font-normal`}
                            >
                                {activeLeader.name} <br></br>
                                
                                {activeLeader.role && (
                                <span className={`${manrope.className} text-[21px] leading-tight font-normal text-white`}>
                                    {activeLeader.role}
                                </span>
                            )}
                            </motion.p>
                            {/* ROLE
                            {activeLeader.role && (
                                <p className="text-sm opacity-80 leading-tight">
                                    {activeLeader.role}
                                </p>
                            )} */}
                        </motion.div>

                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <div className="max-w-lg -ml-4">

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                            >

                                <h3 className={`${manrope.className} text-3xl text-[#1368B6] font-normal leading-tight`}>
                                    {activeLeader.title}
                                </h3>

                                <p className={`${manrope.className} text-gray-700 mt-5 leading-relaxed whitespace-pre-line`}>
                                    {activeLeader.description}
                                </p>

                                <div className="flex items-center gap-4 mt-8">

                                    {/* READ MORE */}
                                    <Link href={activeLeader.link}>
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            className={`${manrope.className} bg-black text-white px-7 py-2 font-semibold tracking-widest text-md border-b border-transparent hover:bg-blue-100 hover:text-black hover:border-black duration-500 cursor-pointer whitespace-nowrap`}
                                        >
                                            READ MORE
                                        </motion.button>
                                    </Link>

                                    {/* CASE STUDY */}
                                    {activeLeader.caseStudyLink && (
                                        <Link href={activeLeader.caseStudyLink}>
                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                className={`${manrope.className} bg-transparent text-black px-3 py-2 font-semibold tracking-tight text-md border border-black hover:bg-black hover:text-white duration-500 cursor-pointer whitespace-nowrap`}
                                            >
                                                Review the Tariff Simulation Model
                                            </motion.button>
                                        </Link>
                                    )}

                                </div>

                            </motion.div>

                        </AnimatePresence>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ThoughtLeadership;