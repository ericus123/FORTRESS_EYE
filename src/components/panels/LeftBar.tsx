import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import { RootState } from "../../redux/modules/rootReducer";
import Actuators from "../actuators";
import MembersView from "../dashboard/members";
import { TokenData } from "../dashboard/verification";
import LeftBarControl from "./left/Control";
import LeftSideBarHeader from "./left/Header";

const LeftBarPanel = ({ role, email }: TokenData) => {
  const { isLeftBarExpanded } = useSelector(
    ({ navigation }: RootState) => navigation
  );
  return isLeftBarExpanded ? (
    <Box
      sx={{
        width: "350px",
        background: colors.black_5,
        padding: "2rem",
        minWidth: "350px",
        height: "100vh",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        transition: ".3s ease-out"
      }}>
      <LeftSideBarHeader />
      <Actuators />
      <MembersView {...{ role, email }} />
    </Box>
  ) : (
    <Box
      sx={{
        height: "100vh",
        width: "80px",
        background: colors.black_5,
        padding: "1rem",
        transition: ".3s ease-in-out"
      }}>
      <LeftBarControl />
    </Box>
  );
};

export default LeftBarPanel;
