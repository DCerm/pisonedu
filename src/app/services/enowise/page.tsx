"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  FileText,
  Users,
  Globe,
  Upload,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Lightbulb,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Calendar,
  Archive,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// const publishingServices = [
//   {
//     title: "Journals",
//     description: "Peer-reviewed academic journals across multiple disciplines",
//     icon: BookOpen,
//   },
//   {
//     title: "Books & Book Series",
//     description: "Comprehensive publishing for academic and professional books",
//     icon: FileText,
//   },
//   {
//     title: "Conference Proceedings",
//     description: "Publication of conference papers and research presentations",
//     icon: Users,
//   },
//   {
//     title: "Practice Notes",
//     description: "Practical insights and real-world applications of research",
//     icon: Lightbulb,
//   },
// ];

const journals = [
  "Engineering, Construction and Architectural Innovations",
  "Cities and Urbanisation",
  "Global Trades and Sustainability",
  "Housing and Real Estate Review",
  "Emerging Fields",
  "Innovation in Education",
  "Interdisciplinary Research",
  "Critical Issues in Higher Education",
  "Business, Technology, Innovation and Sustainability Review",
];

const initiatives = [
  {
    name: "Retrics",
    description: "Advanced Metrics",
    details:
      "Practice notes/information, Potential policies, Research communication, Interdisciplinary coverage, Sustainability innovation (notes)",
    icon: TrendingUp,
  },
  {
    name: "Cobern",
    description: "Indexing Authority",
    details:
      "An indexing authority or repository for construction, engineering and built environment publications - journals, books, book series and proceedings.",
    icon: Archive,
  },
  {
    name: "Enolyst",
    description: "Virtual Assistant",
    details:
      "A virtual assistant for authors and researchers on preparation, editing and formatting of manuscripts prior to submission to publication outlets.",
    icon: Users,
  },
];

const topSectionItems = [
  {
    href: "https://knowledgebase.pisonets.com/blog/",
    title: "Breaking News",
    icon: Calendar,
    description: "Latest updates and announcements",
  },
  {
    href: "https://knowledgebase.pisonets.com/articles/",
    title: "Archives",
    icon: Archive,
    description: "Historical publications and records",
  },
];

const middleSectionItems = [
  
  {
    href: "https://knowledgebase.pisonets.com/submit-manuscript/",
    title: "Submit Manuscript",
    icon: Upload,
    description: "Submit your research for publication",
  },
  {
    href: "https://knowledgebase.pisonets.com/transfer-journal/",
    title: "Transfer Journal",
    icon: ArrowRight,
    description: "Transfer your journal to Enowise",
  },
  {
    href: "https://knowledgebase.pisonets.com/propose-journal/",
    title: "Propose a Journal",
    icon: Lightbulb,
    description: "Propose a new journal for consideration",
  },
  {
    href: "https://knowledgebase.pisonets.com/articles/",
    title: "Recent Articles",
    icon: FileText,
    description: "Latest published research articles",
  },
];

const bottomSectionItems = [
  {
    title: "Guidelines",
    icon: CheckCircle,
    description:
      "For authors, editors, reviewers, journal hosts, institutions, libraries",
    items: [
      "Authors",
      "Editors",
      "Reviewers",
      "Journal Hosts",
      "Institutions",
      "Libraries",
    ],
  },
  {
    title: "Enowise Initiatives",
    icon: Sparkles,
    description: "Retrics, Cobern, Enolyst",
    items: ["Retrics", "Cobern", "Enolyst"],
  },
  {
    title: "Further Information",
    icon: Globe,
    description: "Open access policies, articles processing charges",
    items: ["Open Access Policies", "Article Processing Charges"],
  },
];

