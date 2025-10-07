"use client";
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? undefined;

  // TODO: Send the token with user's new password to backend and verify accordingly

  return (
    <main className="w-full h-dvh flex flex-col items-center justify-center gap-7">
      <Logo />
      <h1 className="font-bold text-2xl">Password Reset</h1>
      <Input
        type="password"
        placeholder="New Password"
        className="w-[300px] font-semibold"
        required
      />
      <Button className="w-[150px] font-bold cursor-pointer">Reset</Button>
    </main>
  );
};

export default Page;
