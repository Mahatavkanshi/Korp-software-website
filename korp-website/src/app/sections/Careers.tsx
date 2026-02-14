"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, DollarSign, ArrowRight, Building } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    title: "Senior Software Developer",
    department: "Technology",
    location: "Ghaziabad",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-15 LPA",
    description:
      "Looking for experienced developers proficient in React, Node.js, and database management to join our core product team.",
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Mumbai",
    type: "Full-time",
    experience: "4-7 years",
    salary: "₹10-18 LPA",
    description:
      "Drive sales growth in the capital markets sector. Experience in fintech or stock market industry preferred.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Ghaziabad",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹12-20 LPA",
    description:
      "Lead product development for trading and back-office solutions. Strong understanding of financial markets required.",
  },
  {
    title: "Customer Support Executive",
    department: "Support",
    location: "Ghaziabad",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹3-6 LPA",
    description:
      "Provide technical support to clients using our software products. Good communication skills and patience required.",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-[#ff9800]/10 text-[#ff9800] text-sm font-semibold px-4 py-2 rounded-full mb-4"
          >
            Careers
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our
            <span className="bg-gradient-to-r from-[#ff9800] to-[#f57c00] bg-clip-text text-transparent">
              {" "}
              Team
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Be part of a team that's shaping the future of stock market technology.
            We offer competitive salaries, growth opportunities, and a great work
            culture.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Competitive Salary", value: "Industry Leading" },
            { label: "Health Insurance", value: "Family Coverage" },
            { label: "Flexible Hours", value: "Work-Life Balance" },
            { label: "Growth", value: "Career Development" },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="text-[#ff9800] font-bold text-lg mb-1">{benefit.value}</div>
              <div className="text-gray-600 text-sm">{benefit.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                {/* Left - Job Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3"
                  >
                    <span className="inline-flex items-center bg-[#ff9800]/10 text-[#ff9800] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      <Building className="w-3 h-3 mr-1" />
                      {job.department}
                    </span>
                    <span className="inline-flex items-center bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ff9800] transition-colors"
                  >
                    {job.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500"
                  >
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.experience}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </span>
                  </div>
                </div>

                {/* Right - Apply Button */}
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-all transform group-hover:scale-105 whitespace-nowrap"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Don&#39;t see a position that fits? Send us your resume anyway!
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center space-x-2 text-[#ff9800] font-semibold hover:text-[#f57c00] transition-colors"
          >
            <span>Send Your Resume</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
