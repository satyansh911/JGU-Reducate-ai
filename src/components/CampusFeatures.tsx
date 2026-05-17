"use client";

import { motion } from "framer-motion";
import { Wifi, Cpu, FlaskConical, Library } from "lucide-react";

export default function CampusFeatures() {
  const features = [
    {
      title: "IIoT Lab",
      description: "State-of-the-art Industrial Internet of Things laboratory for hands-on learning.",
      icon: <Cpu className="h-10 w-10 text-primary" />
    },
    {
      title: "R&D + Incubation",
      description: "Dedicated spaces for research, development, and startup incubation.",
      icon: <FlaskConical className="h-10 w-10 text-secondary" />
    },
    {
      title: "Tech-enabled Library",
      description: "Extensive digital and physical resources with 24/7 accessibility.",
      icon: <Library className="h-10 w-10 text-primary" />
    },
    {
      title: "Wi-Fi Enabled Campus",
      description: "High-speed internet connectivity across the entire campus.",
      icon: <Wifi className="h-10 w-10 text-secondary" />
    }
  ];

  return (
    <section id="campus" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground leading-tight">
              Modern Campus <br />
              <span className="text-gradient">World-Class Facilities</span>
            </h2>
            <p className="text-foreground/80 mb-8 font-sans text-lg">
              Our campus is designed to foster innovation, collaboration, and comprehensive development. 
              We provide 24x7 accessibility to facilities for students and faculty members.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-colors border border-white/10 cyber-glow">
              Take a Virtual Tour
            </button>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-lg group transition-all duration-300 relative overflow-hidden hover:cyber-glow"
              >
                <div className="mb-6 inline-block p-3 rounded-lg bg-white/5 border border-white/10 cyber-glow transition-shadow transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/80 font-sans">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
