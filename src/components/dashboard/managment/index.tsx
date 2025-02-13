import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/modules/rootReducer";
import Devices from "./devices";
import Members from "./members";

const Management = () => {
  const { active } = useSelector(({ management }: RootState) => management);
  return (
    <Box>
      {active == "devices" ? (
        <Devices />
      ) : active == "members" ? (
        <Members />
      ) : null}
    </Box>
  );
};

export default Management;
