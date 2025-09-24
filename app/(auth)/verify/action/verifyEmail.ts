const verifyEmail = async (token: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email?token=${token}`,
      { method: "POST" }
    );

    if (!response.ok) {
      return { message: "Failed to verify token", hasFailed: true };
    }

    return { message: "Verified token successfully", hasFailed: false };
  } catch (error) {
    console.error(error);
    return { message: "Failed to verify token", hasFailed: true };
  }
};

export default verifyEmail;
