"use client";

import Counter from "@/components/Counter";

import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

export default function StatsSection() {
    return (
        <section className="grid md:grid-cols-[2fr_1fr] min-h-screen">

            {/* LEFT SIDE (LIGHT BLUE) */}
            <div className={`${manrope.className} bg-blue-800 text-white flex items-center px-19 py-20`}>
                <div>
                    <h1 className="text-5xl font-light leading-tight max-w-4xl ml-20">
                        We empower organizations to thrive in the digital era through intelligent data and transformative analytics
                    </h1>

                    <button className="mt-8 bg-black px-9 py-3 text-md tracking-widest ml-20">
                        KNOW MORE
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE (DARK BLUE) */}
            <div className={`${manrope.className} font-light bg-blue-900 text-white flex items-center px-10 py-10`}>
                <div className="space-y-12">

                    <div>
                        <h2 className="text-5xl font-light">
                            <Counter target={40} suffix="+" />
                        </h2>
                        <p className="text-2xl mt-2">Years</p>
                        <p className="text-lg text-gray-100 mt-1">
                            Combined Leadership
                        </p>
                    </div>

                    <hr className="border-white/30" />

                    <div>
                        <h2 className="text-5xl font-light">
                            <Counter target={4} suffix="+" />
                        </h2>
                        <p className="text-lg mt-2"></p>
                        <p className="text-lg text-gray-100 mt-1">
                            Industries Served
                        </p>
                    </div>

                    <hr className="border-white/30" />

                    <div>
                        <h2 className="text-5xl font-light">
                            <Counter target={15} suffix="%" />
                        </h2>
                        <p className="text-lg mt-2"></p>
                        <p className="text-lg text-gray-100 mt-1">
                            Cost Savings Delivered To Clients
                        </p>
                    </div>

                    <hr className="border-white/30" />

                    <div>
                        <h2 className="text-5xl font-light">
                            <Counter target={20} suffix="+" />
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