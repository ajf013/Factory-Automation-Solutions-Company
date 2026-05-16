'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function RoboticArm() {
  const armRefs = [useRef<Mesh>(null), useRef<Mesh>(null), useRef<Mesh>(null)];
  const workpieceRefs = [useRef<Mesh>(null), useRef<Mesh>(null), useRef<Mesh>(null)];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    armRefs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.rotation.z = Math.sin(time + i * 2) * 0.4 - 0.5;
        ref.current.rotation.y = Math.cos(time * 0.5 + i) * 0.2;
      }
    });

    workpieceRefs.forEach((ref, i) => {
      if (ref.current) {
        // Move workpieces along the "line"
        const speed = 0.5;
        const xOffset = ((time * speed + i * 4) % 15) - 7.5;
        ref.current.position.x = xOffset;
        ref.current.rotation.y = time;
        ref.current.rotation.z = Math.sin(time) * 0.1;
      }
    });
  });

  return (
    <group position={[2, -1, -2]} scale={1.4}>
      {/* Polished Conveyor Belt Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[20, 0.2, 2]} />
        <meshStandardMaterial color="#0f172a" metalness={1} roughness={0.1} />
      </mesh>

      {/* Robotic Arms along the line */}
      {[0, 1, 2].map((i) => (
        <group key={i} position={[(i - 1) * 5, 0.1, -0.5]} rotation={[0, Math.PI / 4, 0]}>
          {/* Polished Base */}
          <mesh>
            <cylinderGeometry args={[0.5, 0.6, 0.3, 32]} />
            <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
          </mesh>
          
          {/* Main Arm - Electric Blue */}
          <group position={[0, 0.15, 0]}>
            <mesh ref={armRefs[i]} position={[0, 1, 0]}>
              <boxGeometry args={[0.2, 2, 0.2]} />
              <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} emissive="#2563eb" emissiveIntensity={0.1} />
              
              {/* Joint */}
              <mesh position={[0, -1, 0]}>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.1} />
              </mesh>

              {/* Forearm */}
              <group position={[0, 1, 0]}>
                <mesh rotation={[0, 0, 0.5]} position={[0, 0.5, 0]}>
                  <boxGeometry args={[0.15, 1.4, 0.15]} />
                  <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
                </mesh>
              </group>
            </mesh>
          </group>
        </group>
      ))}

      {/* Glowing Moving Workpieces */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} ref={workpieceRefs[i]} position={[0, 0.4, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial 
            color="#2563eb" 
            emissive="#3b82f6" 
            emissiveIntensity={0.5} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>
      ))}

      {/* Subtler Floor Grid */}
      <gridHelper args={[60, 60, "#e2e8f0", "#f8fafc"]} position={[0, -0.1, 0]} />
    </group>
  );
}
