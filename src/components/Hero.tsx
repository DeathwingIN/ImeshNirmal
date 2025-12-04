"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.8}>
                <MeshDistortMaterial
                    color="#4F46E5"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-black pt-20">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-50 dark:opacity-80">
                <Canvas>
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} />
                    <pointLight position={[-5, -5, -5]} color="#6366f1" intensity={1} />
                    <AnimatedSphere />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm md:text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-4">
                            Hello, I'm Imesh Nirmal
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-600 dark:from-white dark:via-blue-200 dark:to-gray-400 leading-tight">
                            Business Central <br /> Technical Consultant
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Transforming business processes with modern AL development, Azure integrations, and Power Platform solutions.
                        </p>

                        <div className="flex gap-4 justify-center md:justify-start">
                            <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
                                View Projects
                            </button>
                            <button className="px-8 py-4 border border-gray-200 dark:border-gray-800 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors backdrop-blur-sm">
                                Read Blog
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto">
                        {/* Abstract blobs behind image */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                        {/* Image Container with Glassmorphism */}
                        <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                            <img
                                src="/profile.png"
                                alt="Imesh Nirmal"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-8 right-8 glass dark:glass-dark px-6 py-3 rounded-2xl shadow-xl border border-white/30"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="font-semibold text-sm text-gray-800 dark:text-white">Open to Work</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
