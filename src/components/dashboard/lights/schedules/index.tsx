import { Box, Typography } from "@mui/material";
import { colors } from "../../../../constants/colors";
import AppButton from "../../../common/AppButton";
import DateRangePicker from "./date";
import LightScheduleDays from "./days";
import TimeRangePicker from "./time";

const LightSchedule = () => {
  return (
    <Box
      sx={{
        background: colors.dark,
        height: "200px",
        width: "400px",
        borderRadius: "1rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
      <Box
        sx={{
          display: "flex"
        }}>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.9,
            lineHeight: "normal"
          }}>
          Schedule
        </Typography>
        <AppButton
          text="Save"
          sx={{
            marginLeft: "auto",
            background: colors.charcoal,
            width: "50px",
            height: "30px",
            color: colors.light,
            "&:hover": {
              background: colors.charcoal
            }
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          marginTop: "1rem"
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem"
          }}>
          {/* <Typography
            component={"h6"}
            sx={{
              color: colors.light,
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              opacity: 0.5,
              lineHeight: "normal"
            }}>
            Time and Date
          </Typography> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
            <TimeRangePicker />
            <DateRangePicker />
          </Box>
        </Box>
        <LightScheduleDays />
      </Box>
    </Box>
  );
};

export default LightSchedule;
