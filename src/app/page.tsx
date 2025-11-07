"use client";

import React from "react";
import { motion } from "motion/react";
import { Users, BookOpen, BarChart3, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="relative max-w-6xl mx-auto px-6 py-20">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-yellow-50/30 pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-950/30 dark:to-yellow-950/30 mb-4"
              >
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  Who We Are
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                About Pison
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Pison brings together education, research and publishing to
                    make knowledge accessible to learners, institutions and
                    researchers worldwide.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We deliver tailored training, reliable data and trusted
                    publishing services that empower organizations and
                    individuals to achieve their goals through knowledge and
                    innovation.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our team combines domain expertise with research experience
                    to design programs, perform rigorous analysis and publish
                    high-quality outputs that make a real difference.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 dark:from-green-950/30 dark:to-green-900/30 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Expert Knowledge
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Research-backed insights
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-950/30 dark:to-yellow-900/30 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Data-Driven
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Evidence-based solutions
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-200 to-green-300 dark:from-green-900/30 dark:to-green-800/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Global Reach
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Worldwide accessibility
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-900/30 dark:to-yellow-800/30 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-yellow-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Innovation
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Cutting-edge approaches
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-full max-w-md">
                  {/* Main illustration container */}
                  <div className="relative aspect-square rounded-2xl p-8">
                    {/* Floating elements representing different aspects */}
                    <motion.div
                      className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <BookOpen className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute top-6 right-6 w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, 8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <BarChart3 className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                    >
                      <Users className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-6 right-6 w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3,
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Center element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center shadow-xl">
                        <span className="text-2xl font-bold text-black">P</span>
                      </div>
                    </div>

                    {/* Connecting lines */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                    >
                      <motion.path
                        d="M20 20 L50 50 L80 20 M20 80 L50 50 L80 80"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        className="text-muted-foreground/30"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <Products />
        <CoreValues />
      </main>
      <Footer />
    </div>
  );
}
