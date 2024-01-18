import { Box } from "@mui/material";
import SettingsLayout from "../../layouts/SettingsLayout";
import SettingsTopPanel from "../settings/TopPanel";

const SettingsPagePanel = () => {
  return (
    <SettingsLayout>
      <Box>
        <SettingsTopPanel />
      </Box>
    </SettingsLayout>
  );
};

export default SettingsPagePanel;
