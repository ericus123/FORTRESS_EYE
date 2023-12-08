import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import AreaCard from "./card/AreaCard";
import { areaItems } from "./card/areas";

const Areas = () => {
  return (
    <Box
      sx={{
        background: colors.black_5,
        height: "100%",
        borderRadius: "15px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
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
          Areas
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
      <Box
        sx={{
          maxHeight: "400px",
          display: "grid",
          gridTemplateColumns: "120px 120px",
          gap: "2rem",
          overflowY: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}>
        {areaItems?.map((area, i) => (
          <AreaCard {...area} key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default Areas;
