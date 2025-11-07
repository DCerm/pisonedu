"use client";

import React from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  TrendingUp,
  Database,
  Search,
  Target,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const services = [
  {
    title: "Data Mining & Collection",
    description:
      "Advanced data extraction and collection from multiple sources using cutting-edge methodologies.",
    icon: Database,
  },
  {
    title: "Data Analysis",
    description:
      "Transform raw data into meaningful insights using sophisticated analytical tools and techniques.",
    icon: BarChart3,
  },
  {
    title: "Market Research",
    description:
      "Comprehensive market analysis to identify opportunities, trends, and competitive landscapes.",
    icon: TrendingUp,
  },
  {
    title: "Customer Insights",
    description:
      "Deep understanding of target audiences through behavioral and demographic analysis.",
    icon: Target,
  },
];

const benefits = [
  "Drive growth through data-driven decisions",
  "Stay ahead of competitors with market insights",
  "Uncover new business opportunities",
  "Mitigate risks through comprehensive analysis",
  "Transform data into strategic assets",
  "Access cutting-edge digital technologies",
];

export default function DateraPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50/30 to-green-50/20 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-950/30 dark:to-yellow-950/30 mb-6"
              >
                <BarChart3 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  Data & Research Services
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Datera
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Turning Data to Wealth
              </motion.p>

              <motion.p
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We provide data and research services to businesses,
                organizations and individuals, transforming information into
                valuable insights that drive growth and competitive advantage.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-950/30 dark:to-yellow-950/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Data Section */}
        <section className="py-20 bg-gradient-to-br from-green-50/50 to-yellow-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 dark:from-green-950/30 dark:to-green-900/30">
                  <Database className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    Data Services
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Data
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We mine, collect and analyze data and transform results into
                    meaningful information that provides users with valuable
                    insights to drive growth and stay ahead of competitors.
                  </p>

                  <p>
                    Our core interest is in academic, business and market data
                    to unravel new opportunities and drive innovation. We
                    leverage on cutting-edge methodologies and tools embedded
                    with digital technologies.
                  </p>

                  <p>
                    In our work, we prioritize professionalism via accuracy,
                    integrity, confidentiality and objectivity to drive
                    innovation.{" "}
                    <span className="text-foreground font-semibold">
                      Partner with us to transform your data into a strategic
                      asset.
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-950/20 dark:to-yellow-950/20 p-8 shadow-2xl">
                    <motion.div
                      className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Database className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute top-6 right-6 w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg"
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
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-r from-green-600 to-yellow-500 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                    >
                      <TrendingUp className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-yellow-500 flex items-center justify-center shadow-xl">
                        <span className="text-2xl font-bold text-white">D</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-yellow-100 to-green-100 dark:from-yellow-950/20 dark:to-green-950/20 p-8 shadow-2xl">
                    <motion.div
                      className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Search className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute top-6 right-6 w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, 8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <Target className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-600 to-green-500 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                    >
                      <Shield className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-green-600 flex items-center justify-center shadow-xl">
                        <span className="text-2xl font-bold text-white">R</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-950/30 dark:to-yellow-900/30">
                  <Search className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                    Research Services
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Research
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We design research projects; collect, analyze and interpret
                    data. Through these processes, we help our clients
                    understand their target audience, market opportunities &
                    trends, and mitigate risks to stay ahead of competition.
                  </p>

                  <p>
                    We drive business growth through data-driven insights and
                    comprehensive analysis that uncovers hidden patterns and
                    opportunities in your market landscape.
                  </p>

                  <p>
                    From market analysis to customer insights, our services
                    uncover new perspectives, mitigate risks, and harness
                    emerging trends to ultimately drive business success and
                    growth through{" "}
                    <span className="text-foreground font-semibold">
                      data-driven decision-making.
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-green-50/50 to-yellow-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-950/30 dark:to-yellow-950/30 mb-4"
              >
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  Why Choose Datera
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Transform Your Business with Data
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Partner with us to unlock the full potential of your data and
                gain competitive advantages in your market.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-3 p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Turn Your Data into Wealth?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let&apos;s discuss how Datera can help transform your business
              through data-driven insights and strategic research.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://knowledgebase.pisonets.com/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#contact"
                className="hidden items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
