# Daiichi - Futuristic Cinema Studio

A high-end, ultra-modern website for Daiichi, a premium video production and photography firm, featuring 3D visuals, cinematic motion, and AI-powered vision generation.

Built with **Next.js 15** (App Router), React, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## Features

- 🎬 **Cinematic Design** - Ultra-modern, futuristic UI with smooth animations
- 🎨 **3D Visuals** - Interactive Three.js particle systems
- 🤖 **AI Vision Assistant** - Powered by Google Gemini for creative concept generation
- 📱 **Responsive** - Fully responsive design for all devices
- ⚡ **Performance** - Optimized with Next.js App Router

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/         # React components
│       ├── About.tsx
│       ├── CinemaShowcase.tsx
│       ├── Contact.tsx
│       ├── CustomCursor.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Services.tsx
│       ├── Showreel.tsx
│       └── VisionAssistant.tsx
├── public/                 # Static assets
├── types.ts               # TypeScript type definitions
└── next.config.js         # Next.js configuration
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Google Gemini AI** - AI-powered vision generation

## Migration Notes

This project was migrated from Vite + React to Next.js 15 with App Router. Key changes:

- All components moved to `src/components/` with `'use client'` directives
- App.tsx converted to `src/app/page.tsx`
- Global styles moved to `src/app/globals.css`
- Environment variables use `NEXT_PUBLIC_` prefix for client-side access
- Routing handled automatically by Next.js App Router

## License

© 2025 Daiichi Digital. All Rights Reserved.
