"use client";

// React hooks
import { useMemo, useState } from "react";

// Framer Motion for animations
import { motion, AnimatePresence } from "framer-motion";

// Lucide Icons (clean, consistent icon system)
import {
    TrendingUp,
    Package,
    Globe,
    Eye,
    Brain,
    Handshake,
    Truck,
    Database,
    Timer,
    Target,
    DollarSign,
    Zap
} from "lucide-react";

// -----------------------------
// 📊 QUESTIONS CONFIGURATION
// -----------------------------
// Replace emoji icons with Lucide components

const QUESTIONS = [
    {
        id: 1,
        key: "demand",
        title: "How predictable is your demand?",
        icon: TrendingUp,
        weight: 1.2,
        options: [
            { label: "Very stable", score: 1 },
            { label: "Some fluctuations", score: 2 },
            { label: "Highly volatile / unpredictable", score: 4 }
        ]
    },
    {
        id: 2,
        key: "inventory",
        title: "Inventory challenges?",
        icon: Package,
        weight: 1.3,
        options: [
            { label: "Well balanced", score: 1 },
            { label: "Frequent stockouts", score: 2 },
            { label: "Excess inventory", score: 3 },
            { label: "Both stockouts & overstock", score: 4 }
        ]
    },
    {
        id: 3,
        key: "tariffs",
        title: "Tariff & trade impact?",
        icon: Globe,
        weight: 1.5,
        options: [
            { label: "Rarely", score: 1 },
            { label: "Occasionally", score: 2 },
            { label: "Frequently", score: 3 },
            { label: "Constantly changing / hard to track", score: 4 }
        ]
    },
    {
        id: 4,
        key: "visibility",
        title: "Supply chain visibility?",
        icon: Eye,
        weight: 1.4,
        options: [
            { label: "End-to-end visibility", score: 1 },
            { label: "Partial visibility", score: 2 },
            { label: "Limited visibility", score: 3 },
            { label: "Mostly reactive / manual tracking", score: 4 }
        ]
    },
    {
        id: 5,
        key: "planning",
        title: "Planning process?",
        icon: Brain,
        weight: 1.2,
        options: [
            { label: "AI/ML already in use", score: 1 },
            { label: "Advanced tools", score: 2 },
            { label: "Semi-automated", score: 3 },
            { label: "Fully manual", score: 4 }
        ]
    },
    {
        id: 6,
        key: "supplier",
        title: "Supplier risk management?",
        icon: Handshake,
        weight: 1.1,
        options: [
            { label: "Predictive insights", score: 1 },
            { label: "Proactive monitoring", score: 2 },
            { label: "Basic tracking", score: 3 },
            { label: "Reactive", score: 4 }
        ]
    },
    {
        id: 7,
        key: "logistics",
        title: "Logistics optimization?",
        icon: Truck,
        weight: 1.0,
        options: [
            { label: "Continuously AI-optimized", score: 1 },
            { label: "Regularly optimized", score: 2 },
            { label: "Some optimization", score: 3 },
            { label: "Not optimized", score: 4 }
        ]
    },
    {
        id: 8,
        key: "data",
        title: "Data readiness?",
        icon: Database,
        weight: 1.5,
        options: [
            { label: "Fully integrated & governed", score: 1 },
            { label: "Mostly unified", score: 2 },
            { label: "Partially integrated", score: 3 },
            { label: "Fragmented", score: 4 }
        ]
    },
    {
        id: 9,
        key: "speed",
        title: "Decision speed?",
        icon: Timer,
        weight: 1.1,
        options: [
            { label: "Near real-time", score: 1 },
            { label: "Within 24 hours", score: 2 },
            { label: "Several days", score: 3 },
            { label: "Days/weeks", score: 4 }
        ]
    },
    {
        id: 10,
        key: "priority",
        title: "Top priority?",
        icon: Target,
        weight: 1.2,
        options: [
            { label: "Cost reduction", score: 1 },
            { label: "Resilience / risk", score: 2 },
            { label: "Growth & scalability", score: 3 },
            { label: "Compliance (tariffs, trade)", score: 4 }
        ]
    }
];

// -----------------------------
// 🧠 RECOMMENDATION MAPPING
// -----------------------------

const RECO_MAP = {
    demand: "Demand Forecasting (ML)",
    inventory: "Inventory Optimization",
    tariffs: "Tariff Impact Simulation",
    visibility: "Control Tower",
    planning: "AI Planning Assistant",
    supplier: "Supplier Risk Prediction",
    logistics: "Route Optimization",
    data: "Data Platform / Integration",
    speed: "Real-time Decisioning",
    priority: "Targeted AI Use Case"
};

// -----------------------------
// 🚀 MAIN COMPONENT
// -----------------------------

