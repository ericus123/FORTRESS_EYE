import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colors } from "../../../constants/colors";
import { useProfile } from "../../../hooks/useProfile";

const Avatar = ({ image }: { image: string | StaticImageData }) => {
  const { data } = useProfile();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        borderRadius: "50%",
        border: `2px solid ${colors.teal}`,
        width: "50px",
        height: "50px",
        overflow: "hidden",
        padding: "2px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
      <Image
        src={
          data?.avatar
            ? `${process.env.NEXT_PUBLIC_IMAGES_URL}/avatars/${data?.avatar}`
            : image
        }
        alt=""
        fill
        style={{
          objectFit: "cover"
        }}
      />
    </Box>
  );
};

export default Avatar;
