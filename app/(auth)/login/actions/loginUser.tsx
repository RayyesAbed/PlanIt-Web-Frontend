import LoginCredentials from "../_types/LoginCredentials";

const loginUser = async (prevState: unknown, formData: FormData) => {
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
          return "Invalid credentials! Please check your input fields";
        case 401:
          return "Incorrect email, password, or both!";
        case 429:
          return "You tried to log in many times! Try again later";
        default:
          if (response.status >= 500) {
            return "Server error. Please try again later.";
          }
      }
    }
  } catch (error) {
    console.error("Login error:", error);
    return "Unable to reach the server. Please check your internet connection.";
  }
};

export default loginUser;
