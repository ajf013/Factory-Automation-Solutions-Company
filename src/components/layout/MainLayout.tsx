'use client';

import React, { PropsWithChildren } from 'react';
import { Navigation } from '@/components/ui/Navigation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';

import { RoboticArm } from '@/components/3d/RoboticArm';
import { Float, Environment, ContactShadows } from '@react-three/drei';

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  // Header collapse on scroll
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 80], [1, 0]);

  return (
    <div className="relative min-h-screen bg-3d bg-center bg-cover">
      {/* Sticky Header */}
      <motion.div
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-30 bg-white/50 backdrop-blur-md border-b border-black/5"
      >
        <Navigation />
      </motion.div>

      {/* 3D Canvas – full screen behind content */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#f8fafc]">
        <Canvas
          camera={{ position: [0, 5, 15], fov: 50 }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={2.5} />
          <pointLight position={[10, 10, 10]} intensity={4} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={6} castShadow />
          <directionalLight position={[0, 5, 5]} intensity={2.5} />
          
          <RoboticArm />

          <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={20} blur={2} far={4.5} />
          <Environment preset="studio" />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 1.5} 
          />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Push content below header height */}
        <div className="pt-20" />
        {children}
      </div>

    </div>
  );
}
