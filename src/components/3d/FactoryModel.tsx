'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FactoryModel() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
  })

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Factory Walls / Grid */}
      <gridHelper args={[10, 10, "#3b82f6", "#222"]} position={[0, -0.49, 0]} />

      {/* Industrial Cubes representing Machines */}
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[(i % 3) * 2 - 2, 0.5, Math.floor(i / 3) * 2 - 1]} castShadow>
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
          {/* Glowing Accents */}
          <mesh position={[0, 0.8, 0.51]}>
            <planeGeometry args={[0.8, 0.2]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
          </mesh>
        </mesh>
      ))}

      {/* Overhead Gantry Rail */}
      <mesh position={[0, 3, 0]} castShadow>
        <boxGeometry args={[10, 0.2, 0.2]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  )
}
