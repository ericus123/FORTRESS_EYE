import { Box, Typography } from "@mui/material";
import { FaRunning } from "react-icons/fa";
import { colors } from "../../../../constants/colors";

export type MotionStats = {
  amount: number;
  percentage: number;
  type: "camera" | "sensor";
};

const MotionStatsCard = ({ amount, percentage, type }: MotionStats) => {
  return (
    <Box
      sx={{
        height: "80px",
        width: "100%",
        background: colors.dark,
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        gap: "1rem"
      }}>
      <Box
        sx={{
          background: colors.dark_blue,
          padding: ".5rem",
          borderRadius: ".5rem"
        }}>
        <FaRunning
          style={{
            color: colors.cambridge_blue,
            width: "30px",
            height: "30px"
          }}
        />
      </Box>

      <Box>
        <Typography
          component={"h3"}
          sx={{
            color: colors.light,
            fontSize: "clamp(11px, 1.5vw, 13px)",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal"
          }}>
          {type === "camera" ? "Camera" : "Sensor"} Detections
        </Typography>
        <Typography
          component={"p"}
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.8,
            lineHeight: "normal"
          }}>
          <Typography
            component={"span"}
            sx={{
              color: colors.light,
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
            +{amount}&nbsp;
          </Typography>
          This week
        </Typography>
      </Box>
      <Box>
        <Typography
          component={"h1"}
          sx={{
            color: percentage > 0 ? colors.active : colors.rose_red,
            fontSize: "clamp(16px, 1.5vw, 18px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal"
          }}>
          {percentage > 0 ? `+${percentage}` : percentage}%
        </Typography>
      </Box>
    </Box>
  );
};

export default MotionStatsCard;
