"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "Capital Market", href: "/solutions/capital-market" },
      { name: "F&O Derivative", href: "/solutions/fno-derivative" },
      { name: "Currency Derivative", href: "/solutions/currency-derivative" },
      { name: "Commodity", href: "/solutions/commodity" },
      { name: "Mutual Fund", href: "/solutions/mutual-fund" },
      { name: "Risk Management", href: "/solutions/risk-management" },
      { name: "NSDL & CDSL", href: "/solutions/nsdl-cdsl" },
    ],
  },
  { name: "Events", href: "/#events" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/#careers" },
  { name: "Contact Us", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/image.svg/korpsoftware.jpeg"
                alt="KORP Software Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">KORP</span>
              <span className="text-xs text-gray-600">Software</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#1e88e5] font-medium transition-colors"
                >
                  <span className={item.name === "Home" ? "text-[#1e88e5]" : ""}>
                    {item.name}
                  </span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#1e88e5] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Section - Phone + Contact Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:0120-4330960"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#1e88e5] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0120-4330960</span>
            </a>

            <Link
              href="#contact"
              className="bg-[#4caf50] hover:bg-[#43a047] text-white font-medium px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#1e88e5]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-[#1e88e5] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-gray-600 hover:text-[#1e88e5] text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="tel:0120-4330960"
                className="flex items-center space-x-2 py-2 text-gray-700"
              >
                <Phone className="w-4 h-4" />
                <span>0120-4330960</span>
              </a>

              <Link
                href="#contact"
                className="block w-full text-center bg-[#4caf50] text-white font-medium py-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
