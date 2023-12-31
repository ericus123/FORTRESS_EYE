import { Box } from "@mui/material";
import MotionStatsCard from "../MotionStatsCard";

const MotionStats = () => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "2rem",
        display: "grid",
        gridTemplateColumns: "calc(50% - 1rem)  calc(50% - 1rem)",
        gap: "1rem",
        position: "relative"
      }}>
      <MotionStatsCard {...{ amount: 31, percentage: 45, type: "camera" }} />
      <MotionStatsCard
        {...{
          amount: 21,
          percentage: -210,
          type: "sensor"
        }}
      />
    </Box>
  );
};

export default MotionStats;
