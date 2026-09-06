"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

function SpinningPanel() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.35;
    group.current.rotation.x = -0.45;
  });

  return (
    <group ref={group}>
      <mesh>
        <boxGeometry args={[2.1, 0.07, 1.25]} />
        <meshStandardMaterial color="#14324f" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.045, 0]}>
        <boxGeometry args={[1.92, 0.02, 1.1]} />
        <meshStandardMaterial
          color="#1c74b5"
          metalness={0.75}
          roughness={0.16}
          emissive="#0c3558"
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

export default function PanelOrbit() {
  return (
    <Canvas camera={{ position: [0, 0.8, 3.4], fov: 42 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 2]} intensity={1.3} color="#fff6dc" />
      <SpinningPanel />
    </Canvas>
  );
}
