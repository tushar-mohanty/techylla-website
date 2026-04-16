"use client";

import { motion } from "framer-motion";
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


export default function StoryOne() {
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
                src="/Case 1 Img 1.png" // your PNG path
                alt="Tariff Simulation Illustration"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 0.9, x: 10 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute right-10 top-33 w-[330] opacity-90"
            />
            <div className={`${urbanist.className} max-w-6xl mx-auto px-6 py-25 md:py-30 md:ml-4 ml-0 `}>

                <h1 className={`${urbanist.className} md:font-normal font-semibold text-black md:mb-8 mb-5 md:text-6xl text-3xl`}>
                    Global Tariff Financial Modeling System
                </h1>

                <div className="md:hidden mb-5">
                    <motion.img
                        src="/Case1MobileImg2.png"
                        alt="Case Study 1 related image"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>





                <h2 className={`${urbanist.className} md:text-3xl text-xl mb-5 font-semibold`}>Business Need</h2>


                <p className="md:text-lg text-sm text-gray-700 mb-8">
                    Global enterprises face significant challenges in managing tariff exposure across complex international trade networks, where over 60% of critical trade data resides in fragmented legacy systems. This lack of integration makes it difficult to gain a unified and accurate view of import and export duties.
                    <br />
                    <br />
                    Traditional approaches rely on manual analysis and static reporting, often taking weeks to assess policy changes and increasing the risk of errors. The absence of scenario testing further limits the ability to evaluate how tariff changes or mitigation strategies impact financial exposure across multiple global trade routes.
                    <br />
                    <br />
                    To address these challenges, the objective was to:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Establish a unified data layer for tariff insights</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Enable real-time scenario analysis across trade routes</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Reduce manual effort while improving accuracy and decision speed</span>

                </p>

                {/* BUSINESS IMPACT - BELOW IMAGE */}
                <div className="hidden md:block absolute right-5 top-110 w-[350] ">
                    <h2 className={`${urbanist.className} text-3xl mb-3 font-semibold mt-4`}>Business Impact</h2>

                    <p className={`${urbanist.className} text-lg text-gray-700 mb-8`}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Unified data platform eliminating silos
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Weeks → minutes analysis time
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Better risk visibility with exposure <br /> <span className="ml-7"> forecasting</span>
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Scalable across global markets

                    </p>
                </div>

                <div className="md:hidden mb-6 ">
                    <h2 className={`${urbanist.className} text-xl mb-3 font-semibold`}>
                        Business Impact
                    </h2>

                    <p className={`${urbanist.className} text-sm font-semibold text-gray-900 `}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Unified data platform eliminating silos
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Weeks → minutes analysis time
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Better risk visibility with exposure <br /> <span className="ml-7"> forecasting</span>
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Scalable across global markets
                    </p>
                </div>




                <h2 className={`${urbanist.className} md:text-3xl text-xl mb-3 font-semibold mt-9`}>Solution</h2>

                <p className={`${urbanist.className} md:text-lg text-sm text-gray-700 mb-8`}>
                    The Techylla team developed a comprehensive, data-driven solution and implemented the following key initiatives:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Built a <span className="text-gray-900 font-semibold"> unified Common Data Layer</span>, consolidating data from <span className="text-gray-900 font-semibold"> multiple enterprise systems </span> to create a single source <span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> of truth for tariff intelligence</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Developed an advanced <span className="text-gray-900 font-semibold"> What-If Simulation Engine</span>, enabling instant scenario testing across <span className="text-gray-900 font-semibold"> tariff rates, growth <span className="hidden md:inline"><br /></span>
                        <span className="ml-0 md:ml-7"> factors, and mitigation strategies </span> with high-speed processing</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Enabled <span className="text-gray-900 font-semibold"> parallel scenario execution with asynchronous processing</span>, allowing multiple simulations to run <span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> simultaneously without performance impact</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Leveraged <span className="text-gray-900 font-semibold"> Databricks + PySpark</span> for large-scale data processing and integrated <span className="text-gray-900 font-semibold"> ARIMA-based forecasting</span>, <span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> providing visibility into financial impact up to <span className="text-gray-900 font-semibold"> 36 months ahead</span> </span>

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


                    <div>
                        {/* Security & Governance */}
                        <h2 className={`${urbanist.className} md:text-3xl text-xl mb-3 font-semibold mt-4`}>Security & Governance</h2>

                        <p className={`${urbanist.className} md:text-lg text-sm text-gray-700 mb-8`}>
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            RBAC-based secure access across business units
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Locking mechanism for safe concurrent processing
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Automated CI/CD pipelines for smooth deployments

                        </p>
                    </div>

                </div>

            </div>
        </section >
    );
}