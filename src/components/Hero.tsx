"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 2]} />
                    <Sphere visible args={[1, 100, 200]} scale={2.5}>
                        <MeshDistortMaterial
                            color="#4F46E5"
                            attach="material"
                            distort={0.5}
                            speed={2}
                            roughness={0}
                        />
                    </Sphere>
                    <OrbitControls enableZoom={false} autoRotate />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="z-10 text-center px-4 glass dark:glass-dark p-8 rounded-2xl max-w-2xl mx-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
                >
                    Business Central Technical Consultant
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
                >
                    Crafting modern solutions for complex business problems.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4 justify-center"
                >
                    <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform">
                        View Projects
                    </button>
                    <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                        Contact Me
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
