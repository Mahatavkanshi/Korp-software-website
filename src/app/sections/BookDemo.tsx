"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  "Free 30-day trial",
  "No credit card required",
  "Dedicated support",
  "Custom onboarding",
];

export default function BookDemo() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3d] to-[#0a0e27] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2342a5f5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#1e88e5]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4caf50]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
          >
            <Calendar className="w-5 h-5 text-[#42a5f5]" />
            <span className="text-white/80 text-sm">Schedule a Free Demo</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-[#42a5f5] to-[#1e88e5] bg-clip-text text-transparent">
              Trading Business?
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            See how KORP Software can streamline your operations, improve
            compliance, and boost your trading business efficiency. Book a
            personalized demo with our experts today.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 text-white/80"
              >
                <CheckCircle className="w-5 h-5 text-[#4caf50]" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 bg-[#1e88e5] hover:bg-[#1976d2] text-white font-bold px-10 py-5 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-[#1e88e5]/50"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Your Free Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:0120-4330960"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-5 rounded-xl border border-white/20 transition-all"
            >
              <span>Call Us: 0120-4330960</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <p className="text-white/50 text-sm mb-8">Trusted by leading brokers and financial institutions</p>

            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {["NSE", "BSE", "MCX", "NCDEX", "CDSL", "NSDL"].map((exchange) => (
                <div
                  key={exchange}
                  className="text-white/40 font-bold text-xl tracking-wider"
                >
                  {exchange}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
