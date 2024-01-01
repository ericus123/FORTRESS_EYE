"use client";

import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import ResetEmailCheck from "./EmailCheck";
import ResetEmailForm from "./EmailForm";
import ResetForm from "./ResetForm";

const ForgotPassword = () => {
  const searchParam = useSearchParams();

  const reset = searchParam.get("reset");

  return (
    // <StatusPopup
    //   status={{
    //     show: true,
    //     isSuccess: true,
    //     message: {
    //       success: "Voila! Password reset is a success. 🎉"
    //     }
    //   }}
    //   isClosable={false}
    //   sx={{
    //     width: "400px"
    //   }}
    // />

    <Box>
      {!reset || reset == "email" ? (
        <ResetEmailForm />
      ) : reset === "check" ? (
        <ResetEmailCheck />
      ) : (
        <ResetForm />
      )}
    </Box>
  );
};

export default ForgotPassword;
