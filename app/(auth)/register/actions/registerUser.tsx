"use server";
import RegisterCredentials from "../_types/RegisterCredentials";
import translateFormStatus from "@/lib/translateFormStatus";

const registerUser = async (prevData: unknown, formData: FormData) => {
  const t = await translateFormStatus();

  try {
    const credentials: RegisterCredentials = {
      name: formData.get("name") as string,
      toBeConfirmedEmail: formData.get("email") as string,
      birthDate: (formData.get("birthDate") as string) ?? null,
      language: formData.get("language") as string,
      password: formData.get("password") as string,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register_request`,
      {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      if (response.status == 400) {
        return {
          error: t("emptyFieldsError"),
        };
      } else if (response.status == 429) {
        return {
          error: t("429Error"),
        };
      }
    }

    return {
      success: t("verificationEmail"),
    };
  } catch (error) {
    console.error("Register error:", error);
    return {
      error: t("500Error"),
    };
  }
};

export default registerUser;
