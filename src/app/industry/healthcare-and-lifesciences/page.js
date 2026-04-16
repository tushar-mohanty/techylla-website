"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Workflow, FlaskConical, TrendingUp, Settings2 } from "lucide-react";
import { Manrope } from "next/font/google";
import Script from "next/script";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const HealthcareandLifesciences = () => {
    return (
        <div className="w-full overflow-x-hidden">

            {/* HERO */}
            <section aria-label="Healthcare and life sciences overview" className="relative bg-white py-20 min-h-screen overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/HealthcarePageImg1.png"
                        alt="Healthcare Background Image"
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
                        Healthcare & Life Sciences @ <span className="text-blue-300">Techylla</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={`${urbanist.className} text-md md:text-3xl font-light text-white tracking-wide leading-10 mb-20`}
                    >
                        Optimizing Pharmaceutical Storage with <span className="text-blue-200">Predictive Capacity Intelligence</span>
                    </motion.h2>

                </div>
            </section>

            {/* SECTION 2 */}
            <section aria-label="Pharmaceutical storage challenges" className="relative bg-blue-100 px-6 md:px-12 min-h-screen overflow-hidden">

                <img src="/Bg Network Pattern.png" alt="" className="absolute -top-50 -left-60 w-[500] opacity-30 pointer-events-none select-none" />
                <img src="/Bg Network Pattern.png" alt="" className="absolute -bottom-40 -right-30 w-[600] opacity-30 pointer-events-none select-none" />

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-3 items-center">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src="/HealthcarePageImg5.png"
                            alt="Pharmaceutical storage and healthcare supply chain operations"
                            width={390}
                            height={500}
                            className="rounded-lg object-cover mt-60 md:mt-50"
                        />

                        <div className="absolute top-3 md:top-10 md:-ml-5 ml-0">
                            <h2 className={`${urbanist.className} text-black md:text-5xl text-4xl font-light md:w-230 w-full`}>
                                Why <span className="text-blue-800">Predictive Storage Capacity Planning</span> is Essential in Pharmaceuticals
                            </h2>
                        </div>
                    </motion.div>

                    {/* TEXT */}
                    <div className="space-y-8 mt-10 md:mt-30 ml-0 md:-ml-10 md:mb-0 mb-10">

                        <h2 className={`${urbanist.className} text-black text-xl font-light`}>
                            Pharmaceutical products require tightly controlled storage to maintain integrity and meet regulatory standards. Storage ranges from ambient and cold conditions to deep-frozen and restricted-access zones, and even small shifts in product mix can significantly impact capacity requirements.
                        </h2>

                        <h2 className={`${urbanist.className} text-blue-900 text-xl font-medium`}>
                            A data-driven approach enables better visibility into these changes, allowing organizations to forecast storage needs accurately and ensure efficient, compliant, and stable operations across the supply chain.
                        </h2>

                    </div>
                </div>
            </section>

            <section aria-label="Predictive capacity planning approach" className={`${urbanist.className} relative py-10 px-6 md:px-19 overflow-hidden bg-gradient-to-t from-blue-50 to-green-50`}>
                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} className="text-5xl md:text-6xl font-light text-gray-900">
                        Challenges in Pharmaceutical Storage Planning
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className="text-gray-600 mt-3 max-w-5xl text-md md:text-xl">
                        Traditional storage planning lacks adaptability to dynamic product and distribution changes.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 0.5, delay: 0, scale: { duration: 0.25 } }}
                        viewport={{ once: true }}
                        className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]"
                    >
                        {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
                        <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Limited Visibility
                            </h3>
                            <p className="text-sm text-gray-600 mt-auto">
                                Static data limits visibility into changing product mix and storage needs.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 0.5, scale: { duration: 0.25 } }}
                        viewport={{ once: true }}
                        className="bg-teal-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]"
                    >
                        {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
                        <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Inaccurate Capacity Planning
                            </h3>
                            <p className="text-sm text-gray-600 mt-auto">
                                Fails to anticipate future storage needs across temperature zones.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 1, scale: { duration: 0.25 } }}
                        viewport={{ once: true }}
                        className="bg-purple-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]"
                    >
                        {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
                        <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Inefficient Storage Utilization
                            </h3>
                            <p className="text-sm text-gray-600 mt-auto">
                                Leads to poor allocation across cold, ambient, and frozen environments.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 1.5, scale: { duration: 0.25 } }}
                        viewport={{ once: true }}
                        className="bg-amber-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]"
                    >
                        {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
                        <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-900">
                                High Costs & Compliance Risks
                            </h3>
                            <p className="text-sm text-gray-600 mt-auto">
                                Reactive investments and improper storage increase costs and regulatory risks.
                            </p>
                        </div>

                    </motion.div>

                </div>
            </section >

            <section className={`${urbanist.className} relative py-10 px-6 md:px-19 overflow-hidden bg-gradient-to-b from-blue-50 to-green-50`}>

                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} className="text-5xl md:text-6xl font-light text-gray-900">
                        Predictive Capacity Planning Approach
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className="text-gray-600 mt-3 max-w-5xl text-md md:text-xl">
                        A data-driven model enabling proactive planning and optimized pharmaceutical storage management.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 0.5, delay: 0, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-blue-200 via-blue-50 to-blue-200">
                        <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

                            <Workflow className="w-7 h-7 text-blue-700 mb-4" />

                            <h3 className="text-lg font-semibold text-gray-900">
                                End-to-End Traceability
                            </h3>

                            <p className="text-sm text-gray-600 mt-auto">
                                Tracks product flow across manufacturing, hubs, and distribution centers for complete visibility.
                            </p>

                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 0.5, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-teal-200 via-teal-50 to-teal-200">
                        <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

                            <FlaskConical className="w-7 h-7 text-teal-700 mb-4" />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Product Mix Forecasting
                            </h3>

                            <p className="text-sm text-gray-600 mt-auto">
                                Predicts volumes, storage conditions, and regional demand patterns.
                            </p>

                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 1, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-indigo-200 via-indigo-50 to-indigo-200">
                        <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

                            <TrendingUp className="w-7 h-7 text-indigo-700 mb-4" />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Capacity Prediction
                            </h3>

                            <p className="text-sm text-gray-600 mt-auto">
                                Estimates future storage needs across temperature-controlled zones.
                            </p>

                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 1.5, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-emerald-200 via-emerald-50 to-emerald-200">
                        <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

                            <Settings2 className="w-7 h-7 text-emerald-700 mb-4" />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Continuous Optimization
                            </h3>

                            <p className="text-sm text-gray-600 mt-auto">
                                Refines predictions by comparing forecasts with actual outcomes.
                            </p>

                        </div>
                    </motion.div>

                </div>
            </section>

            <section aria-label="Business impact of predictive storage planning" className={`${urbanist.className} relative py-10 px-6 md:px-19 bg-black text-white min-h-[70%] overflow-hidden`}>

                <img src="/Bg Network Pattern.png" className="absolute -top-50 -left-60 w-[500] opacity-100 pointer-events-none select-none" />
                <img src="/Bg Network Pattern.png" className="absolute -bottom-40 -right-30 w-[700] opacity-100 pointer-events-none select-none" />

                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className="text-5xl md:text-6xl font-light leading-tight">
                        Business Impact of Predictive Storage Planning
                    </motion.h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0 }}
                        viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

                        <img
                            src="/HealthcarePageImg6.png"
                            alt="Proactive capacity planning in pharmaceutical storage"
                            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-xl font-medium mb-3">
                                Proactive Capacity Planning
                            </h3>
                            <p className="text-sm font-light text-gray-300">
                                Enable forward-looking infrastructure decisions with predictive insights.
                            </p>
                        </div>

                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

                        <img
                            src="/HealthcarePageImg7.png"
                            alt="Optimized storage utilization in healthcare supply chain"
                            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-xl font-medium mb-3">
                                Optimized Storage Utilization
                            </h3>
                            <p className="text-sm font-light text-gray-300">
                                Maximize warehouse efficiency while reducing operational costs.
                            </p>
                        </div>

                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

                        <img
                            src="/HealthcarePageImg8.png"
                            alt="Compliant and resilient pharmaceutical operations"
                            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-xl font-medium mb-3">
                                Resilient & Compliant Operations
                            </h3>
                            <p className="text-sm font-light text-gray-300">
                                Ensure reliable supply chains with improved compliance and risk control.
                            </p>
                        </div>

                    </motion.div>

                </div>
            </section>

            <section aria-label="Contact form for healthcare solutions" className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-12 overflow-hidden min-h-screen">

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
                                aria-label="Healthcare inquiry form"
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


export default HealthcareandLifesciences;