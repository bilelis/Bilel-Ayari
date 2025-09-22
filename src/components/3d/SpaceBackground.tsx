"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function SpaceBackground() {
  const pointsRef = useRef<THREE.Points>(null);
  const spaceshipRef = useRef<THREE.Group>(null);
  const nebulaRef = useRef<THREE.Mesh>(null);

  // Generate enhanced star field
  const starField = useMemo(() => {
    const positions = new Float32Array(10000 * 3); // x, y, z for each star
    const colors = new Float32Array(10000 * 3); // r, g, b for each star
    
    for (let i = 0; i < 10000; i++) {
      const i3 = i * 3;
      // Generate positions for x, y, z
      positions[i3] = (Math.random() - 0.5) * 400;     // x
      positions[i3 + 1] = (Math.random() - 0.5) * 400; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 400; // z
      
      // Create color variation for stars
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.4, 0.3, 0.5 + Math.random() * 0.5);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  // Generate enhanced planets with rings
  const planets = useMemo(() => {
    const planetPositions = [];
    for (let i = 0; i < 12; i++) {
      planetPositions.push({
        position: [
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 150
        ] as [number, number, number],
        size: Math.random() * 0.8 + 0.3,
        color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6),
        hasRings: Math.random() > 0.7
      });
    }
    return planetPositions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
    
    if (spaceshipRef.current) {
      spaceshipRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      spaceshipRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      spaceshipRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
    
    if (nebulaRef.current) {
      nebulaRef.current.rotation.z = state.clock.elapsedTime * 0.02;     
      if (Array.isArray(nebulaRef.current.material)) {
        nebulaRef.current.material[0].opacity = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      } else {
        nebulaRef.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      }
    }
  });

  return (
    <group>
      {/* Enhanced Star Field */}
      <Points ref={pointsRef} positions={starField.positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.8}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Nebula Background */}
      <mesh ref={nebulaRef} position={[0, 0, -50]}>
        <planeGeometry args={[200, 200]} />
        <meshBasicMaterial 
          color="#1a0a2e"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Enhanced Planets with Rings */}
      {planets.map((planet, index) => (
        <group key={index} position={planet.position}>
          <mesh scale={[planet.size, planet.size, planet.size]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial 
              color={planet.color} 
              metalness={0.3}
              roughness={0.7}
              emissive={planet.color.clone().multiplyScalar(0.1)}
            />
          </mesh>
          {planet.hasRings && (
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[planet.size * 1.5, 0.1, 8, 32]} />
              <meshStandardMaterial 
                color="#888888" 
                metalness={0.8} 
                roughness={0.2}
                transparent
                opacity={0.6}
              />
            </mesh>
          )}
        </group>
      ))}

      {/* Enhanced SpaceX-Style Spaceship */}
      <group ref={spaceshipRef} position={[0, 0, -25]}>
        {/* Main Body */}
        <mesh>
          <boxGeometry args={[3, 0.8, 6]} />
          <meshStandardMaterial 
            color="#00aaff" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#001122"
          />
        </mesh>
        
        {/* Engine */}
        <mesh position={[0, 0, 3]}>
          <coneGeometry args={[0.5, 1.5, 8]} />
          <meshStandardMaterial 
            color="#ff6600" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#440000"
          />
        </mesh>
        
        {/* Wings */}
        <mesh position={[-2, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.2, 0.5, 3]} />
          <meshStandardMaterial color="#00aaff" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[2, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.2, 0.5, 3]} />
          <meshStandardMaterial color="#00aaff" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Cockpit */}
        <mesh position={[0, 0.4, -1]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial 
            color="#00aaff" 
            metalness={0.9} 
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        {/* Engine Glow */}
        <mesh position={[0, 0, 4.5]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial 
            color="#ffaa00" 
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>

      {/* Enhanced Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00aaff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6600" />
      <directionalLight position={[0, 10, 5]} intensity={0.3} color="#ffffff" />
    </group>
  );
}
