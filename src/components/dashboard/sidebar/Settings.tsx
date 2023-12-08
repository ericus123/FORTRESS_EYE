import { Box } from "@mui/material";
import { images } from "../../../constants/images";
import MenuItem from "./MenuItem";

const SideBarSettings = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "2rem",
        cursor: "pointer",
        left: 0
      }}>
      <MenuItem {...{ name: "Settings", icon: images.settings }} />
    </Box>
  );
};

export default SideBarSettings;
