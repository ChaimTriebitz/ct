'use client';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

// Function to get a random color
const getRandomColor = () =>
   `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

export const Scene = () => {
   const meshRef = useRef<Mesh>(null!);
   const [color, setColor] = useState("orange");

   // Rotating the cube every frame
   useFrame(() => {
      if (meshRef.current) {
         meshRef.current.rotation.x += 0.01;
         meshRef.current.rotation.y += 0.01;
      }
   });

   // Change color on click
   const handleClick = () => {
      setColor(getRandomColor());
   };

   return (
      <mesh ref={meshRef} onClick={handleClick}>
         <boxGeometry args={[1, 1, 1]} />
         <meshStandardMaterial color={color} />
      </mesh>
   );
};

