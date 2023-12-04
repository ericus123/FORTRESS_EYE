import { Box } from "@mui/material";
import Image from "next/image";
import { images } from "../../../constants/images";

const HomeAlarm = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "0%",
        right: "calc(30% + 4rem)",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        "@media(max-width: 1200px)": {
          width: "35px",
          height: "35px"
        },
        "@keyframes shakeAnimation": {
          "0%, 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(-30deg)"
          },
          "50%": {
            transform: "rotate(30deg)"
          },
          "75%": {
            transform: "rotate(-15deg)"
          }
        },
        "&:hover": {
          animation: "shakeAnimation 0.5s ease infinite"
        }
      }}>
      <Image src={images.siren} alt="" fill />
    </Box>
  );
};

export default HomeAlarm;
