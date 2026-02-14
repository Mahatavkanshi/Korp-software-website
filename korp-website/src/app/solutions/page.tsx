import { Metadata } from "next";
import { TrendingUp, BarChart3, DollarSign, Package, PieChart, ShieldCheck, Building2 } from "lucide-react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Solutions | KORP Software",
  description: "Complete suite of stock market backoffice software solutions for Capital Market, F&O, Currency, Commodity, Mutual Fund, and Risk Management.",
};

const solutions = [
  {
    icon: TrendingUp,
    title: "Capital Market",
    shortDesc: "Complete backoffice solution for equity trading",
    description: "Complete backoffice solution for equity trading with real-time position tracking, profit/loss calculation, and comprehensive reporting.",
    href: "/solutions/capital-market",
    gradient: "from-blue-500 to-blue-600",
    tags: ["Equity", "NSE", "BSE"],
  },
  {
    icon: BarChart3,
    title: "F&O Derivative",
    shortDesc: "Advanced margin calculation & risk management",
    description: "Advanced margin calculation and risk management for futures and options trading with scrip-wise margin tracking.",
    href: "/solutions/fno-derivative",
    gradient: "from-green-500 to-green-600",
    tags: ["Futures", "Options", "NSE F&O"],
  },
  {
    icon: DollarSign,
    title: "Currency Derivative",
    shortDesc: "Forex trading & currency management",
    description: "Specialized solution for forex trading with currency pair management, exposure tracking, and regulatory compliance.",
    href: "/solutions/currency-derivative",
    gradient: "from-purple-500 to-purple-600",
    tags: ["Forex", "Currency", "NSE CD"],
  },
  {
    icon: Package,
    title: "Commodity",
    shortDesc: "Multi-commodity trading platform",
    description: "Multi-commodity trading platform covering precious metals, energy, and agricultural commodities with MCX and NCDEX integration.",
    href: "/solutions/commodity",
    gradient: "from-orange-500 to-orange-600",
    tags: ["MCX", "NCDEX", "Metals"],
  },
  {
    icon: Building2,
    title: "NSDL & CDSL",
    shortDesc: "Depository operations management",
    description: "Seamless integration with both NSDL and CDSL for demat account management, pledge operations, and corporate actions.",
    href: "/solutions/nsdl-cdsl",
    gradient: "from-teal-500 to-teal-600",
    tags: ["Depository", "Demat", "Pledge"],
  },
  {
    icon: PieChart,
    title: "Mutual Fund",
    shortDesc: "Portfolio management & distribution",
    description: "Comprehensive mutual fund portfolio management with NAV tracking, SIP management, and consolidated reporting.",
    href: "/solutions/mutual-fund",
    gradient: "from-pink-500 to-pink-600",
    tags: ["SIP", "NAV", "Portfolio"],
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    shortDesc: "Real-time monitoring & control",
    description: "Robust risk management system with real-time monitoring, exposure limits, and automated alerts for compliance.",
    href: "/solutions/risk-management",
    gradient: "from-red-500 to-red-600",
    tags: ["Monitoring", "Limits", "Compliance"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-blue-500/20 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Our Solutions
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete Suite of
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Trading Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Leading technology solutions provider catering to brokers, wealth firms, 
              NBFCs, fintech players, and banks with 25+ years of domain expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} mb-6`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-sm text-blue-600 font-medium mb-3">{solution.shortDesc}</p>

                <p className="text-gray-600 mb-4">{solution.description}</p>

                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-blue-600 font-semibold">
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
