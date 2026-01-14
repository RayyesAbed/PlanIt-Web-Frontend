import emailVerificationCodes from "../_types/emailVerificationCodes";

const verifyEmail = async (token?: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email?token=${token}`,
      { method: "POST" }
    );

    const responseData = await response.json();

    if (responseData.code === emailVerificationCodes.ALREADY_VERIFIED)
      return {
        code: emailVerificationCodes.ALREADY_VERIFIED,
      };

    if (responseData.code === emailVerificationCodes.INVALID_TOKEN)
      return {
        code: emailVerificationCodes.INVALID_TOKEN,
      };

    return {
      code: emailVerificationCodes.SUCCESS,
    };
  } catch (error) {
    console.error(error);
    return { code: emailVerificationCodes.INVALID_TOKEN };
  }
};

export default verifyEmail;
