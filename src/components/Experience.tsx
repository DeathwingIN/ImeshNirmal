"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

// Placeholder data since we couldn't access the old portfolio
const experiences = [
    {
        id: 1,
        role: "Senior Technical Consultant",
        company: "Business Central Partner",
        date: "2023 - Present",
        description: "Leading AL development and Azure integrations for enterprise clients.",
    },
    {
        id: 2,
        role: "BC Developer",
        company: "Tech Solutions Inc",
        date: "2021 - 2023",
        description: "Implemented custom modules and Power Automate workflows.",
    },
    {
        id: 3,
        role: "Junior Developer",
        company: "StartUp Co",
        date: "2019 - 2021",
        description: "Full stack development with a focus on Microsoft technologies.",
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
                <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">
                    {experience.role}
                </h3>
                <h4 className="mb-3 font-bold text-gray-600 dark:text-gray-300 text-md">
                    {experience.company}
                </h4>
                <p className="text-sm leading-snug tracking-wide text-gray-900 dark:text-gray-400 text-opacity-100">
                    {experience.description}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-500 mt-2 block">
                    {experience.date}
                </span>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-black relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Experience
                </motion.h2>

                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                        className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                        style={{ left: "50%" }}
                    ></div>

                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>

                {/* 3D Decorative Element */}
                <div className="h-64 w-full mt-10">
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
