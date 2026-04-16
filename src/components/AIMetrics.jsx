export default function MetricCard({ title, value, highlight, large, tall, icon: Icon }) {
  return (
    <div
      className={`
        relative rounded-2xl border p-5 md:p-6
        bg-gradient-to-br from-black/90 to-blue-900/90
        backdrop-blur-xl
        transition duration-300
        hover:scale-[1.02]
        hover:border-purple-300

        flex flex-col justify-between

        min-h-[120px] md:min-h-[140px]

        ${highlight
          ? "border-blue-200/40 shadow-[0_0_40px_rgba(139,92,246,0.25)]"
          : "border-white/10 hover:border-white/20"
        }

        ${large ? "md:min-h-[230px]" : ""}
        ${tall ? "md:min-h-[185px]" : ""}
      `}
    >

      {/* subtle inner glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-purple-500/5 blur-2xl" />

      {/* content */}
      <div className="relative z-10 flex flex-col justify-between h-full">

        {/* Title */}
        <p className="text-gray-100 text-xs md:text-lg leading-snug tracking-wide">
          {title}
        </p>

        {/* Value */}
        <div className="mt-4">
          <h3 className="text-3xl md:text-5xl font-semibold text-white leading-none tracking-tight">
            {value}
          </h3>
        </div>

      </div>
      {Icon && (
        <div className="absolute bottom-4 right-4 opacity-70 pointer-events-none">
          <Icon className="w-6 h-6 md:w-10 md:h-10 text-white/80" />
        </div>
      )}
    </div>
  );
}