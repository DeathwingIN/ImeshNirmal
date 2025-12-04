"use client";

import { useRef } from "react";
import { experiences } from "@/components/Experience";
import { projects } from "@/components/Projects";
import { certifications } from "@/components/Certifications";
import { skills } from "@/components/BentoGrid";
import { Mail, Phone, MapPin, Linkedin, Globe, Download, Printer } from "lucide-react";

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 print:bg-white print:p-0">
            {/* Print Controls */}
            <div className="max-w-[210mm] mx-auto mb-6 flex justify-end gap-4 print:hidden px-4">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                    <Printer className="w-4 h-4" />
                    Print / Save as PDF
                </button>
            </div>

            {/* A4 Resume Container */}
            <div className="max-w-[210mm] mx-auto bg-white text-black shadow-2xl print:shadow-none print:w-full print:max-w-none min-h-[297mm] p-[15mm] md:p-[20mm]">

                {/* Header */}
                <header className="border-b-2 border-gray-800 pb-6 mb-6 flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900">Imesh Nirmal</h1>
                        <h2 className="text-xl font-medium text-blue-700 mt-1">Business Central Technical Consultant</h2>
                        <p className="text-sm text-gray-600 mt-2 max-w-lg">
                            Motivated Technical Consultant specializing in Microsoft Dynamics 365 Business Central, AL development, and Power Platform solutions. Experienced in cloud-based automation, DevOps, and modern software engineering practices.
                        </p>
                    </div>
                    <div className="text-right text-sm space-y-1.5">
                        <div className="flex items-center justify-end gap-2">
                            <a href="mailto:imeshnirmal1u@gmail.com" className="hover:text-blue-600">imeshnirmal1u@gmail.com</a>
                            <Mail className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <a href="tel:+94779096293" className="hover:text-blue-600">+94 77 909 6293</a>
                            <Phone className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <span>Colombo, Sri Lanka</span>
                            <MapPin className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <a href="https://www.linkedin.com/in/imesh-nirmal/" target="_blank" className="hover:text-blue-600">linkedin.com/in/imesh-nirmal</a>
                            <Linkedin className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <a href="https://imeshnirmal.me" target="_blank" className="hover:text-blue-600">imeshnirmal.me</a>
                            <Globe className="w-4 h-4 text-gray-600" />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-8">
                    {/* Left Column (Main Content) */}
                    <div className="col-span-8 space-y-8">

                        {/* Experience */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-700 rounded-full"></span> Experience
                            </h3>
                            <div className="space-y-5">
                                {experiences.map((exp) => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="font-bold text-gray-900">{exp.role}</h4>
                                            <span className="text-sm font-medium text-gray-500">{exp.date}</span>
                                        </div>
                                        <div className="text-blue-700 font-medium text-sm mb-1">{exp.company}</div>
                                        <p className="text-sm text-gray-700 leading-relaxed text-justify">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-700 rounded-full"></span> Key Projects
                            </h3>
                            <div className="space-y-4">
                                {projects.map((project, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="font-bold text-gray-900">{project.title}</h4>
                                            <span className="text-xs font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-600">{project.category}</span>
                                        </div>
                                        <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                                        <div className="flex gap-2 mt-1">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs text-blue-600 font-medium">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="col-span-4 space-y-8">

                        {/* Skills */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Technical Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded border border-gray-200">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Education</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-sm">BSc. (Hons) Computing & IS</h4>
                                    <div className="text-xs text-gray-600">Sabaragamuwa University of Sri Lanka</div>
                                    <div className="text-xs text-gray-500 italic">Reading - 2025 (GPA 3.16)</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Diploma in Software Engineering</h4>
                                    <div className="text-xs text-gray-600">Esoft Metro Campus</div>
                                    <div className="text-xs text-gray-500 italic">2021 - 2022</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">GCE Advanced Level</h4>
                                    <div className="text-xs text-gray-600">Royal College Wayamba</div>
                                    <div className="text-xs text-gray-500 italic">2019</div>
                                </div>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Certifications</h3>
                            <div className="space-y-3">
                                {certifications.map((cert, i) => (
                                    <div key={i}>
                                        <h4 className="font-bold text-xs leading-tight">{cert.title}</h4>
                                        <div className="text-xs text-gray-600">{cert.issuer}</div>
                                        <div className="text-[10px] text-gray-500">{cert.date}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Languages (Optional/Inferred) */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Languages</h3>
                            <div className="text-sm space-y-1">
                                <div className="flex justify-between"><span>English</span> <span className="text-gray-500">Professional</span></div>
                                <div className="flex justify-between"><span>Sinhala</span> <span className="text-gray-500">Native</span></div>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Footer for Print */}
                <div className="mt-12 pt-4 border-t border-gray-200 text-center text-xs text-gray-400 hidden print:block">
                    Resume generated from imeshnirmal.me
                </div>
            </div>
        </div>
    );
}
