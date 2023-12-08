import { Box } from "@mui/material";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import Avatar from "./Avatar";
import DashboardMenu from "./Menu";
import SideBarSettings from "./Settings";

const DashboardSidebar = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100px",
        minWidth: "100px",
        background: colors.black_5,
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "100px"
      }}>
      <Avatar image={images.avatar} />
      <DashboardMenu />
      <SideBarSettings />
    </Box>
  );
};

export default DashboardSidebar;
