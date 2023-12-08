import { Box } from "@mui/material";
import MenuItem from "./MenuItem";
import { MenuItemType, MenuItems } from "./items";

const DashboardMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        gap: "25px",
        position: "absolute",
        left: 0,
        top: "150px"
      }}>
      {MenuItems?.map((item: MenuItemType, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </Box>
  );
};

export default DashboardMenu;
