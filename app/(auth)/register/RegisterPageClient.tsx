"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useMediaQuery from "@/app/_hooks/useMediaQuery";
import RandomRegisterModel from "./_components/RandomRegisterModel";

const RegisterPageClient = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <main className="flex items-center h-screen gap-5 mx-5">
      {isDesktop && (
        <section className="hidden xl:block flex-1/2 h-4/5">
          {/* Register 3D model */}
          <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            className="bg-gray-200 dark:bg-gray-100 rounded-4xl"
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={3} />
            <RandomRegisterModel />
            <OrbitControls minDistance={3} maxDistance={10} />
          </Canvas>
        </section>
      )}
    </main>
  );
};

export default RegisterPageClient;
