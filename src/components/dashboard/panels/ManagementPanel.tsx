import { Box } from "@mui/material";
import SettingsLayout from "../../layouts/SettingsLayout";
import Management from "../managment";
import ManagementHeader from "../managment/header";

const ManagementPanel = () => {
  return (
    <SettingsLayout>
      <ManagementHeader />
      <Box
        sx={{
          overflow: "scroll",
          height: "calc(100vh - 200px)",
          marginTop: "1rem"
        }}>
        <Management />
      </Box>
    </SettingsLayout>
  );
};

export default ManagementPanel;
