"use client";

import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
                <div className="mt-15 ml-15">
                    <h2 className={`${manrope.className} text-7xl font-semibold tracking-tight leading-tight mb-10`}>
                        Think Data <br />
                        Think <span className="text-blue-400 font-semibold">Techylla</span>
                    </h2>

                    {/* ✅ LOGO HERE */}

                    <Link href="/">
                        <img
                            src="/Techylla Logo.png"
                            alt="Techylla Logo"
                            className="w-70 -ml-3 mb-8 mt-30 cursor-pointer"
                        />
                    </Link>

                    <div className={`${manrope.className} grid grid-cols-2 gap-y-2 text-sm text-gray-200 mt-6 -mb-8 ml-2`}>

                        {/* INDIA */}
                        <p className="font-semibold text-white">India Office:</p>
                        <div></div>

                        <p>Kolkata, India</p>
                        <div></div>

                        {/* SPACE */}
                        <div className="col-span-2 h-4"></div>

                        {/* US + CONTACT */}
                        <p className="text-l font-semibold text-white">US Office:</p>
                        <p className="-ml-10">Tel: +1 (732) 208-4788 (US)</p>

                        <p>116 Village Blvd Suite 200</p>
                        <p className="-ml-10">Tel: +91 98311 69927 (IN)</p>

                        <p>Princeton, NJ 08540</p>
                        <a href="mailto:sales@techylla.com" className="hover:underline -ml-10">
                            Email: sales@techylla.com
                        </a>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className={`${manrope.className} font-semibold text-white mb-3 flex flex-col gap-16 text-sm mt-20 -ml-18`}>
                    <div className="grid md:grid-cols-4 gap-5">

                        {/* Data & Cloud */}
                        <div>
                            <h3 className="text-xl text-orange-400 font-normal mb-4">Data & Cloud</h3>

                            <div className="space-y-4">
                                <Link href="/gen-ai" className="text-l block font-normal text-white hover:text-orange-400 transition mt-10.5">
                                    Data Engineering
                                </Link>

                                <div>
                                    <Link href="/data-ai" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Data Management
                                    </Link>
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/data-strategy" className="block hover:text-white">Data Strategy</Link>
                                    <Link href="/ai-ml" className="block hover:text-white">AI & ML</Link>
                                    <Link href="/data-engineering" className="block hover:text-white">Data Engineering</Link>
                                    <Link href="/business-intelligence" className="block hover:text-white">
                                        Business Intelligence and Reporting
                                    </Link>
                                </div> */}
                                </div>

                                <div>
                                    <Link href="/cloud-studio" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Data Ops
                                    </Link>
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/cloud-advisory" className="block hover:text-white">
                                        Cloud Advisory & Consulting
                                    </Link>
                                    <Link href="/cloud-transformation" className="block hover:text-white">
                                        Cloud Transformation Services
                                    </Link>
                                </div> */}
                                </div>

                                <div>
                                    <Link href="/application-modernization" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Data Visualization
                                    </Link>
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/leap-framework" className="block hover:text-white">LEAP Framework</Link>
                                    <Link href="/power-apps" className="block hover:text-white">Power Apps</Link>
                                    <Link href="/power-automate" className="block hover:text-white">Power Automate</Link>
                                </div> */}
                                </div>

                                {/* <div>
                                <Link href="/product-engineering" className="block text-white mb-2 hover:text-orange-400 transition">
                                    Product Engineering
                                </Link>
                                <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/design-thinking" className="block hover:text-white">
                                        Design Thinking-Led Product Development
                                    </Link>
                                </div>
                            </div> */}
                            </div>
                        </div>

                        {/* Business Transformation */}
                        <div className="-ml-8">
                            <h3 className="text-xl font-normal text-orange-400 mb-4">Business Transformation</h3>

                            <div className="space-y-4">
                                <Link href="/gen-ai" className="text-l font-normal block text-white hover:text-orange-400 transition">
                                    Process Streamlining
                                </Link>

                                <div>
                                    <Link href="/data-ai" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Process Orchestration
                                    </Link>
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/data-strategy" className="block hover:text-white">Data Strategy</Link>
                                    <Link href="/ai-ml" className="block hover:text-white">AI & ML</Link>
                                    <Link href="/data-engineering" className="block hover:text-white">Data Engineering</Link>
                                    <Link href="/business-intelligence" className="block hover:text-white">
                                        Business Intelligence and Reporting
                                    </Link>
                                </div> */}
                                </div>

                                <div>
                                    <Link href="/cloud-studio" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Lean Enterprise Workflows
                                    </Link>
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/cloud-advisory" className="block hover:text-white">
                                        Cloud Advisory & Consulting
                                    </Link>
                                    <Link href="/cloud-transformation" className="block hover:text-white">
                                        Cloud Transformation Services
                                    </Link>
                                </div> */}
                                </div>

                                <div>
                                    {/* <Link href="/application-modernization" className="block text-white mb-2 hover:text-orange-400 transition">
                                    Data Visualization
                                </Link> */}
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/leap-framework" className="block hover:text-white">LEAP Framework</Link>
                                    <Link href="/power-apps" className="block hover:text-white">Power Apps</Link>
                                    <Link href="/power-automate" className="block hover:text-white">Power Automate</Link>
                                </div> */}
                                </div>

                                {/* <div>
                                <Link href="/product-engineering" className="block text-white mb-2 hover:text-orange-400 transition">
                                    Product Engineering
                                </Link>
                                <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/design-thinking" className="block hover:text-white">
                                        Design Thinking-Led Product Development
                                    </Link>
                                </div>
                            </div> */}
                            </div>
                        </div>

                        {/* Artificial Intelligence */}
                        <div className="-ml-2">
                            <h3 className="text-xl font-normal text-orange-400 mb-4">Artificial Intelligence</h3>

                            <div className="space-y-4">
                                <Link href="/gen-ai" className="text-l font-normal block text-white hover:text-orange-400 transition">
                                    Agentic AI
                                </Link>

                                <div>
                                    <Link href="/data-ai" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        Generative AI
                                    </Link>
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/data-strategy" className="block hover:text-white">Data Strategy</Link>
                                    <Link href="/ai-ml" className="block hover:text-white">AI & ML</Link>
                                    <Link href="/data-engineering" className="block hover:text-white">Data Engineering</Link>
                                    <Link href="/business-intelligence" className="block hover:text-white">
                                        Business Intelligence and Reporting
                                    </Link>
                                </div> */}
                                </div>

                                <div>
                                    <Link href="/cloud-studio" className="text-l font-normal block text-white mb-2 hover:text-orange-400 transition">
                                        AI Managed Services
                                    </Link>
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/cloud-advisory" className="block hover:text-white">
                                        Cloud Advisory & Consulting
                                    </Link>
                                    <Link href="/cloud-transformation" className="block hover:text-white">
                                        Cloud Transformation Services
                                    </Link>
                                </div> */}
                                </div>

                                <div>
                                    {/* <Link href="/application-modernization" className="block text-white mb-2 hover:text-orange-400 transition">
                                    Data Visualization
                                </Link> */}
                                    {/* <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/leap-framework" className="block hover:text-white">LEAP Framework</Link>
                                    <Link href="/power-apps" className="block hover:text-white">Power Apps</Link>
                                    <Link href="/power-automate" className="block hover:text-white">Power Automate</Link>
                                </div> */}
                                </div>

                                {/* <div>
                                <Link href="/product-engineering" className="block text-white mb-2 hover:text-orange-400 transition">
                                    Product Engineering
                                </Link>
                                <div className="space-y-1 pl-2 text-gray-300">
                                    <Link href="/design-thinking" className="block hover:text-white">
                                        Design Thinking-Led Product Development
                                    </Link>
                                </div>
                            </div> */}
                            </div>
                        </div>

                        {/* INDUSTRY */}
                        <div className="-ml-4">
                            <h3 className="text-xl font-normal text-orange-400 mb-4">Industry</h3>
                            <div className="space-y-4 text-white mt-11">
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
                        <div className="flex items-start mt-6 -ml-7.5">
                            <Link href="/careers" className="text-xl font-normal text-orange-400 hover:text-white">
                                Careers
                            </Link>
                        </div>
                        {/* Contact */}
                        <div className="flex items-start mt-6  -ml-1">
                            <Link href="/contact" className="text-xl font-normal text-orange-400 hover:text-white">
                                Contact Us
                            </Link>
                        </div>
                        {/* Connect */}
                        <div className="mt-6 -ml-4">
                            <p className="text-xl font-normal text-orange-400">
                                Connect with us on
                            </p>

                            <Link href="https://www.linkedin.com/company/techylla/" target="_blank">
                                <img
                                    src="/linkedin.png"   // 👈 put your image in public folder
                                    alt="LinkedIn"
                                    className="w-45 h-29 cursor-pointer hover:opacity-80 -mt-8 -ml-4"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* <div className="grid md:grid-cols-4 gap-12">

                        {/* KNOWLEDGE CENTER
                    <div>
                        <h3 className="text-orange-400 font-semibold mb-4">Knowledge Center</h3>
                        <div className="space-y-2 text-gray-300">
                            <Link href="/blogs" className="block hover:text-white">Blogs</Link>
                            <Link href="/case-studies" className="block hover:text-white">Case Studies</Link>
                            <Link href="/news" className="block hover:text-white">News</Link>
                        </div>
                    </div> */}


                    {/* <div>
                            {/* <h3 className="text-orange-400 font-semibold mb-4">About Us</h3> */}

                    {/* <div className="space-y-2 text-gray-300 mb-6">
                                <Link href="/about" className="block hover:text-white">About Altsyss</Link>

                            </div> */}

                    {/* Careers */}
                    {/* <div className="flex items-start">
                                <Link href="/careers" className="text-orange-400 hover:text-white">
                                    Careers
                                </Link>
                            </div> */}

                    {/* Contact */}
                    {/* <div className="flex items-start">
                                <Link href="/contact" className="text-orange-400 hover:text-white">
                                    Contact Us
                                </Link>
                            </div> */}

                    {/* Connect */}
                    {/* <div>
                                <p className="text-gray-300 mb-2">Connect with us on</p>
                                <Link href="https://linkedin.com" className="text-blue-400 font-semibold text-lg hover:underline">
                                    LinkedIn
                                </Link>
                            </div> */}
                    {/* </div> 
                    </div>

                </div> */}

                    {/* MIDDLE SECTION */}
                    {/* <div className="mt-16 border-t border-white/30 pt-8 flex flex-col md:flex-row items-center justify-between"> */}

                    {/* LOGO + TEXT */}
                    {/* <div className="flex items-center gap-8 mb-6 md:mb-0"> */}

                    {/* LOGO TEXT */}
                    {/* <h2 className="text-3xl font-semibold tracking-wide">
                            latentview
                        </h2> */}

                    {/* DIVIDER
                        <div className="h-10 w-[1px] bg-white/40"></div> */}

                    {/* 20 YEARS
                        <div className="flex items-center gap-3">
                            <span className="text-3xl text-green-400 font-light">20</span>
                            <div className="text-sm leading-tight text-gray-200">
                                <p>Building</p>
                                <p>What’s Next</p>
                            </div>
                        </div> */}
                    {/* </div> */}


                    {/* </div> */}


                </div>
                {/* BOTTOM */}

                <div className="relative pt-6 flex flex-col justify-between text-sm text-gray-200 ml-15 before:content-[''] before:absolute before:top-0 before:left-0 before:-translate-x-1.5 before:w-[1320] before:border-t before:border-white/20">

                    <p className="-mt-2">
                        Copyright © 2026 Techylla. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
}