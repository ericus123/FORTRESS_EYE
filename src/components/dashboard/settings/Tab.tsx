import { Box, Typography } from "@mui/material";
import { colors } from "../../../constants/colors";
import { SettingsTab } from "../../../redux/modules/settings/settingsSlice";

const SettingTab = ({
  name,
  isActive,
  handleActive
}: {
  name: SettingsTab;
  isActive: boolean;
  handleActive: (tab: SettingsTab) => void;
}) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        width: "200px",
        height: isActive ? "45px" : "40px",
        background: isActive ? colors.cambridge_blue : colors.dark,
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `1px solid ${colors.graphite}`,
        transition: ".2s ease-in-out",
        "&:hover": {
          transition: ".2s ease-in-out",
          background: colors.cambridge_blue
        }
      }}
      component={"div"}
      onClick={() => handleActive(name)}>
      <Typography
        component={"h2"}
        sx={{
          width: "200px",
          color: isActive ? colors.light_8 : colors.gray,
          fontSize: "clamp(14px, 1.5vw, 14px)",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          textAlign: "center",
          transition: ".2s ease-in-out",
          "&:hover": {
            transition: ".2s ease-in-out",
            color: colors.light_8
          }
        }}>
        {name}
      </Typography>
    </Box>
  );
};

export default SettingTab;
