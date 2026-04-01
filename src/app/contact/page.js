"use client";
import { motion } from "framer-motion";
import React from "react";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { Mail, MapPin, Phone } from "lucide-react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});


const ContactPage = () => {


  return (

    <div className="w-full overflow-x-hidden">
      <section className="relative bg-white py-20 min-h-screen overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src="/Contact-Us-Image.png"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60"></div>
        </div>


        <div className="relative max-w-6xl z-20 mx-auto px-4 md:px-6 bg-cover">

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${manrope.className} text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-tight mb-4 mt-60 md:mt-60`}
          >
            Contact <span className="text-blue-300 font-semibold">Us</span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className={`${manrope.className} text-md md:text-4xl font-light text-white tracking-wide leading-10 mb-20`}
          >
            Let’s Build Something Great Together
          </motion.h2>

        </div>

      </section >

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
              Have an Idea? Let’s Build It <span className="text-blue-800 font-bold">Together</span> 
            </h2>

            <p className={`${manrope.className} text-gray-800 text-xl max-w-[700]`}>
              From concept to reality, we make it happen.
            </p>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <div className="relative mt-10 p-6 sm:p-8 rounded-xl shadow-lg bg-white overflow-hidden">

            <h3 className={`${manrope.className} text-2xl sm:text-3xl font-semibold mb-4`}>
              Send us your details
            </h3>

            <Script
              src="https://js-na2.hsforms.net/forms/embed/245721089.js"
              strategy="afterInteractive"

            />

            {/* FORM WRAPPER */}
            <div className="form-wrapper">
              <div
                className="hs-form-frame"
                data-region="na2"
                data-form-id="2d512c76-1898-499f-a646-13ff510d1f49"
                data-portal-id="245721089"
              ></div>
            </div>

            {/* RESPONSIVE MASK (SAFE) */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-30 sm:h-20 bg-gradient-to-t from-blue-100 to-white"></div>

          </div>


        </div>
      </section>

      <section className="relative bg-gradient-to-br from-pink-100 via-blue-100 to-pink-100 px-6 md:px-12 min-h-[500] overflow-hidden">
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

            {/* Overlay Text */}
            <div className="absolute ml-0 md:-ml-5">
              <h2 className={`${manrope.className} text-black text-6xl font-light`}>
                Reach Out To <span className="text-blue-800 font-medium">Techylla</span>
              </h2>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10 mt-35 md:mt-30 md:-ml-10 ml-0">

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500 w-8 h-8 mt-1" />

              <div className={`${manrope.className} space-y-3 text-blue-900 font-bold text-lg`}>
                <p>Kolkata, India</p>
                <p>116 Village Blvd Suite 200, Princeton, NJ 08540</p>

              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500 w-8 h-8" />
              <p className={`${manrope.className} text-blue-900 font-bold text-lg`}>sales@techylla.com</p>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <Phone className="text-orange-500 w-8 h-8 mt-1" />

              <div className={`${manrope.className} text-blue-900 font-bold text-lg space-y-2`}>
                <p>USA: +1 (732) 208-4788</p>
                <p>India: +91 98311 69927</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage;