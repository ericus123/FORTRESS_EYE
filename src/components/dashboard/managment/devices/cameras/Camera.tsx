import { Box, Typography } from "@mui/material";
import { FaWalking } from "react-icons/fa";
import { MdElectricBolt, MdSensors } from "react-icons/md";
import { colors } from "../../../../../constants/colors";
import usePlayer from "../../../../../hooks/usePlayer";
import CameraHeading from "./Heading";

const CameraDevice = () => {
  const { handleToggleCameraDetailsView } = usePlayer();
  return (
    <Box
      sx={{
        width: "300px",
        height: "110px",
        background: colors.dark_blue,
        borderRadius: "15px",
        padding: "1rem",
        position: "relative",
        cursor: "pointer",
        transition: ".3s ease-in-out",
        ":hover": {
          background: colors.graphite
        }
      }}
      onClick={handleToggleCameraDetailsView}>
      <CameraHeading />

      <Box
        sx={{
          position: "absolute",
          bottom: "1rem",
          display: "flex",
          gap: "1rem"
        }}>
        <Box
          sx={{
            padding: "2px 5px",
            background: colors.dark_blue,
            height: "fit-content",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            gap: ".5rem"
          }}>
          <MdSensors size={12.5} />
          <Typography
            sx={{
              fontSize: "10px"
            }}>
            2 Sensors
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "2px 5px",
            background: colors.dark_blue,
            height: "fit-content",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            gap: ".25rem"
          }}>
          <MdElectricBolt size={12.5} />
          <Typography
            sx={{
              fontSize: "10px"
            }}>
            2 Actuators
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "2px 5px",
            background: colors.dark_blue,
            height: "fit-content",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            gap: ".25rem"
          }}>
          <FaWalking size={12.5} />
          <Typography
            sx={{
              fontSize: "10px"
            }}>
            1.2k Activities
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CameraDevice;
