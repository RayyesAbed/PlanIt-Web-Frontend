"use client";
import Logo from "@/app/_components/shared/logo/Logo";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/_components/shared/ui/button";
import useVerifyEmail from "./_hooks/useVerifyEmail";
import { useTranslation } from "react-i18next";

const EmailVerify = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? undefined;

  const emailVerificationStatus = useVerifyEmail(token);

  const emailVerifyLocale = useTranslation("EmailVerify");

  let emailVerificationMessage;

  switch (emailVerificationStatus) {
    case "loading":
      emailVerificationMessage = emailVerifyLocale.t(
        "inProgressEmailVerification"
      );
      break;
    case "success":
      emailVerificationMessage = emailVerifyLocale.t(
        "successfulEmailVerification"
      );
      break;
    case "alreadyVerified":
      emailVerificationMessage = emailVerifyLocale.t(
        "existingEmailVerification"
      );
      break;
    default:
      emailVerificationMessage = emailVerifyLocale.t("failedEmailVerification");
  }

  return (
    <main className="w-full h-dvh flex flex-col items-center justify-center gap-7">
      <Logo />
      <h1 className="font-bold text-2xl">
        {emailVerifyLocale.t("VerificationHeading")}
      </h1>
      <p>{emailVerificationMessage}</p>

      {emailVerificationStatus == "success" ||
        (emailVerificationStatus == "alreadyVerified" && (
          <Link href="/login">
            <Button>{emailVerifyLocale.t("goToLoginButton")}</Button>
          </Link>
        ))}

      {emailVerificationStatus == "error" && (
        <Link href="/register">
          <Button>{emailVerifyLocale.t("returnToRegisterButton")}</Button>
        </Link>
      )}
    </main>
  );
};

export default EmailVerify;
