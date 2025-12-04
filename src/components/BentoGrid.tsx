"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Layout, Server, Terminal, GitBranch, Settings, Zap, Layers, FileJson, Workflow } from "lucide-react";

export const skills = [
    { name: "Business Central", icon: <Layout className="w-8 h-8 text-[#00bcf2]" /> },
    { name: "AL Programming", icon: <Code className="w-8 h-8 text-blue-400" /> },
    { name: "C/AL", icon: <Terminal className="w-8 h-8 text-gray-400" /> },
    { name: "Azure DevOps", icon: <Cloud className="w-8 h-8 text-[#0078d7]" /> },
    { name: "Power Automate", icon: <Workflow className="w-8 h-8 text-[#36a9e1]" /> },
    { name: "SQL Server", icon: <Database className="w-8 h-8 text-[#cc2927]" /> },
    { name: "REST APIs", icon: <GlobeIcon className="w-8 h-8 text-green-400" /> },
    { name: "Git Control", icon: <GitBranch className="w-8 h-8 text-[#f05032]" /> },
    { name: "CI/CD", icon: <Settings className="w-8 h-8 text-gray-300" /> },
    { name: "Power Apps", icon: <Zap className="w-8 h-8 text-purple-500" /> },
    { name: "Data Migration", icon: <Layers className="w-8 h-8 text-orange-400" /> },
    { name: "JSON / XML", icon: <FileJson className="w-8 h-8 text-yellow-400" /> },
];

function GlobeIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

export default function BentoGrid() {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center mb-20 text-white tracking-tight"
                >
                    My Tech Stack
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer group hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                        >
                            <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-200 text-center group-hover:text-white transition-colors">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
