import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";

const ProfileAvatar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        hieght: "100%",
        gap: "1rem",
        alignItems: "center"
      }}>
      <Box
        sx={{
          position: "relative"
        }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            border: `2px solid ${colors.cambridge_blue_5}`
          }}>
          <Image src={images.profile} alt="" fill />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            right: 0,
            background: colors.cambridge_blue,
            width: "35px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            cursor: "pointer"
          }}>
          <Image src={images.edit} alt="" width={15} height={15} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px"
        }}>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontFamily: "Poppins",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal"
          }}>
          AMANI Eric
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px"
          }}>
          <Typography
            component={"h3"}
            sx={{
              color: colors.light,
              fontSize: "clamp(14px, 1.5vw, 16px)",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "normal"
            }}>
            Verfified
          </Typography>
          <Image src={images.check} alt="" width={20} height={20} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileAvatar;
