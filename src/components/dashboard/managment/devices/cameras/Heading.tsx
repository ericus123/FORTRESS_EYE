import { Box, Typography } from "@mui/material";
import { MdDeviceHub } from "react-icons/md";
import { colors } from "../../../../../constants/colors";

const CameraHeading = ({ type = "small" }: { type?: "small" | "big" }) => {
  const isBig = type === "big";
  return (
    <Box
      sx={{
        gap: ".5rem",
        position: "relative",
        display: "flex"
      }}>
      <Box
        sx={{
          width: isBig ? "45px" : "35px",
          height: isBig ? "45px" : "35px",
          borderRadius: "7.5px",
          background: colors.cambridge_blue_4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}>
        <MdDeviceHub />
        <Box
          sx={{
            width: isBig ? "12.5px" : "10px",
            height: isBig ? "12.5px" : "10px",
            borderRadius: "50%",
            background: colors.rose_red,
            position: "absolute",
            bottom: "-3px",
            right: "-3px",
            boxShadow: `0px 0px 10px ${colors.rose_red}`
          }}></Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left"
        }}>
        <Typography
          sx={{
            color: colors.light,
            fontSize: isBig
              ? "clamp(14px, 1.5vw, 16px)"
              : "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            textAlign: "left"
          }}>
          Living Room
        </Typography>{" "}
        <Typography
          sx={{
            color: colors.light_5,
            fontSize: isBig
              ? "clamp(12px, 1.5vw, 14px)"
              : "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            textAlign: "left"
          }}>
          Small PTZ Camera
        </Typography>
      </Box>

      {/* <Box
      sx={{
        cursor: "pointer"
      }}
      component={"div"}
      title="Switch on">
      <FaPowerOff color={colors.rose_red} />
    </Box> */}
    </Box>
  );
};

export default CameraHeading;
