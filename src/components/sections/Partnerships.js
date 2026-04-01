"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

const partners = [
  { name: "AWS", logo: "/aws.svg", width: "w-40", height: "h-20" },
  { name: "Databricks", logo: "/databricks.png", width: "w-60", height: "h-25" },
  { name: "Snowflake", logo: "/snowflake.png", width: "w-45", height: "h-30" },
  { name: "Power BI", logo: "/powerbi.png", width: "w-45", height: "h-30" },
];

const Partnerships = () => {
  return (
    <section className="min-h-screen bg-blue-100 md:py-20 py-10 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className={`${manrope.className} md:text-6xl text-5xl font-light tracking-normal leading-tight mb-4`}>
          Core Competence
        </h2>

        <p className="text-sm md:text-[19px] text-black max-w-xl mb-10">
          These strategic partners support our mission of transforming
          your business to excel in the digital world.
        </p>

        {/* Learn More */}
        <button className="flex items-start gap-2 tracking-widest text-sm md:text-[16px] font-medium mb-5 text-black py-1 text-md border-b border-transparent hover:border-black duration-400 ease-in-out cursor-pointer">
          LEARN MORE
          <ArrowRightIcon className="w-4 h-7 mt-0" />
        </button>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-20">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white h-30 md:h-36 flex items-center justify-center
                         transition duration-300 hover:bg-white cursor-pointer rounded-[8px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.width} ${partner.height} object-contain md:grayscale md:hover:grayscale-0 transition duration-300`}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Partnerships;