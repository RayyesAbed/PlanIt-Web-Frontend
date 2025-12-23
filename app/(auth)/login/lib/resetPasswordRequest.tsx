const resetPasswordRequest = async (email: string) => {
  try {
    const response = await fetch(`/api/password-reset-request`, {
      method: "POST",
      body: JSON.stringify({ email: email }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

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

    return "200PasswordResetRequestMessage";
  } catch (error) {
    console.error("Password reset error:", error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export default resetPasswordRequest;
