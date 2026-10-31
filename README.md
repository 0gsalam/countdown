# 🗺️ GTA VI Release Countdown — Interactive Topography Background

A modern, high-tech GTA VI release countdown timer built with a WebGL interactive 3D topography background powered by **React Bits**. Features a sleek, responsive glassmorphism UI optimized for desktop displays and modern mobile devices (including iPhone 17 viewport safe areas).

---

## 🌟 Key Features

* **3D Interactive WebGL Background:** Dynamic topographic map with mouse/touch interactions (lift terrain, light traces, ripple pulses, and subtle data glitch effects).
* **Glassmorphism UI Card:** Translucent frosted-glass aesthetic with modern ambient glows (`#2fe0c8` neon cyan) matching the WebGL terrain.
* **iPhone 17 & Mobile Optimized:** Fluid typography (`clamp()`), safe-area inset compatibility (`env(safe-area-inset-top)`), and touch drag overscroll prevention.
* **Standalone Architecture:** Modular layout with separated JS and CSS files for easy maintainability.

---

## 📁 Repository Structure

```text
├── index.html         # Main HTML shell with Babel, React, and viewport setup
├── Topography.js      # Isolated WebGL Topography component logic
├── Topography.css     # Styles for the WebGL canvas wrapper
└── style.css          # Site layout, glassmorphism card, and mobile responsiveness