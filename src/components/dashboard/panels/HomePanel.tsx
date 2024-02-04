import { Box } from "@mui/material";
import { colors } from "../../../constants/colors";
import Areas from "../areas";
import CameraPlayer from "../cameras/player";
import Detections, { detections } from "../detections";
import DoorsControl from "../doors";
import Greetings from "../greetings";
import LightsControl from "../lights";
import Weather from "../weather";

const HomePagePanel = () => {
  return (
    <Box
      sx={{
        minWidth: "1000px",
        height: "100vh",
        width: "100%",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
        paddingRight: "2rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: "auto",
        marginBottom: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 300px - 5rem)",
          display: "flex",
          gap: "2.5rem",
          minHeight: "500px",
          overflow: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}>
        <Box
          sx={{
            width: "350px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "25px"
          }}>
          <Greetings />
          <Areas />
        </Box>
        <Box
          sx={{
            width: "calc(100% - 350px)",
            background: colors.black_5,
            borderRadius: "15px",
            position: "relative",
            padding: "2rem",
            minWidth: "800px"
          }}>
          <CameraPlayer />
          <Detections detections={detections} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          display: "grid",
          gridTemplateColumns: "auto 300px",
          gap: "2rem"
        }}>
        <Box
          sx={{
            background: colors.black_5,
            borderRadius: "15px",
            padding: "2rem",
            display: "flex",
            gap: "2rem",
            overflow: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}>
          <DoorsControl />
          <LightsControl />
        </Box>
        <Weather />
      </Box>
    </Box>
  );
};

export default HomePagePanel;
