import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Group } from "three";

const modelPaths = [
  "/models/register/BabyTree1.glb",
  "/models/register/BabyTree2.glb",
];

const RandomRegisterModel = () => {
  const modelPath = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * modelPaths.length);
    return modelPaths[randomIndex];
  }, []);

  const { scene } = useGLTF(modelPath) as { scene: Group };

  return <primitive object={scene} />;
};

export default RandomRegisterModel;
