'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Icosahedron, Float } from '@react-three/drei'

export function SolutionsModel() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[1, 1]} position={[0, 1, 0]} castShadow>
          <meshStandardMaterial color="#3b82f6" wireframe />
        </Icosahedron>
      </Float>

      {/* Floating Industrial Components */}
      {[...Array(12)].map((_, i) => (
        <Float key={i} speed={1} rotationIntensity={1} floatIntensity={1}>
          <mesh 
            position={[
              Math.cos((i / 12) * Math.PI * 2) * 3,
              Math.sin(i * 0.5) * 2,
              Math.sin((i / 12) * Math.PI * 2) * 3
            ]}
          >
            <octahedronGeometry args={[0.3]} />
            <meshStandardMaterial color="#555" metalness={0.9} roughness={0.1} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}
