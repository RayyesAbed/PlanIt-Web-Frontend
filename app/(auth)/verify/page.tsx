"use client";
import Logo from "@/app/_components/Logo";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useVerifyEmail from "./_hooks/useVerifyEmail";

const Page = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? undefined;

  const emailVerificationStatus = useVerifyEmail(token);

  return (
    <main className="w-full h-dvh flex flex-col items-center justify-center gap-7">
      <Logo />
      <h1 className="font-bold text-2xl">User Email Verification</h1>
      <p>
        {emailVerificationStatus == "success"
          ? "Email verified successfully"
          : emailVerificationStatus == "loading"
          ? "Email verification in progress"
          : "Email verification failed"}
      </p>

      {emailVerificationStatus == "success" && (
        <Link href="/login">
          <Button>Go to Login</Button>
        </Link>
      )}

      {emailVerificationStatus == "error" && (
        <Link href="/register">
          <Button>Return to Register</Button>
        </Link>
      )}
    </main>
  );
};

export default Page;
