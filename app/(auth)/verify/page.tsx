"use client";
import Logo from "@/app/_components/shared/logo/Logo";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import useVerifyEmail from "./_hooks/useVerifyEmail";
import { useTranslation } from "react-i18next";
import AuthButton from "@/app/_components/shared/ui/authButton";

const EmailVerify = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? undefined;

  const emailVerificationStatus = useVerifyEmail(token);

  const emailVerifyLocale = useTranslation("EmailVerify");

  let emailVerificationMessage;

  switch (emailVerificationStatus) {
    case "loading":
      emailVerificationMessage = emailVerifyLocale.t(
        "inProgressEmailVerification",
      );
      break;
    case "success":
      emailVerificationMessage = emailVerifyLocale.t(
        "successfulEmailVerification",
      );
      break;
    case "alreadyVerified":
      emailVerificationMessage = emailVerifyLocale.t(
        "existingEmailVerification",
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
            <AuthButton>{emailVerifyLocale.t("goToLoginButton")}</AuthButton>
          </Link>
        ))}

      {emailVerificationStatus == "error" && (
        <Link href="/register">
          <AuthButton>
            {emailVerifyLocale.t("returnToRegisterButton")}
          </AuthButton>
        </Link>
      )}
    </main>
  );
};

export default EmailVerify;
