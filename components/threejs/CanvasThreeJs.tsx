'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


export function CanvasThreeJs({children}: {children: React.ReactNode}) {
   return (
      <Canvas camera={{ position: [1, 1, 3] }}>
         <ambientLight />
         <pointLight position={[1, 1, 1]} />
         <OrbitControls />
         {children}
      </Canvas>
   );
}
