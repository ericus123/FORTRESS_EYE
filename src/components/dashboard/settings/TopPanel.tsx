import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { RootState } from "../../../redux/modules/rootReducer";
import {
  SettingsTab,
  handleActiveTab
} from "../../../redux/modules/settings/settingsSlice";
import SettingTab from "./Tab";

export const tabs: SettingsTab[] = ["profile", "subscriptions", "system"];
const SettingsTopPanel = () => {
  const dispatch = useDispatch();

  const handleActive = (tab: SettingsTab) => {
    dispatch(handleActiveTab(tab));
  };

  const { active } = useSelector(({ settings }: RootState) => settings);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
      <Box
        sx={{
          display: "flex"
        }}>
        <Typography
          component={"h1"}
          sx={{
            color: colors.cambridge_blue,
            fontSize: "clamp(32px, 1.5vw, 32px)",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            textAlign: "center",
            height: "30px"
          }}>
          Settings
        </Typography>
      </Box>

      <Box
        sx={{
          width: "800px",
          display: "flex",
          gap: "1rem"
        }}>
        {tabs?.map((tab, i) => (
          <SettingTab
            key={i}
            {...{
              name: tab,
              handleActive,
              isActive: active === tab
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SettingsTopPanel;
