import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colors } from "../../../constants/colors";
import { useProfile } from "../../../hooks/useProfile";

const Avatar = ({ image }: { image: string | StaticImageData }) => {
  const { data } = useProfile();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center"
      }}>
      <Image
        src={
          data?.avatar
            ? `${process.env.NEXT_PUBLIC_IMAGES_URL}/avatars/${data?.avatar}`
            : image
        }
        alt=""
        width={50}
        height={50}
        style={{
          borderRadius: "50%",
          border: `1px solid ${colors.cambridge_blue}`,
          objectFit: "cover"
        }}
      />
    </Box>
  );
};

export default Avatar;
