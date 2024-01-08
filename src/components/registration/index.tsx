"use client";

import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { verifyToken } from "../../helpers";
import { useSignup } from "../../hooks/useAuth";
import RegistrationForm from "./form/RegistrationForm";

const Registration = () => {
  const searchParams = useSearchParams();

  const token = searchParams?.get("token");

  const data = token != undefined ? verifyToken(token) : null;

  const { handleSignup, error, fetching } = useSignup();

  return (
    <Box>
      <RegistrationForm
        {...{
          isLoading: fetching,
          error,
          handleSignup
        }}
      />
    </Box>
  );
};

export default Registration;
