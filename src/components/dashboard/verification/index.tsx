import { Box, Typography } from "@mui/material";
import { colors } from "../../../constants/colors";
import { useVerification } from "../../../hooks/useAuth";
import AppButton from "../../common/AppButton";
import CenteredPopup from "../../common/popups/Centered";

export enum RoleName {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  DEFAULT = "DEFAULT"
}
export type TokenData = {
  sub: string;
  email: string;
  isVerified: boolean;
  role?: RoleName;
  permissions?: PermissionName[];
};

const Verification = ({ email }: { email: string }) => {
  const { handleResend, resendFetching } = useVerification();
  return (
    <CenteredPopup
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "150px",
        width: "400px",
        background: colors.graphite,
        borderRadius: "10px",
        padding: "2rem"
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px"
        }}>
        <Typography
          component={"p"}
          sx={{
            textAlign: "center",
            color: colors.light,
            fontWeight: 400,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            opacity: 0.9,
            lineHeight: "normal"
          }}>
          A verification link has been sent to{" "}
          <Typography
            component={"h1"}
            sx={{
              color: colors.teal,
              fontWeight: 900,
              fontFamily: "Poppins",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              lineHeight: "normal",
              textAlign: "center"
            }}>
            {email}
          </Typography>
          Didn&apos;t see the link ?
        </Typography>
        <AppButton
          sx={{
            cursor: "pointer",
            background: colors.teal,
            color: colors.light,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            textAlign: "center",
            boxShadow: "none",
            height: "30px",
            transition: ".3s sease-in-out",
            "&:hover": {
              transition: ".3s sease-in-out",
              background: colors.active,
              boxShadow: "none"
            }
          }}
          title="resend"
          isLoading={resendFetching}
          onClick={() => handleResend(email)}
        />
      </Box>
    </CenteredPopup>
  );
};

export default Verification;
