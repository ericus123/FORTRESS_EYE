import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../constants/colors";
import { images } from "../../constants/images";

const CheckPopup = ({
  isSuccess,
  message
}: {
  isSuccess: boolean;
  message: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px"
      }}>
      {isSuccess ? (
        <Image src={images.check} alt="" width={50} height={50} />
      ) : (
        <Image src={images.fail} alt="" width={50} height={50} />
      )}
      <Typography
        component={"h1"}
        sx={{
          color: colors.light,
          fontFamily: "Poppins",
          fontSize: "clamp(18px, 1.5vw, 24px)",
          fontStyle: "normal",
          fontWeight: "600",
          opacity: 0.9,
          lineHeight: "normal",
          textAlign: "center"
        }}>
        {message}
      </Typography>
    </Box>
  );
};

export default CheckPopup;
