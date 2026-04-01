"use client";

import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

export default function Footer() {
    return (
        <footer className="bg-black text-white px-10 min-h-screen">

            {/* TOP SECTION */}
            <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div className="mt-10 ml-0 md:mt-15 md:ml-15">
                    <h2 className={`${manrope.className} text-7xl font-semibold tracking-tight leading-tight mb-10`}>
                        Think Data <br />
                        Think <span className="text-blue-400 font-semibold">Techylla</span>
                    </h2>

                    {/* ✅ LOGO HERE */}

                    <Link href="/">
                        <img
                            src="/Techylla-Logo.png"
                            alt="Techylla Logo"
                            className="w-70 -ml-3 mb-8 mt-30 cursor-pointer"
                        />
                    </Link>

                    <div className={`${manrope.className} grid grid-cols-2 gap-y-2 gap-x-4 md:gap-x-0 text-sm text-gray-200 mt-6 -mb-8 ml-2`}>

                        {/* INDIA */}
                        <p className="font-semibold text-white">India Office:</p>
                        <div></div>

                        <p>Kolkata, India</p>
                        <div></div>

                        {/* SPACE */}
                        <div className="col-span-2 h-4"></div>

                        {/* US + CONTACT */}
                        <p className="text-l font-semibold text-white">US Office:</p>
                        <p className="-ml-5 md:-ml-10">Tel: +1 (732) 208-4788 (US)</p>

                        <p>116 Village Blvd Suite 200</p>
                        <p className="-ml-5 md:-ml-10">Tel: +91 98311 69927 (IN)</p>

                        <p>Princeton, NJ 08540</p>
                        <a href="mailto:sales@techylla.com" className="hover:underline -ml-5 md:-ml-10">
                            Email: sales@techylla.com
                        </a>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className={`${manrope.className} font-semibold text-white mb-3 flex flex-col gap-16 text-sm mt-10 ml-0 md:mt-20 md:-ml-18`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                        {/* Data & Cloud */}
                        <div>
                            <h3 className="text-xl whitespace-nowrap text-orange-400 font-normal mb-4 -mt-0.5">Services & Solutions</h3>

                            <div className="space-y-4">
                                <Link href="/gen-ai" className="text-l block font-normal text-orange-300 hover:text-orange-400 transition mt-5">
                                    Data & Cloud
                                </Link>

                                <div>
                                    <Link href="/data-ai" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Data Engineering
                                    </Link>

                                </div>

                                <div>
                                    <Link href="/cloud-studio" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Data Management
                                    </Link>

                                </div>


                                <Link href="/application-modernization" className="text-l font-normal block text-orange-300 mb-2 hover:text-orange-400 transition">
                                    Business Transformation
                                </Link>


                            </div>
                        </div>

                        {/* Business Transformation */}
                        <div className="ml-0 md:-ml-5">

                            <div className="space-y-4">
                                

                                <Link href="/gen-ai" className="text-l font-normal block text-orange-300 hover:text-orange-400 transition mt-12">
                                    Artificial Intelligence
                                </Link>

                                <div>
                                    <Link href="/data-ai" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Generative AI
                                    </Link>

                                </div>

                                <div>
                                    <Link href="/cloud-studio" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        AI Managed Services
                                    </Link>

                                </div>




                            </div>
                        </div>

                        {/* Artificial Intelligence */}
                        <div className="ml-0 md:-ml-8">
                            <h3 className="text-xl font-normal text-orange-400 mb-4">Knowledge Center</h3>

                            <div className="space-y-4">
                                <Link href="/case-studies" className="text-l font-normal block text-white hover:text-orange-400 transition mt-5.5">
                                    Case Studies
                                </Link>

                                <div>
                                    <Link href="/data-ai" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Blogs
                                    </Link>

                                </div>

                            </div>
                        </div>

                        {/* INDUSTRY */}
                        <div className="ml-0 md:-ml-4">
                            <h3 className="text-xl font-normal text-orange-400 mb-4">Industry</h3>
                            <div className="space-y-4 text-white mt-6">
                                <Link href="/healthcare" className="text-l font-normal block hover:text-orange-400 transition">Healthcare & LifeSciences</Link>
                                <Link href="/financial-services" className="text-l font-normal block hover:text-orange-400 transition">Supply Chain & Logistics</Link>
                                <Link href="/manufacturing" className="text-l font-normal block hover:text-orange-400 transition">Manufacturing</Link>
                                <Link href="/hitech" className="text-l font-normal block hover:text-orange-400 transition">HiTech</Link>
                            </div>
                        </div>
                        {/* INDUSTRY */}
                        <div>
                            <div className="space-y-2 text-gray-300 mb-6 mt-6 ">
                                <Link href="/about" className="text-xl font-normal block text-orange-400 hover:text-white">About Us</Link>

                            </div>
                        </div>
                        <div className="flex items-start mt-6 ml-0 md:-ml-5">
                            <Link href="/careers" className="text-xl font-normal text-orange-400 hover:text-white">
                                Careers
                            </Link>
                        </div>
                        {/* Contact */}
                        <div className="flex items-start mt-6 ml-0 md:-ml-8">
                            <Link href="/contact" className="text-xl font-normal text-orange-400 hover:text-white">
                                Contact Us
                            </Link>
                        </div>
                        {/* Connect */}
                        <div className="mt-6 ml-0 md:-ml-4">
                            <p className="text-xl font-normal text-orange-400">
                                Connect with us on
                            </p>

                            <Link href="https://www.linkedin.com/company/techylla/" target="_blank">
                                <img
                                    src="/linkedin.png"   // 👈 put your image in public folder
                                    alt="LinkedIn"
                                    className="md:w-45 md:h-29 cursor-pointer hover:opacity-80 -mt-8 md:-ml-4 -ml-3.5"
                                />
                            </Link>
                        </div>
                    </div>

                    


                </div>
                {/* BOTTOM */}

                <div className="relative pt-6 flex flex-col justify-between text-sm text-gray-200 ml-0 md:ml-15 before:content-[''] before:absolute before:top-0 before:left-0 before:-translate-x-1.5 before:w-[300] md:before:w-[1320] before:border-t before:border-white/20">

                    <p className="-mt-2">
                        Copyright © 2026 Techylla. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
}