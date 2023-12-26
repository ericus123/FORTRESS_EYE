import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { useAreas } from "../../../hooks/useAreas";
import AreaCard from "./card/AreaCard";

const Areas = () => {
  const {
    fetching,
    data,
    handleActiveArea,
    area: _active,
    handleShow
  } = useAreas();

  return (
    <Box
      sx={{
        background: colors.black_5,
        height: "100%",
        borderRadius: "15px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
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
          onClick={handleShow}
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
        {data?.map((area, i) => (
          <AreaCard
            {...{
              area,
              handleActive: () => handleActiveArea(area),
              isActive: area?.id === _active?.id
            }}
            key={i}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Areas;
