import RegisterCredentials from "../_types/RegisterCredentials";

const registerUser = async (
  registerCredentials: RegisterCredentials
): Promise<string> => {
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
    switch (response.status) {
      case 400:
        throw new Error("emptyFieldsError");
      case 429:
        throw new Error("429Error");
    }
  }

  return "201RegisterMessage";
};

export default registerUser;
