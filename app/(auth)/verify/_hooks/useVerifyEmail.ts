import { useEffect, useState } from "react";
import verifyEmail from "../action/verifyEmail";

function useVerifyEmail(token?: string) {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    verifyEmail(token)
      .then((data) => setStatus(data.hasFailed ? "error" : "success"))
      .catch(() => setStatus("error"));
  }, [token]);

  return status;
}

export default useVerifyEmail;
