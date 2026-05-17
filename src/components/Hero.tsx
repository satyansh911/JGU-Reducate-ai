"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import BackgroundCarousel from "./BackgroundCarousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Carousel & Gradients */}
      <div className="absolute inset-0 z-0">
        <BackgroundCarousel />
        {/* Gradients overlaying the carousel to maintain the cyber aesthetic */}
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
          <span className="font-medium text-foreground/80 font-mono tracking-widest uppercase text-xs">
            Admissions Open for 2026-27
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
        >
          <span className="block text-foreground">Knowledge Beyond</span>
          <span className="block text-gradient pb-2 font-bold">
            The Pages of Books
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-foreground/80 mb-10 font-sans"
        >
          Experience an education system upgraded to impart cognitive and experiential knowledge. Match future employment requirements with our industry-relevant curriculum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="#programs" className="w-full sm:w-auto">
            <button className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 cyber-glow">
              <span>Explore Programs</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="#about" className="w-full sm:w-auto">
            <button className="w-full group glass hover:bg-white/5 text-foreground px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-2">
              <GraduationCap className="h-5 w-5 mr-2 text-secondary" />
              <span>Discover JG Uni</span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
