"use client";
import Logo from "@/app/_components/shared/logo/Logo";
import useAsyncFormAction from "@/app/_hooks/useAsyncFormAction";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import resetPassword from "./_actions/resetPassword";
import Link from "next/link";
import PasswordInput from "../register/_components/inputs/PasswordInput";
import AuthButton from "@/app/_components/shared/ui/authButton";

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState("");

  const { run, pending, success, error, responseData, setResponseData } =
    useAsyncFormAction();

  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const passwordResetLocale = useTranslation("PasswordReset");
  const formStatusMessage = useTranslation("FormStatus");

  const handlePasswordReset = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await run(() => resetPassword(newPassword, token));
      setResponseData(formStatusMessage.t(String(response)));
    } catch (err) {
      setResponseData(
        err instanceof Error ? formStatusMessage.t(err.message) : String(err),
      );
    }
  };

  return (
    <main className="w-full h-dvh flex flex-col items-center justify-center gap-7">
      <Logo />
      <h1 className="font-bold text-2xl">
        {passwordResetLocale.t("passwordResetHeader")}
      </h1>

      {!success && (
        <>
          <form
            onSubmit={handlePasswordReset}
            className="flex flex-col items-center mb-20 gap-7"
          >
            <PasswordInput
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder={passwordResetLocale.t("newPasswordInput")}
            />
            <AuthButton disabled={pending}>
              {passwordResetLocale.t("resetPasswordButton")}
            </AuthButton>
          </form>
        </>
      )}

      {error && (
        <p className="bg-red-900 text-white p-2 w-[150px mt-5 rounded-4xl text-center">
          {responseData}
        </p>
      )}
      {success && (
        <>
          <p>{responseData}</p>
          <Link href="/login">
            <AuthButton>Go to login</AuthButton>
          </Link>
        </>
      )}
    </main>
  );
};

export default PasswordReset;
