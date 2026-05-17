# 🌌 JG University — Cyber-Academic Landing Page Redesign

A premium, state-of-the-art landing page redesign for **JG University**, built using a **Cyber-Academic** design system. This project transitions the traditional university landing page into a futuristic, dark-themed, and deeply immersive glassmorphic experience.

---

## 🎨 The Cyber-Academic Design System

This website was redesigned from the ground up using a custom visual system built to feel extremely premium, tech-forward, and academic.

### 🔮 Core Visual Tokens
*   **Color Palette:**
    *   `Midnight Background (#020617)` — A deep, infinite dark slate foundation.
    *   `Digital Indigo (#6366f1)` — The primary brand color, used for high-importance actions and deep neon glows.
    *   `Cyber Teal (#2dd4bf)` — The secondary accent, providing a sharp contrast and highlighting tech features.
*   **Aesthetics & Effects:**
    *   **Glassmorphism (`.glass`, `.glass-card`)** — Ultra-blurry transparent panels with thin white border overlays to build real-world physical depth.
    *   **Cyber Glow (`.cyber-glow`)** — Harmonious HSL-tuned neon shadows that react dynamically to user hover actions.
*   **Typography:**
    *   *Headings:* **Libre Caslon Text** (A elegant serif providing prestigious academic weight).
    *   *Body:* **Geist Sans** (A modern, clean sans-serif designed for readability on high-DPI screens).
    *   *Accents/Mono:* **JetBrains Mono** (Used for labels, indicators, and buttons to give a high-tech developer aesthetic).

---

## ✨ Features & Interactive Sections

*   **⚡ Navigation Bar:** Floating glassmorphic header that stays responsive and features dynamic glow outlines on desktop and mobile.
*   **📸 Dynamic Hero Carousel:** A crossfading background photo carousel showcasing JG University’s physical campus facilities (IIoT labs, library, campus grounds) blended seamlessly behind neon gradients.
*   **🏛️ Immersive About Section:** Highlighting the new-age tech-driven philosophy of JG University with premium structured text and visuals.
*   **💻 Programs Hub:** Grid display of top courses (B.Tech CSE, iMCA, BBA, Law) fitted with interactive glowing glass borders.
*   **🔬 Campus Tech Features:** Deep interactive visual cards showing off specialized state-of-the-art facilities like the *IIoT Lab*, *R&D Hub*, and *Tech-enabled Library*.
*   **💬 Testimonials Slider:** Elegant carousel featuring successful alumni sharing their career journeys.
*   **📢 Footer & CTA:** A highly engaging call-to-action area with a glowing boundary, paired with a rich, multi-column modular footer.

---

## 🛠️ Technology Stack

*   **Core Framework:** Next.js 14+ (App Router, TypeScript)
*   **Styling Engine:** Tailwind CSS & Vanilla CSS Utility Classes
*   **Animation System:** Framer Motion (leveraged for smooth multi-image crossfades and content entrance transitions)
*   **Iconography:** Lucide React

---

## 🚀 Getting Started

Follow these steps to run the redesigned landing page locally on your machine:

### 1. Install Dependencies
Make sure you are in the project folder, then run:
```bash
npm install
```

### 2. Run the Development Server
Start the local server to test hot reloading and view animations:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

### 3. Build for Production
To generate a fully compiled, optimized static production build:
```bash
npm run build
```

---

## 📂 Project Architecture

```
jg-university-landing/
├── public/
│   └── photos/              # Local JG University campus assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Core Cyber-Academic style sheet (glassmorphism & variables)
│   │   ├── layout.tsx       # Root layout setting up Google Fonts
│   │   └── page.tsx         # Section assembler
│   ├── components/
│   │   ├── About.tsx        # University overview section
│   │   ├── BackgroundCarousel.tsx # Framer-motion background crossfader
│   │   ├── CampusFeatures.tsx     # IIoT and lab facilities
│   │   ├── CTA.tsx          # Action CTA banner
│   │   ├── Footer.tsx       # Comprehensive footer layout
│   │   ├── Hero.tsx         # Landing hero and copy
│   │   ├── Navbar.tsx       # Header controls
│   │   ├── Programs.tsx     # Course grids
│   │   └── Testimonials.tsx # Alumni sliding cards
│   └── lib/
│       └── utils.ts         # Utility class merger (clsx + tailwind-merge)
```
