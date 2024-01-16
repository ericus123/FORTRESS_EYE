import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";

const CameraPlayerHeader = ({ camera }: { camera: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        bottom: "calc(66.6% +  10px)",
        width: "100%",
        alignItems: "center"
      }}>
      <Box>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.8,
            lineHeight: "normal"
          }}>
          Live Camera
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          cursor: "pointer",
          width: "fit-content",
          height: "30px",
          background: colors.dark,
          borderRadius: "15px",
          display: "flex",
          alignItems: "center"
        }}>
        <Typography
          component={"h3"}
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "500",
            opacity: 0.8,
            lineHeight: "normal",
            paddingLeft: "15px",
            paddingRight: "15px"
          }}>
          {camera}
        </Typography>
        <Image
          src={images.caretDown}
          alt=""
          width={25}
          height={25}
          style={{
            opacity: 0.6
          }}
        />
      </Box>
    </Box>
  );
};

export default CameraPlayerHeader;
