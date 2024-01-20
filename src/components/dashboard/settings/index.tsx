import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/modules/rootReducer";
import Profile from "./profile";

const Settings = () => {
  const { active } = useSelector(({ settings }: RootState) => settings);

  return <Box>{active === "profile" ? <Profile /> : null}</Box>;
};

export default Settings;
