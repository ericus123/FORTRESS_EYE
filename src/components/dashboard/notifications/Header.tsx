import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import AppButton from "../../common/AppButton";

const NotificationsHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem"
        }}>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontFamily: "Poppins",
            fontSize: "clamp(16px, 1.5vw, 18px)",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.9,
            lineHeight: "normal"
          }}>
          Notifications
        </Typography>
        <Typography
          component={"h4"}
          sx={{
            color: colors.active,
            fontFamily: "Poppins",
            fontSize: "clamp(12px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.9,
            lineHeight: "normal",
            textDecoration: "underline",
            cursor: "pointer"
          }}>
          Mark all as read
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem"
        }}>
        <Box
          sx={{
            display: "flex",
            gap: "1rem"
          }}>
          <AppButton
            title="All"
            sx={{
              height: "30px",
              background: colors.black_5,
              color: colors.light_9,
              fontFamily: "Poppins",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              "&:hover": {
                background: colors.black_5
              }
            }}
          />
          <AppButton
            title="Unread"
            sx={{
              height: "30px",
              background: colors.graphite,
              color: colors.light_6,
              fontFamily: "Poppins",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              "&:hover": {
                background: colors.graphite
              }
            }}
          />
        </Box>
        <Image
          src={images.settings}
          alt=""
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer"
          }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "2px",
          background: colors.graphite
        }}></Box>
    </Box>
  );
};

export default NotificationsHeader;
