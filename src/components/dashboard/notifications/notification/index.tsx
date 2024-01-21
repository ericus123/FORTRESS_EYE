import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";

const Notification = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}>
      <Box
        sx={{
          padding: "1rem 2rem",
          display: "flex",
          gap: "1rem",
          cursor: "pointer",
          transition: ".2s ease-in-out",
          "&:hover": {
            transition: ".2s ease-in-out",
            background: colors.graphite_3
          }
        }}>
        <Image
          src={images.profile}
          alt=""
          width={40}
          height={40}
          style={{
            borderRadius: "50%",
            border: `1px solid ${colors.teal}`
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px"
          }}>
          <Typography
            component={"h2"}
            sx={{
              color: colors.light_9,
              fontFamily: "Poppins",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal"
            }}>
            This weeks report is available
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center"
            }}>
            <Typography
              component={"p"}
              sx={{
                color: colors.gray,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal"
              }}>
              3 mins ago
            </Typography>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: colors.orange
              }}></Box>
            <Typography
              component={"p"}
              sx={{
                color: colors.gray,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal"
              }}>
              PIR Sensor
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "calc(100% - 4rem)",
          height: ".5px",
          background: colors.graphite,
          margin: "0 2rem"
        }}></Box>
    </Box>
  );
};

export default Notification;
