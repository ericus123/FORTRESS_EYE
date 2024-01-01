"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { colors } from "../../constants/colors";
import { useInviteMember } from "../../hooks/useMembers";
import { handleInviteShow } from "../../redux/modules/member/memberSlice";
import { handleStatus } from "../../redux/modules/navigation/navigationSlice";
import AppButton from "../common/AppButton";
import InputError from "../common/inputs/InputError";

type FormData = {
  email: string;
};
const PasswordMailForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required")
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const { inviteMember, data, fetching, error } = useInviteMember();

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    inviteMember(data?.email, () => {
      methods.reset();
      dispatch(handleInviteShow());
      dispatch(
        handleStatus({
          isSuccess: true,
          show: true,
          message: {
            success: "Invitation sent! ✨"
          }
        })
      );
    });
  };

  useEffect(() => {
    if (error != undefined) {
      dispatch(
        handleStatus({
          isSuccess: false,
          show: true,
          message: {
            fail: "Oops! something went wrong 🙁"
          }
        })
      );
    }
  }, [error]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%"
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
            <TextField
              variant="standard"
              id="email"
              autoComplete="off"
              {...methods.register("email")}
              error={Boolean(methods.formState.errors.email)}
              fullWidth
              autoFocus={false}
              placeholder="john@email.com"
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
            <InputError error={methods.formState.errors.email?.message} />
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
              title="Next"
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
  );
};

export default PasswordMailForm;
