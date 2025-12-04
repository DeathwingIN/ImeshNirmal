"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "FinaceReportTest",
        category: "Financial Reporting",
        description: "Custom financial reporting module for Business Central, demonstrating advanced reporting capabilities.",
        tags: ["AL", "Reporting", "Finance"],
        link: "https://github.com/DeathwingIN/FinaceReportTest",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Placeholder finance image
    },
    {
        title: "ProspectApp",
        category: "Sales & CRM",
        description: "A prospect management application for Business Central to streamline sales workflows.",
        tags: ["AL", "CRM", "Sales"],
        link: "https://github.com/DeathwingIN/ProspectApp",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Placeholder sales image
    },
];

export default function Projects() {
    return (
        <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                                    </a>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/DeathwingIN?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform"
                    >
                        <Github className="w-5 h-5" />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
