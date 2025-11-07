"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, Shield, DollarSign, Target, Users } from "lucide-react";

const values = [
  {
    title: "Professionalism",
    description:
      "We maintain the highest standards in education and research, delivering expert knowledge with precision and reliability.",
    icon: Award,
    color: "text-green-600",
    bgColor: "bg-green-50",
    darkBgColor: "dark:bg-green-950/30",
  },
  {
    title: "Integrity",
    description:
      "Transparency and honesty guide our research methodologies, publications, and educational programs.",
    icon: Shield,
    color: "text-green-700",
    bgColor: "bg-green-100",
    darkBgColor: "dark:bg-green-900/30",
  },
  {
    title: "Value for Money",
    description:
      "We provide cost-effective solutions that maximize learning outcomes and research impact for our clients.",
    icon: DollarSign,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    darkBgColor: "dark:bg-yellow-950/30",
  },
  {
    title: "Quality Service Delivery",
    description:
      "Every training program, research project, and publication meets rigorous quality standards and exceeds expectations.",
    icon: Target,
    color: "text-green-600",
    bgColor: "bg-green-50",
    darkBgColor: "dark:bg-green-950/30",
  },
  {
    title: "Collaboration",
    description:
      "We foster partnerships with institutions, researchers, and learners to create knowledge that benefits everyone.",
    icon: Users,
    color: "text-yellow-700",
    bgColor: "bg-yellow-100",
    darkBgColor: "dark:bg-yellow-900/30",
  },
];

export default function CoreValues() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>
        <motion.p
          className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          These fundamental principles shape how we approach education,
          research, and publishing, ensuring excellence in every interaction and
          outcome.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, i) => {
          const IconComponent = value.icon;
          return (
            <motion.div
              key={value.title}
              className="group relative rounded-xl p-6 bg-card border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <IconComponent className="w-full h-full" />
              </div>

              <div className="relative z-10">
                <div
                  className={`inline-flex w-12 h-12 rounded-lg ${value.bgColor} ${value.darkBgColor} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`w-6 h-6 ${value.color}`} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
