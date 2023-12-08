import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colors } from "../../../constants/colors";

const Temperature = ({
  title,
  value,
  unit,
  icon
}: {
  title: "Humidity" | "Temperature";
  value: number;
  unit: string | StaticImageData;
  icon: string | StaticImageData;
}) => {
  return (
    <Box
      sx={{
        background: colors.black_5,
        borderRadius: "15px",
        width: "calc(175px - .5rem)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column"
      }}>
      <Box
        sx={{
          display: "flex",
          marginBottom: "auto"
        }}>
        <Image
          src={icon}
          alt=""
          width={30}
          height={30}
          style={{
            marginRight: "auto"
          }}
        />
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontFamily: "Poppins",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.9,
            lineHeight: "normal"
          }}>
          {value}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "auto"
        }}>
        <Typography
          component={"h3"}
          sx={{
            color: colors.light,
            fontFamily: "Poppins",
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "500",
            opacity: 0.9,
            lineHeight: "normal"
          }}>
          {title}
        </Typography>
        <Image
          src={unit}
          alt=""
          width={15}
          height={15}
          style={{
            marginLeft: "auto",
            opacity: 0.5
          }}
        />
      </Box>
    </Box>
  );
};

export default Temperature;
