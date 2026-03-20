"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { Manrope } from "next/font/google";
import { BuildingOffice2Icon, BuildingOfficeIcon, ChartBarIcon, CodeBracketIcon, SparklesIcon } from "@heroicons/react/20/solid";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});


const WhatWeDo = () => {

    const [fileName, setFileName] = useState("No file chosen");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        message: "",
        resume: null,
    });

    const [errors, setErrors] = useState({});

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

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFileName(e.target.files[0].name);

            setFormData((prev) => ({
                ...prev,
                resume: e.target.files[0],
            }));

            setErrors((prev) => ({
                ...prev,
                resume: "",
            }));
        }
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

        if (!formData.contact.trim()) {
            newErrors.contact = "Required";
        }

        if (!formData.message.trim()) newErrors.message = "Required";
        if (!formData.resume) newErrors.resume = "Required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitted(true); // ✅ ADD THIS

        console.log("SUBMIT CLICKED"); // 👈 ADD THIS

        const validationErrors = validateForm();
        console.log("Errors:", validationErrors); // 👈 ADD THIS

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            alert("Validation failed"); // 👈 TEMPORARY
            return;
        }

        console.log("Form Data:", formData);
        alert("Form submitted 🚀");
    };
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (

        <>
            <section className="relative bg-white py-20 min-h-screen overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/Careers Bg1.jpg"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
                </div>


                <div className="relative max-w-6xl z-20 mx-auto px-6 bg-cover">

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`${manrope.className} text-7xl font-semibold text-white tracking-tighter leading-tight mb-4 mt-60`}
                    >
                        Career @ <span className="text-blue-300 font-semibold">Techylla</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className={`${manrope.className} text-4xl font-light text-white tracking-wide leading-10 mb-20`}
                    >
                        Drive Change, Shape The Future with Data
                    </motion.h2>

                </div>

            </section >
            <section className="relative bg-blue-100 px-6 md:px-12 min-h-screen overflow-hidden">
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-50 -left-60 w-[500] rotate-350 opacity-30 pointer-events-none select-none"
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
                        <Image
                            src="/Careers Bg2.jpg" // replace with your image
                            alt="Why choose us"
                            width={390}
                            height={500}
                            className="rounded-lg object-cover mt-30"
                        />

                        {/* Overlay Text */}
                        <div className="absolute top-6 -ml-5">
                            <h2 className={`${manrope.className} text-black text-6xl font-light`}>
                                Why choose us?
                            </h2>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-8 mt-30 -ml-10">

                        {[
                            {
                                title: "Accelerate Your Growth",
                                desc: "Solve real challenges and grow faster with hands-on experience.",
                            },
                            {
                                title: "Build Together, Win Together",
                                desc: "Collaborate with a team that supports, challenges, and succeeds together.",
                            },
                            {
                                title: "A Community That Inspires",
                                desc: "Work in a culture that values ideas, curiosity, and shared growth.",
                            },
                            {
                                title: "Create Meaningful Solutions",
                                desc: "Build solutions that create real impact and drive measurable change.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={`${manrope.className} text-2xl md:text-3xl font-medium mb-2`}>
                                    {item.title}
                                </h3>
                                <p className={`${manrope.className} text-gray-700 mb-4`}>{item.desc}</p>

                                {i !== 3 && (
                                    <div className="border-b border-gray-300 mt-6"></div>
                                )}
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>
            <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-12 overflow-hidden min-h-screen">

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
                        <h2 className={`${manrope.className} text-5xl font-semibold text-black leading-tight mb-6 mt-10`}>
                            Join <span className="text-blue-800 font-bold">Techylla</span> and shape the future of Data and AI
                        </h2>

                        <p className={`${manrope.className} text-gray-800 text-xl max-w-[700]`}>
                            Where your skills create impact, and your growth never stops.
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
                        <h3 className={`${manrope.className} text-2xl font-semibold mb-6`}>
                            Send us your details
                        </h3>

                        {/* First Name */}
                        <div>
                            <label className={`${manrope.className} text-md font-medium text-slate-700`}>
                                First Name <span className="text-orange-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                name="firstName"
                                className={`${manrope.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600  bg-transparent`}
                                onChange={handleChange}
                            />
                            {errors.firstName && (
                                <p className={`${manrope.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    Please fill out this field.
                                </p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className={`${manrope.className} text-md font-medium text-slate-700`}>
                                Last Name <span className="text-orange-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                name="lastName"
                                className={`${manrope.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent`}
                                onChange={handleChange}
                            />
                            {errors.lastName && (
                                <p className={`${manrope.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    Please fill out this field.
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className={`${manrope.className} text-md font-medium text-slate-700`}>
                                Email <span className="text-orange-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className={`${manrope.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent`}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className={`${manrope.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    {errors.email === "Invalid email"
                                        ? "Please enter a valid email."
                                        : "Please fill out this field."}
                                </p>
                            )}
                        </div>

                        {/* Contact */}
                        <div>
                            <label className={`${manrope.className} text-md font-medium text-slate-700`}>
                                Contact Number <span className="text-orange-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your contact number"
                                name="contact"
                                className={`${manrope.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent`}
                                onChange={handleChange}
                            />
                            {errors.contact && (
                                <p className={`${manrope.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    Please fill out this field.
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label className={`${manrope.className} text-md font-medium text-slate-700`}>
                                Your Message <span className="text-orange-500">*</span>
                            </label>
                            <textarea
                                placeholder="Your message"
                                name="message"
                                className={`${manrope.className} w-full mt-2 mb-5 border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent`}
                                onChange={handleChange}
                            />
                            {errors.message && (
                                <p className={`${manrope.className} text-red-500 text-xs -mt-4 mb-4`}>
                                    Please fill out this field.
                                </p>
                            )}
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className={`${manrope.className} text-md font-medium text-slate-700`}>
                                Upload Resume <span className="text-orange-500">*</span>
                            </label>

                            {/* Hidden Input */}
                            <input
                                type="file"
                                id="resume"
                                className="hidden"
                                onChange={handleFileChange}
                            />

                            {/* Custom UI */}
                            <div className="flex justify-between items-center mt-2 border-b border-gray-300 py-2">
                                <span className={`${manrope.className} text-gray-400 text-sm truncate`}>
                                    {fileName}
                                </span>

                                <label
                                    htmlFor="resume"
                                    className={`${manrope.className} text-orange-500 font-medium text-sm cursor-pointer hover:underline`}
                                >
                                    Choose File →
                                </label>
                            </div>

                            <p className={`${manrope.className} text-xs text-gray-400 mt-2`}>
                                Upload only PDF files with a maximum size of 5MB.
                            </p>
                            {errors.resume && (
                                <p className={`${manrope.className} text-red-500 text-xs`}>
                                    Please upload your resume.
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="flex items-center gap-4 mt-6 mb-4">
                            <button
                                type="submit"
                                className={`${manrope.className} border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition cursor-pointer`}
                            >
                                Submit →
                            </button>

                            {isSubmitted && Object.keys(errors).length > 0 && (
                                <p className={`${manrope.className} text-orange-700 text-sm border rounded border-orange-700 px-4 py-2`}>
                                    One or more fields have an error. Please check and try again.
                                </p>
                            )}
                        </div>
                    </motion.form>
                </div>
            </section>
        </>
    )
}

export default WhatWeDo;