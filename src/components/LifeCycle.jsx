"use client";

import { Urbanist } from 'next/font/google'
const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

export default function LifecycleStep({ title, desc, icon: Icon }) {
  return (
    <div
      className={`${urbanist.className}
        group relative rounded-2xl p-5 md:p-6
        bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#020617]
        border border-white/10 backdrop-blur-xl
        transition duration-300 hover:scale-[1.03] hover:border-black/90
        flex flex-col justify-between min-h-[160px]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/5 blur-2xl" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* Icon */}
        <div className="mb-4">
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-200" />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-2xl font-medium text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-300">
          {desc}
        </p>
      </div>
    </div>
  );
}