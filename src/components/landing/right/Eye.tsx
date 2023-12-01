import { Box } from "@mui/material";
import Image from "next/image";
import { images } from "../../../constants/images";

const Eye = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "15%",
        width: "150px",
        height: "150px",
        transform: "translate(0%, -50%)",
        "@media(max-width: 1200px)": {
          width: "125px",
          height: "125px"
        }
      }}>
      <Image src={images.eye} alt="" fill />
    </Box>
  );
};

export default Eye;
