"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import { ArrowLeft, ArrowRight, Eye, LineChart } from "lucide-react";
import { Manrope } from "next/font/google";
import Circle from "@/components/Circle";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})


const AboutUs = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        organization: "",
        help: "",
    });

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState(null);

    const showToast = (type, message) => {
        setToast({ type, message });

        setTimeout(() => {
            setToast(null);
        }, 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // ✅ REMOVE the error key completely
        setErrors((prev) => {
            const updated = { ...prev };
            delete updated[name];
            return updated;
        });
    };


    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "Required";
        if (!formData.lastName.trim()) newErrors.lastName = "Required";

        if (!formData.email.trim()) {
            newErrors.email = "Required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Invalid email";
            }
        }


        if (!formData.contact || formData.contact.length < 10) {
            newErrors.contact = "Enter a valid phone number";
        }

        if (!formData.organization.trim()) newErrors.organization = "Required";
        if (!formData.help.trim()) newErrors.help = "Required";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsSubmitted(true); // ✅ MOVE HERE

        setLoading(true);

        try {



            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname: formData.firstName,
                    lastname: formData.lastName,
                    email: formData.email,
                    phone: formData.contact,
                    company: formData.organization,
                    message: formData.help,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to submit");
            }

            const data = await res.json();

            setLoading(false);  // 👈 ADD HERE

            if (data.success) {
                showToast("success", "Message sent successfully!");

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    contact: "",
                    organization: "",
                    help: "",
                });

                // ✅ ADD THESE HERE
                setErrors({});
                setIsSubmitted(false);
            } else {
                showToast("error", "Something went wrong!");
            }
        } catch (error) {
            // inside catch
            setLoading(false);
            console.error(error);
            showToast("error", "Error sending message!");
        }
    };
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (

        <div className="w-full overflow-x-hidden">

            {/* ✅ ADD TOAST HERE */}
            {toast && (
                <div
                    className={`${urbanist.className} fixed top-5 right-5 px-6 py-4 rounded-lg shadow-lg text-white z-50 transition-all duration-300 ${toast.type === "success" ? "bg-green-500" : ""} ${toast.type === "error" ? "bg-red-500" : ""} `}
                >
                    {toast.message}
                </div>
            )}
            <section className="relative bg-white py-20 min-h-screen overflow-x-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/About-Us-Img-2.png"
                        alt="About Us Page Background Image"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
                </div>


                <div className="relative w-full max-w-6xl z-20 mx-auto px-4 md:px-6 bg-cover">

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`${urbanist.className} text-6xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-1 md:mb-4 mt-60 md:mt-60`}
                    >
                        About <span className="text-blue-300 font-semibold">Techylla</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className={`${urbanist.className} text-md md:text-4xl font-light text-white tracking-wide leading-10 mb-20`}
                    >
                        Data-driven. AI-powered. Future-ready.
                    </motion.h2>

                </div>

            </section >
            <section aria-label="About Techylla" className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-16 min-h-screen flex items-center overflow-hidden">
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-70 -left-30 w-[500] rotate-340 opacity-30 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-40 -right-30 w-[600] rotate-340 opacity-30 pointer-events-none select-none"
                />
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-3 items-center">

                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        

                        {/* Overlay Text */}
                        <div className="absolute top-2 md:-mt-15 md:-ml-5">
                            <h2 className={`${urbanist.className} text-black text-6xl font-light`}>
                                Our Story
                            </h2>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <div className="mt-20 md:mt-0 md:-ml-10 max-w-xl">

                        <p className={`${urbanist.className} text-xl text-gray-700 leading-relaxed mb-6`}>
                            At Techylla, we don’t just work with data — we transform it into intelligence. Leveraging the power of analytics and AI, we enable businesses to think smarter, act faster, and stay ahead in a rapidly evolving world.
                        </p>

                        <p className={`${urbanist.className} text-xl text-gray-700 leading-relaxed mb-8`}>
                            Built on a foundation of trust, collaboration, and continuous innovation, we craft solutions that drive real impact, solve complex challenges, and redefine what’s possible in the digital era.
                        </p>

                        {/* BUTTON */}
                        <a
                            href="#leadership"
                            className={`${urbanist.className} relative inline-flex items-center gap-2 font-semibold text-blue-900 group`}
                        >
                            Meet Our Leadership
                            <span className="text-orange-500 text-xl transition-transform group-hover:translate-x-1">
                                ➜
                            </span>
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-900 transition-all duration-300 ease-out group-hover:w-full"></span>
                        </a>

                    </div>
                </div>
            </section>

            <section className="w-full py-15 bg-gradient-to-r from-blue-100 to-pink-100">
                <div className="max-w-7xl ml-0 md:ml-50 grid md:grid-cols-2 gap-16 px-6 md:px-16 items-center">

                    {/* VISION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Eye className="w-20 h-20 text-blue-900 mb-6 opacity-90" />

                        <h3 className={`${urbanist.className} text-3xl font-semibold text-blue-900 mb-4`}>
                            Vision
                        </h3>

                        <p className={`${urbanist.className} text-gray-600 leading-relaxed max-w-md`}>
                            To unlock the true potential of data and AI, enabling businesses to transform ideas into intelligent, future-ready solutions.
                        </p>
                    </motion.div>

                    {/* MISSION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <LineChart className="w-20 h-20 text-blue-900 mb-6 opacity-90" />

                        <h3 className={`${urbanist.className} text-3xl font-semibold text-blue-900 mb-4`}>
                            Mission
                        </h3>

                        <p className={`${urbanist.className} text-gray-600 leading-relaxed max-w-md`}>
                            To design and deliver scalable AI-powered systems that turn data into actionable insights, driving innovation, performance, and measurable success.
                        </p>
                    </motion.div>

                </div>
            </section >

            <section className="bg-gradient-to-r from-pink-300 to-blue-300 py-10 px-4 md:px-70 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }} className={`${urbanist.className} text-blue-900 text-3xl md:text-4xl font-semibold mb-16`}>
                    The Techylla impact so far...
                </motion.h2>

                <div className={`${urbanist.className} grid md:grid-cols-4 justify-items-center`}>

                    <Circle
                        percentage={100}
                        number="40+"
                        label="YEARS COMBINED LEADERSHIP"
                    />

                    <Circle
                        percentage={100}
                        number="4+"
                        label="INDUSTRIES SERVED"
                    />

                    <Circle
                        percentage={100}
                        number="15%"
                        label="COST SAVINGS DELIVERED TO CLIENTS"
                    />

                    <Circle
                        percentage={100}
                        number="20+"
                        label="SATISFIED CLIENTS"
                    />

                </div>

            </section>

            <section className={`${urbanist.className} relative overflow-hidden min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-100 py-20 px-6 md:px-16`}>

                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-70 -left-30 w-[500] rotate-340 opacity-30 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-40 -right-30 w-[600] rotate-340 opacity-30 pointer-events-none select-none"
                />

                {/* HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-center -mt-10 text-3xl md:text-5xl font-semibold text-[#1a237e] mb-20">
                    What sets us apart: Driven by Excellence!
                </motion.h2>

                <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-5 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }} className="space-y-30">

                        <div>
                            <h3 className="text-xl md:text-3xl font-semibold text-[#1a237e] mb-3">
                                Intelligence Powered by Data
                            </h3>
                            <p className="text-gray-600 text-md">
                                Transforming data into smart decisions.
                            </p>
                        </div>

                        <div className="border-t-2 border-gray-700 md:w-[400] w-[315]"></div>

                        <div>
                            <h3 className="text-xl md:text-3xl font-semibold text-[#1a237e] mb-3">
                                Future-Ready by Design
                            </h3>
                            <p className="text-gray-600 text-md">
                                Built to grow with tomorrow.
                            </p>
                        </div>

                    </motion.div>

                    {/* CENTER IMAGES */}
                    <div className="flex flex-col items-center gap-10">

                        <img
                            src="/About Us Img 3.png"   // 👈 replace with your image
                            className="w-40 h-50 md:w-60 md:h-60 rounded-full object-cover -translate-y-20 md:translate-y-0"
                        />

                        <img
                            src="/About Us Img 4.png"  // 👈 replace with your image
                            className="w-40 h-50 md:w-60 md:h-60 rounded-full object-cover translate-y-25 md:translate-y-0"
                        />

                    </div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }} className="md:space-y-30 space-y-72">

                        <div>
                            <h3 className="text-xl md:text-3xl font-semibold text-[#1a237e] mb-3">
                                Innovation That Matters
                            </h3>
                            <p className="text-gray-600 text-md">
                                Solving real problems with AI.
                            </p>
                        </div>

                        <div className="hidden md:block border-t-2 border-gray-700 w-[400] ml"></div>

                        <div>
                            <h3 className="text-xl md:text-3xl font-semibold text-[#1a237e] mb-3">
                                People at the Core
                            </h3>
                            <p className="text-gray-600 text-md">
                                Technology designed for humans.
                            </p>
                        </div>

                    </motion.div>

                </div>

            </section >

            <section aria-label="Leadership team" id="leadership" className={`${urbanist.className} bg-[#3a3a3a] min-h-screen py-15 px-6 md:px-16 text-white relative overflow-hidden`}>
                <ArrowRight className="absolute -top-140 -left-170 w-[1200px] h-[1200px] text-white opacity-15 pointer-events-none select-none" />
                <ArrowLeft className="absolute -bottom-140 -right-170 w-[1200px] h-[1200px] text-white opacity-15 pointer-events-none select-none" />

                {/* HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-5xl z-10 font-semibold text-center mb-16">
                    The Minds Behind Techylla
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }} className="max-w-6xl z-10 mx-auto grid md:grid-cols-2 gap-16">

                    {/* PERSON 1 */}
                    <div className="flex gap-6">
                        <img
                            src="/Sandip Sanyal Img.png"
                            alt="Sandip Sanyal, CEO of Techylla"
                            className="w-40 h-40 rounded-full object-cover transition-all duration-700 shadow-[0_10px_50px_rgba(30,64,175,0.3)] hover:shadow-[0_20px_50px_rgba(147,197,253,0.4)] hover:-translate-y-2"
                        />

                        <div>
                            <h3 className="text-2xl font-semibold">Sandip Sanyal</h3>
                            <p className="text-md text-gray-300 mb-3">CEO</p>

                            <p className="text-gray-200 text-sm mb-4">
                                Sandip, CEO of Techylla, drives innovation through a data-first mindset, leveraging AI and SAP to build scalable, intelligent solutions that turn data into actionable insights and sustainable growth.
                            </p>

                            <a
                                href="https://www.linkedin.com/in/sandip-sanyal-304bba4b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex font-semibold items-center gap-2 bg-blue-500 px-6 py-1.5 rounded-full text-md hover:bg-blue-500 transition-all duration-700 shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(147,197,253,0.4)] hover:-translate-y-2"
                            >
                                <img
                                    src="/Linkedin-logo.png"
                                    alt="LinkedIn profile"
                                    className="w-6 h-6 object-cover"
                                />
                                Profile
                            </a>
                        </div>
                    </div>

                    {/* PERSON 2 */}
                    <div className="flex gap-6">
                        <img
                            src="/Rajarshi Hore Img.png"
                            alt="Rajarshi Hore, COO of Techylla"
                            className="w-40 h-40 rounded-full object-cover transition-all duration-700 shadow-[0_10px_50px_rgba(30,64,175,0.3)] hover:shadow-[0_20px_50px_rgba(147,197,253,0.4)] hover:-translate-y-2"
                        />

                        <div>
                            <h3 className="text-2xl font-semibold">Rajarshi Hore</h3>
                            <p className="text-md text-gray-300 mb-3">COO</p>

                            <p className="text-gray-200 text-sm mb-4">
                                Rajarshi brings deep expertise in SAP transformation and AI innovation, leading global teams to deliver enterprise-scale solutions. He bridges technology and strategy to drive real-time insights and digital excellence.
                            </p>

                            <a
                                href="https://www.linkedin.com/in/rajarshi-hore-67255512/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex font-semibold items-center gap-2 bg-blue-500 px-6 py-1.5 rounded-full text-md hover:bg-blue-500 transition-all duration-700 shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(147,197,253,0.4)] hover:-translate-y-2"
                            >
                                <img
                                    src="/Linkedin-logo.png"
                                    alt="LinkedIn profile"
                                    className="w-6 h-6 object-cover"
                                />
                                Profile
                            </a>
                        </div>
                    </div>

                    {/* PERSON 3 */}
                    <div className="flex gap-6">
                        <img
                            src="/Soumen-Maitra.png"
                            alt="Soumen Maitra, Senior Associate"
                            className="w-40 h-40 rounded-full object-cover transition-all duration-700 shadow-[0_10px_50px_rgba(30,64,175,0.3)] hover:shadow-[0_20px_50px_rgba(147,197,253,0.4)] hover:-translate-y-2"
                        />

                        <div>
                            <h3 className="text-2xl font-semibold">Soumen Maitra</h3>
                            <p className="text-md text-gray-300 mb-3">Senior Associate</p>

                            <p className="text-gray-200 text-sm mb-4">
                                Soumen Maitra combines 24+ years of business leadership with expertise in Agile, SAP ERP, and data analytics to deliver scalable, insight-driven solutions that enhance decision-making and drive business growth.
                            </p>

                            <a
                                href="https://www.linkedin.com/in/soumenmaitra/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex font-semibold items-center gap-2 bg-blue-500 px-6 py-1.5 rounded-full text-md hover:bg-blue-500 transition-all duration-700 shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(147,197,253,0.4)] hover:-translate-y-2"
                            >
                                <img
                                    src="/Linkedin-logo.png"
                                    alt="LinkedIn profile"
                                    className="w-6 h-6 object-cover"
                                />
                                Profile
                            </a>
                        </div>
                    </div>

                    {/* PERSON 4 */}
                    <div className="flex gap-6">
                        <img
                            src="/Sayanti-Chakrabarti.png"
                            alt="Sayanti Chakrabarti, Senior Associate"
                            className="w-40 h-40 rounded-full object-cover transition-all duration-700 shadow-[0_10px_50px_rgba(30,64,175,0.3)] hover:shadow-[0_20px_50px_rgba(147,197,253,0.4)] hover:-translate-y-2"
                        />

                        <div>
                            <h3 className="text-2xl font-semibold">Sayanti Chakrabarti</h3>
                            <p className="text-md text-gray-300 mb-3">Senior Associate</p>

                            <p className="text-gray-200 text-sm mb-4">
                                Sayanti Chakrabarti brings 10+ years of experience in B2B operations, supply chain, and SAP, with strong data analytics expertise, delivering scalable solutions that enhance efficiency and drive business value.
                            </p>

                            <a
                                href="https://www.linkedin.com/in/sayanti-chakrabarti-096424174/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex font-semibold items-center gap-2 bg-blue-500 px-6 py-1.5 rounded-full text-md hover:bg-blue-500 transition-all duration-700 shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(147,197,253,0.4)] hover:-translate-y-2"
                            >
                                <img
                                    src="/Linkedin-logo.png"
                                    alt="LinkedIn profile"
                                    className="w-6 h-6 object-cover"
                                />
                                Profile
                            </a>
                        </div>
                    </div>

                </motion.div>

            </section>
            <section aria-label="Contact form" className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-12 overflow-hidden min-h-screen">

                {/* Background Pattern */}
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-50 -left-60 w-[500] rotate-350 opacity-30 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-55 -right-40 w-[600] rotate-340 opacity-20 pointer-events-none select-none"
                />

                <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                    {/* LEFT TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`${urbanist.className} text-5xl font-semibold text-black leading-tight mb-6 mt-10`}>
                            The <span className="font-bold text-blue-700"> Future </span> Starts with a Conversation
                        </h2>

                        <p className={`${urbanist.className} text-gray-800 text-xl max-w-[700]`}>
                            Get in touch and explore what we can build together.
                        </p>
                    </motion.div>

                    {/* FORM */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-14"
                        onSubmit={handleSubmit}
                    >
                        <h3 className={`${urbanist.className} text-2xl font-semibold mb-6`}>
                            Send us your details
                        </h3>

                        {/* First Name */}
                        <div>
                            <label className={`${urbanist.className} text-md font-medium text-slate-700`}>
                                First Name <span className="text-orange-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                name="firstName"
                                value={formData.firstName}
                                className={`${urbanist.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600  bg-transparent`}
                                onChange={handleChange}
                            />
                            {errors.firstName && (
                                <p className={`${urbanist.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    {errors.firstName}
                                </p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className={`${urbanist.className} text-md font-medium text-slate-700`}>
                                Last Name <span className="text-orange-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                name="lastName"
                                value={formData.lastName}
                                className={`${urbanist.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent`}
                                onChange={handleChange}
                            />
                            {errors.lastName && (
                                <p className={`${urbanist.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    {errors.lastName}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className={`${urbanist.className} text-md font-medium text-slate-700`}>
                                Email <span className="text-orange-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                className={`${urbanist.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent`}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className={`${urbanist.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Contact */}
                        <div>
                            <label className={`${urbanist.className} text-md font-medium text-slate-700`}>
                                Contact Number <span className="text-orange-500">*</span>
                            </label>
                            <PhoneInput
                                country={"in"}   // 👈 default (can be changed by user)
                                enableSearch={true} // 👈 user can search country
                                value={formData.contact}
                                onChange={(value) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        contact: value,
                                    }))
                                }
                                inputProps={{
                                    name: "contact",
                                    required: true,
                                }}
                                inputClass="!w-full !pl-14 !py-3 !border !border-gray-300 !rounded-lg !outline-none"
                                buttonClass="!border !border-gray-300 !rounded-l-lg"
                                containerClass="mt-2 mb-5"
                            />
                            {errors.contact && (
                                <p className={`${urbanist.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    {errors.contact}
                                </p>
                            )}
                        </div>

                        {/* Organization */}
                        <div>
                            <label className={`${urbanist.className} text-md font-medium text-slate-700`}>
                                Organization <span className="text-orange-500">*</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your organization name"
                                name="organization"
                                value={formData.organization}
                                className={`${urbanist.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent`}
                                onChange={handleChange}
                            />

                            {errors.organization && (
                                <p className={`${urbanist.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    {errors.organization}
                                </p>
                            )}
                        </div>

                        {/* How can we help */}
                        <div>
                            <label className={`${urbanist.className} text-md font-medium text-slate-700`}>
                                How can we help? <span className="text-orange-500">*</span>
                            </label>

                            <textarea
                                placeholder="What service(s) are you looking at?"
                                name="help"
                                value={formData.help}
                                rows={3}
                                className={`${urbanist.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent resize-none`}
                                onChange={handleChange}
                            />

                            {errors.help && (
                                <p className={`${urbanist.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    {errors.help}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="flex items-center gap-4 mt-6 mb-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`${urbanist.className} border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition cursor-pointer flex items-center gap-2`}
                            >
                                {loading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></span>
                                        Sending...
                                    </>
                                ) : (
                                    "Submit →"
                                )}
                            </button>

                            {isSubmitted && Object.keys(errors).length > 0 && (
                                <p className={`${urbanist.className} text-orange-700 text-sm border rounded border-orange-700 px-4 py-2`}>
                                    One or more fields have an error. Please check and try again.
                                </p>
                            )}
                        </div>
                    </motion.form>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;