"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

const partners = [
  // { name: "Azure", logo: "/azure.png", width: "w-40", height: "h-15" },
  { name: "AWS", logo: "/aws.svg", width: "w-40", height: "h-20" },
  { name: "Databricks", logo: "/databricks.png", width: "w-60", height: "h-25" },
  // { name: "Neo4j", logo: "/neo4j.png", width: "w-40", height: "h-25" },
  // { name: "Fivetran", logo: "/fivetran.png", width: "w-70", height: "h-40" },
  { name: "Snowflake", logo: "/snowflake.png", width: "w-45", height: "h-30" },
  { name: "Power BI", logo: "/powerbi.png", width: "w-45", height: "h-30" },
  // { name: "Google Cloud", logo: "/googlecloud.png", width: "w-45", height: "h-30" },
];

const Partnerships = () => {
  return (
    <section className="min-h-screen bg-blue-100 py-20 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className={`${manrope.className} text-6xl font-light tracking-normal leading-tight mb-4`}>
          Partnerships
        </h2>

        <p className="text-[19px] text-black max-w-xl mb-10">
          These strategic partners support our mission of transforming
          your business to excel in the digital world.
        </p>

        {/* Learn More */}
        <button className="flex items-start gap-2 tracking-widest text-[16px] font-medium mb-5 text-black py-1 text-md border-b border-transparent hover:border-black duration-400 ease-in-out cursor-pointer">
          LEARN MORE
          <ArrowRightIcon className="w-4 h-7 mt-0" />
        </button>

        {/* Partner Grid */}
        <div className="grid grid-cols-4 gap-6 mt-20">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white h-36 flex items-center justify-center
                         transition duration-300 hover:bg-white cursor-pointer rounded-[8px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.width} ${partner.height} object-contain grayscale hover:grayscale-0 transition duration-300`}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Partnerships;