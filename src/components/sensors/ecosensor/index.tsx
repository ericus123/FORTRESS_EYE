import { Box, Typography } from "@mui/material";
import { MdWindow } from "react-icons/md";
import { colors } from "../../../constants/colors";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/modules/rootReducer";
import HomeSubTitle from "../../common/Headers";
import SensorsAreaSelect from "./AreaSelect";
import Sensor from "./Sensor";
import { sensorData } from "./data";

const EcoSensors = ({ showRoomTitle = false }: { showRoomTitle: boolean }) => {
  const { ecoSensorArea } = useAppSelector(({ area }: RootState) => area);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        height: "200px"
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
        <HomeSubTitle text="Sensors" />
        <SensorsAreaSelect />
      </Box>
      <Box>
        <Box
          sx={{
            background: colors.dark,
            height: "150px",
            width: "100%",
            borderRadius: "1rem",
            padding: "1rem",
            display: "flex",
            flexWrap: "wrap",
            border: `1px solid ${colors.graphite}`,
            gap: "1rem"
          }}>
          <Sensor data={sensorData?.temperature} />
          <Sensor data={sensorData?.pressure} />
          <Sensor data={sensorData?.voc} />
          <Sensor data={sensorData?.humidity} />
          {showRoomTitle ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: ".25rem"
              }}>
              <MdWindow size={15} color={colors.light} />
              <Typography
                sx={{
                  color: colors.light,
                  fontSize: "clamp(10px, 1.5vw, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  opacity: 0.9,
                  lineHeight: "normal"
                }}>
                {ecoSensorArea?.name}
              </Typography>
              <Box />
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default EcoSensors;
