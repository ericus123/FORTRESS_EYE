import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";

const CameraPlayerHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        bottom: "calc(66.6% +  10px)",
        width: "100%"
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
          <Typography
            component={"span"}
            sx={{
              color: colors.active,
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal"
            }}>
            10
          </Typography>{" "}
          Cameras Active
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          cursor: "pointer"
        }}>
        <Image
          title="Next"
          src={images.arrowNext}
          alt=""
          style={{
            opacity: 0.8
          }}
        />
      </Box>
    </Box>
  );
};

export default CameraPlayerHeader;
