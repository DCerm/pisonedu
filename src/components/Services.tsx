"use client";

import React from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Datera",
    subtitle: "Data & research services",
    description:
      "Advanced analytics, research methodologies, and data-driven insights to support evidence-based decision making.",
    href: "/services/datera",
    icon: BarChart3,
    color: "text-green-600",
    bgColor: "bg-green-50",
    darkBgColor: "dark:bg-green-950/30",
    gradient: "from-green-500/10 to-green-600/10",
  },
  {
    title: "Pison Learning",
    subtitle: "Training and global education",
    description:
      "Comprehensive educational programs, professional development, and capacity building for individuals and organizations.",
    href: "/services/pison-learning",
    icon: GraduationCap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    darkBgColor: "dark:bg-yellow-950/30",
    gradient: "from-yellow-500/10 to-yellow-600/10",
  },
  {
    title: "Enowise Publishing",
    subtitle: "Academic & professional publishing",
    description:
      "High-quality publishing of journals, books, conference proceedings, and research outputs for global academic communities.",
    href: "/services/enowise-publishing",
    icon: BookOpen,
    color: "text-green-700",
    bgColor: "bg-green-100",
    darkBgColor: "dark:bg-green-900/30",
    gradient: "from-green-600/10 to-green-700/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative max-w-6xl mx-auto px-6 py-20">
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
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deliver focused research, training, and publishing services to
            help organizations and learners achieve their goals through
            knowledge and innovation.
          </motion.p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.a
                key={service.title}
                href={service.href}
                className="group relative block rounded-2xl p-8 bg-card border border-border/50 hover:border-border hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`${service.title} — ${service.subtitle}`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <IconComponent className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex w-16 h-16 rounded-xl ${service.bgColor} ${service.darkBgColor} items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground/80 uppercase tracking-wide">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Call to action */}
                  <div className="flex items-center justify-between mt-8">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Learn more
                    </span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black group-hover:from-yellow-300 group-hover:to-orange-300 transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
