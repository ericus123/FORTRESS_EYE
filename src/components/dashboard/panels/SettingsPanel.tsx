import { Box } from "@mui/material";
import SettingsLayout from "../../layouts/SettingsLayout";
import Settings from "../settings";
import SettingsTopPanel from "../settings/TopPanel";

const SettingsPagePanel = () => {
  return (
    <SettingsLayout>
      <Box>
        <SettingsTopPanel />
      </Box>
      <Settings />
    </SettingsLayout>
  );
};

export default SettingsPagePanel;
