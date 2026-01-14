import { Metadata } from "next";
import RegisterPageClient from "./RegisterPageClient";

export const metadata: Metadata = {
  title: "Register | PlanIt",
  description: "Create a new account to start your journey",
};

export default function RegisterPage() {
  return <RegisterPageClient />;
}
