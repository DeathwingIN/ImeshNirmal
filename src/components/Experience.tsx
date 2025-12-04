"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

const experiences = [
    {
        id: 1,
        role: "Associate Microsoft Dynamics BC Technical Consultant",
        company: "MicroCloud 360",
        date: "Jan 2025 - Present",
        description: "Full-time remote role focusing on DevOps, Enterprise Resource Planning (ERP), and AL development.",
    },
    {
        id: 2,
        role: "Trainee Microsoft Dynamics BC Consultant",
        company: "MicroCloud 360",
        date: "Oct 2024 - Jan 2025",
        description: "Internship program learning the fundamentals of Business Central and technical consulting.",
    },
    {
        id: 3,
        role: "Software Engineer Intern",
        company: "TX Solutions",
        date: "Sep 2024 - Mar 2025",
        description: "Remote internship working with Python, Large Language Models (LLM), and software engineering best practices.",
    },
    {
        id: 4,
        role: "Freelance Video Editor",
        company: "Fiverr",
        date: "Jul 2022 - Sep 2024",
        description: "Part-time freelance work delivering motion graphics and video editing services while managing client relations.",
    },
    {
        id: 5,
        role: "Wordpress Developer",
        company: "Self-employed",
        date: "Aug 2021 - Apr 2022",
        description: "Built and hosted websites using WordPress, HTML, and web hosting technologies.",
    },
    {
        id: 6,
        role: "Quality Assurance Technician",
        company: "Global System Solutions, Inc (GSS)",
        date: "Aug 2019 - Jul 2020",
        description: "Ensured product accuracy and quality inspection standards were met.",
    },
];

function TimelineItem({ experience, index }: { experience: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center justify-between w-full mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
        >
            <div className="w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
            </div>
            <div className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl glass dark:glass-dark">
                <h3 className="mb-1 font-bold text-gray-800 dark:text-white text-lg md:text-xl">
                    {experience.role}
                </h3>
                <h4 className="mb-2 font-bold text-blue-600 dark:text-blue-400 text-sm md:text-md">
                    {experience.company}
                </h4>
                <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-300 text-opacity-100 mb-2">
                    {experience.description}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-500 block font-mono">
                    {experience.date}
                </span>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Experience
                </motion.h2>

                <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
                    <div
                        className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                        style={{ left: "50%" }}
                    ></div>

                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>

                {/* 3D Decorative Element */}
                <div className="h-64 w-full mt-10 hidden md:block">
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} />
                        <Box args={[2, 2, 2]} rotation={[0.5, 0.5, 0]}>
                            <meshStandardMaterial color="#6366f1" wireframe />
                        </Box>
                        <OrbitControls enableZoom={false} autoRotate />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
