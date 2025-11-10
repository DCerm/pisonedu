"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import {
  ChevronDown,
  Menu,
  X,
  BarChart3,
  GraduationCap,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";

const services = [
  {
    name: "Datera",
    description: "Data & research services",
    href: "/services/datera",
    icon: BarChart3,
  },
  {
    name: "Pison Learning",
    description: "Training and global education",
    href: "/services/pison-learning",
    icon: GraduationCap,
  },
  {
    name: "Enowise Publishing",
    description: "Academic & professional publishing",
    href: "/services/enowise",
    icon: BookOpen,
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200"
            >
              About
            </a>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200 focus:outline-none">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-2">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <DropdownMenuItem key={service.name} asChild>
                      <a
                        href={service.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-950/30 dark:to-yellow-950/30 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">
                            {service.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {service.description}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#products"
              className="text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200"
            >
              Products
            </a>
            <a
              href="https://knowledgebase.pisonets.com/contact"
              className="text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200"
            >
              Contact
            </a>
          </motion.div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="https://knowledgebase.pisonets.com/contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 border-t border-border/40"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#about"
                className="text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">
                  Services
                </div>
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200 ml-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-950/30 dark:to-yellow-950/30 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {service.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {service.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <a
                href="#products"
                className="text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="https://knowledgebase.pisonets.com/contact"
                className="text-sm font-medium text-foreground hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>

              <a
                href="https://knowledgebase.pisonets.com/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
