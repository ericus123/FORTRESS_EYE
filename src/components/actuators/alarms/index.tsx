import { Box } from "@mui/material";
import HomeSubTitle from "../../common/Headers";
import Alarm from "./Alarm";

const Alarms = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: ".5rem",
        flexDirection: "column"
      }}>
      <HomeSubTitle text="Alarms" />
      <Box
        sx={{
          display: "flex",
          overflow: "scroll",
          gap: "10px",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}>
        <Alarm isOn />
        <Alarm />
        <Alarm isOn />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm isOn />
        <Alarm isOn />
        <Alarm />
        <Alarm />
        <Alarm isOn />
      </Box>
    </Box>
  );
};

export default Alarms;