export default function AIAssessment() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
    const [loading, setLoading] = useState(false);

    const progress = ((Math.min(step, QUESTIONS.length - 1) + 1) / QUESTIONS.length) * 100;

    const handleSelect = (score) => {
        const updated = [...answers];
        updated[step] = score;
        setAnswers(updated);
    };

    const next = () => {
        if (answers[step] == null) return;
        if (step < QUESTIONS.length - 1) setStep((prev) => prev + 1);
        else {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);                 // ✅ stop loading
                setStep(QUESTIONS.length);         // ✅ show result
            }, 1200);
        }
    };

    const back = () => setStep((prev) => Math.max(0, prev - 1));

    const weightedScore = useMemo(() => {
        return answers.reduce((total, value, index) => {
            return total + (value || 0) * QUESTIONS[index].weight;
        }, 0);
    }, [answers]);

    const bucket = useMemo(() => {
        if (weightedScore <= 22) return { title: "AI Leader", color: "text-emerald-400" };
        if (weightedScore <= 35) return { title: "AI Opportunity", color: "text-amber-400" };
        return { title: "AI Foundation Gap", color: "text-rose-400" };
    }, [weightedScore]);

    const top3 = useMemo(() => {
        const scored = QUESTIONS.map((q, i) => ({
            key: q.key,
            value: (answers[i] || 0) * q.weight
        }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 3);

        return scored.map((item) => RECO_MAP[item.key]);
    }, [answers]);

    const impacts = useMemo(() => {
        if (weightedScore > 30) return { cost: "10–18%", inv: "15–25%", sl: "5–10%" };
        if (weightedScore > 20) return { cost: "5–12%", inv: "10–20%", sl: "3–8%" };
        return { cost: "3–8%", inv: "5–12%", sl: "2–5%" };
    }, [weightedScore]);

    return (
        <div className="min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-black rounded-xl text-white p-6 md:p-10">
            <div className="max-w-3xl mx-auto">

                {/* Progress */}
                {step < QUESTIONS.length && (
                    <div className="mb-6">
                        <div className="flex justify-between text-sm text-gray-100">
                            <span>Question {step + 1} of {QUESTIONS.length}</span>
                            <span>{Math.round(progress)}%</span>
                        </div>

                        <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
                            />
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[50vh] flex items-center justify-center">
                            <div className="animate-pulse text-lg">Analyzing your responses…</div>
                        </motion.div>
                    ) : step === QUESTIONS.length ? (
                        <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">

                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h2 className="text-3xl font-semibold">Your AI Opportunity Snapshot</h2>
                                <p className={`mt-2 text-xl ${bucket.color}`}>{bucket.title}</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 ">
                                <Card title="Cost Savings" value={impacts.cost} Icon={DollarSign} />
                                <Card title="Inventory Reduction" value={impacts.inv} Icon={Package} />
                                <Card title="Service Level" value={impacts.sl} Icon={Zap} />
                            </div>

                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-3">Top AI Opportunities</h3>
                                <ul className="space-y-2">
                                    {top3.map((item, i) => (
                                        <li key={i} className="flex gap-2 items-center">
                                            <Zap size={16} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col md:flex-row gap-3">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl py-3">Run Tariff Impact Simulation</button>
                                <button onClick={() => {
                                    document
                                        .getElementById("contact-section")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }} className="flex-1 bg-white/10 hover:bg-white/20 rounded-xl py-3 cursor-pointer">Book AI Strategy Session</button>
                            </div>

                        </motion.div>
                    ) : (
                        <motion.div key={step} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-6">

                            <div className="backdrop-blur-xl bg-blue-800/90 border border-white/10 rounded-2xl p-6 flex items-center gap-3">
                                {(() => {
                                    const Icon = QUESTIONS[step].icon;
                                    return <Icon size={22} />;
                                })()}
                                <h2 className="text-2xl font-semibold">{QUESTIONS[step].title}</h2>
                            </div>

                            <div className="grid gap-3">
                                {QUESTIONS[step].options.map((opt, i) => {
                                    const active = answers[step] === opt.score;

                                    return (
                                        <button
                                            key={i}
                                            onClick={() => handleSelect(opt.score)}
                                            className={`p-4 text-left rounded-xl border transition backdrop-blur-xl ${active
                                                ? "bg-blue-600/30 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                                                : "bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer"
                                                }`}
                                        >
                                            {opt.label}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="flex justify-between">
                                <button onClick={back} disabled={step === 0} className="text-gray-200 cursor-pointer">Back</button>
                                <button onClick={next} className="bg-blue-600 px-6 py-2 rounded-lg cursor-pointer">Next</button>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// -----------------------------
// 📦 CARD COMPONENT (WITH ICON)
// -----------------------------
function Card({ title, value, Icon }) {
    return (
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-sm text-gray-200">{title}</div>
            <div className="mt-2 text-2xl font-semibold flex items-center justify-center gap-2">
                <Icon size={20} /> {value}
            </div>
        </div>
    );
}
