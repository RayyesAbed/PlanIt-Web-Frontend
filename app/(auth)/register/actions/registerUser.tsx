import RegisterCredentials from "../_types/RegisterCredentials";

const registerUser = async (prevData: unknown, formData: FormData) => {
  try {
    const credentials: RegisterCredentials = {
      name: formData.get("name") as string,
      toBeConfirmedEmail: formData.get("email") as string,
      birthDate: (formData.get("birthDate") as string) ?? null,
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
          error: "One of the fields is empty or invalid, please check them",
        };
      } else if (response.status == 429) {
        return {
          error: "You tried to register too many times! Try again later",
        };
      }
    }

    return {
      success: "A verification email has been sent, please check your mailbox",
    };
  } catch (error) {
    console.error("Register error:", error);
    return {
      error:
        "Unable to reach the server. Please check your internet connection.",
    };
  }
};

export default registerUser;
