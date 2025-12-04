import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imesh Nirmal | Business Central Technical Consultant",
  description: "Portfolio of Imesh Nirmal, a Business Central Technical Consultant specializing in AL development, Azure integrations, and Power Platform solutions.",
  keywords: ["Business Central", "AL Development", "Technical Consultant", "Azure", "Power Platform", "Imesh Nirmal"],
  openGraph: {
    title: "Imesh Nirmal | Business Central Technical Consultant",
    description: "Transforming business processes with modern AL development and Azure integrations.",
    url: "https://www.linkedin.com/in/imesh-nirmal/",
    siteName: "Imesh Nirmal Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
