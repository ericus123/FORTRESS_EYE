import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";

export type DoorType = {
  area: string;
  status: "locked" | "unlocked";
  cover: string | StaticImageData;
};
const Door = ({ area, status, cover }: DoorType) => {
  const isUnlocked = status === "unlocked";
  return (
    <Box
      sx={{
        height: "200px",
        width: "140px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "150px",
          borderRadius: ".5rem",
          overflow: "hidden"
        }}>
        <Image src={cover} alt="" fill />
        <Box
          sx={{
            position: "absolute",
            height: "30px",
            background: colors.black_5,
            width: "90%",
            left: "5%",
            right: "5%",
            bottom: "10px",
            borderRadius: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Typography
            component={"h3"}
            sx={{
              textAlign: "center",
              color: colors.light,
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              opacity: 0.8,
              lineHeight: "normal"
            }}>
            {area}
          </Typography>
        </Box>
      </Box>
      <Box
        component={"div"}
        sx={{
          background: isUnlocked ? colors.active : colors.rose_red,
          width: "100%",
          display: "flex",
          borderRadius: "5px",
          height: "35px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer"
        }}>
        <Image
          src={isUnlocked ? images.unlocked : images.locked}
          alt=""
          width={20}
          height={20}
        />
        <Typography
          component={"h4"}
          sx={{
            textAlign: "center",
            color: colors.light,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
          }}>
          {isUnlocked ? "Unlocked" : "Locked"}
        </Typography>
        {/* <AppButton
          text={isUnlocked ? "Unlocked" : "Locked"}
          sx={{
            background: isUnlocked ? colors.active : colors.rose_red,
            color: colors.light,
            opacity: 0.8,
            width: "100%",
            "&:hover": {
              background: isUnlocked ? colors.active : colors.rose_red
            }
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default Door;
