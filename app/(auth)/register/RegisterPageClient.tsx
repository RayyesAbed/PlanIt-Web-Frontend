"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useMediaQuery from "@/app/_hooks/useMediaQuery";
import RandomRegisterModel from "./_components/RandomRegisterModel";
import ThemeToggle from "@/app/_components/themeToggle/ThemeToggle";
import Logo from "@/app/_components/shared/logo/Logo";
import GoogleButton from "../../_components/auth/GoogleButton";
import AppleButton from "../../_components/auth/AppleButton";
import { Button } from "@/app/_components/shared/ui/button";
import Link from "next/link";
import { BirthDatePicker } from "./_components/inputs/BirthDatePicker";
import registerUser from "./_actions/registerUser";
import { Input } from "@/app/_components/shared/ui/input";
import PasswordInput from "./_components/inputs/PasswordInput";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/app/(auth)/register/_components/inputs/LanguageSelector";
import { useState } from "react";
import RegisterCredentials from "./_types/RegisterCredentials";
import useAsyncFormAction from "@/app/_hooks/useAsyncFormAction";

const RegisterPageClient = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [registerCredentials, setRegisterCredentials] =
    useState<RegisterCredentials>({
      name: "",
      toBeConfirmedEmail: "",
      birthDate: "",
      language: "",
      password: "",
    });

  const { run, pending, success, error, responseData, setResponseData } =
    useAsyncFormAction();

  const registerLocale = useTranslation("Register");
  const formStatusMessageLocale = useTranslation("FormStatus");

  const updateRegisterCredentials = (
    field: keyof RegisterCredentials,
    value: string,
  ) => {
    setRegisterCredentials((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await run(() => registerUser(registerCredentials));
      setResponseData(formStatusMessageLocale.t(response));
    } catch (err) {
      setResponseData(
        err instanceof Error
          ? formStatusMessageLocale.t(err.message)
          : String(err),
      );
    }
  };

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
          {registerLocale.t("registerHeader")}
        </h1>
        <section className="flex md:flex-row gap-5">
          {/* Register in with Google or Apple */}
          <GoogleButton
            buttonAlt="Register with Google Icon"
            ariaLabel="Register with Google"
          />
          <AppleButton
            buttonAlt="Register with Apple Icon"
            ariaLabel="Register with Apple"
          />
        </section>
        <section className="flex justify-center items-center my-5 w-full">
          {/* The continue with bar */}
          <div className="md:w-40 h-0.25 bg-gray-300"></div>
          <span className="mx-2 text-center">
            {registerLocale.t("continueText")}
          </span>
          <div className="md:w-40 h-0.25 bg-gray-300"></div>
        </section>
        <section className="flex-col items-center">
          <form
            onSubmit={handleRegisterSubmit}
            className="flex flex-col items-center gap-3"
          >
            <Input
              type="text"
              value={registerCredentials?.name ?? ""}
              onChange={(event) =>
                updateRegisterCredentials("name", event.target.value)
              }
              placeholder={registerLocale.t("userName")}
              className="w-[300px]"
              pattern="[\p{L} ]+"
              title="Name must contain letters only."
              required
            />
            <Input
              type="email"
              value={registerCredentials?.toBeConfirmedEmail ?? ""}
              onChange={(event) =>
                updateRegisterCredentials(
                  "toBeConfirmedEmail",
                  event.target.value,
                )
              }
              placeholder={registerLocale.t("userEmail")}
              className="w-[300px]"
              required
            />
            <BirthDatePicker
              value={registerCredentials?.birthDate ?? ""}
              onChange={(birthDate) =>
                updateRegisterCredentials("birthDate", birthDate)
              }
              placeholder={registerLocale.t("userBirthDate")}
            />
            <PasswordInput
              value={registerCredentials.password}
              onChange={(event) =>
                updateRegisterCredentials("password", event.target.value)
              }
              placeholder={registerLocale.t("userPassword")}
            />
            <LanguageSelector
              value={registerCredentials.language}
              onSelect={(language) =>
                updateRegisterCredentials("language", language)
              }
            />
            <Button className="w-[150px] font-bold cursor-pointer">
              {pending
                ? "Registering..."
                : registerLocale.t("registerButtonText")}
            </Button>
            <section className="flex flex-col gap-5 md:flex-row md:gap-10 underline">
              <Link href="/login">
                {registerLocale.t("existingUserLoginText")}
              </Link>
            </section>
          </form>
          {success && (
            <p className="text-white p-2 mt-5 rounded-4xl text-center bg-green-900 ">
              {responseData}
            </p>
          )}
          {error && (
            <p className="text-white p-2 mt-5 rounded-4xl text-center bg-red-900">
              {responseData}
            </p>
          )}
        </section>
      </section>
    </main>
  );
};

export default RegisterPageClient;
