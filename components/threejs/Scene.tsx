"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { OrbitControls } from "@react-three/drei";
import { svgMap } from "@/assets/svgMap";
import { TechIcon } from "./TechIcon";

export const Scene = () => {
  const meshRef = useRef<Mesh>(null!);
  const stackKeys = Object.keys(svgMap.stack);
  const refs = stackKeys.map(() => useRef<Group>(null!));

  const icons = useMemo(
    () =>
      Object.entries(svgMap.stack)
        .sort(() => Math.random() - 0.5)
        .map(([key, icon], index) => ({
          key,
          icon,
          ref: refs[index],
          position: [
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
          ] as [number, number, number],
        })),
    [refs]
  );

  useFrame(() => {
    Object.values(icons).forEach((icon) => {
      if (icon.ref.current) {
        const randomSpeed = Math.random() * (0.04 - 0.02) + 0.02;
        icon.ref.current.rotation.y += randomSpeed;
      }
    });
  });

  return (
    <>
      <OrbitControls
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={(Math.PI * 5) / 6}
        minDistance={2}
        maxDistance={6}
      />
      <group scale={[1, 1, 1]} position={[0, 0, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.2}
            metalness={0.1}
            roughness={0.5}
            envMapIntensity={0.1}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[2, 16, 16]} />
          <meshBasicMaterial
            color="#264653"
            blendColor={"#2a9d8f"}
            wireframe
            opacity={1}
          />
        </mesh>
        {icons.map(({ key, icon, ref, position }) => (
          <TechIcon key={key} position={position} iconRef={ref} icon={icon} />
        ))}
      </group>
    </>
  );
};
