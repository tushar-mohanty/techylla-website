"use client";

import { Urbanist } from 'next/font/google'
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

import LifeCycle from "@/components/LifeCycle";
import {
  RefreshCcw,
  SearchCheckIcon,
  BrainCircuit,
  ShieldCheck,
  Workflow,
  MonitorCog
} from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "Identify high-impact AI opportunities",
    icon: SearchCheckIcon,
  },
  {
    title: "Data Prep",
    desc: "Make data AI-ready",
    icon: MonitorCog,
  },
  {
    title: "Model Fit",
    desc: "Choose and adapt models",
    icon: BrainCircuit,
  },
  {
    title: "Validate",
    desc: "Test for real-world performance",
    icon: ShieldCheck,
  },
  {
    title: "Integrate",
    desc: "Embed AI into workflows and systems",
    icon: Workflow,
  },
  {
    title: "Optimize",
    desc: "Continuously improve outcomes",
    icon: RefreshCcw,
  },
];

export default function AIDeliveryLifecycle() {
  return (
    <section className={`${urbanist.className} relative px-6 md:px-10 py-10 bg-blue-300/50 text-black`}>

      <img src="/Bg Network Pattern.png" className="absolute -top-40 -left-40 w-[400] opacity-20 pointer-events-none" />
      <img src="/Bg Network Pattern.png" className="absolute -bottom-40 -right-40 w-[500] opacity-20 pointer-events-none" />

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-5xl md:text-6xl font-light">
          AI Delivery Lifecycle
        </h2>
        <p className="text-gray-700 text-xl mt-3 max-w-2xl">
          A structured approach to delivering scalable AI solutions.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {steps.map((step, i) => (
          <LifeCycle
            key={i}
            title={step.title}
            desc={step.desc}
            icon={step.icon}
          />
        ))}
      </div>

    </section>
  );
}