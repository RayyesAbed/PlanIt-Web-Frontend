import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Group } from "three";

const modelPaths = ["/models/login/Tree1.glb"];

const RandomLoginModel = () => {
  const modelPath = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * modelPaths.length);
    return modelPaths[randomIndex];
  }, []);

  const { scene } = useGLTF(modelPath) as { scene: Group };

  return <primitive object={scene} position={[0, -10, 0]} />;
};

useGLTF.preload("/models/login/Tree1.glb");

export default RandomLoginModel;
