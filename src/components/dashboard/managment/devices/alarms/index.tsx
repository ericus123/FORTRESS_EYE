import { Box } from "@mui/material";
import { deviceType } from "../Filter";
import ControlDoor from "./Alarm";

const ControlAlarms = ({ selected }: { selected: deviceType }) => {
  return selected === "alarm" ? (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap"
      }}>
      {[...new Array(7)].map(() => (
        <ControlDoor key={Math.random()} />
      ))}
    </Box>
  ) : null;
};

export default ControlAlarms;
