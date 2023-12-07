"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm
} from "react-hook-form";
import * as Yup from "yup";
import { colors } from "../../../../constants/colors";
import AppButton from "../../../common/AppButton";
import InputError from "../../../common/inputs/InputError";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required")
});

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Handle sign-in logic here
    console.log("Form submitted with values:", data);
  };

  const onError: SubmitErrorHandler<FormData> = (errors, e) => {
    console.error("Form submission error:", errors, e);
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
          onSubmit={methods.handleSubmit(onSubmit, onError)}
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
                border: `2px solid ${colors.cambridge_blue}`,
                borderRadius: "5px",
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
            <InputError error={methods.formState.errors.password?.message} />
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
                border: `2px solid ${colors.cambridge_blue}`,
                borderRadius: "5px",
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
              {showPassword ? (
                <Icon
                  path={mdiEyeOff}
                  style={{
                    color: colors.orange,
                    width: "30px",
                    height: "30px"
                  }}
                />
              ) : (
                <Icon
                  path={mdiEye}
                  style={{
                    color: colors.orange,
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
                  color: colors.orange,
                  fontWeight: "600",
                  fontSize: "14px",
                  letterSpacing: "1px"
                }}
                component={"h1"}>
                forgot password?
              </Typography>
            </Link>
          </Box>
          <AppButton
            text="Continue"
            type="submit"
            sx={{
              background: colors.cambridge_blue,
              height: "50px",
              color: colors.light,
              fontWeight: "700",
              marginTop: "2rem",
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
