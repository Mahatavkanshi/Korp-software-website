"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "0120-4330960",
    subContent: "9315539970, 8178884659",
    href: "tel:0120-4330960",
  },
  {
    icon: Mail,
    title: "Email",
    content: "kuldeep@korpsoft.com",
    subContent: "dixit@korpsoft.com",
    href: "mailto:kuldeep@korpsoft.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Saturday",
    subContent: "8:00 AM - 6:00 PM IST",
    href: null,
  },
  {
    icon: MapPin,
    title: "Office Locations",
    content: "Ghaziabad (HQ)",
    subContent: "Mumbai Office",
    href: null,
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            className="inline-block bg-[#1e88e5]/10 text-[#1e88e5] text-sm font-semibold px-4 py-2 rounded-full mb-4"
          >
            Get In Touch
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact
            <span className="bg-gradient-to-r from-[#1e88e5] to-[#42a5f5] bg-clip-text text-transparent">
              {" "}
              Us
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Have questions about our software solutions? Get in touch with our
            team and we&#39;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e88e5]/10 mb-4"
                  >
                    <info.icon className="w-6 h-6 text-[#1e88e5]" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>

                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-[#1e88e5] hover:underline font-medium"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium">{info.content}</p>
                  )}

                  <p className="text-gray-500 text-sm">{info.subContent}</p>
                </motion.div>
              ))}
            </div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6">Our Offices</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-[#1e88e5] pl-4">
                  <h4 className="font-semibold mb-2">Corporate Office (Ghaziabad)</h4>
                  <p className="text-gray-300 text-sm">
                    1F-CS-20 Ansal Plaza, Sector 1, Vaishali, Ghaziabad-201010
                  </p>
                </div>

                <div className="border-l-4 border-[#4caf50] pl-4">
                  <h4 className="font-semibold mb-2">Mumbai Office</h4>
                  <p className="text-gray-300 text-sm">
                    B-201, Kemp Plaza, MindSpace, Off Link Road, Malad West
                    Mumbai-400064
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    We&#39;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="w-4 h-4 inline mr-1" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#1e88e5] hover:bg-[#1976d2] text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
