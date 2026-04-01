"use client";

import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});


export default function SandipStory() {
    return (
        <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-200 w-full overflow-hidden">
            <div className="hidden md:block absolute right-10 top-[140] w-[300] group overflow-hidden rounded-[16px]">

                {/* IMAGE */}
                <motion.img
                    src="/leader1.png"
                    alt="Sandip Sanyal"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-end p-4 ">

                    <p className={`${manrope.className} text-white text-lg font-normal`}>
                        <span className={`${manrope.className} -mb-9 block text-white text-[15px] font-normal`}>by</span>
                        <br />
                        <span className={`${manrope.className} -mb-8 block text-white text-[25px] font-normal`}>Sandip Sanyal</span>
                        <br />
                        CEO, Techylla
                    </p>

                </div>

            </div>
            <div className="max-w-6xl mx-auto px-6 py-25 md:py-30 md:ml-6 ml-0 ">

                <h1 className={`${manrope.className} md:font-normal font-bold text-black md:mb-10 mb-5 md:text-6xl text-2xl`}>
                    The End of Static Trade: Engineering Margin Defense in a Fragmented World
                </h1>

                <h2 className={`${manrope.className} md:text-3xl text-xl mb-3 font-semibold`}>The Macro Reality </h2>

                <p className="md:text-lg text-sm text-gray-700 mb-8">
                    The era of predictable global trade is over. As supply chains decouple, tariffs have become volatile variables that can erase a year’s margin in a single trading day. Relying on legacy spreadsheets is a high-risk strategy that fails the "clean books" test.


                </p>

                <h2 className={`${manrope.className} md:text-3xl text-xl mb-3 font-semibold mt-3`}>The Solution: Data & AI Engineering as a Hedge </h2>

                <p className={`${manrope.className} md:text-lg text-sm text-gray-700 mb-8`}>
                    We don't "predict" the future; we build the <span className="text-gray-900 font-semibold"> picks and shovels</span> to navigate it. Our AI engineering framework integrates your enterprise financial data with real-time global trade feeds to create a <span className="text-gray-900 font-semibold"> Living Tariff Model</span>.
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Granular Impact Mapping:</span> Automatically map tariff changes across 10,000+ SKUs to see the immediate impact on <span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> your cost of goods sold ($COGS$).</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Arbitrage Logic:</span> Use data engineering to identify "lowest-duty" routing and sourcing shifts before the market <span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7"> reacts.</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">EBITDA Protection: </span> Shift from reactive accounting to proactive simulation. Know the exact impact on your<span className="hidden md:inline"><br /></span>
                    <span className="ml-0 md:ml-7">  bottom line before the policy is even signed.</span>
                    <br />

                </p>

                <h2 className={`${manrope.className} md:text-3xl text-xl mb-3 font-semibold mt-4`}>The Business Value </h2>

                <p className="mb-6 md:text-lg text-sm text-gray-700">
                    In a world of shifting rules, the winner is the one with the cleanest data and the fastest simulation engine. We provide the automated logic that turns global volatility into a calculated operational cost.

                </p>


            </div>

            <div className="md:hidden -mt-20 mb-5 px-4">
                <div className="relative">
                    <motion.img
                        src="/leader1.png"
                        alt="Sandip Sanyal"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-full object-cover rounded-sm"

                    />
                    <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/80 via-black/10 to-transparent flex px-4 pb-5 items-end rounded-sm">
                        <p className={`${manrope.className} text-white text-sm font-normal`}>
                            <span className="block text-[15px]">by</span>
                            <span className="block text-[25px]">Sandip Sanyal</span>
                            <span className="block text-[20px]">CEO, Techylla</span>
                            
                        </p>
                    </div>
                </div>


            </div>
        </section >
    );
}