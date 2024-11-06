import { Box } from "@mui/material";
import { colors } from "../../../constants/colors";
import HomeSubTitle from "../../common/Headers";
import SensorsAreaSelect from "./AreaSelect";
import Sensor from "./Sensor";
import { sensorData } from "./data";

const Sensors = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        height: "170px"
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
        <HomeSubTitle text="Sensors" />
        <SensorsAreaSelect />
      </Box>
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
      </Box>
    </Box>
  );
};

export default Sensors;
