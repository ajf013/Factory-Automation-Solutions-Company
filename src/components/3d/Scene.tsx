'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Float, ContactShadows } from '@react-three/drei'
import { RoboticArm } from './RoboticArm'
import { FactoryModel } from './FactoryModel'
import { SolutionsModel } from './SolutionsModel'
import { Suspense, useRef } from 'react'
import { usePathname } from 'next/navigation'
import * as THREE from 'three'

function CameraController({ pathname }: { pathname: string }) {
  useFrame((state) => {
    let targetX = 0
    let targetY = 0
    let targetZ = 8

    if (pathname === '/') {
      targetX = state.mouse.x * 2
      targetY = state.mouse.y * 1
    } else if (pathname.includes('/about')) {
      targetX = -2
      targetZ = 12
    } else if (pathname.includes('/solutions')) {
      targetX = 2
      targetZ = 10
    }

    state.camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export function Scene() {
  const pathname = usePathname()
  return (
    <div 
      className="fixed inset-0 -z-10 bg-[#050505]"
      style={{ 
        backgroundImage: "url('/background.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <CameraController pathname={pathname} />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={[0, -1, 0]}>
              {pathname === '/' && <RoboticArm />}
              {pathname.includes('/about') && <FactoryModel />}
              {pathname.includes('/solutions') && <SolutionsModel />}
            </group>
          </Float>

          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={20} 
            blur={2} 
            far={4.5} 
          />
        </Suspense>

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* Helper for development - can be removed later */}
        {/* <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} /> */}
      </Canvas>
    </div>
  )
}
