import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CombinedError } from "urql";
import * as Yup from "yup";
import { colors } from "../../../../constants/colors";
import { getGraphQLErrorMessage } from "../../../../helpers";
import AppButton from "../../../common/AppButton";
import InputError from "../../../common/inputs/InputError";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio?: string;
  username?: string;
};

const ProfileForm = ({
  onSubmit,
  error,
  isLoading
}: {
  onSubmit?: SubmitHandler<FormData>;
  error?: CombinedError;
  isLoading?: boolean;
}) => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .trim()
      .required("First name is required")
      .min(1, "First name must be at least 1 character")
      .max(30, "First name must be at most 30 characters"),

    lastName: Yup.string()
      .trim()
      .required("Last name is required")
      .min(1, "Last name must be at least 1 character")
      .max(30, "Last name must be at most 30 characters"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
      .required("Phone is required"),

    bio: Yup.string()
      .min(30)
      .max(255, "Bio must be at most 255 and min 30 characters"),

    username: Yup.string()
      .min(3)
      .max(20, "Username must be at most 20 and min 3 characters")
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  return (
    <Box>
      <FormProvider {...methods}>
        <form
          autoCorrect="false"
          autoSave="false"
          autoComplete="off"
          autoFocus={false}
          // onSubmit={methods.handleSubmit(onSubmit)}
          style={{
            display: "flex",
            gap: "2rem",
            width: "800px",
            flexWrap: "wrap"
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".75rem"
            }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem"
              }}>
              <Typography
                component={"h4"}
                sx={{
                  color: colors.light_7,
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                First Name
              </Typography>
              <TextField
                variant="standard"
                id="firstName"
                autoComplete="off"
                {...methods.register("firstName")}
                error={Boolean(methods.formState.errors.firstName)}
                autoFocus={false}
                type="text"
                placeholder="JOHN"
                sx={{
                  borderBottom: `2px solid ${colors.light_8}`,
                  borderRadius: "0px",
                  height: "45px",
                  color: colors.light_8,
                  marginBottom: 0,
                  paddingLeft: "10px",
                  fill: "none",
                  width: "250px"
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    padding: 0,
                    height: "45px",
                    color: colors.light_8,
                    fill: "none"
                  }
                }}
              />
              <InputError
                error={methods.formState.errors?.firstName?.message}
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem"
              }}>
              <Typography
                component={"h4"}
                sx={{
                  color: colors.light_7,
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                Last Name
              </Typography>
              <TextField
                variant="standard"
                id="lastName"
                autoComplete="off"
                {...methods.register("lastName")}
                error={Boolean(methods.formState.errors.lastName)}
                autoFocus={false}
                type="text"
                placeholder="Doe"
                sx={{
                  borderBottom: `2px solid ${colors.light_8}`,
                  borderRadius: "0px",
                  height: "45px",
                  color: colors.light_8,
                  marginBottom: 0,
                  paddingLeft: "10px",
                  fill: "none",
                  width: "250px"
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    padding: 0,
                    height: "45px",
                    color: colors.light_8,
                    fill: "none"
                  }
                }}
              />
              <InputError error={methods.formState.errors.lastName?.message} />
            </Box>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem"
              }}>
              <Typography
                component={"h4"}
                sx={{
                  color: colors.light_7,
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                Email
              </Typography>
              <TextField
                variant="standard"
                id="email"
                autoComplete="off"
                {...methods.register("email")}
                error={Boolean(methods.formState.errors.email)}
                autoFocus={false}
                type="email"
                disabled
                placeholder="example@email.com"
                sx={{
                  borderBottom: `2px solid ${colors.light_8}`,
                  borderRadius: "0px",
                  height: "45px",
                  color: colors.light_8,
                  marginBottom: 0,
                  paddingLeft: "10px",
                  fill: "none",
                  width: "250px"
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    padding: 0,
                    height: "45px",
                    color: colors.light_8,
                    fill: "none"
                  }
                }}
              />
              <InputError error={methods.formState.errors.email?.message} />
            </Box>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem"
              }}>
              <Typography
                component={"h4"}
                sx={{
                  color: colors.light_7,
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                Phone
              </Typography>
              <TextField
                variant="standard"
                id="phone"
                autoComplete="off"
                {...methods.register("phone")}
                error={Boolean(methods.formState.errors.phone)}
                autoFocus={false}
                type="tel"
                placeholder="+25078"
                sx={{
                  borderBottom: `2px solid ${colors.light_8}`,
                  borderRadius: "0px",
                  height: "45px",
                  color: colors.light_8,
                  marginBottom: 0,
                  paddingLeft: "10px",
                  fill: "none",
                  width: "250px"
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    padding: 0,
                    height: "45px",
                    color: colors.light_8,
                    fill: "none"
                  }
                }}
              />
              <InputError error={methods.formState.errors.phone?.message} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".75rem"
            }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem"
              }}>
              <Typography
                component={"h4"}
                sx={{
                  color: colors.light_7,
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                Username
              </Typography>
              <TextField
                variant="standard"
                id="username"
                autoComplete="off"
                {...methods.register("username")}
                error={Boolean(methods.formState.errors.username)}
                autoFocus={false}
                type="text"
                placeholder="you username here"
                sx={{
                  borderBottom: `2px solid ${colors.light_8}`,
                  borderRadius: "0px",
                  height: "45px",
                  color: colors.light_8,
                  marginBottom: 0,
                  paddingLeft: "10px",
                  fill: "none",
                  width: "250px"
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    padding: 0,
                    height: "45px",
                    color: colors.light_8,
                    fill: "none"
                  }
                }}
              />
              <InputError error={methods.formState.errors.username?.message} />
            </Box>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem"
              }}>
              <Typography
                component={"h4"}
                sx={{
                  color: colors.light_7,
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>
                Bio
              </Typography>
              <TextField
                variant="standard"
                id="bio"
                autoComplete="off"
                {...methods.register("bio")}
                error={Boolean(methods.formState.errors.bio)}
                autoFocus={false}
                type="text"
                placeholder="About you"
                sx={{
                  borderBottom: `2px solid ${colors.light_8}`,
                  borderRadius: "0px",
                  height: "165px",
                  color: colors.light_8,
                  marginBottom: 0,
                  paddingLeft: "10px",
                  fill: "none",
                  width: "250px"
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    padding: 0,
                    height: "45px",
                    color: colors.light_8,
                    fill: "none"
                  }
                }}
              />
              <InputError error={methods.formState.errors.bio?.message} />
            </Box>
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
              title="Save Changes"
              sx={{
                background: colors.teal,
                color: colors.light_6,
                width: "175px",
                height: "45px",
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
        </form>
      </FormProvider>
    </Box>
  );
};

export default ProfileForm;