"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useMediaQuery from "@/app/_hooks/useMediaQuery";
import RandomRegisterModel from "./_components/RandomRegisterModel";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/app/_components/Logo";
import GoogleButton from "../../_components/GoogleButton";
import AppleButton from "../../_components/AppleButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BirthDatePicker } from "./_components/inputs/BirthDatePicker";
import registerUser from "./actions/registerUser";
import NameInput from "./_components/inputs/NameInput";
import EmailInput from "@/components/sharedFormInputs/EmailInput";
import PasswordInput from "./_components/inputs/PasswordInput";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/LanguageSelector";
import { useState } from "react";
import RegisterCredentials from "./_types/RegisterCredentials";

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

  const [isPending, setPending] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [responseData, setResponseData] = useState("");

  const registerLocale = useTranslation("Register");

  const updateRegisterCredentials = (
    field: keyof RegisterCredentials,
    value: string
  ) => {
    setRegisterCredentials((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setPending(true);

    let response: string = "";

    try {
      response = await registerUser(registerCredentials);
      setResponseData(response);
      setSuccess(true);
      setRegisterCredentials({
        name: "",
        toBeConfirmedEmail: "",
        birthDate: "",
        language: "",
        password: "",
      });
    } catch (error) {
      setResponseData(error instanceof Error ? error.message : String(error));
      setError(true);
    } finally {
      setPending(false);
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
        <section className="flex flex-col md:flex-row gap-5">
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
            <NameInput
              value={registerCredentials?.name ?? ""}
              onChange={(event) =>
                updateRegisterCredentials("name", event.target.value)
              }
              placeholder={registerLocale.t("userName")}
            />
            <EmailInput
              value={registerCredentials?.toBeConfirmedEmail ?? ""}
              onChange={(event) =>
                updateRegisterCredentials(
                  "toBeConfirmedEmail",
                  event.target.value
                )
              }
              placeholder={registerLocale.t("userEmail")}
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
              {isPending
                ? "Registering..."
                : registerLocale.t("registerButtonText")}
            </Button>
            <section className="flex flex-col gap-5 md:flex-row md:gap-10 underline">
              <Link href="/login">
                {registerLocale.t("existingUserLoginText")}
              </Link>
            </section>
          </form>
          {isSuccess && (
            <p className="text-white p-2 mt-5 rounded-4xl text-center bg-green-900 ">
              {responseData}
            </p>
          )}
          {isError && (
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
