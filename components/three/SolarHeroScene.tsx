"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

function Panel({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh castShadow>
        <boxGeometry args={[1.55, 0.05, 0.95]} />
        <meshStandardMaterial color="#16324f" metalness={0.35} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.03, 0]}>
        <boxGeometry args={[1.42, 0.012, 0.84]} />
        <meshStandardMaterial
          color="#1f6fad"
          metalness={0.7}
          roughness={0.18}
          emissive="#0d3a62"
          emissiveIntensity={0.2}
        />
      </mesh>
      {[-0.35, 0, 0.35].map((x) => (
        <mesh key={x} position={[x, 0.036, 0]}>
          <boxGeometry args={[0.01, 0.004, 0.82]} />
          <meshStandardMaterial color="#9fd0f2" />
        </mesh>
      ))}
    </group>
  );
}

function Field() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.18) * 0.22;
    group.current.position.y = Math.sin(t * 0.5) * 0.06;
  });

  return (
    <group ref={group}>
      <Panel position={[-0.85, 0.15, 0.05]} rotation={[-0.58, 0.22, 0.06]} />
      <Panel position={[0.75, 0.32, 0.18]} rotation={[-0.5, -0.18, -0.04]} />
      <Panel position={[0.05, -0.38, 0.55]} rotation={[-0.62, 0.04, 0.02]} />
      <mesh position={[2.55, 1.85, -1.2]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial
          color="#f6c453"
          emissive="#ef9b1a"
          emissiveIntensity={2.4}
        />
      </mesh>
    </group>
  );
}

export default function SolarHeroScene() {
  return (
    <Canvas
      camera={{ position: [0.15, 0.45, 4.4], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 2]} intensity={1.35} color="#fff3d0" />
      <pointLight position={[2.4, 1.8, -1]} intensity={2.2} color="#ffb020" />
      <Field />
    </Canvas>
  );
}
