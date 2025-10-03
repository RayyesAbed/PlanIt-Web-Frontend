"use client";
import { Suspense, useActionState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";
import RandomLoginModel from "./_components/RandomLoginModel";
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import loginUser from "./actions/loginUser";
import ThemeToggle from "@/components/ThemeToggle";
import useMediaQuery from "@/app/_hooks/useMediaQuery";
import GoogleButton from "../../_components/GoogleButton";
import AppleButton from "./_components/AppleButton";

const LoginPage = () => {
  const [state, formAction, isLoginPending] = useActionState(loginUser, null);

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <main className="flex items-center h-screen gap-5 mx-5">
      <section className="flex flex-col items-center flex-1/2 ">
        <ThemeToggle />
        <Logo />
        <h1 className="font-bold text-xl my-5">
          Ready to continue with your journey?
        </h1>
        <section className="flex flex-col md:flex-row gap-5">
          {/* Sign in with Google or Apple */}
          <GoogleButton
            buttonAlt="Sign in with Google Icon"
            ariaLabel="Sign in with Google"
          />
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
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="w-[300px] font-semibold"
              required={true}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="w-[300px] font-semibold"
              required={true}
            />
            <Button
              className="w-[150px] font-bold cursor-pointer"
              disabled={isLoginPending}
            >
              {isLoginPending ? "Logging in..." : "Login"}
            </Button>
            <section className="flex flex-col gap-5 md:flex-row md:gap-10 underline">
              <Link href="#">Forgot your password?</Link>
              <Link href="/register">New here? Then register</Link>
            </section>
          </form>
          {!isLoginPending && state && (
            <p className="bg-red-900 text-white p-2 mt-5 rounded-4xl text-center">
              {state}
            </p>
          )}
        </section>
      </section>
      {isDesktop && (
        <section className="hidden xl:block flex-1/2 h-4/5">
          {/* Login 3D model */}
          <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            className="bg-gray-200 dark:bg-gray-100 rounded-4xl"
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={3} />
            <Suspense fallback={null}>
              <RandomLoginModel />
            </Suspense>
            <OrbitControls minDistance={3} maxDistance={10} />
          </Canvas>
        </section>
      )}
    </main>
  );
};

export default LoginPage;
