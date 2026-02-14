"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, Phone, Mail, Calendar, TrendingUp, BarChart3 } from "lucide-react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface SolutionLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  benefits: string[];
  image: string;
  gradient: string;
}

// Stock Chart Animation Component
function StockChartAnimation() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 400 250"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="fillGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="250"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}
        {[0, 50, 100, 150, 200, 250].map((y) => (
          <line
            key={`h-${y}`}
            x1="0"
            y1={y}
            x2="400"
            y2={y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Animated Line 1 - Upward Trend */}
        <motion.path
          d="M 20 180 Q 60 160 100 140 T 180 100 T 260 60 T 380 30"
          fill="none"
          stroke="url(#chartGradient1)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Fill under line 1 */}
        <motion.path
          d="M 20 180 Q 60 160 100 140 T 180 100 T 260 60 T 380 30 L 380 250 L 20 250 Z"
          fill="url(#fillGradient1)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Line 2 - Volatile */}
        <motion.path
          d="M 20 200 L 60 180 L 100 190 L 140 160 L 180 170 L 220 140 L 260 150 L 300 120 L 340 130 L 380 100"
          fill="none"
          stroke="url(#chartGradient2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Candlestick Bars */}
        {[
          { x: 50, y: 120, h: 40, color: "#10b981" },
          { x: 90, y: 100, h: 50, color: "#ef4444" },
          { x: 130, y: 80, h: 35, color: "#10b981" },
          { x: 170, y: 60, h: 45, color: "#10b981" },
          { x: 210, y: 90, h: 40, color: "#ef4444" },
          { x: 250, y: 70, h: 50, color: "#10b981" },
          { x: 290, y: 50, h: 35, color: "#10b981" },
          { x: 330, y: 40, h: 45, color: "#ef4444" },
        ].map((candle, i) => (
          <motion.g key={i}>
            <motion.rect
              x={candle.x - 6}
              y={candle.y}
              width="12"
              height={candle.h}
              fill={candle.color}
              rx="2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
              style={{ transformOrigin: `${candle.x}px ${candle.y + candle.h / 2}px` }}
            />
            <motion.line
              x1={candle.x}
              y1={candle.y - 10}
              x2={candle.x}
              y2={candle.y + candle.h + 10}
              stroke={candle.color}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.g>
        ))}

        {/* Data Points */}
        {[
          { cx: 100, cy: 140 },
          { cx: 180, cy: 100 },
          { cx: 260, cy: 60 },
          { cx: 380, cy: 30 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.cx}
            cy={point.cy}
            r="6"
            fill="#10b981"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.3, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}

        {/* Floating Numbers */}
        <motion.text
          x="350"
          y="50"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          +12.5%
        </motion.text>

        <motion.text
          x="40"
          y="220"
          fill="white"
          fontSize="12"
          opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1 }}
        >
          NIFTY 50
        </motion.text>
      </svg>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-4 right-4"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <TrendingUp className="w-8 h-8 text-green-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <BarChart3 className="w-8 h-8 text-blue-400" />
      </motion.div>
    </div>
  );
}

export default function SolutionLayout({
  title,
  subtitle,
  description,
  features,
  benefits,
  image,
  gradient,
}: SolutionLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${gradient} pt-32 pb-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Solutions
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                SERVICES
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {title} Software
              </h1>
              <p className="text-white/90 text-lg leading-relaxed mb-8">{description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Demo</span>
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <StockChartAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-blue-600 text-sm font-semibold tracking-wider mb-4">
              FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for {title}
              <br />
              Operations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-2xl">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our {title} Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join 500+ stock brokers who trust KORP Software for their backoffice operations. 
                Our {title} solution is designed to reduce operational complexity and increase efficiency.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>0120-4330960</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>kuldeep@korpsoft.com</span>
                </div>
              </div>

              <Link
                href="/contact"
                className={`block w-full text-center bg-gradient-to-r ${gradient} text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity`}
              >
                Schedule a Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
