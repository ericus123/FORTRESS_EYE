import { yupResolver } from "@hookform/resolvers/yup";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { colors } from "../../constants/colors";
import { handleStatus } from "../../redux/modules/navigation/navigationSlice";
import AppButton from "../common/AppButton";
import InputError from "../common/inputs/InputError";
import CenteredPopup from "../common/popups/Centered";

type FormData = {
  newPassword: string;
  confirmPassword: string;
};

const PasswordResetForm = () => {
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("New password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least 8 characters, one letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Handle password reset logic here
    // You can use 'data.newPassword' for further processing or API calls

    dispatch(
      handleStatus({
        isSuccess: true,
        show: true,
        message: {
          success: "Password reset successfully!"
        }
      })
    );
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  return (
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
                  fontWeight: "500",
                  opacity: 0.9,
                  lineHeight: "normal",
                  textAlign: "center",
                  borderRadius: "6px",
                  "&:hover": {
                    background: colors.teal
                  }
                }}
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
  );
};

export default PasswordResetForm;
