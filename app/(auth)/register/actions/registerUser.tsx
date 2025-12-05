"use server";
import RegisterCredentials from "../_types/RegisterCredentials";
import translateFormStatus from "@/lib/translateFormStatus";

const registerUser = async (
  registerCredentials: RegisterCredentials
): Promise<string> => {
  const t = await translateFormStatus();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register_request`,
      {
        method: "POST",
        body: JSON.stringify(registerCredentials),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      if (response.status == 400) {
        throw new Error(t("emptyFieldsError"));
      } else if (response.status == 429) {
        throw new Error(t("429Error"));
      }
    }

    return t("verificationEmail");
  } catch (error) {
    console.error("Register error:", error);
    throw new Error(t("500Error"));
  }
};

export default registerUser;
