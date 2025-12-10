import { useEffect, useState } from "react";
import verifyEmail from "../action/verifyEmail";
import emailVerificationCodes from "../_types/emailVerificationCodes";

function useVerifyEmail(token?: string) {
  const [status, setStatus] = useState<
    "loading" | "success" | "alreadyVerified" | "error"
  >("loading");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    verifyEmail(token).then((data) => {
      switch (data.code) {
        case emailVerificationCodes.SUCCESS:
          setStatus("success");
          break;
        case emailVerificationCodes.ALREADY_VERIFIED:
          setStatus("alreadyVerified");
          break;
        default:
          setStatus("error");
      }
    });
  }, [token]);

  return status;
}

export default useVerifyEmail;
