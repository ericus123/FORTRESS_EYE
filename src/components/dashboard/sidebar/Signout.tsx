import { Box } from "@mui/material";
import { images } from "../../../constants/images";
import MenuItem from "./MenuItem";

const SideBarSignout = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "6.5rem",
        cursor: "pointer",
        left: 0
      }}>
      <MenuItem {...{ name: "Signout", icon: images.signout }} />
    </Box>
  );
};

export default SideBarSignout;
