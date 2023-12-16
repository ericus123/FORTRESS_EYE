import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { colors } from "../../../../../constants/colors";

const days = ["Mon", "Tue", , "Wed", "Thu", "Fri", "Sat", "Sun"];

export type LightDay = {
  name: string;
  enabled: boolean;
};

const LightScheduleDays = () => {
  const [days, setDays] = useState<LightDay[]>([
    {
      name: "Mon",
      enabled: false
    },
    {
      name: "Tue",
      enabled: false
    },
    {
      name: "Wed",
      enabled: false
    },
    {
      name: "Thu",
      enabled: false
    },
    {
      name: "Fri",
      enabled: false
    },
    {
      name: "Sat",
      enabled: false
    },
    {
      name: "Sun",
      enabled: false
    }
  ]);

  const handleDays = (day: LightDay) => {
    setDays(
      days?.map((_day) => {
        if (_day.name === day.name) {
          return {
            ..._day,
            enabled: !day.enabled
          };
        }
        return _day;
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
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
        Days
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px"
        }}>
        {days?.map((day, i) => (
          <Box
            key={i}
            sx={{
              background: day.enabled ? colors.cambridge_blue : colors.black_5,
              borderRadius: "3px",
              padding: "3px 5px",
              width: "35px",
              cursor: "pointer"
            }}
            component={"div"}
            onClick={() => handleDays(day)}>
            <Typography
              component={"h1"}
              sx={{
                color: colors.light,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontStyle: "normal",
                fontWeight: "400",
                opacity: 0.9,
                lineHeight: "normal",
                textAlign: "center"
              }}>
              {day.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LightScheduleDays;
