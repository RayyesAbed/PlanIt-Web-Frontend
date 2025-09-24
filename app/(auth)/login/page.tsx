import { Metadata } from "next";
import LoginPageClient from "./LoginPageClient";

export const metadata: Metadata = {
  title: "Login | PlanIt",
  description: "Login to continue your journey",
};

export default function Page() {
  return <LoginPageClient />;
}
