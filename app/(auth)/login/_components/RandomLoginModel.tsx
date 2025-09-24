import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Group } from "three";

const modelPaths = [
  "/models/login/Tree1.glb",
  "/models/login/Tree2.glb",
  "/models/login/Tree3.glb",
];

const RandomLoginModel = () => {
  const modelPath = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * modelPaths.length);
    return modelPaths[randomIndex];
  }, []);

  const { scene } = useGLTF(modelPath) as { scene: Group };

  return <primitive object={scene} />;
};

export default RandomLoginModel;
