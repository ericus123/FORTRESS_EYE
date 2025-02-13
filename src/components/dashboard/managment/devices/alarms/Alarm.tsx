import { Box, Typography } from "@mui/material";
import { FaBell } from "react-icons/fa";
import { colors } from "../../../../../constants/colors";
import AppButton from "../../../../common/AppButton";

const ControlDoor = () => {
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
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <FaBell size={60} color={colors.gray} />
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
          Front Door
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

export default ControlDoor;
