import { yupResolver } from "@hookform/resolvers/yup";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { PassReset } from ".";
import { PASSWORD_REGEX } from "../../constants";
import { colors } from "../../constants/colors";
import { getGraphQLErrorMessage, verifyToken } from "../../helpers";
import AppButton from "../common/AppButton";
import CheckPopup from "../common/ErrorPupup";
import InputError from "../common/inputs/InputError";
import CenteredPopup from "../common/popups/Centered";
import StatusPopup from "../common/popups/Status";

type FormData = {
  newPassword: string;
  confirmPassword: string;
};

const PasswordResetForm: FC<
  PassReset & {
    email: string | null;
    token: string;
    handlePasswordReset: (
      data: { password: string; token: string },
      callback: () => void
    ) => void;
  }
> = ({ error, isLoading, handlePasswordReset, token }) => {
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("New password is required")
      .matches(
        PASSWORD_REGEX,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    handlePasswordReset(
      {
        password: data?.newPassword,
        token
      },
      () => {
        setIsSuccessShow(true);
        setTimeout(() => {
          router.replace("/login");
        }, 3000);
      }
    );
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isSuccessShow, setIsSuccessShow] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  const searchParam = useSearchParams();
  const reset = searchParam.get("reset");

  const _data = verifyToken(`${reset}`);

  const [isInvalid, setIsInvalid] = useState<boolean>(!_data?.email);

  useEffect(() => {
    if (
      error != undefined &&
      getGraphQLErrorMessage(error) ===
        "Oops! Something went wrong. Please try logging in again."
    ) {
      setIsInvalid(true);
    }
  }, [error]);

  return (
    <Box>
      {isInvalid ? (
        <CenteredPopup>
          <CheckPopup
            {...{
              isSuccess: false,
              message: "Invalid or expired link"
            }}
          />
        </CenteredPopup>
      ) : isSuccessShow ? (
        <StatusPopup
          isClosable={false}
          status={{
            show: true,
            isSuccess: true,
            message: {
              success: "Voila! Password reset is a success. 🎉"
            }
          }}
          sx={{
            width: "400px"
          }}
        />
      ) : (
        <CenteredPopup
          sx={{
            background: colors.graphite,
            borderRadius: "15px",
            padding: "2rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
          }}>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "2rem"
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px"
              }}>
              <Typography
                component={"h1"}
                sx={{
                  color: colors.light_8,
                  fontSize: "clamp(24px, 1.5vw, 26px)",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  opacity: 0.9,
                  lineHeight: "normal",
                  textAlign: "center"
                }}>
                Reset your password
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  color: colors.light_8,
                  fontSize: "clamp(12px, 1.5vw, 14px)",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  opacity: 0.9,
                  lineHeight: "normal",
                  textAlign: "center"
                }}>
                Enter a new password for your account
              </Typography>
            </Box>
            <FormProvider {...methods}>
              <form
                autoCorrect="false"
                autoSave="false"
                autoComplete="off"
                autoFocus={false}
                onSubmit={methods.handleSubmit(onSubmit)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem"
                }}>
                <Box
                  sx={{
                    position: "relative"
                  }}>
                  <TextField
                    variant="standard"
                    id="newPassword"
                    autoComplete="off"
                    {...methods.register("newPassword")}
                    error={Boolean(methods.formState.errors.newPassword)}
                    fullWidth
                    autoFocus={false}
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    sx={{
                      borderBottom: `2px solid ${colors.teal}`,
                      height: "45px",
                      color: colors.teal,
                      marginBottom: 0,
                      paddingLeft: "10px",
                      fill: "none"
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        padding: 0,
                        height: "45px",
                        color: colors.teal,
                        fill: "none"
                      }
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: "0px",
                      right: "10px",
                      cursor: "pointer"
                    }}
                    component={"div"}
                    onClick={handleTogglePassword}>
                    {!showPassword ? (
                      <Icon
                        path={mdiEyeOff}
                        style={{
                          color: colors.teal,
                          width: "30px",
                          height: "30px"
                        }}
                      />
                    ) : (
                      <Icon
                        path={mdiEye}
                        style={{
                          color: colors.teal,
                          width: "30px",
                          height: "30px"
                        }}
                      />
                    )}
                  </Box>
                  <InputError
                    error={methods.formState.errors.newPassword?.message}
                  />
                </Box>
                <Box
                  sx={{
                    position: "relative"
                  }}>
                  <TextField
                    variant="standard"
                    id="confirmPassword"
                    autoComplete="off"
                    {...methods.register("confirmPassword")}
                    error={Boolean(methods.formState.errors.confirmPassword)}
                    fullWidth
                    autoFocus={false}
                    type="password"
                    placeholder="Confirm Password"
                    sx={{
                      borderBottom: `2px solid ${colors.teal}`,
                      height: "45px",
                      color: colors.teal,
                      marginBottom: 0,
                      paddingLeft: "10px",
                      fill: "none"
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        padding: 0,
                        height: "45px",
                        color: colors.teal,
                        fill: "none"
                      }
                    }}
                  />

                  <InputError
                    error={methods.formState.errors.confirmPassword?.message}
                  />
                </Box>
                {error != undefined ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center"
                    }}>
                    <InputError error={getGraphQLErrorMessage(error)} />
                  </Box>
                ) : null}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1rem"
                  }}>
                  <AppButton
                    title="Reset Password"
                    sx={{
                      background: colors.teal,
                      color: colors.light,
                      width: "100%",
                      height: "40px",
                      fontSize: "clamp(14px, 1.5vw, 16px)",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      textAlign: "center",
                      borderRadius: "6px",
                      "&:hover": {
                        background: colors.teal
                      }
                    }}
                    disabled={isLoading}
                    isLoading={isLoading}
                  />
                  <Link
                    href={"/login"}
                    style={{
                      textDecoration: "none"
                    }}>
                    <Typography
                      component={"h2"}
                      textAlign={"center"}
                      sx={{
                        fontSize: "clamp(14px, 1.5vw, 16px)",
                        color: colors.teal,
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        opacity: 0.9,
                        lineHeight: "normal",
                        textAlign: "center",
                        cursor: "pointer"
                      }}>
                      Back to log in
                    </Typography>
                  </Link>
                </Box>
              </form>
            </FormProvider>
          </Box>
        </CenteredPopup>
      )}
    </Box>
  );
};

export default PasswordResetForm;
