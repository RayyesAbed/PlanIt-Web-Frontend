import { useState, useCallback } from "react";

type AsyncAction<T> = () => Promise<T>;

const useAsyncFormAction = () => {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [responseData, setResponseData] = useState<string | null>(null);

  const run = useCallback(
    async <T,>(action: AsyncAction<T>, onSuccess?: (result: T) => void) => {
      setPending(true);
      setSuccess(false);
      setError(false);
      try {
        const result = await action();
        setSuccess(true);
        onSuccess?.(result);
        return result;
      } catch (err) {
        setError(true);
        throw err;
      } finally {
        setPending(false);
      }
    },
    []
  );

  return {
    run,
    pending,
    success,
    error,
    responseData,
    setResponseData,
  };
};

export default useAsyncFormAction;
