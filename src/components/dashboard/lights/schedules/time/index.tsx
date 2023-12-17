import { Box, Typography } from "@mui/material";
import { colors } from "../../../../../constants/colors";

const TimeRangePicker = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "180px",
        marginBottom: "auto"
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px"
        }}>
        <Typography
          component={"h6"}
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.5,
            lineHeight: "normal"
          }}>
          From
        </Typography>

        <Box
          sx={{
            background: colors.black_5,
            height: "30px",
            width: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "6px"
          }}>
          <Typography
            component={"p"}
            sx={{
              color: colors.light,
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontStyle: "normal",
              fontWeight: "400",
              opacity: 0.9,
              lineHeight: "normal"
            }}>
            11:32 AM
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px"
        }}>
        <Typography
          component={"h6"}
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.5,
            lineHeight: "normal"
          }}>
          To
        </Typography>
        <Box
          sx={{
            background: colors.black_5,
            height: "30px",
            width: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "6px"
          }}>
          <Typography
            component={"p"}
            sx={{
              color: colors.light,
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontStyle: "normal",
              fontWeight: "400",
              opacity: 0.9,
              lineHeight: "normal"
            }}>
            11:32 AM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TimeRangePicker;
