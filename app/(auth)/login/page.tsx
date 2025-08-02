"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RandomLoginModel from "./_components/RandomLoginModel";
import Logo from "@/app/_components/Logo";

const LoginPage = () => {
  return (
    <main className="flex items-center h-screen gap-5 mx-5">
      <section className="flex flex-col items-center flex-1/2 h-4/5">
        <Logo theme="light" />
      </section>
      <section className="flex-1/2 h-4/5">
        <Canvas
          camera={{ position: [0, 2, 5], fov: 50 }}
          className="bg-gray-200 rounded-4xl"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={3} />
          <RandomLoginModel />
          <OrbitControls minDistance={90} maxDistance={200} />
        </Canvas>
      </section>
    </main>
  );
};

export default LoginPage;
