"use client";

import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});


export default function StoryTwo() {
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
                src="/Case 2 Img 1.png" // your PNG path
                alt="Case Study 2 Image"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 0.9, x: 10 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute right-10 top-33 w-[330] opacity-90"
            />
            <div className="max-w-6xl mx-auto px-6 py-25 md:py-30 md:ml-4 ml-0 ">

                <h1 className={`${manrope.className} md:font-normal font-semibold text-black md:mb-8 mb-5 md:text-5xl text-2xl`}>
                    Transforming Supply Chain Operations with SAP-Based Intercompany Automation
                </h1>

                <div className="md:hidden mb-5">
                    <motion.img
                        src="/Case2MobileImg.png"
                        alt="Case Study 2 Image"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>





                <h2 className={`${manrope.className} md:text-3xl text-xl mb-5 font-semibold`}>Business Need</h2>


                <p className="md:text-lg text-sm text-gray-700 mb-8">
                    Global enterprises with complex multi-entity structures face challenges in managing intercompany transactions due to disjointed systems and intricate tax requirements. Heavy reliance on manual processes leads to errors, inaccurate inventory, increased costs, and limited visibility.                    <br />
                    <br />
                    Traditional approaches also make it difficult to scale, with time-consuming setup of new structures causing delays in order fulfillment and slower time-to-market. Additionally, the lack of automated financial reconciliation increases risks in compliance, audit readiness, and period closing.                    <br />
                    <br />
                    To address these challenges, the objective was to:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Automate intercompany transaction flows to improve accuracy and efficiency</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Enable faster and scalable setup of supply chain structures</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Enhance financial compliance through automated reconciliation and monitoring</span>

                </p>

                {/* BUSINESS IMPACT - BELOW IMAGE */}
                <div className="hidden md:block absolute right-5 top-110 w-[350] ">
                    <h2 className={`${manrope.className} md:text-3xl text-xl mb-3 font-semibold mt-4`}>Business Impact</h2>

                    <p className={`${manrope.className} md:text-lg text-sm text-gray-700 mb-8`}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Improved accuracy and reduced costs
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Faster setup and order fulfillment
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Better compliance and visibility
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Scalable operations

                    </p>
                </div>

                <div className="md:hidden mb-6 ">
                    <h2 className={`${manrope.className} text-xl mb-3 font-semibold`}>
                        Business Impact
                    </h2>

                    <p className={`${manrope.className} text-sm font-semibold text-gray-900 `}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Improved accuracy and reduced costs
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Faster setup and order fulfillment
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Better compliance and visibility
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Scalable operations
                    </p>
                </div>


                <h2 className={`${manrope.className} md:text-3xl text-xl mb-3 font-semibold mt-9`}>Solution</h2>

                <p className={`${manrope.className} md:text-lg text-sm text-gray-700 mb-8`}>
                    The Techylla team developed an SAP-Based Intercompany Automation solution and implemented the following key initiatives:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Automated <span className="text-gray-900 font-semibold"> end-to-end intercompany transaction flows</span>, across purchase, transfer, and sales processes, eliminating manual<span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> intervention</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Enabled <span className="text-gray-900 font-semibold"> dynamic configuration of supply chain structures and master data</span> for faster and scalable setup
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Implemented <span className="text-gray-900 font-semibold"> rule-based financial reconciliation</span> to ensure accuracy, control, and compliance
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Integrated <span className="text-gray-900 font-semibold"> real-time monitoring and alerts</span> to provide complete visibility across transaction flows
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Built <span className="text-gray-900 font-semibold"> process resumption and reversal capabilities</span> to ensure uninterrupted operations and maintain data integrity

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


                </div>

            </div>
        </section >
    );
}