import { Box } from "@mui/material";
import PowerMetricsCard from "../dashboard/power/metrics/Card";
import Sensors from "../sensors/ecosensor";
import Alarms from "./alarms";
import Fan from "./fan";

const Actuators = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        paddingBottom: "2rem"
      }}>
      <Sensors />
      <Alarms />
      <PowerMetricsCard />
      <Fan />
    </Box>
  );
};

export default Actuators;
