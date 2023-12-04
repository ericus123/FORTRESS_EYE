import { Box } from "@mui/material";
import Image from "next/image";
import { images } from "../../../constants/images";

const HomeCamera = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translate(50%, -50%)",
        // right: "calc(4rem)",
        right: "2rem",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        "@media(max-width: 1200px)": {
          width: "35px",
          height: "35px"
        },
        "@keyframes ptzCameraAnimation": {
          "0%, 100%": {
            transform: "translate(0, 0)"
          },
          "25%": {
            transform: "translate(30px, 0)"
          },
          "50%": {
            transform: "translate(0, 10px)"
          },
          "75%": {
            transform: "translate(-30px, 0)"
          }
        },
        // "&:hover": {
        animation: "ptzCameraAnimation 5s ease infinite"
        // }
      }}>
      <Image src={images.camera} alt="" fill />
    </Box>
  );
};

export default HomeCamera;
