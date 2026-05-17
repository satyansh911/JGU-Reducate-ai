"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jigardan Gadhvi",
      role: "Celebrity Singer",
      quote: "The faculty members were more than just teachers; they served as mentors who supported and guided us at every step. This experience instilled in me the virtues of discipline and hard work."
    },
    {
      name: "Parth Raval",
      role: "Media Professional",
      quote: "The demanding academic programme and top-notch teachers enabled me to establish a solid foundation. The emphasis on practical learning through internships gave me valuable hands-on experience."
    },
    {
      name: "Yatendra Sinh Joddha",
      role: "Technical Head, TCS",
      quote: "My education at JG has played a pivotal role in shaping my career. The BCA program provided me with a strong foundation in IT, giving me the opportunity to apply my knowledge in real-world scenarios."
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground leading-tight"
          >
            Alumni <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <p className="text-foreground/80 font-sans text-lg">Hear from our graduates making a mark globally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-lg relative group transition-all duration-300 hover:cyber-glow"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6 transform group-hover:scale-110 transition-transform" />
              <p className="text-foreground/90 mb-8 italic relative z-10 leading-relaxed font-sans">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-serif font-bold text-foreground text-xl">{t.name}</h4>
                <p className="text-secondary text-sm font-mono tracking-widest uppercase mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
