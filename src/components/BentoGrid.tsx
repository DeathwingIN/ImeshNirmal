"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Layout, Server, Terminal, GitBranch, Settings, Cpu, Globe, Zap, Layers } from "lucide-react";

const skills = [
    {
        category: "Core Development",
        icon: <Cpu className="w-6 h-6 text-blue-400" />,
        items: [
            { name: "AL Programming", icon: <Code className="w-4 h-4" /> },
            { name: "Business Central", icon: <Layout className="w-4 h-4" /> },
            { name: "C/AL", icon: <Terminal className="w-4 h-4" /> },
        ],
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#0f172a] to-[#1e293b]",
    },
    {
        category: "Cloud & DevOps",
        icon: <Cloud className="w-6 h-6 text-sky-400" />,
        items: [
            { name: "Azure DevOps", icon: <Cloud className="w-4 h-4" /> },
            { name: "CI/CD Pipelines", icon: <Settings className="w-4 h-4" /> },
            { name: "Git Version Control", icon: <GitBranch className="w-4 h-4" /> },
        ],
        className: "md:col-span-1 md:row-span-2 bg-gradient-to-br from-[#0f172a] to-[#1e293b]",
    },
    {
        category: "Power Platform",
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        items: [
            { name: "Power Automate", icon: <Server className="w-4 h-4" /> },
            { name: "Power Apps", icon: <Layout className="w-4 h-4" /> },
        ],
        className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-[#0f172a] to-[#1e293b]",
    },
    {
        category: "Integration & Data",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        items: [
            { name: "REST APIs", icon: <Database className="w-4 h-4" /> },
            { name: "SQL Server", icon: <Database className="w-4 h-4" /> },
            { name: "Data Migration", icon: <Layers className="w-4 h-4" /> },
        ],
        className: "md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#0f172a] to-[#1e293b]",
    },
];

export default function BentoGrid() {
    return (
        <section className="py-24 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white tracking-tight"
                >
                    Skills & Expertise
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {skills.map((skillGroup, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative p-8 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group hover:shadow-blue-500/10 transition-all duration-500 ${skillGroup.className}`}
                        >
                            {/* Background Glow Effect */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500 pointer-events-none" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        {skillGroup.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-wide">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {skillGroup.items.map((item, j) => (
                                        <motion.div
                                            key={j}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 cursor-default"
                                        >
                                            <span className="text-blue-300">{item.icon}</span>
                                            <span className="text-sm font-medium text-gray-200 tracking-wide">
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
