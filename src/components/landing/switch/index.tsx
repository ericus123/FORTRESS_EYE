import { Box } from "@mui/material";
import { colors } from "../../../constants/colors";
import { LandingActive } from "../content";

const MobileTabsSwitch = ({
  handleChange,
  active
}: {
  handleChange: (state: LandingActive) => void;
  active: LandingActive;
}) => {
  return (
    <Box
      sx={{
        display: "none",
        "@media(max-width: 980px)": {
          display: "grid",
          placeItems: "center"
        }
      }}>
      <Box
        sx={{
          display: "flex",
          gap: "10px"
        }}>
        <Box
          sx={{
            transition: ".3s ease-in-out",
            width: "50px",
            height: "10px",
            borderRadius: "5px",
            background: colors.charcoal,
            opacity: active === "text" ? 1 : 0.3,
            cursor: "pointer"
          }}
          component={"div"}
          onClick={() => handleChange("text")}></Box>
        <Box
          sx={{
            transition: ".3s ease-in-out",
            width: "50px",
            height: "10px",
            borderRadius: "5px",
            background: colors.charcoal,
            opacity: active === "illustrations" ? 1 : 0.3,
            cursor: "pointer"
          }}
          component={"div"}
          onClick={() => handleChange("illustrations")}></Box>
      </Box>
    </Box>
  );
};

export default MobileTabsSwitch;
