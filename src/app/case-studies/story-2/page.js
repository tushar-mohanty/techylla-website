"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Manrope } from "next/font/google";
const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});


export default function StoryOne() {
    return (
        <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 w-full overflow-hidden">
            <img
                src="/Bg Network Pattern.png"
                className="absolute -top-40 left-0 w-[600] rotate-350 opacity-10 pointer-events-none select-none"
            />
            <img
                src="/Bg Network Pattern.png"
                className="absolute -bottom-20 right-0 w-[800] rotate-355 opacity-30 pointer-events-none select-none"
            />
            <motion.img
                src="/Case 2 Img 1.png" // your PNG path
                alt="Case Study 2 Image"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 0.9, x: 10 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute right-10 top-33 w-[330] opacity-90"
            />
            <div className="max-w-6xl mx-auto px-6 py-30 ml-4 ">

                <h1 className={`${manrope.className} font-normal text-black mb-8 text-5xl`}>
                    Transforming Supply Chain Operations with SAP-Based Intercompany Automation
                </h1>





                <h2 className={`${manrope.className} text-3xl mb-5 font-semibold`}>Business Need</h2>

                {/* <p className="text-lg text-gray-700 mb-8">
                    This project involved the development of a sophisticated Tariff Financial Modeling (TFM) System designed to centralize and automate the analysis of global import and export duty impacts. By consolidating disparate transactional data, the system provides a "Common Data Layer" that allows the organization to track financial exposure, simulate "What-if" scenarios, and optimize mitigation strategies across international trade routes.
                </p> */}
                <p className="text-lg text-gray-700 mb-8">
                    Global enterprises with complex multi-entity structures face challenges in managing intercompany transactions due to disjointed systems and intricate tax requirements. Heavy reliance on manual processes leads to errors, inaccurate inventory, increased costs, and limited visibility.                    <br />
                    <br />
                    Traditional approaches also make it difficult to scale, with time-consuming setup of new structures causing delays in order fulfillment and slower time-to-market. Additionally, the lack of automated financial reconciliation increases risks in compliance, audit readiness, and period closing.                    <br />
                    <br />
                    To address these challenges, the objective was to:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Automate intercompany transaction flows to improve accuracy and efficiency</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Enable faster and scalable setup of supply chain structures</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    <span className="text-gray-900 font-semibold">Enhance financial compliance through automated reconciliation and monitoring</span>

                </p>

                {/* BUSINESS IMPACT - BELOW IMAGE */}
                <div className="absolute right-5 top-110 w-[350] ">
                    <h2 className={`${manrope.className} text-3xl mb-3 font-semibold mt-4`}>Business Impact</h2>

                    <p className={`${manrope.className} text-lg text-gray-700 mb-8`}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Improved accuracy and reduced costs
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Faster setup and order fulfillment
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Better compliance and visibility
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Scalable operations

                    </p>
                </div>



                {/* <h2 className={`${manrope.className} text-2xl mb-3`}>Business Challenge</h2> */}

                <h2 className={`${manrope.className} text-3xl mb-3 font-semibold mt-9`}>Solution</h2>

                <p className={`${manrope.className} text-lg text-gray-700 mb-8`}>
                    The Techylla team developed an SAP-Based Intercompany Automation solution and implemented the following key initiatives:
                    <br />
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Automated <span className="text-gray-900 font-semibold"> end-to-end intercompany transaction flows</span>, across purchase, transfer, and sales processes, eliminating manual<br /> <span className="ml-7"> intervention</span>
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Enabled <span className="text-gray-900 font-semibold"> dynamic configuration of supply chain structures and master data</span> for faster and scalable setup
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Implemented <span className="text-gray-900 font-semibold"> rule-based financial reconciliation</span> to ensure accuracy, control, and compliance
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Integrated <span className="text-gray-900 font-semibold"> real-time monitoring and alerts</span> to provide complete visibility across transaction flows 
                    <br />
                    <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                    Built <span className="text-gray-900 font-semibold"> process resumption and reversal capabilities</span> to ensure uninterrupted operations and maintain data integrity 

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* <div>
                    <h2 className={`${manrope.className} text-3xl mb-3 font-semibold mt-4`}>Business Impact</h2>

                    <p className={`${manrope.className} text-lg text-gray-700 mb-8`}>
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Unified data platform eliminating silos
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Weeks → minutes analysis time
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Better risk visibility with exposure forecasting
                        <br />
                        <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                        Scalable across global markets

                    </p>

                </div> */}
                    {/* <div> */}
                        {/* Security & Governance */}
                        {/* <h2 className={`${manrope.className} text-3xl mb-3 font-semibold mt-4`}>Security & Governance</h2>

                        <p className={`${manrope.className} text-lg text-gray-700 mb-8`}>
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            RBAC-based secure access across business units
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Locking mechanism for safe concurrent processing
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Automated CI/CD pipelines for smooth deployments

                        </p> */}
                    {/* </div> */}

                </div>

                {/* <h2 className={`${manrope.className} text-3xl mb-3 font-semibold mt-4`}>Tech Stack</h2>

                <p className={`${manrope.className} text-lg text-gray-700 mb-8`}>
                    React.js, Node.js, Databricks, PySpark, SQL, Data Lake, ARIMA, CI/CD
                </p> */}






                {/* <p className="mb-6 text-lg text-gray-700">
                    Global organizations face significant complexity in managing tariff exposure due to:
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Fragmented Data: </span>
                    Financial and logistics data were scattered across multiple legacy source systems, making it difficult to gain a unified view of duty impacts.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5 bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Manual Analysis: </span>
                    Predicting the financial impact of changing trade policies was a labor-intensive process prone to human error.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5 bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Lack of Scenario Testing: </span>
                    Business units lacked an agile way to test how different tariff rates or mitigation protocols would affect their net tariff exposure.
                </p>

                <h2 className={`${manrope.className} text-2xl mb-3`}>Technical Solution Architecture</h2>

                <p className="mb-6 text-lg text-gray-700">
                    The solution is built on a modern, multi-tier cloud infrastructure to ensure scalability, security, and high performance.
                </p> */}

                {/* <Image
                    src="/Tariff Technical Solution Architecture.png"
                    alt="Tariff Modeling System Technical Solution Architecture"
                    width={800}
                    height={200}
                    className="ml-20 rounded-lg mb-12 mt-10"
                /> */}

                {/* <p className="mb-6 text-lg text-gray-700">
                    Core Technical Components:
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Frontend (React.js): </span>
                    An intuitive, responsive user interface for data entry, triggering complex simulations, and real-time visualization of results.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Backend API (Node.js): </span>
                    Backend API (Node.js): Acts as the central orchestrator, managing requests, authenticating users via enterprise directory services, and coordinating between the database and processing layers.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Data Processing Engine (Databricks): </span>
                    Handles heavy lifting, including large-scale data transformations, complex tariff calculations, and predictive modeling using PySpark.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Storage (Relational Database & Data Lake): </span>
                    A hybrid approach where structured operational data (users, simulation status) resides in a relational database, while high-volume transactional data is processed in a distributed data lake.
                </p> */}

                {/* <motion.img
                src="/Case 1 Img 2.png" // your PNG path
                alt="Tariff Simulation Illustration"
                initial={{ opacity: 0, x: -100 }}
                // animate={{ opacity: 0.9, x: 40 }}
                whileInView={{ opacity: 0.9, x: -20 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute left-0 top-160 w-[290] opacity-90"
            /> */}

                {/* <h2 className={`${manrope.className} text-2xl mb-3`}>Key Implementation Features</h2>

                <h2 className={`${manrope.className} text-xl mb-3`}>A. Advanced Data Engineering </h2>

                <p className="mb-6 text-lg text-gray-700">
                    The system ingests raw data from multiple sources, including billing records, delivery lines, material master data, and supplier information. It automatically processes these records to derive:
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Commodity Classifications: </span>
                    Precise mapping of products to international tariff codes.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Trade Route Analysis: </span>
                    Automatic identification of origin-to-destination duty requirements.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Commercial Values: </span>
                    Standardization of billed quantities and net values for consistent reporting.
                </p> */}

                {/* <h2 className={`${manrope.className} text-xl mb-3`}>B. "What-If" Simulation Engine  </h2>

                <p className="mb-6 text-lg text-gray-700">
                    A core innovation is the simulation workflow, which allows users to create variations of trade scenarios without affecting production data.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Parameter Adjustments: </span>
                    Users can modify tariff percentages, growth rates, and duty-saving protocols (mitigations).
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Cloning Capabilities: </span>
                    Existing scenarios can be cloned to test slight variations in strategy, facilitating rapid decision-making.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Asynchronous Processing: </span>
                    Simulations run in the background with automated notifications upon completion, ensuring the UI remains responsive.
                </p> */}

                {/* <motion.img
                src="/Case 1 Img 3.png" // your PNG path
                alt="Tariff Simulation Illustration"
                initial={{ opacity: 0, x: -100 }}
                // animate={{ opacity: 0.9, x: 40 }}
                whileInView={{ opacity: 0.9, x: -40 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute left-0 top-260 w-[360] opacity-90"
            /> */}

                {/* <h2 className={`${manrope.className} text-xl mb-3`}>C. Predictive Forecasting</h2>

                <p className="mb-6 text-lg text-gray-700">
                    The system integrates a data science pipeline that utilizes ARIMA (Auto-Regressive Integrated Moving Average) modeling to forecast future duty waiver amounts. This enables the organization to anticipate financial shifts up to 36 months in advance.

                </p> */}

                {/* <motion.img
                src="/Case 1 Img 4.png" // your PNG path
                alt="Tariff Simulation Illustration"
                initial={{ opacity: 0, x: 80 }}
                // animate={{ opacity: 0.9, x: 40 }}
                whileInView={{ opacity: 0.9, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute right-0 top-280 w-[280] opacity-90"
            /> */}

                {/* <h2 className={`${manrope.className} text-2xl mb-3`}>Security and Governance</h2>

                <p className="mb-6 text-lg text-gray-700">
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Role-Based Access Control (RBAC): </span>
                    Access is strictly governed by enterprise-grade authentication, with specific roles for administrators and various business units (e.g., Surgery, Vision, Cardio) to ensure data privacy.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Locking Mechanisms: </span>
                    To prevent data corruption during high-volume concurrent processing, a custom "Lock Mechanism" ensures only one job can write to specific internal data tables at a time.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Automated Deployment: </span>
                    A robust CI/CD pipeline using industry-standard automation tools manages code promotion through Development, QA, and Production environments.
                </p> */}

                {/* <h2 className={`${manrope.className} text-2xl mb-3`}>Business Results</h2>

                <p className="mb-6 text-lg text-gray-700">
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Unified Truth: </span>
                    Established a centralized platform for all tariff-related financial data, eliminating departmental silos.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Strategic Agility: </span>
                    Reduced the time required to analyze trade policy changes from weeks to minutes through automated simulations.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Risk Mitigation: </span>
                    Enhanced the ability to project "Net Exposure" by factoring in mitigation protocols and forecasting future trends.
                    <br />
                    <br />
                    <span className="w-2 h-2 mb-0.5  bg-black rounded-full inline-block mr-3"></span>
                    <span className="text-gray-900 font-semibold">Global Scalability: </span>
                    The cloud-native design allows for easy expansion into new regional markets and business lines.
                </p> */}

                {/* <motion.img
                src="/Case 1 Img 5.png" // your PNG path
                alt="Tariff Simulation Illustration"
                initial={{ opacity: 0, x: 80 }}
                // animate={{ opacity: 0.9, x: 40 }}
                whileInView={{ opacity: 0.9, x: 10 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="hidden md:block absolute right-0 top-780 w-[330] opacity-90"
            /> */}
            </div>
        </section >
    );
}