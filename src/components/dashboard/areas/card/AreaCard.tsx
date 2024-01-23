import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import { areaDevices } from "../../../../helpers";
import { Area } from "../../../../hooks/useAreas";

const AreaCard = ({
  area,
  handleActive,
  isActive
}: {
  area: Area;
  handleActive: () => void;
  isActive: boolean;
}) => {
  const devices = areaDevices(area);

  return (
    <Box
      sx={{
        width: "120px",
        height: "120px",
        borderRadius: "15px",
        background: isActive ? colors.dark_blue : colors.dark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: ".5rem",
        cursor: "pointer",
        transition: ".3s ease-in-out",
        "&:hover": {
          transition: ".3s ease-in-out",
          background: colors.dark_blue
        }
      }}
      component={"div"}
      onClick={handleActive}>
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
        {area?.name}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          color: colors.gray,
          fontSize: "clamp(10px, 1.5vw, 12px)",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal"
        }}>
        {devices > 1 ? `${devices} devices` : "No device"}
      </Typography>
    </Box>
  );
};

export default AreaCard;
