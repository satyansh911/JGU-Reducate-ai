import { BookOpen, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary/20 p-2 rounded-lg cyber-glow border border-primary/50">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-foreground">
                JG University
              </span>
            </Link>
            <p className="text-foreground/80 text-sm leading-relaxed font-sans">
              Knowledge Beyond The Pages of Books. Empowering students with cognitive and experiential knowledge to shape their future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-secondary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-secondary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-secondary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-serif font-bold mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3 text-sm text-foreground/70 font-sans">
              <li><Link href="#" className="hover:text-secondary transition-colors">About JG University</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Admissions 2026-27</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Our Campus</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Career Opportunities</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-foreground font-serif font-bold mb-6 text-xl">Popular Programs</h4>
            <ul className="space-y-3 text-sm text-foreground/70 font-sans">
              <li><Link href="#" className="hover:text-secondary transition-colors">B.Tech Computer Science</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Master of Business Admin</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">B.Com (Hons) ACCA</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">M.Sc. Cyber Security</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">BCA Full Stack Dev</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-serif font-bold mb-6 text-xl">Contact Us</h4>
            <ul className="space-y-3 text-sm text-foreground/70 font-sans">
              <li>Uvarsad-Vavol Road,</li>
              <li>Gandhinagar, Gujarat</li>
              <li className="pt-2">
                <a href="mailto:info@jguni.in" className="hover:text-secondary transition-colors">info@jguni.in</a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60 text-center md:text-left font-sans">
            &copy; {new Date().getFullYear()} JG University. All rights reserved. Sponsored by ASIA Charitable Trust.
          </p>
          <div className="flex space-x-6 text-sm text-foreground/60 font-sans">
            <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
