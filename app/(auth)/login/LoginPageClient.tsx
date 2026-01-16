"use client";
import { ChangeEvent, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";
import RandomLoginModel from "./_components/RandomLoginModel";
import Logo from "@/app/_components/shared/logo/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import loginUser from "./_actions/loginUser";
import ThemeToggle from "@/components/ThemeToggle";
import useMediaQuery from "@/app/_hooks/useMediaQuery";
import GoogleButton from "../../_components/auth/GoogleButton";
import AppleButton from "../../_components/auth/AppleButton";
import { useTranslation } from "react-i18next";
import LoginCredentials from "./_types/LoginCredentials";
import resetPasswordRequest from "./_actions/resetPasswordRequest";
import useAsyncFormAction from "@/app/_hooks/useAsyncFormAction";

const LoginPageClient = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const [action, setAction] = useState<"login" | "reset-password">("login");

  const { run, pending, success, error, responseData, setResponseData } =
    useAsyncFormAction();

  const formStatusLocale = useTranslation("FormStatus");
  const loginLocale = useTranslation("Login");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({ ...loginCredentials, email: event.target.value });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({ ...loginCredentials, password: event.target.value });
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (action === "login") {
        const response = await run(() => loginUser(loginCredentials));
        setResponseData(formStatusLocale.t(response));
      } else {
        const response = await run(() =>
          resetPasswordRequest(loginCredentials.email)
        );
        setResponseData(formStatusLocale.t(response));
      }
    } catch (err) {
      setResponseData(
        err instanceof Error ? formStatusLocale.t(err.message) : String(err)
      );
    }
  };

  return (
    <main className="flex items-center h-screen gap-5 mx-5">
      <section className="flex flex-col items-center flex-1/2 ">
        <ThemeToggle />
        <Logo />
        <h1 className="font-bold text-xl my-5">
          {loginLocale.t("loginHeader")}
        </h1>
        <section className="flex md:flex-row gap-5">
          {/* Sign in with Google or Apple */}
          <GoogleButton
            buttonAlt="Sign in with Google Icon"
            ariaLabel="Sign in with Google"
          />
          <AppleButton
            buttonAlt="Sign in with Apple Icon"
            ariaLabel="Sign in with Apple"
          />
        </section>
        <section className="flex justify-center items-center my-5 w-full">
          {/* The continue with bar */}
          <div className="md:w-40 h-0.25 bg-gray-300"></div>
          <span className="mx-2 text-center">
            {loginLocale.t("continueText")}
          </span>
          <div className="md:w-40 h-0.25 bg-gray-300"></div>
        </section>
        <section className="flex-col items-center">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col items-center gap-3"
          >
            <Input
              name="email"
              type="email"
              value={loginCredentials.email}
              onChange={handleEmailChange}
              placeholder={loginLocale.t("userEmail")}
              className="w-[300px] font-semibold"
              required={true}
            />
            <Input
              name="password"
              type="password"
              value={loginCredentials.password}
              onChange={handlePasswordChange}
              placeholder={loginLocale.t("userPassword")}
              className="w-[300px] font-semibold"
              required={action === "login"}
            />
            <Button
              className="w-[150px] font-bold cursor-pointer"
              onClick={() => setAction("login")}
              disabled={pending}
            >
              {loginLocale.t("loginButtonText")}
            </Button>
            <section className="flex flex-col gap-5 md:flex-row md:gap-10 underline">
              <button
                type="submit"
                value="reset-password"
                onClick={() => setAction("reset-password")}
              >
                {loginLocale.t("forgotPasswordText")}
              </button>
              <Link href="/register">
                {loginLocale.t("newUsersRegisterText")}
              </Link>
            </section>
          </form>
          {error && (
            <p className="bg-red-900 text-white p-2 mt-5 rounded-4xl text-center">
              {responseData}
            </p>
          )}
          {success && (
            <p className="bg-green-900 text-white p-2 mt-5 rounded-4xl text-center">
              {responseData}
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

export default LoginPageClient;
