"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Layout, Server, Terminal } from "lucide-react";

const items = [
    {
        title: "AL Programming",
        description: "Expert in AL language for Business Central customization.",
        icon: <Code className="w-6 h-6" />,
        className: "md:col-span-2",
    },
    {
        title: "Power Automate",
        description: "Automating workflows and business processes.",
        icon: <Server className="w-6 h-6" />,
        className: "md:col-span-1",
    },
    {
        title: "Azure Integration",
        description: "Connecting BC with Azure Functions and Logic Apps.",
        icon: <Cloud className="w-6 h-6" />,
        className: "md:col-span-1",
    },
    {
        title: "API Development",
        description: "Building robust REST APIs for external integrations.",
        icon: <Database className="w-6 h-6" />,
        className: "md:col-span-2",
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive user interfaces for BC add-ons.",
        icon: <Layout className="w-6 h-6" />,
        className: "md:col-span-1",
    },
    {
        title: "DevOps",
        description: "CI/CD pipelines for automated testing and deployment.",
        icon: <Terminal className="w-6 h-6" />,
        className: "md:col-span-2",
    },
];

export default function BentoGrid() {
    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Skills & Expertise
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className={`glass dark:glass-dark p-6 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ${item.className}`}
                        >
                            <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center text-gray-900 dark:text-white mb-4">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
