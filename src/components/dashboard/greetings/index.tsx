"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactMoment from "react-moment";
import { colors } from "../../../constants/colors";
const greetingTime = require("greeting-time");

const Greetings = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {}, [currentTime]);

  return (
    <Box
      sx={{
        padding: "1rem 2rem",
        borderRadius: "15px",
        height: "100px",
        background: colors.black_5
      }}>
      <Typography
        sx={{
          color: colors.light,
          fontFamily: "Poppins",
          fontSize: "clamp(14px, 1.5vw, 18px)",
          fontStyle: "normal",
          fontWeight: "600",
          opacity: 0.9,
          lineHeight: "normal"
        }}>
        {greetingTime(currentTime)}&nbsp; 👋🏾
      </Typography>
      <Typography
        sx={{
          fontSize: "clamp(10px, 1.5vw, 12px)",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          color: colors.cambridge_blue
        }}>
        <ReactMoment date={new Date()} format="HH:mm A" />
      </Typography>
    </Box>
  );
};

export default Greetings;
