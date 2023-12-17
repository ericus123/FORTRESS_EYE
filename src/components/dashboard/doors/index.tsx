import { Box } from "@mui/material";
import Doors from "./Content";
import DoorControlsHeading from "./Heading";

const DoorsControl = () => {
  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: ".8rem"
      }}>
      <DoorControlsHeading />
      <Doors />
    </Box>
  );
};

export default DoorsControl;
