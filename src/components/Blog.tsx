"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Parser from "rss-parser";
import { ArrowUpRight, BookOpen } from "lucide-react";

type BlogPost = {
    title: string;
    link: string;
    contentSnippet: string;
    pubDate: string;
    categories: string[];
};

export default function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Note: We use a CORS proxy or API route in production. 
                // For client-side demo, we'll try to fetch directly or use a sample if blocked.
                // In a real Next.js app, you should create an API route (e.g., /api/medium) to fetch this server-side.

                // Simulating fetch for now to avoid CORS issues in this environment without a backend proxy
                // Replace this with actual fetch to your API route
                const samplePosts = [
                    {
                        title: "Getting Started with Business Central AL Development",
                        link: "https://medium.com/@imeshnirmal",
                        contentSnippet: "A comprehensive guide to setting up your environment and writing your first extension...",
                        pubDate: "2023-10-15",
                        categories: ["Business Central", "AL", "Development"],
                    },
                    {
                        title: "Integrating Azure Functions with BC",
                        link: "https://medium.com/@imeshnirmal",
                        contentSnippet: "How to leverage serverless computing to extend Business Central capabilities...",
                        pubDate: "2023-11-02",
                        categories: ["Azure", "Integration"],
                    },
                    {
                        title: "Power Automate Best Practices for BC Consultants",
                        link: "https://medium.com/@imeshnirmal",
                        contentSnippet: "Tips and tricks for building robust workflows that scale...",
                        pubDate: "2023-12-10",
                        categories: ["Power Platform", "Automation"],
                    },
                ];

                setPosts(samplePosts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Medium posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Latest Thoughts
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Sharing my journey and technical insights on Business Central, Azure, and modern development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.a
                            key={i}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group block p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                                {post.contentSnippet}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {post.categories.slice(0, 2).map((cat, j) => (
                                    <span
                                        key={j}
                                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
