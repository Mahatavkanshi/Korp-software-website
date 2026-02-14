"use client";

import { motion } from "framer-motion";
import { Building2, Users, Award, MapPin, Phone, Mail, Clock } from "lucide-react";

const stats = [
  { icon: Building2, label: "Years of Experience", value: "25+" },
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Award, label: "Industry Awards", value: "10+" },
  { icon: MapPin, label: "Office Locations", value: "2" },
];

const offices = [
  {
    city: "Corporate Office",
    address: "1F-CS-20 Ansal Plaza, Sector 1, Vaishali, Ghaziabad-201010",
    phone: "0120-4330960, 9315539970",
    email: "kuldeep@korpsoft.com",
  },
  {
    city: "Mumbai Office",
    address: "B-201, Kemp Plaza, MindSpace, Off Link Road, Malad West Mumbai-400064",
    phone: "022-45155363, +91-9920557780",
    email: "sohan@korpsoft.com",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-[#4caf50]/10 text-[#4caf50] text-sm font-semibold px-4 py-2 rounded-full"
            >
              About Us
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Trusted by Stock Market
              <span className="bg-gradient-to-r from-[#4caf50] to-[#66bb6a] bg-clip-text text-transparent">
                {" "}
                Professionals
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                KORP Software is an outcome of rigorous R&D and skillful software
                development. Released our unique software for stock market, single
                package for all exchange/segment, Depositories and Risk Management.
              </p>

              <p>
                With deep study of market Scenario and current market requirement
                using 25+ years of market experience and market associates Product,
                we maintain affordability and scalability as we create advanced
                solutions for traders.
              </p>

              <p>
                Our software is a one-stop solution for the trading members of the
                stock exchange. From client management to compliance and trading,
                KORP Software makes it simple and accurate!
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                "Expert Development Team",
                "24/7 Technical Support",
                "Regular Software Updates",
                "Compliance Ready",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4caf50]/20 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-[#4caf50]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e88e5]/10 mb-4"
                  >
                    <stat.icon className="w-6 h-6 text-[#1e88e5]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center"
              >
                <MapPin className="w-5 h-5 mr-2 text-[#1e88e5]" />
                Our Offices
              </h3>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border-l-4 border-[#1e88e5] pl-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {office.city}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                      <a
                        href={`tel:${office.phone}`}
                        className="flex items-center text-[#1e88e5] hover:underline"
                      >
                        <Phone className="w-4 h-4 mr-1" />
                        {office.phone}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center text-[#1e88e5] hover:underline"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        {office.email}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
