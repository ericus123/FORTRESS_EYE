"use client";

import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CombinedError } from "urql";
import { usePasswordReset } from "../../hooks/useAuth";
import ResetEmailCheck from "./EmailCheck";
import ResetEmailForm from "./EmailForm";
import ResetForm from "./ResetForm";

export type PassReset = {
  handleRequest: (email: string, callback: () => void) => void;
  isLoading: boolean;
  error?: CombinedError;
};

const ForgotPassword = () => {
  const searchParam = useSearchParams();

  const reset = searchParam.get("reset");

  const [email, setEmail] = useState<string | null>(null);

  const {
    handleRequest,
    requestFetching,
    requestError,
    handlePasswordReset,
    fetching,
    error
  } = usePasswordReset();

  return (
    <Box>
      <Box>
        {!reset || reset == "email" ? (
          <ResetEmailForm
            {...{
              handleEmail: (email) => {
                setEmail(email);
              },
              error: requestError,
              isLoading: requestFetching,
              handleRequest
            }}
          />
        ) : reset === "check" ? (
          <ResetEmailCheck
            {...{
              error: requestError,
              isLoading: requestFetching,
              handleRequest,
              email
            }}
          />
        ) : (
          <ResetForm
            {...{
              handleRequest,
              email,
              error: error,
              isLoading: fetching,
              handlePasswordReset,
              token: reset
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ForgotPassword;
