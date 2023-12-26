import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colors } from "../../../constants/colors";

const Avatar = ({ image }: { image: string | StaticImageData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center"
      }}>
      <Image
        src={image}
        alt=""
        width={50}
        height={50}
        style={{
          borderRadius: "50%",
          border: `1px solid ${colors.dark_blue}`
        }}
      />
    </Box>
  );
};

export default Avatar;
