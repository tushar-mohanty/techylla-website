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


export default function StoryThree() {
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
                src="/Case 3 Img 1.png" // your PNG path
                alt="Case Study 3 Image"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 0.9, x: 10 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute right-10 top-33 w-[330] opacity-90"
            />
            <div className={`${urbanist.className} max-w-6xl mx-auto px-6 md:py-30 py-25 md:ml-4 ml-0 `}>

                <h1 className={`${urbanist.className} md:font-normal font-semibold text-black md:mb-8 mb-5 md:text-5xl text-2xl`}>
                    Transforming Production with an AI-Powered Early Warning System
                </h1>

                <div className="md:hidden mb-5">
                    <motion.img
                        src="/Case3MobileImg1.png"
                        alt="Case Study 3 Image"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>





                <h2 className={`${urbanist.className} md:text-3xl text-xl mb-5 font-semibold`}>Business Need</h2>


                <p className="md:text-lg text-sm text-gray-700 mb-8">
                    Manufacturing organizations face significant challenges in managing production operations due to fragmented data across multiple systems such as PLCs, SCADA, and MES. This lack of integration limits real-time visibility into shop floor activities, making it difficult to detect issues early and respond effectively.                  <br />
                    <br />
                    Traditional approaches rely on manual decision-making and delayed data analysis, leading to slow response times, inefficient recovery from disruptions, and increased operational costs. Additionally, the inability to predict potential failures increases business continuity risks, resulting in frequent supply disruptions and impacting customer satisfaction.                  <br />
                    <br />
                    To address these challenges, the objective was to:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Establish unified, real-time visibility across production systems</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Enable faster, data-driven decision-making with predictive insights</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Reduce operational risks by proactively identifying and preventing disruptions</span>

                </p>

                {/* BUSINESS IMPACT - BELOW IMAGE */}
                <div className="hidden md:block absolute right-5 top-110 w-[350] ">
                    <h2 className={`${urbanist.className} md:text-3xl text-xl mb-3 font-semibold mt-4`}>Business Impact</h2>

                    <p className={`${urbanist.className} md:text-lg text-sm text-gray-700 mb-8`}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Unified shop floor visibility
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        AI-driven predictive decision-making
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Reduced disruptions and backorders
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Improved business continuity

                    </p>
                </div>

                <div className="md:hidden mb-6 ">
                    <h2 className={`${urbanist.className} text-xl mb-3 font-semibold`}>
                        Business Impact
                    </h2>

                    <p className={`${urbanist.className} text-sm font-semibold text-gray-900 `}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Unified shop floor visibility
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        AI-driven predictive decision-making
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Reduced disruptions and backorders
                        <br />

                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Improved business continuity
                    </p>
                </div>




                <h2 className={`${urbanist.className} md:text-3xl text-xl mb-3 font-semibold mt-9`}>Solution</h2>

                <p className={`${urbanist.className} md:text-lg text-sm text-gray-700 mb-8`}>
                    The Techylla team developed a <span className="text-gray-900 font-semibold"> Manufacturing Cockpit & AI-Powered Early Warning System </span> and implemented the following key initiatives:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Built a <span className="text-gray-900 font-semibold"> centralized Manufacturing Cockpit </span>to provide a <span className="text-gray-900 font-semibold"> unified, real-time view </span>of shop floor operations
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Enabled <span className="text-gray-900 font-semibold"> real-time intelligent alerts</span> for schedule delays, supply impacts, quality issues, and machine health
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Leveraged <span className="text-gray-900 font-semibold"> AI-driven predictive & prescriptive analytics </span> with <span className="text-gray-900 font-semibold"> what-if simulations </span>for proactive decision-making
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Implemented <span className="text-gray-900 font-semibold"> dynamic alert prioritization</span> (Critical / Major / Minor) to focus on high-impact issues
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Established <span className="text-gray-900 font-semibold"> workflow-driven response & resolution management</span>  with <span className="text-gray-900 font-semibold"> SLA tracking and accountability </span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Created a <span className="text-gray-900 font-semibold"> closed feedback loop</span> to continuously improve issue resolution and operational efficiency

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                </div>

            </div>
        </section >
    );
}