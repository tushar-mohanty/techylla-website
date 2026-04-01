"use client";

import React from "react";
import CardSwap, { Card } from "@/components/CardSwap";
import { Manrope } from "next/font/google";
import { BuildingOffice2Icon, ChartBarIcon, CodeBracketIcon, SparklesIcon } from "@heroicons/react/20/solid";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

const WhatWeDo = () => {
    return (
        <section className="relative bg-white py-10 md:py-20 min-h-screen overflow-hidden">

            <div className="absolute inset-0 z-0">
                <img
                    src="/WhatWeDo Bg1.png"
                    className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/30 md:from-black/10 md:via-black/10 md:to-black/10"></div>
            </div>

            

            <div className="relative max-w-6xl z-20 mx-auto px-6 bg-cover">

                <h2 className="text-5xl md:text-6xl font-light text-white  tracking-tighter leading-tight mb-20">
                    What We Do
                </h2>

                {/* IMPORTANT WRAPPER */}
                <div className="h-75 relative flex justify-center mt-10 md:mt-40 -translate-x-30 md:translate-x-0">

                    <CardSwap
                        cardDistance={70}
                        verticalDistance={80}
                        delay={4000}
                        skewAmount={1}
                        width={700}
                    >

                        <Card className="bg-[#0b0618] border border-white/30 rounded-[28px] w-130 overflow-hidden">

                            <div className="flex items-center gap-3 px-5 py-3 border-b bg-blue-100 border-white/200 text-black text-xl">
                                <ChartBarIcon className="w-5 h-5 text-black" />
                                
                                Data Driven Analytics
                            </div>

                            <div className={`${manrope.className} font-normal p-10 text-white`}>
                                Reveal latent intelligence:

                                Our data-driven analytics enables us to analyze massive volumes of supply chain data,

                                revealing patterns and trends that would be impossible to detect manually.

                                <br />
                                <br />

                                Improves decision-making:

                                Data-driven analytics allows for more proactive decision-making by delivering real-time data and insights.

                                Inventory levels get optimized, demand changes predicted, and cost-saving possibilities identified across the supply chain.

                                <br />
                                <br />

                                Enhances agility and resilience:

                                Data allows us to predict and respond promptly to interruptions.

                                Predictive analytics can detect possible problems.
                            </div>

                        </Card>

                        <Card className="bg-[#0b0618] border border-white/30 rounded-[28px] w-130 overflow-hidden">

                            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/20 text-blue-100 text-xl">
                                <BuildingOffice2Icon className="w-6 h-6 text-blue-100" />
                                {/* <span className="w-3 h-3 rounded-full bg-blue-100"></span> */}
                                SAP and Business Analytics
                            </div>

                            <div className={`${manrope.className} font-normal p-10 text-black bg-blue-100 h-90`}>
                                Expertise in SAP Functional Areas :

                                Including S/4HANA and supply chain functions, may

                                be used to extract and analyze relevant data.

                                <br />
                                <br />
                                Business analytics proficiency:

                                This involves analyzing supply chain data to find patterns, bottlenecks, and optimisation possibilities.

                                <br />
                                <br />
                                Actionable Supply Chain Analytics:

                                Transform data insights into practical advice for increasing supply chain efficiency, lowering costs, and mitigating risk.
                            </div>

                        </Card>

                        <Card className="bg-[#0b0618] border border-white/30 rounded-[28px] w-130 overflow-hidden">

                            <div className="flex items-center gap-3 px-5 py-3 bg-blue-100 border-b border-white/20 text-black text-xl">
                                <CodeBracketIcon className="w-6 h-6 text-black" />
                                {/* <span className="w-3 h-3 rounded-full bg-black"></span> */}
                                Application Management Service
                            </div>

                            <div className={`${manrope.className} font-normal p-10 text-white`}>
                                Agile Data Integration :

                                We integrate data seamlessly from multiple sources within the SAP ecosystem using agile methodologies. This enables faster analysis and better decision-making.

                                <br />
                                <br />

                                AI and ML Powered Insights :

                                Advanced machine learning and AI help transform complex data into meaningful insights. This allows businesses to identify patterns and optimize operations.

                                <br />
                                <br />

                                Technology Consulting and Data Solutions :

                                We provide expert data management and technology consulting tailored to business needs. Our solutions help improve efficiency and scalability.
                            </div>

                        </Card>
                        <Card className="bg-[#0b0618] border border-white/30 rounded-[28px] w-130 overflow-hidden">

                            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/20 text-blue-100 text-xl">
                                <SparklesIcon className="w-6 h-6 text-blue-100" />
                                {/* <span className="w-3 h-3 rounded-full bg-blue-100"></span> */}
                                AI-Led Data Engineering
                            </div>

                            <div className={`${manrope.className} font-normal p-10 text-black bg-blue-100 h-90`}>
                                AI-Led Data Engineering :

                                We build scalable data pipelines that efficiently process large volumes of data. This enables faster analytics and AI-driven insights.

                                <br />
                                <br />

                                Intelligent Data Processing :

                                AI-powered tools help automate data preparation, integration, and transformation. This ensures accurate and real-time data availability.

                                <br />
                                <br />

                                Modern Data Platforms :

                                We design modern data architectures for analytics, machine learning, and business intelligence. These platforms unlock the full value of enterprise data.
                            </div>

                        </Card>

                    </CardSwap>
                </div>

            </div>

        </section >
    )
}

export default WhatWeDo;