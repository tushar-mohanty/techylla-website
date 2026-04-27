"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

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
        showReadMore: true,
    },
    {
        name: "Rajarshi Hore",
        image: "/leader2.png",
        title: "Nearly 85% of enterprises are investing in AI—why isn’t the impact matching the investment?",
        description:
            "Innovation without direction is noise.\n\n With 20+ years of driving SAP transformations and enterprise-scale innovation, Rajarshi reveals that AI delivers up to 5x faster decision-making—but only when strategy leads the way. Backed by global migrations and real-time analytics at scale, he emphasizes that true success lies in turning AI from a buzzword into a business engine that drives measurable impact.",
        link: "/thought-leadership/leader-two",
        role: "COO, Techylla",
        showReadMore: true,
    },
    {
        name: "Bireshwar Das",
        image: "/Bireshwar-Das.png",
        title: "Why do organizations still struggle to get real insights from their supply chain data?",
        description:
            "Because the issue isn’t tools—it’s how data is structured and aligned with business needs. Bireswar believes real value comes from transforming legacy SAP systems into scalable cloud platforms like Azure, AWS, and Snowflake. \n\n He focuses on combining this with analytics using Power BI, Tableau, and ReactJS to turn complex supply chain data into clear, decision-ready insights.",
        link: "/thought-leadership/leader-three",
        role: "Senior Associate",
        showReadMore: false,
    },
    {
        name: "Barsha Patra",
        image: "/Barsha-Patra1.png",
        title: "Why do data pipelines still struggle with performance at scale?",
        description:
            "With 3.5+ years of experience, she believes the issue isn’t building pipelines—it’s optimizing them. She works with Snowflake, DBT, and cloud platforms to design efficient, scalable data systems. \n\n Her focus is on speed and reliability—using incremental loading, pushdown optimization, and CI/CD workflows. Her vision is to turn pipelines into high-performance engines for real-time analytics and decision-making.",
        link: "/thought-leadership/leader-four",
        role: "Software Engineer",
        showReadMore: false,
    },
    // {
    //     name: "Leader Five",
    //     image: "/leader5.jpg",
    //     title: "Scaling Global Engineering Teams",
    //     description:
    //         "Global engineering teams are reshaping how companies deliver technology solutions at scale.",
    //     link: "/thought-leadership/leader-five",
    //     showReadMore: false,
    // },
    // {
    //     name: "Leader Six",
    //     image: "/leader6.jpg",
    //     title: "Next Generation AI Platforms",
    //     description:
    //         "Next generation AI platforms are redefining automation and business intelligence.",
    //     link: "/thought-leadership/leader-six",
    //     showReadMore: false,
    // },
    // {
    //     name: "Leader Seven",
    //     image: "/leader7.jpg",
    //     title: "Digital Supply Chain Evolution",
    //     description:
    //         "Digital transformation is enabling smarter and more resilient supply chains.",
    //     link: "/thought-leadership/leader-seven",
    //     showReadMore: false,
    // },
    // {
    //     name: "Leader Eight",
    //     image: "/leader8.jpg",
    //     title: "Future of Data Engineering",
    //     description:
    //         "Data engineering is becoming a core pillar for modern AI-driven organizations.",
    //     link: "/thought-leadership/leader-eight",
    //     showReadMore: false,
    // },
    // {
    //     name: "Leader Nine",
    //     image: "/leader9.jpg",
    //     title: "Product Innovation with AI",
    //     description:
    //         "AI-driven product innovation is unlocking new opportunities for enterprises.",
    //     link: "/thought-leadership/leader-nine",
    //     showReadMore: false,
    // },
];

