# Fasco India Redesign - Crystal Light Edition

A premium, high-performance web experience for **Fasco India**, featuring an immersive 3D industrial automation environment, advanced staggered animations, and a sophisticated Slate-based design system.

## 🚀 Key Features

- **Immersive 3D Automation Line**: A full-width, high-fidelity 3D industrial scene featuring synchronized robotic arms and a moving conveyor belt, representing Fasco's core expertise in RPA (Robotic Process Automation).
- **Crystal Light Design System**: A professional, soft-slate aesthetic (#f8fafc) designed for maximum readability and visual comfort.
- **Cascading UI Animations**: All sections (Solutions, Clients, Hero) utilize a "one-by-one" staggered entrance animation, replacing generic scrolling with a deliberate, high-end presentation.
- **High-Contrast Readability**: Optimized typography with white-glow shadows ensures text is perfectly legible even when complex 3D models pass behind it.
- **Procedural Brand Identities**: A custom-built client section featuring unique, procedurally generated logo marks for industry leaders like L&T, Saint Gobain, and Murugappa Group.

## 📂 Project Structure

```text
src/
├── app/                      # Next.js App Router (Pages & Routing)
│   ├── about/                # Company story and facility pages
│   ├── solutions/            # Product and service portfolio
│   ├── contact/              # Business inquiries
│   ├── globals.css           # Global theme & glassmorphism utilities
│   └── layout.tsx            # Global entry point
├── components/
│   ├── 3d/                   # React Three Fiber Scenes
│   │   ├── RoboticArm.tsx    # The core Automation Line scene
│   │   └── Scene.tsx         # 3D Environment configuration
│   ├── layout/               # Structural UI Wrappers
│   │   └── MainLayout.tsx    # Fixed 3D Background & Content Overlay
│   └── ui/                   # High-level Content Sections
│       ├── Hero.tsx          # Main value proposition
│       ├── Solutions.tsx     # Staggered services grid
│       ├── ClientsSection.tsx# Vertical cascading client list
│       └── Navigation.tsx    # Glassmorphism header
```

## 🛠️ Tech Stack

| Technology | Logo | Version |
| :--- | :---: | :--- |
| **Next.js** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) | `16.2.6` |
| **React** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | `19.2.4` |
| **Three.js** | ![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white) | `0.184.0` |
| **R3F** | ![React Three Fiber](https://img.shields.io/badge/R3F-000000?style=for-the-badge&logo=react&logoColor=white) | `9.6.1` |
| **Framer Motion** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) | `12.38.0` |
| **Tailwind CSS** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | `4.0.0` |
| **TypeScript** | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | `5.0.0` |

### System Flow
1. **Background Layer (z-0)**: The `MainLayout` hosts a fixed `Canvas` that renders the `RoboticArm` scene. This scene runs independently of the scroll position to ensure smooth performance.
2. **Atmospheric Layer**: The 3D scene is presented with 100% visibility (zero blur/overlay) to highlight industrial precision.
3. **Content Layer (z-10)**: UI components are rendered in a scrollable overlay. Every section uses `bg-white/60` and `backdrop-blur` to maintain a "Glassmorphism" feel that lets the 3D automation line peak through.
4. **Interaction Flow**: As the user scrolls, Framer Motion's `whileInView` triggers staggered "one-by-one" animations for cards and lists, creating a sense of growth and precision.

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
*Designed & Developed by **Francis Cruz***
