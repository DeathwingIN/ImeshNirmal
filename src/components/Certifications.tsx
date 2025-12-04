"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ArrowUpRight } from "lucide-react";

export const certifications = [
    {
        title: "Microsoft Certified: Dynamics 365 Business Central Developer Associate",
        issuer: "Microsoft",
        date: "Issued Jun 2025",
        credentialId: "A7C357C1713952AC",
        link: "https://learn.microsoft.com/users/imeshnirmal/credentials/A7C357C1713952AC",
        icon: <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Postman Builder",
        issuer: "Canvas Credentials (Badgr)",
        date: "Issued Jun 2025",
        credentialId: "685ee2af1c45212cc6c5a35c",
        link: "https://badgr.com/public/assertions/685ee2af1c45212cc6c5a35c",
        icon: <Award className="w-6 h-6 text-orange-500" />,
    },
    {
        title: "Begin Programming in Microsoft Dynamics 365 Business Central",
        issuer: "Udemy",
        date: "Issued Mar 2025",
        credentialId: "",
        link: "https://www.udemy.com/certificate/UC-placeholder/",
        icon: <Award className="w-6 h-6 text-purple-500" />,
    },
    {
        title: "Microsoft Power Up Program – Certified Graduate",
        issuer: "Microsoft",
        date: "Issued Mar 2025",
        credentialId: "880379be-ff47-4b94-a960-40e86d68fa5a",
        link: "https://learn.microsoft.com/users/imeshnirmal/credentials/880379be-ff47-4b94-a960-40e86d68fa5a",
        icon: <Award className="w-6 h-6 text-green-500" />,
    },
];

export default function Certifications() {
    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                >
                    <a
                        href="https://www.linkedin.com/in/imesh-nirmal/details/certifications/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                    >
                        Licenses & Certifications
                        <ArrowUpRight className="w-6 h-6 opacity-50" />
                    </a>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.a
                            key={i}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group"
                        >
                            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 flex-shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                                {cert.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <CheckCircle className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                    {cert.issuer}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                                    <span>{cert.date}</span>
                                    {cert.credentialId && (
                                        <>
                                            <span>•</span>
                                            <span className="font-mono">ID: {cert.credentialId.substring(0, 8)}...</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
