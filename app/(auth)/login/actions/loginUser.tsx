"use server";
import translateFormStatus from "@/lib/translateFormStatus";
import LoginCredentials from "../_types/LoginCredentials";

const loginUser = async (loginCredentials: LoginCredentials) => {
  const t = await translateFormStatus();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(loginCredentials),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error(t("400Error"));
        case 401:
          throw new Error(t("401Error"));
        case 429:
          throw new Error(t("429Error"));
      }
    }

    return "Successful login";
  } catch (error) {
    console.error("Login error:", error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export default loginUser;
