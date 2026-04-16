"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { Activity } from "react";
import { Workflow, FlaskConical, TrendingUp, Settings2, Settings, Zap, Users, Cloud, Server, BadgeDollarSign, Layers, Cpu, Bot, ActivityIcon, Network } from "lucide-react";
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

const DataCloud = () => {

    return (
        <div className="w-full overflow-x-hidden">

            {/* HERO */}
            <section className="relative bg-white py-20 min-h-screen overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/Data-Cloud.png"
                        alt="Data and Cloud Background Image"
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
                        Data & Cloud Services @ <span className="text-blue-300">Techylla</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={`${urbanist.className} text-md md:text-3xl font-light text-white tracking-wide leading-10 mb-20`}
                    >
                        Powering intelligent data ecosystems with scalable <span className="text-blue-200">cloud architecture.</span>
                    </motion.h2>

                </div>
            </section>

            {/* CORE CAPABILITIES */}
            <section className={`${urbanist.className} bg-gradient-to-b from-blue-900/90 via-black  to-black text-white py-10 md:py-10 px-6 md:px-12`}>

                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-5xl md:text-6xl font-light">
                        Core Capabilities
                    </h2>
                </div>

                {/* Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Card 1 */}
                    <div className="group rounded-3xl p-4 bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(100,150,255,0.3)]">

                        <div className="rounded-2xl overflow-hidden mb-6">
                            <img src="/Data-Engineering.png" alt="Data Engineering Image" className="w-full h-40 object-cover group-hover:scale-105 transition duration-700" />
                        </div>

                        <h3 className="text-lg md:text-xl text-blue-300 mb-3 text-center">Data Engineering</h3>
                        <p className="text-sm text-gray-200 text-center tracking-wide">
                            Designing robust pipelines that ensure speed, reliability, and scalability.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group rounded-3xl p-4 bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(100,150,255,0.3)]">

                        <div className="rounded-2xl overflow-hidden mb-6">
                            <img src="/Cloud-Engineering.png" alt="Cloud Engineering Image" className="w-full h-40 object-cover group-hover:scale-105 transition duration-700" />
                        </div>

                        <h3 className="text-lg md:text-xl text-blue-300 mb-3 text-center">Cloud Engineering</h3>
                        <p className="text-sm text-gray-200 text-center tracking-wide">
                            Building secure, cloud-native architectures optimized for growth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group rounded-3xl p-4 bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(100,150,255,0.3)]">

                        <div className="rounded-2xl overflow-hidden mb-6">
                            <img src="/Data-Governance.png" alt="Data Governance Image" className="w-full h-40 object-cover group-hover:scale-105 transition duration-700" />
                        </div>

                        <h3 className="text-lg md:text-xl text-blue-300 mb-3 text-center">Data Governance</h3>
                        <p className="text-sm text-gray-200 text-center tracking-wide">
                            Maintaining data integrity, security, and regulatory compliance at scale.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group rounded-3xl p-4 bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(100,150,255,0.3)]">

                        <div className="rounded-2xl overflow-hidden mb-6">
                            <img src="/Real-Time-Analytics.png" alt="Real Time Analytics Image" className="w-full h-40 object-cover group-hover:scale-105 transition duration-700" />
                        </div>

                        <h3 className="text-lg md:text-xl text-blue-300 mb-3 text-center">Real-Time Analytics</h3>
                        <p className="text-sm text-gray-200 text-center tracking-wide">
                            Driving instant insights with high-performance streaming and analytics.
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTION 2 */}


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

                            <MetricCard title="Data Pipeline Reliability" value="95%" highlight icon={Network} />

                            <MetricCard
                                title="Cloud Workloads Deployed"
                                value="20+"
                                highlight
                                icon={Server}
                            />

                            <div className="sm:col-span-2">
                                <MetricCard
                                    title="Cloud Cost Optimization"
                                    value="$4M"
                                    large
                                    highlight
                                    icon={BadgeDollarSign}
                                />
                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col gap-5">

                            <MetricCard
                                title="Data Accessibility Improvement"
                                value="45%"
                                tall
                                highlight
                                icon={Layers}
                            />

                            <div className="grid grid-cols-2 gap-5">
                                <MetricCard title="Faster Data Processing" value="4X" highlight icon={Cpu} />
                                <MetricCard title="Automation of Data Workflows" value="40%" highlight icon={Bot} />
                            </div>

                        </div>

                    </div>

                </div>
            </section>

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
                    <Link href="/case-studies/story-1" className="group block">
                        <div className="rounded-3xl overflow-hidden border border-white/20 bg-black/80 
                          hover:border-white/20 transition duration-300
                          shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1">

                            <div className="overflow-hidden">
                                <img
                                    src="/Tariff-1.png"
                                    alt="Global Tariff Financial Modeling System"
                                    className="w-full h-[200px] sm:h-[220px] object-cover 
                           group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-5 md:p-6 flex flex-col justify-between h-[140px] md:h-[160px]">
                                <h3 className="text-base md:text-lg font-medium leading-snug mb-4">
                                    Reimagining Global Tariff Modeling Through Scalable Data Platforms
                                </h3>

                                <button className="w-fit px-4 py-2 text-sm md:text-md rounded-full bg-white text-black hover:bg-gray-200 transition cursor-pointer">
                                    Read Case Study
                                </button>
                            </div>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link href="/case-studies/story-5" className="group block">
                        <div className="rounded-3xl overflow-hidden border border-white/20 bg-black/80 
                          hover:border-white/20 transition duration-300
                          shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1">

                            <div className="overflow-hidden">
                                <img
                                    src="/PulpMill-1.png"
                                    alt="Integrated Analytics for Pulp Mill Optimization Image"
                                    className="w-full h-[200px] sm:h-[220px] object-cover 
                           group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-5 md:p-6 flex flex-col justify-between h-[140px] md:h-[160px]">
                                <h3 className="text-base md:text-lg font-medium leading-snug mb-4">
                                    Optimizing Pulp Mill Operations with Integrated Data Intelligence
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


export default DataCloud;