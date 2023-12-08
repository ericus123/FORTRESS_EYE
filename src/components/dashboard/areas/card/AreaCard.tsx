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
        cursor: "pointer",
        transition: ".3s ease-in-out",
        "&:hover": {
          transition: ".3s ease-in-out",
          background: colors.charcoal
        }
      }}>
      <Image src={images.cctv} alt="" />
      <Typography component={"h3"}>{name}</Typography>
      <Typography component={"p"}>{devices}</Typography>
    </Box>
  );
};

export default AreaCard;
