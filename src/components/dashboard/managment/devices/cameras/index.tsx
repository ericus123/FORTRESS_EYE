import { Box } from "@mui/material";
import { deviceType } from "../Filter";
import CameraDevice from "./Camera";

const CameraDevices = ({ selected }: { selected: deviceType }) => {
  return selected === "camera" ? (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap"
      }}>
      {[...Array(5)].map((i) => (
        <CameraDevice key={i} />
      ))}
    </Box>
  ) : null;
};

export default CameraDevices;
