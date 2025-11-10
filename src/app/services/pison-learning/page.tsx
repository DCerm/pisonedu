"use client";

import React from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Globe,
  FileText,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Video,
  Plane,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const trainingFeatures = [
  {
    title: "Recorded Videos & Audios",
    description:
      "High-quality multimedia content for flexible, self-paced learning experiences.",
    icon: Video,
  },
  {
    title: "Interactive Handouts",
    description:
      "Comprehensive learning materials designed to reinforce key concepts and skills.",
    icon: FileText,
  },
  {
    title: "Live Classes",
    description:
      "Real-time interaction with expert instructors and fellow learners.",
    icon: Users,
  },
  {
    title: "Practical Assessments",
    description:
      "Module objectives, hands-on projects, and group work for skills transfer.",
    icon: Target,
  },
];

const globalServices = [
  {
    title: "Admission Processing",
    description:
      "Complete support for university and college application processes worldwide.",
    icon: FileText,
  },
  {
    title: "Visa & Passport Support",
    description:
      "Expert guidance through visa applications and passport requirements.",
    icon: Globe,
  },
  {
    title: "Study Loan Assistance",
    description:
      "Help securing financial support for your international education journey.",
    icon: CheckCircle,
  },
  {
    title: "Relocation & Arrival Support",
    description:
      "Comprehensive assistance for smooth transition to your new study destination.",
    icon: Plane,
  },
];

const benefits = [
  "Market-ready skills development",
  "Flexible self-paced learning",
  "Expert instructor guidance",
  "Global university partnerships",
  "Comprehensive support services",
  "Simplified assessment process",
];

export default function PisonLearningPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-green-50/30 to-yellow-50/20 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-green-100 dark:from-yellow-950/30 dark:to-green-950/30 mb-6"
              >
                <GraduationCap className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                  Training & Global Education
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Pison Learning
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We train on high-demand skills and lifelong learning. We are
                also consultants to global institutions, connecting learners
                with opportunities worldwide.
              </motion.p>

              <motion.a
                href="https://knowledgebase.pisonets.com/pison-learning-request/"
                className="mt-4 lg:mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainingFeatures.map((feature, i) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-yellow-100 to-green-100 dark:from-yellow-950/30 dark:to-green-950/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50/50 to-green-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-950/30 dark:to-yellow-900/30">
                  <BookOpen className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                    Training Services
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Training
                </h2>
                <p className="text-2xl font-semibold text-yellow-600">
                  We simplified learning and transfer skills.
                </p>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Pison Learning is an open source platform that connects
                    learners with practice and research professors. We provide
                    learners with the platforms to learn, unlearn and relearn.
                  </p>

                  <p>
                    Our curriculums are friendly and offer learners with
                    market-ready skills. The learning process is simplified
                    through recorded videos and audios, handouts, live classes
                    for self-paced learning to take place.
                  </p>

                  <p>
                    We adopt a simplified assessment process to achieve skills
                    transfer through{" "}
                    <span className="text-foreground font-semibold">
                      module objectives, hands-on projects and group work.
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
                      <Video className="w-8 h-8 text-white" />
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
                      <BookOpen className="w-8 h-8 text-white" />
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
                      <Users className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-green-600 flex items-center justify-center shadow-xl">
                        <span className="text-2xl font-bold text-white">L</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Education Section */}
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
                      <Globe className="w-8 h-8 text-white" />
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
                      <GraduationCap className="w-8 h-8 text-white" />
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
                      <Plane className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-yellow-600 flex items-center justify-center shadow-xl">
                        <span className="text-2xl font-bold text-white">G</span>
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 dark:from-green-950/30 dark:to-green-900/30">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    Global Education
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Global Education
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We facilitate global education through overseas partnerships
                    with top colleges and universities globally. Our
                    comprehensive services ensure a smooth transition to
                    international education.
                  </p>

                  <p>
                    Our services include{" "}
                    <span className="text-foreground font-semibold">
                      processing of admission, visa/passport support, securing
                      study loans, and relocation & arrival support
                    </span>{" "}
                    to make your international education journey seamless.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Services Grid */}
        <section className="py-20 bg-gradient-to-br from-green-50/50 to-yellow-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Complete Global Education Support
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                From application to arrival, we provide comprehensive support
                for your international education journey.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalServices.map((service, i) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="group p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 text-center"
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-green-100 dark:from-yellow-950/30 dark:to-green-950/30 mb-4"
              >
                <Sparkles className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                  Why Choose Pison Learning
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Empowering Lifelong Learning
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of learners who have transformed their careers
                through our comprehensive training and global education
                programs.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-3 p-6 rounded-xl bg-gradient-to-br from-yellow-50/50 to-green-50/30 border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-500 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Start Your Learning Journey?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Whether you&apos;re looking to develop new skills or pursue global
              education opportunities, we&apos;re here to support your success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://knowledgebase.pisonets.com/pison-learning-request/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-yellow-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#contact"
                className="hidden items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-yellow-700 transition-all duration-300"
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
