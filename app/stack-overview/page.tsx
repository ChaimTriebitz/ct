'use client'
import { CanvasThreeJs, RotatingIcon, Scene } from '@/components'
import React from 'react'

export default function StackOverview() {
   return (
      <div>
         <CanvasThreeJs>
            <Scene />
         </CanvasThreeJs>
      </div>
   )
}
