const resetPassword = async (newPassword: string, token: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password?token=${token}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ newPassword: newPassword }),
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

  return "200PasswordResetMessage";
};

export default resetPassword;
