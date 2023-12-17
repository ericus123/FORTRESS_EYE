import { Box } from "@mui/material";
import LightsControlContent from "./Content";
import LightsControlsHeading from "./Heading";

const LightsControl = () => {
  return (
    <Box
      sx={{
        width: "calc(100% - 300px - 2rem)",
        display: "flex",
        flexDirection: "column",
        gap: ".8rem",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      <LightsControlsHeading />
      <LightsControlContent />
    </Box>
  );
};

export default LightsControl;
