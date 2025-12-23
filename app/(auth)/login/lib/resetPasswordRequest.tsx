const resetPasswordRequest = async (email: string) => {
  try {
    await fetch(`/api/password-reset-request`, {
      method: "POST",
      body: JSON.stringify({ email: email }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Password reset error:", error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export default resetPasswordRequest;
