import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { colors } from "../../constants/colors";
import { images } from "../../constants/images";
import AppButton from "../common/AppButton";
import CenteredPopup from "../common/popups/Centered";

const ResetEmailCheck = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
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
          width: "400px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem"
        }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column"
          }}>
          <Image
            src={images.mailTeal}
            alt="envelope"
            width={50}
            height={50}
            style={{
              margin: "0 auto"
            }}
          />
          <Typography
            component={"h1"}
            textAlign={"center"}
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
            Check your email
          </Typography>
        </Box>
        <Box>
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
            We&apos;ve sent instructions on how to reset your password to&nbsp;
            <Typography
              component={"span"}
              sx={{
                fontWeight: "600",
                color: colors.light_9
              }}>
              amaniericus@gmail.com
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}>
          <AppButton
            title="Resend"
            sx={{
              background: colors.teal,
              color: colors.light,
              width: "400px",
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
            }}
            onClick={handleBack}>
            Back
          </Typography>
        </Box>
      </Box>
    </CenteredPopup>
  );
};

export default ResetEmailCheck;
