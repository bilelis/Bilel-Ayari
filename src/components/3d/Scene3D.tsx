"use client";

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import SpaceBackground from './SpaceBackground';

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      >
        <Suspense fallback={null}>
          <SpaceBackground />
        </Suspense>
      </Canvas>
    </div>
  );
}
