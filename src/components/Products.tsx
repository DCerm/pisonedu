"use client";

import React from "react";
import { motion } from "motion/react";
import { Share2, Rocket, ArrowRight } from "lucide-react";

const products = [
  {
    title: "ShareMe",
    subtitle: "Knowledge Sharing Platform",
    description:
      "An innovative platform designed to facilitate seamless knowledge sharing and collaboration among researchers, educators, and learners worldwide.",
    status: "In Development",
    href: "/products/shareme",
    icon: Share2,
    color: "text-green-600",
    bgColor: "bg-green-50",
    darkBgColor: "dark:bg-green-950/30",
    gradient: "from-green-500/10 to-yellow-500/10",
    statusColor:
      "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative max-w-6xl mx-auto px-6 py-20">
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
            <Rocket className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Innovation
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Products
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Innovative solutions and platforms that transform how knowledge is
            shared, accessed, and applied in educational and research
            environments.
          </motion.p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((product, i) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.title}
                className="group relative rounded-2xl p-8 bg-card border border-border/50 hover:border-border hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <IconComponent className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`inline-flex w-16 h-16 rounded-xl ${product.bgColor} ${product.darkBgColor} items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-8 h-8 ${product.color}`} />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${product.statusColor}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground/80 uppercase tracking-wide">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Call to action */}
                  <div className="flex items-center justify-between mt-8">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Coming Soon
                    </span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 text-white group-hover:from-green-400 group-hover:to-yellow-400 transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
