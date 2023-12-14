import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";

const DoorControlsHeading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}>
      <Typography
        component={"h1"}
        sx={{
          color: colors.light,
          fontSize: "clamp(14px, 1.5vw, 18px)",
          fontStyle: "normal",
          fontWeight: "600",
          opacity: 0.9,
          lineHeight: "normal"
        }}>
        Doors
      </Typography>
      <Image
        src={images.add}
        alt=""
        width={20}
        height={20}
        style={{
          marginLeft: "auto",
          cursor: "pointer"
        }}
      />
    </Box>
  );
};

export default DoorControlsHeading;
