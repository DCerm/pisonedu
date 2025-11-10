"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";

const contactEmails = [
  {
    label: "General Inquiries",
    email: "info@pisonets.com",
    description: "For general questions and information",
  },
  {
    label: "Data & Research",
    email: "datera@pisonets.com",
    description: "Datera services and research inquiries",
  },
  {
    label: "Learning & Training",
    email: "learning@pisonets.com",
    description: "Pison Learning programs and training",
  },
  {
    label: "Publishing",
    email: "enowise@pisonets.com",
    description: "Enowise Publishing services",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/pison-ets-limited/",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/pison_ng",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61550205256743",
    icon: Facebook,
    color: "hover:text-blue-700",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pison_ng",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
];

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "https://knowledgebase.pisonets.com/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-4">Pison</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Promoting knowledge, creating information for growth. We simplify
              learning and research through innovative solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactEmails.map((contact, i) => (
                <motion.div
                  key={contact.email}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group"
                >
                  <div className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">
                          {contact.label}
                        </p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300 break-all"
                        >
                          {contact.email}
                        </a>
                        <p className="text-xs text-gray-400 mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pison. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a
                href="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
