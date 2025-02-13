import { Box } from "@mui/material";
import { deviceType } from "../Filter";
import ControlLight from "./Light";

const ControlLights = ({ selected }: { selected: deviceType }) => {
  return selected === "light" ? (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap"
      }}>
      {[...new Array(7)].map(() => (
        <ControlLight key={Math.random()} />
      ))}
    </Box>
  ) : null;
};

export default ControlLights;
