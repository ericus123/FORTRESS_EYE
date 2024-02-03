import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/modules/rootReducer";
import {
  SettingsTab,
  handleActiveTab
} from "../../../redux/modules/settings/settingsSlice";
import { TabType } from "../../common/panels/Tab";
import TopPanel from "../../common/panels/TopPanels";
import PanelHeaderLayout from "../panels/HeaderLayout";

export const tabs: SettingsTab[] = ["profile", "subscriptions", "system"];
const SettingsTopPanel = () => {
  const dispatch = useDispatch();

  const handleActive = (tab: TabType) => {
    dispatch(handleActiveTab(tab));
  };

  const { active } = useSelector(({ settings }: RootState) => settings);
  return (
    <PanelHeaderLayout title="Settings">
      <Box
        sx={{
          width: "800px",
          display: "flex",
          gap: "1rem",
          alignItems: "center"
        }}>
        <TopPanel
          tabs={tabs}
          active={active}
          handleActive={(tab: TabType) => handleActive(tab)}
        />
      </Box>
    </PanelHeaderLayout>
  );
};

export default SettingsTopPanel;