export default function EnowisePage() {
  // const [activeTab, setActiveTab] = useState("overview");
  const [journalToggle, setJournalToggle ] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
                <BookOpen className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  Academic Publishing
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Enowise
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A Voice of Knowledge, Innovation and Change
              </motion.p>

              <motion.div
                className="space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p>
                  Enowise Publishing (EP) is a home where research makes a
                  difference and counts.
                </p>
                <p>
                  Our mission and purpose is to nurture ideas and turn them into
                  knowledge that will bring real impacts that the world desires.
                </p>
              </motion.div>

              <motion.a
                href="https://knowledgebase.pisonets.com/submit-manuscript/"
                className="mt-4 lg:mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Manuscript
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* TOP Section - Breaking News & Archives */}
        <section className="py-12 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topSectionItems.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    href={item.href}
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-white/80">{item.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* MIDDLE Section - Journal Services */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Journal Services
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Comprehensive journal management and publishing services for
                researchers and institutions.
              </motion.p>
            </div>

            <div className={`p-4 lg:p-6 bg-gradient-to-r from-green-100 to-yellow-50 right-2.5 lg:left-40 rounded-xl max-w-4xl absolute mt-40 ${journalToggle ? "" : "hidden"}`}>
                <div className="flex justify-end" onClick={() => setJournalToggle(false)}>
                    <button className="border border-gray py-1 px-2 mb-2 lg:mb-6 cursor-pointer">Close</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {journals.map((journal, i) => (
                    <motion.a
                    href={"https://knowledgebase.pisonets.com/submit-manuscript/"}
                    key={journal}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="group p-4 rounded-xl bg-gradient-to-br from-green-50/50 to-yellow-50/30 border border-border/50 hover:shadow-lg transition-all duration-300"
                    >
                    <div className="flex items-start gap-1">
                        <div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-green-600 transition-colors">
                            {journal}
                        </h3>
                        </div>
                    </div>
                    </motion.a>
                ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                onClick={() => setJournalToggle(!journalToggle)}
            >
                <div className="group bg-gradient-to-br from-yellow-50/50 to-green-50/30 rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-green-600 transition-colors">
                        All Journals
                      </h3>
                    </div>
                    <p className="text-muted-foreground">Browse our complete journal collection</p>
                </div>

              {middleSectionItems.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    href={item.href}
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="group bg-gradient-to-br from-yellow-50/50 to-green-50/30 rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* BOTTOM Section - Guidelines, Initiatives & Information */}
        <section className="py-20 bg-gradient-to-br from-green-50/50 to-yellow-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Guidelines & Resources
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Comprehensive resources, guidelines, and innovative initiatives
                to support the academic community.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bottomSectionItems.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-white rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {item.description}
                    </p>
                    <div className="space-y-3">
                      {item.items.map((subItem, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-sm text-muted-foreground">
                            {subItem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Journals Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Enowise Journal Outlets
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our diverse portfolio of academic journals covers cutting-edge
                research across multiple disciplines.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {journals.map((journal, i) => (
                <motion.div
                  key={journal}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-green-50/50 to-yellow-50/30 border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-green-600 transition-colors">
                        {journal}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="w-4 h-4" />
                        <span>Open Access</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50/50 to-green-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Enowise Initiatives
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Innovative platforms and tools designed to enhance the research
                and publishing experience.
              </motion.p>
            </div>

            <div className="space-y-6">
              {initiatives.map((initiative, i) => {
                const IconComponent = initiative.icon;
                const isExpanded = expandedSection === initiative.name;

                return (
                  <motion.div
                    key={initiative.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-white rounded-xl shadow-lg border border-border/50 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedSection(isExpanded ? null : initiative.name)
                      }
                      className="w-full p-6 text-left hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-100 to-yellow-100 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {initiative.name}
                            </h3>
                            <p className="text-muted-foreground">
                              {initiative.description}
                            </p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="pl-16">
                          <p className="text-muted-foreground leading-relaxed">
                            {initiative.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Publishing Guidelines
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Comprehensive guidelines for authors, reviewers, and all
                stakeholders in the publishing process.
              </motion.p>
            </div>

            <div className="space-y-12">
              {/* Author Guidelines */}
              <div className="bg-gradient-to-br from-green-50/50 to-yellow-50/30 rounded-xl shadow-lg border border-border/50 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-100 to-yellow-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Author Guidelines
                  </h3>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg font-medium text-foreground">
                    Welcome to Enowise!!!! We are glad you are considering us
                    for the dissemination of your research outputs and
                    discoveries.
                  </p>

                  <p>
                    We are here to partner with you on a journey for a quality,
                    timely and sustainable publishing experience. We believe
                    that knowledge should be open for the benefit of the
                    Society, so we support the campaign for open access
                    publishing.
                  </p>

                  <p>
                    We don&apos;t charge fees for publication but we charge a
                    moderate and affordable article processing fee (APC), which
                    doesn&apos;t affect the quality of our review process. With
                    your cooperation, we aspire to complete the process of
                    disseminating your output in a{" "}
                    <span className="font-semibold text-foreground">
                      maximum of 8 weeks from submission to acceptance.
                    </span>
                  </p>

                  <div className="bg-white rounded-lg p-6 mt-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Manuscript Preparation Guidelines:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Prepare manuscript in Word document using Times New
                          Roman, single spacing, font size 12
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Maximum 7500 words including main texts, tables,
                          figures, graphs, equations or videos
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Font sizes: 14 for title, 12 for author names, 10 for
                          institutions (italicized)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Structure: Abstract, Keywords, Background,
                          Methodology, Results & Discussion, Conclusion,
                          References
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Include advanced metrics section: practice notes,
                          potential policies, interdisciplinary coverage,
                          sustainable innovation
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reviewer Guidelines */}
              <div className="bg-gradient-to-br from-yellow-50/50 to-green-50/30 rounded-xl shadow-lg border border-border/50 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-100 to-green-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Reviewer Guidelines
                  </h3>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg font-medium text-foreground">
                    We welcome you to this page. It provides you with the
                    information that you need to know and provide about the
                    service you are about to provide.
                  </p>

                  <p>
                    We encourage open knowledge so we charge Article Processing
                    Fee (APC). So your service will be remunerated. We believe
                    in the recency of knowledge, so our decision on manuscript
                    ranges to a{" "}
                    <span className="font-semibold text-foreground">
                      maximum six weeks.
                    </span>{" "}
                    We hope you agree with us on what we represent.
                  </p>

                  <div className="bg-white rounded-lg p-6 mt-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Required Information:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>First, middle and surname</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>5 keywords about your specialization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>A good photograph</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Employer name and institutional email</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Office address</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Publish with Enowise?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join our community of researchers and contribute to knowledge that
              makes a real difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://knowledgebase.pisonets.com/submit-manuscript/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Manuscript
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
