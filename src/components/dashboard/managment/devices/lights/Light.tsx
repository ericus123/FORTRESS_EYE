import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../../constants/colors";
import { images } from "../../../../../constants/images";
import AppButton from "../../../../common/AppButton";

const ControlLight = () => {
  return (
    <Box
      sx={{
        width: "150px",
        height: "150px",
        background: colors.graphite,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100% - 40px)"
        }}>
        <Box
          sx={{
            position: "relative",
            width: "80px",
            height: "80px"
          }}>
          <Image src={images.lightOn} alt="" fill />
        </Box>

        <Typography
          sx={{
            color: colors.gray,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textAlign: "center"
          }}>
          Living Room
        </Typography>
      </Box>
      <Box>
        <Box>
          <AppButton
            title="Settings"
            endIcon
            sx={{
              width: "100%",
              background: colors.charcoal,
              color: colors.light,
              borderRadius: "6px",
              "&:hover": {
                background: colors.charcoal,
                opacity: 0.8,
                transition: ".3s ease-in-out"
              }
            }}
            onClick={() => null}
          />
        </Box>

        {/* <Box></Box> */}
      </Box>
    </Box>
  );
};

export default ControlLight;
