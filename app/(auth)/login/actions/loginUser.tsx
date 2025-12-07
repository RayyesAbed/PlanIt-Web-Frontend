"use server";
import LoginCredentials from "../_types/LoginCredentials";

const loginUser = async (loginCredentials: LoginCredentials) => {
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
          throw new Error("400Error");
        case 401:
          throw new Error("401Error");
        case 429:
          throw new Error("429Error");
      }
    }

    return "200Message";
  } catch (error) {
    console.error("Login error:", error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export default loginUser;
