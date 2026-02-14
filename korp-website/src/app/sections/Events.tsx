"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Video } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Stock Market Trends 2025",
    date: "January 25, 2025",
    time: "11:00 AM IST",
    type: "Webinar",
    attendees: 250,
    description:
      "Join industry experts as they analyze emerging trends in the stock market and discuss strategies for the new year.",
    status: "Upcoming",
  },
  {
    title: "Risk Management Workshop",
    date: "February 10, 2025",
    time: "2:00 PM IST",
    type: "Workshop",
    attendees: 150,
    description:
      "Hands-on workshop covering advanced risk management techniques and compliance requirements for brokers.",
    status: "Registration Open",
  },
  {
    title: "F&O Trading Strategies",
    date: "February 28, 2025",
    time: "10:00 AM IST",
    type: "Seminar",
    attendees: 300,
    description:
      "Deep dive into futures and options trading strategies with live market analysis and Q&A session.",
    status: "Coming Soon",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
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
            className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4"
          >
            Events & Webinars
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Upcoming
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Events
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Join our expert-led webinars and workshops to stay ahead in the
            financial markets. Learn from industry leaders and network with peers.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    <Video className="w-3 h-3 mr-1" />
                    {event.type}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      event.status === "Upcoming"
                        ? "bg-green-100 text-green-700"
                        : event.status === "Registration Open"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>

                <div className="flex items-center space-x-4 text-white/80 text-sm">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {event.time}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {event.attendees}+ registered
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 group-hover:gap-2 transition-all"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center space-x-2 text-[#1e88e5] font-semibold hover:text-[#1976d2] transition-colors"
          >
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
