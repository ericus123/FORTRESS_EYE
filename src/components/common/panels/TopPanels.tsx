import { Box } from "@mui/material";
import { EventTab } from "../../../redux/modules/events/eventsSlice";
import { ManagementTab } from "../../../redux/modules/management/managementSlice";
import { MonitoringTab } from "../../../redux/modules/monitoring/monitoringSlice";
import { SettingsTab } from "../../../redux/modules/settings/settingsSlice";
import Tab, { TabType } from "./Tab";

const TopPanel = ({
  active,
  handleActive,
  tabs
}: {
  active: TabType;
  handleActive: (tab: TabType) => void;
  tabs: SettingsTab[] | ManagementTab[] | MonitoringTab[] | EventTab[];
}) => {
  return (
    <Box
      sx={{
        width: "800px",
        display: "flex",
        gap: "1rem",
        alignItems: "center"
      }}>
      {tabs?.map((tab, i) => (
        <Tab
          key={i}
          {...{
            name: tab,
            handleActive,
            isActive: active === tab
          }}
        />
      ))}
    </Box>
  );
};

export default TopPanel;
