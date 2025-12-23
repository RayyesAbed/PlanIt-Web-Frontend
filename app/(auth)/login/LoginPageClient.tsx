"use client";
import { ChangeEvent, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";
import RandomLoginModel from "./_components/RandomLoginModel";
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import loginUser from "./lib/loginUser";
import ThemeToggle from "@/components/ThemeToggle";
import useMediaQuery from "@/app/_hooks/useMediaQuery";
import GoogleButton from "../../_components/GoogleButton";
import AppleButton from "../../_components/AppleButton";
import { useTranslation } from "react-i18next";
import LoginCredentials from "./_types/LoginCredentials";
import resetPasswordRequest from "./lib/resetPasswordRequest";

type AsyncAction<T> = () => Promise<T>;

const LoginPage = () => {
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [isPending, setPending] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [responseData, setResponseData] = useState("");

  const formStatusMessage = useTranslation("FormStatus");

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({ ...loginCredentials, email: event.target.value });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({ ...loginCredentials, password: event.target.value });
  };

  const handleAsyncAction = async <T,>(action: AsyncAction<T>) => {
    setPending(true);

    try {
      const response = await action();
      setSuccess(true);
      setError(false);
      setResponseData(formStatusMessage.t(String(response)));
    } catch (error) {
      setResponseData(
        error instanceof Error
          ? formStatusMessage.t(error.message)
          : String(error)
      );
      setError(true);
      setSuccess(false);
    } finally {
      setPending(false);
    }
  };

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    handleAsyncAction(() => loginUser(loginCredentials));
  };

  const handlePasswordResetRequest = async (event: React.FormEvent) => {
    event.preventDefault();

    handleAsyncAction(() => resetPasswordRequest(loginCredentials.email));
  };

  const { t } = useTranslation("Login");

  return (
    <main className="flex items-center h-screen gap-5 mx-5">
      <section className="flex flex-col items-center flex-1/2 ">
        <ThemeToggle />
        <Logo />
        <h1 className="font-bold text-xl my-5">{t("loginHeader")}</h1>
        <section className="flex flex-col md:flex-row gap-5">
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
          <span className="mx-2 text-center">{t("continueText")}</span>
          <div className="md:w-40 h-0.25 bg-gray-300"></div>
        </section>
        <section className="flex-col items-center">
          <form
            onSubmit={handleLoginSubmit}
            className="flex flex-col items-center gap-3"
          >
            <Input
              name="email"
              type="email"
              value={loginCredentials.email}
              onChange={handleEmailChange}
              placeholder={t("userEmail")}
              className="w-[300px] font-semibold"
              required={true}
            />
            <Input
              name="password"
              type="password"
              value={loginCredentials.password}
              onChange={handlePasswordChange}
              placeholder={t("userPassword")}
              className="w-[300px] font-semibold"
              required={true}
            />
            <Button className="w-[150px] font-bold cursor-pointer">
              {isPending ? "Logging in..." : t("loginButtonText")}
            </Button>
            <section className="flex flex-col gap-5 md:flex-row md:gap-10 underline">
              <Link onClick={handlePasswordResetRequest} href="#">
                {t("forgotPasswordText")}
              </Link>
              <Link href="/register">{t("newUsersRegisterText")}</Link>
            </section>
          </form>
          {isError && (
            <p className="bg-red-900 text-white p-2 mt-5 rounded-4xl text-center">
              {responseData}
            </p>
          )}
          {isSuccess && (
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

export default LoginPage;
