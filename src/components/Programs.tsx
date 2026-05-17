"use client";

import { motion } from "framer-motion";
import { Code, Briefcase, Calculator, Microscope, Shield, BrainCircuit } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "B.Tech Computer Science",
      description: "Specializations in AI, ML, Data Science & Big Data Analytics.",
      icon: <Code className="h-6 w-6 text-primary" />,
      tag: "Engineering"
    },
    {
      title: "Master of Business Administration",
      description: "iMBA and MBA in Aviation, Hospitality, and International Trade.",
      icon: <Briefcase className="h-6 w-6 text-secondary" />,
      tag: "Management"
    },
    {
      title: "B.Com / B.Com (Hons)",
      description: "Integrated with ACCA for global finance careers.",
      icon: <Calculator className="h-6 w-6 text-primary" />,
      tag: "Commerce"
    },
    {
      title: "M.Sc. Cyber Security",
      description: "Digital Forensics and Cyber Security advanced programs.",
      icon: <Shield className="h-6 w-6 text-secondary" />,
      tag: "Tech"
    },
    {
      title: "B.Sc. Forensic Science",
      description: "Hands-on learning in Clinical Embryology & Forensic Tech.",
      icon: <Microscope className="h-6 w-6 text-primary" />,
      tag: "Science"
    },
    {
      title: "BCA / iMCA",
      description: "Full Stack Development and IT specializations.",
      icon: <BrainCircuit className="h-6 w-6 text-secondary" />,
      tag: "Computing"
    }
  ];

  return (
    <section id="programs" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground"
          >
            Future-Ready <span className="text-gradient">Programmes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto font-sans"
          >
            New Age Tech-Driven degrees that evolve as per future industry demand, enabling seamless employment or self-employment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-lg group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500">
                {program.icon}
              </div>
              
              <div className="mb-6 inline-block p-3 rounded-lg bg-white/5 border border-white/10 cyber-glow transition-shadow">
                {program.icon}
              </div>
              
              <div className="mb-2">
                <span className="text-xs font-semibold font-mono uppercase tracking-widest text-secondary">
                  {program.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 font-sans">
                {program.description}
              </p>
              
              <button className="text-sm font-medium flex items-center text-primary group-hover:text-secondary transition-colors">
                View Details
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
