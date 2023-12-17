import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";

const PowerMetricsCard = () => {
  return (
    <Box
      sx={{
        background: colors.dark,
        height: "70px",
        width: "100%",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "space-between"
      }}>
      <Box
        sx={{
          width: "40px",
          height: "40px",
          background: colors.cambridge_blue,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%"
        }}>
        <Image src={images.electricity} alt="" />
      </Box>
      <Box>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal"
          }}>
          31.28 KWH
        </Typography>
        <Typography
          component={"p"}
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.5,
            lineHeight: "normal"
          }}>
          Your electricity usage this month
        </Typography>
      </Box>
      <Box
        sx={{
          width: "30px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
        <Image src={images.arrowNext} alt="" />
      </Box>
    </Box>
  );
};

export default PowerMetricsCard;
