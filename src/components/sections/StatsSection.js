"use client";

import Counter from "@/components/Counter";

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

export default function StatsSection() {
    return (
        <section
            aria-label="Company statistics and achievements"
            className="grid grid-cols-1 md:grid-cols-[2fr_1fr] min-h-90">

            {/* LEFT SIDE (LIGHT BLUE) */}
            <div className={`${urbanist.className} bg-blue-800 text-white flex items-center px-5 py-12 md:px-19 md:py-20`}>
                <div>
                    <h1 className="text-3xl md:text-5xl font-light leading-tight max-w-4xl md:ml-20 ml-5">
                        We empower organizations to thrive in the digital era through intelligent data and transformative analytics
                    </h1>

                    <button
                        aria-label="Learn more about our services and capabilities"
                        className="mt-8 bg-red-600/90 px-5 py-2 md:px-9 md:py-3 text-md rounded-md tracking-wide md:ml-20 ml-5">
                        Know More
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE (DARK BLUE) */}
            <div className={`${urbanist.className} font-light bg-blue-900 text-white flex items-center px-10 py-10`}>
                <div className="space-y-8 md:space-y-12">

                    <div>
                        <h2 className="text-5xl font-light">
                            <span aria-hidden="true">
                                <Counter target={40} suffix="+" />
                            </span>
                            <span className="sr-only">40 plus years of combined leadership</span>
                        </h2>
                        <p className="text-2xl mt-2">Years</p>
                        <p className="text-lg text-gray-100 mt-1">
                            Combined Leadership
                        </p>
                    </div>

                    <hr className="border-white/30" />

                    <div>
                        <h2 className="text-5xl font-light">
                            <span aria-hidden="true">
                                <Counter target={4} suffix="+" />
                            </span>
                            <span className="sr-only">4+ Industries Served</span>
                        </h2>
                        <p className="text-lg mt-2"></p>
                        <p className="text-lg text-gray-100 mt-1">
                            Industries Served
                        </p>
                    </div>

                    <hr className="border-white/30" />

                    <div>
                        <h2 className="text-5xl font-light">
                            <span aria-hidden="true">
                                <Counter target={15} suffix="%" />
                            </span>
                            <span className="sr-only">
                                15 percent cost savings delivered to clients
                            </span>
                        </h2>
                        <p className="text-lg mt-2"></p>
                        <p className="text-lg text-gray-100 mt-1">
                            Cost Savings Delivered To Clients
                        </p>
                    </div>

                    <hr className="border-white/30" />

                    <div>
                        <h2 className="text-5xl font-light">
                            <span aria-hidden="true">
                                <Counter target={20} suffix="+" />
                            </span>
                            <span className="sr-only">
                                20 plus satisfied clients
                            </span>
                        </h2>
                        <p className="text-lg mt-2"></p>
                        <p className="text-lg text-gray-100 mt-1">
                            Satisfied Clients
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}