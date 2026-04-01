"use client";

import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});


export default function StoryFour() {
    return (
        <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 w-full overflow-hidden">
            <img
                src="/Bg Network Pattern.png"
                className="absolute -top-40 md:left-0 -left-10 w-[600] rotate-350 opacity-10 pointer-events-none select-none"
            />
            <img
                src="/Bg Network Pattern.png"
                className="absolute -bottom-20 right-0 w-[800] rotate-355 opacity-30 pointer-events-none select-none"
            />
            <motion.img
                src="/Case 4 Img 1.png" // your PNG path
                alt="Case Study 4 Image"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 0.9, x: 70 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute right-10 top-33 w-[500] opacity-90"
            />
            <div className="max-w-6xl mx-auto px-6 py-25 md:py-30 md:ml-4 ml-0 ">

                <h1 className={`${manrope.className} md:font-normal font-bold text-black md:mb-8 mb-2 md:text-6xl text-3xl`}>
                    The Intelligent Quality Ecosystem
                </h1>
                <h1 className={`${manrope.className} md:font-normal font-semibold text-black md:mb-8 mb-5 md:text-3xl text-lg`}>
                    Moving from Data Silos to Autonomous Quality Surveillance
                </h1>

                <div className="md:hidden mb-5">
                    <motion.img
                        src="/Case4MobileImg2.png"
                        alt="Case Study 4 Image"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>





                <h2 className={`${manrope.className} md:text-3xl text-xl mb-5 font-semibold`}>Business Need</h2>


                <p className="md:text-lg text-sm text-gray-700 mb-8">
                    In the MedTech industry, ensuring patient safety requires early identification of risks. However, organizations often face challenges due to fragmented data across multiple systems, limiting visibility and preventing a unified view of product-level quality risks.                 <br />
                    <br />
                    Traditional approaches rely heavily on manual data collection, where teams spend most of their time gathering information instead of focusing on proactive risk mitigation. Additionally, the absence of real-time insights results in delayed detection of issues, as risks are often identified only after appearing in periodic reports.               <br />
                    <br />
                    To address these challenges, the objective was to:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Establish a unified data layer to consolidate fragmented quality data</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Enable proactive and real-time risk identification</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Reduce manual effort and shift focus toward intelligent quality management</span>

                </p>

                {/* BUSINESS IMPACT - BELOW IMAGE */}
                <div className="hidden md:block absolute right-5 top-110 w-[350] ">
                    <h2 className={`${manrope.className} text-3xl mb-3 font-semibold mt-4`}>Business Impact</h2>

                    <p className={`${manrope.className} text-lg text-gray-700 mb-8`}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Unified and instant data access
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        AI-driven proactive risk detection
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Autonomous stakeholder alerts
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Increased proactive focus

                    </p>
                </div>

                <div className="md:hidden mb-6 ">
                    <h2 className={`${manrope.className} text-xl mb-3 font-semibold`}>
                        Business Impact
                    </h2>

                    <p className={`${manrope.className} text-sm font-semibold text-gray-900 `}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Unified and instant data access
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        AI-driven proactive risk detection
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Autonomous stakeholder alerts
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Increased proactive focus
                    </p>
                </div>




                <h2 className={`${manrope.className} md:text-3xl text-xl mb-3 font-semibold mt-9`}>Solution</h2>

                <p className={`${manrope.className} md:text-lg text-sm text-gray-700 mb-8`}>
                    The Techylla team developed an <span className="text-gray-900 font-semibold"> AI-powered Intelligent Quality Ecosystem (Project Dolphin) </span> and implemented the following key initiatives:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Built a <span className="text-gray-900 font-semibold"> Comprehensive Data Layer (CDL) </span>integrating <span className="text-gray-900 font-semibold"> 12+ enterprise data sources </span>to create a <span className="text-gray-900 font-semibold"> single source of truth </span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Enabled <span className="text-gray-900 font-semibold"> LLM-powered conversational analytics (Quality-GPT)</span> using <span className="text-gray-900 font-semibold"> RAG and Text-to-SQL,</span> allowing users to access insights <span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> through natural language</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Deployed <span className="text-gray-900 font-semibold"> Agentic AI ("Sentinel") </span> for <span className="text-gray-900 font-semibold"> autonomous monitoring, reasoning, and action triggering </span>based on real-time signals
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Implemented <span className="text-gray-900 font-semibold"> RACI-driven automated alerts</span> to identify stakeholders and ensure timely response and accountability
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Integrated <span className="text-gray-900 font-semibold"> AI orchestration frameworks (LangChain & LangGraph)</span>  with secure <span className="text-gray-900 font-semibold"> AWS-based infrastructure </span> for scalable and <span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> compliant operations</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Established a <span className="text-gray-900 font-semibold"> closed-loop intelligence system</span> enabling continuous monitoring, decision-making, and proactive quality <span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> management</span>

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


                </div>

            </div>
        </section >
    );
}