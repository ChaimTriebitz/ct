"use client";
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Html, OrbitControls } from "@react-three/drei";
import { svgs } from "@/assets/svgs";

export const Scene = () => {
  const meshRef = useRef<Mesh>(null!);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure SVGs are loaded
    const checkSVGs = () => {
      if (Object.keys(svgs).length > 0) {
        setIsLoaded(true);
      }
    };

    // Initial check
    checkSVGs();

    // Fallback check after a short delay
    const timeout = setTimeout(checkSVGs, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Rotating the sphere every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  if (!isLoaded) {
    return null; // Don't render anything until SVGs are loaded
  }

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        minDistance={Math.PI}
        maxDistance={Math.PI}
      />
      <group scale={[1, 1, 1]} position={[0, 0, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.5, 64, 64]} />
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
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial
            color="#2a9d8f"
            transparent
            wireframe
            blendColor={'#264653'}
            opacity={0.2}
          />
        </mesh>
        <Html
          position={[-0.7, 0.3, 0]}
          transform
          occlude
          style={{
            width: "100px",
            height: "100px",
            transform: "scale(0.35)",
            pointerEvents: "none",
          }}
        >
          {svgs.reactjs}
        </Html>
        <Html
          position={[0.7, -0.3, 0]}
          transform
          occlude
          style={{
            width: "100px",
            height: "100px",
            transform: "scale(0.35)",
            pointerEvents: "none",
          }}
        >
          {svgs.nextjs}
        </Html>
        <Html
          position={[0, 0.6, 0.5]}
          transform
          occlude
          style={{
            width: "100px",
            height: "100px",
            transform: "scale(0.35)",
            pointerEvents: "none",
          }}
        >
          {svgs.nodejs}
        </Html>
        <Html
          position={[0, -0.6, 0.5]}
          transform
          occlude
          style={{
            width: "100px",
            height: "100px",
            transform: "scale(0.35)",
            pointerEvents: "none",
          }}
        >
          {svgs.expressjs}
        </Html>
        <Html
          position={[0.5, 0.4, 0.8]}
          transform
          occlude
          style={{
            width: "100px",
            height: "100px",
            transform: "scale(0.35)",
            pointerEvents: "none",
          }}
        >
          {svgs.mongodb}
        </Html>
        <Html
          position={[-0.5, -0.4, 0.8]}
          transform
          occlude
          style={{
            width: "100px",
            height: "100px",
            transform: "scale(0.35)",
            pointerEvents: "none",
          }}
        >
          {svgs.mysql}
        </Html>
        <Html
          position={[0.5, -0.4, 1.0]}
          transform
          occlude
          style={{
            width: "100px",
            height: "100px",
            transform: "scale(0.35)",
            pointerEvents: "none",
          }}
        >
          {svgs.js}
        </Html>
        <Html
          position={[-0.5, 0.4, 1.0]}
          transform
          occlude
          style={{
            width: "100px",
            height: "100px",
            transform: "scale(0.35)",
            pointerEvents: "none",
          }}
        >
          {svgs.scss}
        </Html>
      </group>
    </>
  );
};
