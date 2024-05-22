"use client";

import ErrorScreen from "@/screens/error/error_screen";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <ErrorScreen error={error} reset={reset} />;
};

export default Error;
