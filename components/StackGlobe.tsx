import { CanvasThreeJs } from "./threejs/CanvasThreeJs";
import { Scene } from "./threejs/Scene";

export function StackGlobe() {
  return (
    <div className="stack-globe">
      <CanvasThreeJs>
        <Scene />
      </CanvasThreeJs>
    </div>
  );
}
