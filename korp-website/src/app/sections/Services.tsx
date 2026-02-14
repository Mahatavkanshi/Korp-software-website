"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Capital Market",
    description:
      "Complete backoffice solution for equity trading with real-time position tracking, profit/loss calculation, and comprehensive reporting.",
    href: "/solutions/capital-market",
    illustration: "capital-market",
  },
  {
    title: "F&O Derivative",
    description:
      "Advanced margin calculation and risk management for futures and options trading with scrip-wise margin tracking.",
    href: "/solutions/fno-derivative",
    illustration: "fno-derivative",
  },
  {
    title: "Currency Derivative",
    description:
      "Specialized solution for forex trading with currency pair management, exposure tracking, and regulatory compliance.",
    href: "/solutions/currency-derivative",
    illustration: "currency-derivative",
  },
  {
    title: "NSDL & CDSL Depositories",
    description:
      "Seamless integration with both NSDL and CDSL for demat account management, pledge operations, and corporate actions.",
    href: "/solutions/nsdl-cdsl",
    illustration: "nsdl-cdsl",
  },
  {
    title: "Mutual Fund",
    description:
      "Comprehensive mutual fund portfolio management with NAV tracking, SIP management, and consolidated reporting.",
    href: "/solutions/mutual-fund",
    illustration: "mutual-fund",
  },
  {
    title: "Risk Management",
    description:
      "Robust risk management system with real-time monitoring, exposure limits, and automated alerts for compliance.",
    href: "/solutions/risk-management",
    illustration: "risk-management",
  },
];

// Illustration placeholder component
function SolutionIllustration({ type }: { type: string }) {
  const getIllustration = () => {
    switch (type) {
      case "capital-market":
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-end justify-center gap-1 mb-2">
                {[
                  { h: "30%", color: "bg-blue-400" },
                  { h: "50%", color: "bg-blue-500" },
                  { h: "70%", color: "bg-blue-600" },
                  { h: "90%", color: "bg-blue-700" },
                  { h: "60%", color: "bg-blue-500" },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    className={`w-4 ${bar.color} rounded-t`}
                    style={{ height: bar.h }}
                    initial={{ height: 0 }}
                    animate={{ height: bar.h }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className="text-xs text-blue-600 font-medium">NIFTY 50 +1.24%</div>
            </div>
          </div>
        );
      case "fno-derivative":
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-2 border-purple-300 rounded-full" />
              {["CALL", "PUT", "FUT", "OPT", "MARGIN"].map((label, i) => (
                <div
                  key={label}
                  className="absolute w-10 h-6 bg-purple-200 rounded text-[8px] flex items-center justify-center text-purple-700 font-medium"
                  style={{
                    top: i === 0 ? "0" : i === 1 ? "50%" : i === 2 ? "50%" : i === 3 ? "100%" : "50%",
                    left: i === 0 ? "50%" : i === 1 ? "100%" : i === 2 ? "0" : i === 3 ? "50%" : "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        );
      case "currency-derivative":
        return (
          <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
            <div className="relative w-20 h-20 border-2 border-green-400 rounded-full flex items-center justify-center">
              {["$", "€", "£", "¥", "₹"].map((currency, i) => (
                <div
                  key={currency}
                  className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center text-green-600 text-xs font-bold shadow-sm"
                  style={{
                    top: i === 0 ? "10%" : i === 1 ? "50%" : i === 2 ? "50%" : i === 3 ? "90%" : "50%",
                    left: i === 0 ? "50%" : i === 1 ? "90%" : i === 2 ? "10%" : i === 3 ? "50%" : "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {currency}
                </div>
              ))}
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        );
      case "nsdl-cdsl":
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-16 bg-white rounded border-2 border-orange-300 flex flex-col items-center justify-center">
                <div className="text-[8px] text-orange-600 font-bold">NSDL</div>
                <div className="flex gap-1 mt-1">
                  {["C1", "C2"].map((c) => (
                    <div key={c} className="w-3 h-3 bg-orange-200 rounded-full flex items-center justify-center text-[6px] text-orange-700">{c}</div>
                  ))}
                </div>
              </div>
              <div className="w-8 h-12 bg-white rounded border-2 border-orange-300 flex flex-col items-center justify-center gap-1">
                <div className="w-4 h-1 bg-orange-400 rounded"></div>
                <div className="w-4 h-1 bg-orange-400 rounded"></div>
                <div className="w-4 h-1 bg-orange-400 rounded"></div>
              </div>
              <div className="w-12 h-16 bg-white rounded border-2 border-orange-300 flex flex-col items-center justify-center">
                <div className="text-[8px] text-orange-600 font-bold">CDSL</div>
                <div className="flex gap-1 mt-1">
                  {["C3", "C4"].map((c) => (
                    <div key={c} className="w-3 h-3 bg-orange-200 rounded-full flex items-center justify-center text-[6px] text-orange-700">{c}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "mutual-fund":
        return (
          <div className="w-full h-full bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-2 border-pink-300 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-6 bg-white rounded border border-pink-300 flex items-center justify-center">
                <span className="text-[8px] text-pink-600 font-bold">NAV +5.2%</span>
              </div>
              <div className="absolute top-1/2 -right-6 text-pink-500 text-lg">↗</div>
            </div>
          </div>
        );
      case "risk-management":
        return (
          <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-2 border-red-300 rounded-lg flex items-center justify-center bg-white">
                <div className="w-10 h-10 border-2 border-red-500 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 left-0 w-10 h-6 bg-white rounded border border-red-300 flex items-center justify-center">
                <span className="text-[7px] text-red-600">VIX 14.2</span>
              </div>
              <div className="absolute -bottom-2 right-0 w-10 h-6 bg-white rounded border border-red-300 flex items-center justify-center">
                <span className="text-[7px] text-red-600">Margin OK</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-32 rounded-t-xl overflow-hidden mb-4">
      {getIllustration()}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gray-500 text-sm font-medium tracking-wider mb-4">
            Our Solutions
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Complete Suite of{" "}
            <span className="text-blue-600">Products</span>
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={solution.href}
                className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
              >
                {/* Illustration */}
                <SolutionIllustration type={solution.illustration} />

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
