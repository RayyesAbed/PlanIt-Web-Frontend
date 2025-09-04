"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useMediaQuery from "@/app/_hooks/useMediaQuery";
import RandomRegisterModel from "./_components/RandomRegisterModel";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/app/_components/Logo";
import GoogleButton from "./_components/GoogleButton";
import AppleButton from "./_components/AppleButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BirthDatePicker } from "./_components/inputs/BirthDatePicker";
import { useActionState } from "react";
import registerUser from "./actions/registerUser";
import NameInput from "./_components/inputs/NameInput";
import EmailInput from "@/components/sharedFormInputs/EmailInput";
import PasswordInput from "./_components/inputs/PasswordInput";

const RegisterPageClient = () => {
  const [state, formAction, isRegisterPending] = useActionState(
    registerUser,
    null
  );
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
      <section className="flex flex-col items-center flex-1/2">
        <ThemeToggle />
        <Logo />
        <h1 className="font-bold text-xl my-5 text-center">
          Ready to start with your hero&apos;s journey?
        </h1>
        <section className="flex flex-col md:flex-row gap-5">
          {/* Register in with Google or Apple */}
          <GoogleButton />
          <AppleButton />
        </section>
        <section className="flex justify-center items-center my-5 w-full">
          {/* The continue with bar */}
          <div className="md:w-40 h-0.25 bg-gray-300"></div>
          <span className="mx-2 text-center">Or continue with</span>
          <div className="md:w-40 h-0.25 bg-gray-300"></div>
        </section>
        <section className="flex-col items-center">
          <form
            action={formAction}
            className="flex flex-col items-center gap-3"
          >
            <NameInput />
            <EmailInput />
            <BirthDatePicker />
            <PasswordInput />
            <Button className="w-[150px] font-bold cursor-pointer">
              {isRegisterPending ? "Registering..." : "Register"}
            </Button>
            <section className="flex flex-col gap-5 md:flex-row md:gap-10 underline">
              <Link href="/login">Already have an account? Then login</Link>
            </section>
          </form>
          {!isRegisterPending && state?.error && (
            <p className="text-white p-2 mt-5 rounded-4xl text-center bg-red-900 ">
              {state.error}
            </p>
          )}
          {!isRegisterPending && state?.success && (
            <p className="text-white p-2 mt-5 rounded-4xl text-center bg-green-900 ">
              {state.success}
            </p>
          )}
        </section>
      </section>
    </main>
  );
};

export default RegisterPageClient;
