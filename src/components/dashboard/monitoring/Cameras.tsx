import { Box } from "@mui/material";
import CameraPlayer from "../cameras/player";

const Cameras = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
      {[...new Array(7)].map((key) => (
        <Box
          key={key}
          sx={{
            position: "relative",
            width: "300px",
            height: "400px",
            border: "1px solid green"
          }}>
          <CameraPlayer
            sx={{
              width: "400px !important",
              height: "400px !important"
            }}
            containerSx={{
              width: "300px",
              height: "400px"
            }}
            isStandalone
          />
        </Box>
      ))}
    </Box>
  );
};

export default Cameras;
