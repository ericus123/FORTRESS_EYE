"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CombinedError } from "urql";
import * as Yup from "yup";
import { colors } from "../../../../constants/colors";
import { getGraphQLErrorMessage } from "../../../../helpers";
import { SigninInput } from "../../../../hooks/useAuth";
import AppButton from "../../../common/AppButton";
import InputError from "../../../common/inputs/InputError";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, one letter, one number, and one special character"
    )
});

interface FormData {
  email: string;
  password: string;
}

const LoginForm = ({
  handleSignin,
  isLoading,
  error
}: {
  handleSignin: (input: SigninInput) => void;
  isLoading: boolean;
  error?: CombinedError;
}) => {
  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    handleSignin(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "100%"
      }}>
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
          <Box>
            <Typography
              sx={{
                color: colors.light
              }}
              component={"h3"}>
              Email
            </Typography>
            <TextField
              variant="standard"
              id="email"
              type="email"
              autoComplete="off"
              {...methods.register("email")}
              error={Boolean(methods.formState.errors.email)}
              fullWidth
              autoFocus={false}
              sx={{
                border: "none",
                borderBottom: `2px solid ${colors.cambridge_blue}`,
                borderRadius: 0,
                height: "45px",
                color: colors.light,
                marginBottom: 0,
                paddingLeft: "10px",
                fill: "none"
              }}
              InputProps={{
                disableUnderline: true,
                style: {
                  padding: 0,
                  height: "45px",
                  color: colors.light,
                  fill: "none"
                }
              }}
            />
            <InputError error={methods.formState.errors.email?.message} />
          </Box>
          <Box
            sx={{
              position: "relative"
            }}>
            <Typography
              sx={{
                color: colors.light
              }}
              component={"h3"}>
              Password
            </Typography>
            <TextField
              variant="standard"
              id="password"
              type={showPassword ? "text" : "password"}
              {...methods.register("password")}
              error={Boolean(methods.formState.errors.password)}
              fullWidth
              autoComplete="off"
              autoFocus={false}
              InputProps={{
                disableUnderline: true,
                style: {
                  padding: 0,
                  height: "45px",
                  color: colors.light,
                  marginBottom: 0,
                  border: "none",
                  paddingLeft: "10px",
                  fill: "none"
                }
              }}
              sx={{
                border: "none",
                borderBottom: `2px solid ${colors.cambridge_blue}`,
                borderRadius: 0,
                outline: "none",
                height: "45px",
                "&:focus": {
                  borderColor: "red",
                  fill: "none"
                }
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "30px",
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
            <InputError error={methods.formState.errors.password?.message} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right"
            }}>
            <Link
              href={"/forgot-password"}
              style={{
                textDecoration: "none"
              }}
              shallow>
              <Typography
                sx={{
                  color: colors.teal,
                  fontWeight: "600",
                  fontSize: "14px",
                  letterSpacing: "1px"
                }}
                component={"h1"}>
                forgot password?
              </Typography>
            </Link>
          </Box>
          {error ? (
            <Typography
              component={"h3"}
              sx={{
                color: colors.rose_red,
                fontSize: "clamp(12px, 1vw, 14px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                textAlign: "center"
              }}>
              {getGraphQLErrorMessage(error)}
            </Typography>
          ) : null}
          <AppButton
            title="Continue"
            type="submit"
            isLoading={isLoading}
            sx={{
              background: colors.cambridge_blue,
              height: "50px",
              color: colors.light,
              fontWeight: "700",
              borderRadius: "6px",
              "&:hover": {
                background: colors.cambridge_blue
              }
            }}
          />
        </form>
      </FormProvider>
    </Box>
  );
};

export default LoginForm;
