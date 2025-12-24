"use client";
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
  const [newPassword, setNewPassword] = useState("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? undefined;

  const { t } = useTranslation("PasswordReset");

  // TODO: Send the token with user's new password to backend and verify accordingly

  return (
    <main className="w-full h-dvh flex flex-col items-center justify-center gap-7">
      <Logo />
      <h1 className="font-bold text-2xl">{t("passwordResetHeader")}</h1>
      <Input
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
        type="password"
        placeholder={t("newPasswordInput")}
        className="w-[300px] font-semibold"
        required
      />
      <Button className="w-[150px] font-bold cursor-pointer">
        {t("resetPasswordButton")}
      </Button>
    </main>
  );
};

export default Page;
