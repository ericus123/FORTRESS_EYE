import { Box, Typography } from "@mui/material";
import { colors } from "../../../constants/colors";
import CenteredPopup from "../../common/popups/Centered";

const LocationTrackingError = () => {
  return (
    <CenteredPopup
      sx={{
        zIndex: 1
      }}>
      <Box
        sx={{
          background: colors.dark_blue,
          width: "400px",
          height: "150px",
          borderRadius: "10px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Typography
          component={"p"}
          sx={{
            textAlign: "center",
            color: colors.light,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.9,
            lineHeight: "normal"
          }}>
          Location tracking is blocked 🙁 on this device <br />
          check your device settings and try again
        </Typography>
      </Box>
    </CenteredPopup>
  );
};

export default LocationTrackingError;
