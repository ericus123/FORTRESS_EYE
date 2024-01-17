import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";

const CameraControls = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "1rem",
        right: "1rem",
        display: "flex",
        justifyContent: "space-between",
        gap: ".5rem",
        width: "calc(100% - 2rem)"
      }}>
      <Box
        sx={{
          display: "flex",
          gap: ".5rem"
        }}>
        <Box
          sx={{
            width: "30px",
            height: "30px",
            background: colors.black_5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          component={"div"}
          title="screenshot">
          <Image src={images.speakerOff} alt="" width={20} height={20} />
        </Box>
        <Box
          sx={{
            width: "30px",
            height: "30px",
            background: colors.black_5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          component={"div"}
          title="screenshot">
          <Typography
            component={"h3"}
            sx={{
              color: colors.light,
              fontSize: "clamp(12px, 1.5vw, 12px)",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              opacity: 0.3,
              lineHeight: "normal"
            }}>
            PTZ
          </Typography>
        </Box>
        <Box
          sx={{
            width: "30px",
            height: "30px",
            background: colors.black_5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          component={"div"}
          title="mute">
          <Image src={images.micOn} alt="" width={20} height={20} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: ".5rem"
        }}>
        <Box
          sx={{
            width: "30px",
            height: "30px",
            background: colors.black_5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          component={"div"}
          title="screenshot">
          <Image src={images.screenshot} alt="" width={20} height={20} />
        </Box>
        <Box
          sx={{
            width: "30px",
            height: "30px",
            background: colors.black_5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          component={"div"}
          title="expand">
          <Image src={images.expand} alt="" width={20} height={20} />
        </Box>
      </Box>
    </Box>
  );
};

export default CameraControls;
