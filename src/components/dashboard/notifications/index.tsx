import { Box, Drawer } from "@mui/material";
import { useDispatch } from "react-redux";
import { colors } from "../../../constants/colors";
import { handleActiveLink } from "../../../redux/modules/navigation/navigationSlice";
import NotificationsHeader from "./Header";
import Notification from "./notification";

const Notifications = ({ isOpen }: { isOpen: boolean }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleActiveLink("Home"));
  };
  return (
    <Drawer
      anchor={"right"}
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "400px",
          background: colors.dark,
          height: "100vh"
        }
      }}>
      <Box
        sx={{
          paddingTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
        <NotificationsHeader />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            msOverflowStyle: "none",
            height: "calc(100vh - 10rem)",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}>
          {[...new Array(31)]?.map((val, i) => (
            <Notification key={i} />
          ))}

          {/* <NoData text="Nothing to show here" /> */}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Notifications;
