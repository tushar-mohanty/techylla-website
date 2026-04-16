"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Database, Brain, BarChart3, RefreshCcw } from "lucide-react";
import { Manrope } from "next/font/google";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const Manufacturing = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO */}
      <section aria-label="Manufacturing AI solutions overview" className="relative bg-white py-20 min-h-screen overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src="/ManufacturingPageImg1.png"
            alt="Manufacturing Background image"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        </div>

        <div className="relative max-w-6xl z-20 mx-auto px-4 md:px-6">

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${urbanist.className} text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-4 mt-60`}
          >
            Manufacturing @ <span className="text-blue-300">Techylla</span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`${urbanist.className} text-md md:text-3xl font-light text-white tracking-wide leading-10 mb-20`}
          >
            Transforming Supply Chains with <span className="text-blue-200">AI-Enabled Available-to-Promise (ATP)</span> Optimization
          </motion.h2>

        </div>
      </section>

      {/* SECTION 2 */}
      <section aria-label="AI-enabled ATP explanation" className="relative bg-blue-100 px-6 md:px-12 min-h-screen overflow-hidden">

        <img src="/Bg Network Pattern.png" className="absolute -top-50 -left-60 w-[500] opacity-30 pointer-events-none select-none" />
        <img src="/Bg Network Pattern.png" className="absolute -bottom-40 -right-30 w-[600] opacity-30 pointer-events-none select-none" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-3 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/ManufacturingPageImg2.png"
              alt="Manufacturing supply chain and AI-driven optimization process"
              width={390}
              height={500}
              className="rounded-lg object-cover mt-45 md:mt-50"
            />

            <div className="absolute top-3 md:top-6 md:-ml-5 ml-0 ">
              <h2 className={`${urbanist.className} text-black md:text-6xl text-5xl font-light`}>
                What is <span className="text-blue-800">AI-Enabled ATP Optimization</span> ?
              </h2>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="space-y-8 mt-10 md:mt-30 ml-0 md:-ml-10 md:mb-0 mb-10">

            <h2 className={`${urbanist.className} text-black text-xl font-light`}>
              Modern manufacturing requires accurate and reliable delivery commitments. Traditional Available-to-Promise (ATP) mechanisms within ERP systems rely on transactional data such as inventory, purchase orders, and production schedules. While effective in structured environments, these systems lack the ability to adapt to dynamic supply chain conditions.
            </h2>

            <h2 className={`${urbanist.className} text-blue-900 text-xl font-medium`}>
              To address this gap, an AI-enabled ATP approach introduces predictive intelligence, enabling organizations to move from reactive planning to proactive decision-making.
            </h2>

          </div>
        </div>
      </section>

      <section aria-label="Challenges in traditional ATP systems" className={`${urbanist.className} relative py-10 px-6 md:px-19 overflow-hidden bg-gradient-to-t from-blue-50 to-pink-50`}>
        {/* Heading */}
        <div className="max-w-6xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="text-5xl md:text-6xl font-light text-gray-900">
            Challenges in Traditional ATP Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }} className="text-gray-600 mt-3 max-w-5xl text-md md:text-xl">
            Conventional ATP processes rely on static ERP data and lack adaptability to real-world supply chain dynamics.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
            transition={{ duration: 0.5, delay: 0, scale: { duration: 0.25 } }}
            viewport={{ once: true }} className="bg-green-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]">
            {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
            <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900">
                Static & Limited Data
              </h3>
              <p className="text-sm text-gray-600 mt-auto">
                Relies on static ERP data, limiting visibility into dynamic supply chain changes.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
            transition={{ duration: 1, delay: 0.5, scale: { duration: 0.25 } }}
            viewport={{ once: true }} className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]">
            {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
            <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900">
                Inaccurate Delivery Commitments
              </h3>
              <p className="text-sm text-gray-600 mt-auto">
                Produces unreliable delivery timelines due to lack of predictive insights.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
            transition={{ duration: 1, delay: 1, scale: { duration: 0.25 } }}
            viewport={{ once: true }} className="bg-yellow-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]">
            {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
            <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900">
                Inefficient Inventory Allocation
              </h3>
              <p className="text-sm text-gray-600 mt-auto">
                Leads to poor inventory distribution across regions, causing delays.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
            transition={{ duration: 1, delay: 1.5, scale: { duration: 0.25 } }}
            viewport={{ once: true }} className="bg-purple-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]">
            {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
            <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900">
                High Costs & Execution Gaps
              </h3>
              <p className="text-sm text-gray-600 mt-auto">
                Expediting and planning gaps increase operational costs and inefficiencies.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      <section aria-label="AI-driven ATP prediction approach" className={`${urbanist.className} relative py-10 px-6 md:px-19 overflow-hidden bg-gradient-to-b from-blue-50 to-pink-50`}>

        {/* Heading */}
        <div className="max-w-6xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="text-5xl md:text-6xl font-light text-gray-900">
            AI-Driven ATP Prediction Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }} className="text-gray-600 mt-3 max-w-5xl text-md md:text-xl">
            Enhancing traditional ATP with machine learning and integrated data for smarter delivery decisions.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
            transition={{ duration: 0.5, delay: 0, scale: { duration: 0.25 } }}
            viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300">
            <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

              <Database className="w-6 h-6 text-gray-800 mb-4" />

              <h3 className="text-lg font-semibold text-gray-900">
                Data Integration
              </h3>

              <p className="text-sm text-gray-600 mt-auto">
                Combines ERP and planning data to deliver unified visibility across inventory, production, and supply.
              </p>

            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
            transition={{ duration: 1, delay: 0.5, scale: { duration: 0.25 } }}
            viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-blue-300 via-blue-100 to-blue-300">
            <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

              <Brain className="w-6 h-6 text-blue-600 mb-4" />

              <h3 className="text-lg font-semibold text-gray-900">
                ML Predictions
              </h3>

              <p className="text-sm text-gray-600 mt-auto">
                Uses machine learning models trained on supply patterns to predict accurate delivery timelines.
              </p>

            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
            transition={{ duration: 1, delay: 1, scale: { duration: 0.25 } }}
            viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-yellow-300 via-yellow-100 to-yellow-300">
            <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

              <BarChart3 className="w-6 h-6 text-yellow-600 mb-4" />

              <h3 className="text-lg font-semibold text-gray-900">
                Performance Tracking
              </h3>

              <p className="text-sm text-gray-600 mt-auto">
                Continuously evaluates AI predictions against ERP outcomes to ensure measurable improvements.
              </p>

            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
            transition={{ duration: 1, delay: 1.5, scale: { duration: 0.25 } }}
            viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-purple-300 via-purple-100 to-purple-300">
            <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

              <RefreshCcw className="w-6 h-6 text-purple-600 mb-4" />

              <h3 className="text-lg font-semibold text-gray-900">
                Continuous Learning
              </h3>

              <p className="text-sm text-gray-600 mt-auto">
                Improves over time by learning from past outcomes and adapting to changing supply conditions.
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      <section aria-label="Business impact of AI-enabled ATP" className={`${urbanist.className} relative py-10 px-6 md:px-19 bg-black text-white min-h-[70%] overflow-hidden`}>

        <img src="/Bg Network Pattern.png" className="absolute -top-50 -left-60 w-[500] opacity-100 pointer-events-none select-none" />
        <img src="/Bg Network Pattern.png" className="absolute -bottom-40 -right-30 w-[700] opacity-100 pointer-events-none select-none" />

        {/* Heading */}
        <div className="max-w-6xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }} className="text-5xl md:text-6xl font-light leading-tight">
            Business Impact of AI-Enabled ATP
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

            <img
              src="/ManufacturingPageImg4.jpeg"
              alt="Improving delivery accuracy in manufacturing supply chains"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-medium mb-3">
                Improve Delivery Accuracy
              </h3>
              <p className="text-sm font-light text-gray-300">
                Enhance the precision of delivery commitments with predictive ATP insights, ensuring better customer satisfaction.
              </p>
            </div>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

            <img
              src="/ManufacturingPageImg5.jpeg"
              alt="Optimizing inventory and reducing operational costs"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-medium mb-3">
                Optimize Inventory & Reduce Costs
              </h3>
              <p className="text-sm font-light text-gray-300">
                Enhance inventory utilization across locations while minimizing expediting efforts and reducing the costs associated with frequent re-planning.
              </p>
            </div>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

            <img
              src="/ManufacturingPageImg6.jpeg"
              alt="Data-driven decision making in manufacturing operations"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-medium mb-3">
                Smarter Decision-Making
              </h3>
              <p className="text-sm font-light text-gray-300">
                Enable data-driven decisions with improved coordination between planning and execution across operations.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      <section aria-label="Manufacturing inquiry form" className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-12 overflow-hidden min-h-screen">

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
              Have an Idea? Let’s Build It <span className="text-blue-800 font-bold">Together</span>
            </h2>

            <p className={`${urbanist.className} text-gray-800 text-xl max-w-[700]`}>
              From concept to reality, we make it happen.
            </p>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <div className="relative mt-10 p-6 sm:p-8 rounded-xl shadow-lg bg-white overflow-hidden">

            <h3 className={`${urbanist.className} text-2xl sm:text-3xl font-semibold mb-4`}>
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
                aria-label="Manufacturing solutions inquiry form"
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


    </div>
  );
};

export default Manufacturing;