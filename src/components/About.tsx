"use client";

import { motion } from "framer-motion";
import { Building2, Users, BookOpen, GraduationCap } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Building2 className="h-8 w-8 text-primary" />, value: "17+", label: "Colleges" },
    { icon: <BookOpen className="h-8 w-8 text-secondary" />, value: "3", label: "Schools" },
    { icon: <Users className="h-8 w-8 text-primary" />, value: "50+", label: "Expert Faculty" },
    { icon: <GraduationCap className="h-8 w-8 text-secondary" />, value: "1965", label: "Legacy Since" },
  ];

  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground leading-tight">
              Excellence is a <span className="text-primary">Matter of Choice</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-sans">
              JG University aims to bring excellence in everything that it does, be it for students, faculty, staff, parents or any of its stakeholders. We stand by the idea of knowledge beyond books and provide students a real-life experience with an industry-relevant curriculum.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-sans">
              Sponsored by the ASIA Charitable Trust, which has been in the field of education since 1965. We are a New Age Tech-Driven University offering programmes that evolve as per future industry demand.
            </p>
            
            <button className="text-secondary font-medium flex items-center hover:text-secondary/80 transition-colors">
              Read more about our legacy
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-lg flex flex-col items-center text-center space-y-4 hover:cyber-glow transition-all"
              >
                {stat.icon}
                <div>
                  <div className="text-3xl font-serif font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground/80 font-mono uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
