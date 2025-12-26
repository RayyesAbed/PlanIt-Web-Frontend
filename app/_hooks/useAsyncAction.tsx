import { useState, useCallback } from "react";

type AsyncAction<T> = () => Promise<T>;

const useAsyncAction = () => {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [responseData, setResponseData] = useState<string | null>(null);

  const run = useCallback(
    async <T,>(action: AsyncAction<T>, onSuccess?: (result: T) => void) => {
      setPending(true);
      setSuccess(false);
      setError(false);
    },
    []
  );

  return {
    run,
  };
};

export default useAsyncAction;
