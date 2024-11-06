import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { Area } from "../../../hooks/useAreas";

const ActiveSensorArea = ({ area }: { area?: Area }) => {
  return (
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
        {area?.name ? area.name : "Unknown Area"}
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
  );
};

export default ActiveSensorArea;
