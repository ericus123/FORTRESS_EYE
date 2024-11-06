import { Box } from "@mui/material";
import CameraPlayer from "../cameras/player";

const Cameras = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        marginTop: "2rem"
      }}>
      {[...new Array(7)].map((key) => (
        <Box
          key={key}
          sx={{
            position: "relative",
            width: "350px",
            height: "275px"
            // border: "1px solid green",
          }}>
          <CameraPlayer
            containerSx={{
              width: "350px",
              height: "275px",
              paddingBottom: "0 !important",
              padding: "0 !important"
            }}
            isStandalone
          />
        </Box>
      ))}
    </Box>
  );
};

export default Cameras;
