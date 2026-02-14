"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  solutions: [
    { name: "Capital Market", href: "/solutions/capital-market" },
    { name: "F&O Derivative", href: "/solutions/fno-derivative" },
    { name: "Currency Derivative", href: "/solutions/currency-derivative" },
    { name: "Commodity", href: "/solutions/commodity" },
    { name: "NSDL & CDSL", href: "/solutions/nsdl-cdsl" },
    { name: "Mutual Fund", href: "/solutions/mutual-fund" },
    { name: "Risk Management", href: "/solutions/risk-management" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Careers", href: "/#careers" },
    { name: "Events", href: "/#events" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "/#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61562903021859", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/image.svg/korpsoftware.jpeg"
                  alt="KORP Software Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">KORP</span>
                <span className="text-sm text-gray-400">Software</span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 max-w-sm">
              Complete back-office management solution for stock market members
              including Capital Market, F&O, Currency, Commodity, and Mutual Fund.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:0120-4330960"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                0120-4330960
              </a>

              <a
                href="mailto:kuldeep@korpsoft.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kuldeep@korpsoft.com
              </a>

              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>
                  1F-CS-20 Ansal Plaza, Sector 1,
                  <br />
                  Vaishali, Ghaziabad-201010
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1e88e5] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} KORP SOFTWARE PVT. LTD. All rights
              reserved.
            </p>

            <div className="flex items-center space-x-6">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
              >
                Back to Top
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