const ThoughtLeadership = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return; // stop when hovering

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % leaders.length);
        }, 5000); // 5 sec

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextIndex = (activeIndex + 1) % leaders.length;
    const nextNextIndex = (activeIndex + 2) % leaders.length;

    const activeLeader = leaders[activeIndex];

    return (
        <section className="min-h-screen bg-blue-100 md:py-10 py-10 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className={`${urbanist.className} md:text-6xl text-5xl font-light tracking-tight leading-tight md:mb-16 mb-12`}>
                    Thought Leadership
                </h2>

            </div>

            <div className="max-w-6xl mx-auto px-1 md:px-6">

                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)} className="grid grid-cols-2 md:grid-cols-2 items-start">

                    {/* LEFT SIDE IMAGE STACK */}
                    <div className="flex items-end gap-1 overflow-hidden">

                        {/* Small Image 1 */}
                        <motion.div
                            layout
                            onClick={() => setActiveIndex(nextNextIndex)}
                            className="relative w-32 md:h-64 h-105 cursor-pointer overflow-hidden rounded-[7px] -ml-14"
                            // whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={leaders[nextNextIndex].image}
                                    src={leaders[nextNextIndex].image}
                                    alt={`${leaders[nextNextIndex].name} portrait`}
                                    className="w-full h-full object-cover opacity-70"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.8 }}
                                    transition={{ duration: 0.4 }}
                                    whileHover={{ scale: 1.05 }}
                                />
                            </AnimatePresence>

                        </motion.div>

                        {/* Small Image 2 */}
                        <motion.div
                            layout
                            onClick={() => setActiveIndex(nextIndex)}
                            className="relative w-40 md:h-64 h-105 cursor-pointer overflow-hidden rounded-[7px]"
                            // whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.35 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={leaders[nextIndex].image}
                                    src={leaders[nextIndex].image}
                                    alt={`${leaders[nextIndex].name} portrait`}
                                    className="w-full h-full object-cover opacity-85 rounded-[7px]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    whileHover={{ scale: 1.03 }}
                                />
                            </AnimatePresence>

                        </motion.div>

                        {/* BIG IMAGE */}
                        <motion.div
                            layout
                            className="relative w-80 h-105 md:w-64 md:h-110 overflow-hidden rounded-[7px] shadow-xl"
                            transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeLeader.image}
                                    src={activeLeader.image}
                                    alt={`${activeLeader.name}, ${activeLeader.role || "Team member"}`}
                                    className="w-full h-full object-cover rounded-[7px]"
                                    initial={{ opacity: 0, x: -60 }}
                                    animate={{ opacity: 1, x: 0, }}
                                    exit={{ x: 60, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>

                            <div className="absolute bottom-0 left-0 w-full h-50 bg-linear-to-t from-black/80 to-transparent"></div>
                            <motion.p
                                key={activeLeader.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className={`${urbanist.className} absolute bottom-2 left-1 md:left-4 text-white text-2xl md:text-3xl font-normal`}
                            >
                                {activeLeader.name} <br></br>

                                {activeLeader.role && (
                                    <span className={`${urbanist.className} text-lg md:text-xl leading-tight font-normal text-white`}>
                                        {activeLeader.role}
                                    </span>
                                )}
                            </motion.p>

                        </motion.div>

                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <div className="max-w-lg md:-ml-4 ml-4">

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                            >

                                <h3 className={`${urbanist.className} text-xl md:text-3xl text-[#1368B6] font-normal leading-tight`}>
                                    {activeLeader.title}
                                </h3>

                                <p className={`${urbanist.className} text-[10px] md:text-[18px] text-gray-700 mt-5 leading-relaxed whitespace-pre-line`}>
                                    {activeLeader.description}
                                </p>

                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mt-2 md:mt-8">

                                    {/* READ MORE */}
                                    {activeLeader.showReadMore && (
                                        <Link href={activeLeader.link}>
                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                className={`${urbanist.className} bg-black text-white px-3 py-2 md:px-7 md:py-2 font-semibold tracking-widest text-[10px] md:text-[15px] border-b border-transparent hover:bg-blue-100 hover:text-black hover:border-black duration-500 cursor-pointer whitespace-nowrap`}
                                            >
                                                READ MORE
                                            </motion.button>
                                        </Link>
                                    )}

                                    {/* CASE STUDY */}
                                    {activeLeader.caseStudyLink && (
                                        <Link href={activeLeader.caseStudyLink}>
                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                className={`${urbanist.className} bg-black md:bg-transparent text-white md:text-black px-1 py-2 md:px-7 md:py-2 font-semibold tracking-tight text-[10px] md:text-[15px] border border-black hover:bg-black hover:text-white duration-500 cursor-pointer whitespace-nowrap`}
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