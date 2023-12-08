import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import { AreaCard } from "./areas";

const AreaCard = ({ name, devices }: AreaCard) => {
  return (
    <Box
      sx={{
        border: `.5px dashed ${colors.gray}`,
        width: "120px",
        height: "120px",
        borderRadius: "15px",
        background: colors.dark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: ".5rem",
        cursor: "pointer",
        transition: ".3s ease-in-out",
        "&:hover": {
          transition: ".3s ease-in-out",
          background: colors.charcoal
        }
      }}>
      <Image src={images.cctv} alt="" />
      <Typography
        component={"h3"}
        sx={{
          color: colors.light,
          fontSize: "clamp(10px, 1.5vw, 12px)",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          opacity: 0.9,
          lineHeight: "normal"
        }}>
        {name}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          color: colors.light,
          fontSize: "clamp(10px, 1.5vw, 12px)",
          fontStyle: "normal",
          fontWeight: "600",
          opacity: 0.9,
          lineHeight: "normal"
        }}>
        {devices > 0 ? devices : null}&nbsp;
        {devices < 1 ? "no device" : devices > 1 ? "devices" : "device"}
      </Typography>
    </Box>
  );
};

export default AreaCard;
