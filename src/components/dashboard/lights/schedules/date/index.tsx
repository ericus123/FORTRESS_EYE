import { Box, Typography } from "@mui/material";
import { colors } from "../../../../../constants/colors";

const DateRangePicker = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "180px"
        // marginTop: ".5rem"
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
            11/12/2023
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
            19/12/2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DateRangePicker;
