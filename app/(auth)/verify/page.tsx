"use client";
import Logo from "@/app/_components/Logo";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useVerifyEmail from "./_hooks/useVerifyEmail";
import { useTranslation } from "react-i18next";

const Page = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? undefined;

  const emailVerificationStatus = useVerifyEmail(token);

  const { t } = useTranslation("EmailVerify");

  return (
    <main className="w-full h-dvh flex flex-col items-center justify-center gap-7">
      <Logo />
      <h1 className="font-bold text-2xl">{t("VerificationHeading")}</h1>
      <p>
        {emailVerificationStatus == "success"
          ? t("successfulEmailVerification")
          : emailVerificationStatus == "loading"
          ? t("inProgressEmailVerification")
          : t("failedEmailVerification")}
      </p>

      {emailVerificationStatus == "success" && (
        <Link href="/login">
          <Button>{t("goToLoginButton")}</Button>
        </Link>
      )}

      {emailVerificationStatus == "error" && (
        <Link href="/register">
          <Button>{t("returnToRegisterButton")}</Button>
        </Link>
      )}
    </main>
  );
};

export default Page;
