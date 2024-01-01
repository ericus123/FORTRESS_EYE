import { Box, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import CenteredPopup from "../common/popups/Centered";
import PasswordMailForm from "./MailForm";

const ResetEmailForm = () => {
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
          width: "400px",
          height: "250px",
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
            Forgot Your Password?
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
            Your password will be reset by email
          </Typography>
        </Box>
        <Box>
          <PasswordMailForm />
        </Box>
      </Box>
    </CenteredPopup>
  );
};

export default ResetEmailForm;
