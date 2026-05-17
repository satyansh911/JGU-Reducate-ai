"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 rounded-lg border border-primary/20 cyber-glow relative overflow-hidden"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground leading-tight">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-sans">
            Join JG University and experience a curriculum designed to match everyday challenges and bring out your academic brilliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-mono text-sm uppercase tracking-wider transition-all flex items-center justify-center cyber-glow border border-primary/50">
              <span>Apply for Admission</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-mono text-sm uppercase tracking-wider transition-colors border border-white/10 backdrop-blur-sm">
              Contact Admissions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
