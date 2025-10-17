"use server";
import translateFormStatus from "@/lib/translateFormStatus";
import LoginCredentials from "../_types/LoginCredentials";

const loginUser = async (prevState: unknown, formData: FormData) => {
  const t = await translateFormStatus();

  try {
    const credentials: LoginCredentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(credentials),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      switch (response.status) {
        case 400:
          return t("400Error");
        case 401:
          return t("401Error");
        case 429:
          return t("429Error");
        default:
          if (response.status >= 500) {
            return t("500Error");
          }
      }
    }
  } catch (error) {
    console.error("Login error:", error);
    return t("500Error");
  }
};

export default loginUser;
