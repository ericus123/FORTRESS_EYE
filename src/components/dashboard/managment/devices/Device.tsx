import { Box, Typography } from "@mui/material";
import { FaPowerOff, FaWalking } from "react-icons/fa";
import { MdDeviceHub, MdElectricBolt, MdSensors } from "react-icons/md";
import { colors } from "../../../../constants/colors";

const Device = () => {
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
      }}>
      <Box
        sx={{
          gap: ".5rem",
          position: "relative",
          display: "flex"
        }}>
        <Box
          sx={{
            width: "35px",
            height: "35px",
            borderRadius: "7.5px",
            background: colors.cambridge_blue_4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}>
          <MdDeviceHub />
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: colors.rose_red,
              position: "absolute",
              bottom: "-3px",
              right: "-3px",
              boxShadow: `0px 0px 10px ${colors.rose_red}`
            }}></Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "left"
          }}>
          <Typography
            sx={{
              color: colors.light,
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              textAlign: "left"
            }}>
            Living Room
          </Typography>{" "}
          <Typography
            sx={{
              color: colors.light_5,
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              textAlign: "left"
            }}>
            Small PTZ Camera
          </Typography>
        </Box>

        <Box
          sx={{
            cursor: "pointer"
          }}
          component={"div"}
          title="Switch on">
          <FaPowerOff color={colors.rose_red} />
        </Box>
      </Box>

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

export default Device;
