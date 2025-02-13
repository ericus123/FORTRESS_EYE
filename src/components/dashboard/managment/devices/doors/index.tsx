import { Box } from "@mui/material";
import { deviceType } from "../Filter";
import ControlDoor from "./Door";

const ControlDoors = ({ selected }: { selected: deviceType }) => {
  return selected === "door" ? (
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

export default ControlDoors;
