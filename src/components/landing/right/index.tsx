"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { LandingActive } from "../content";
import BlinkingEye from "./BlinkingEye";
import HomeAlarm from "./HomeAlarm";
import HomeBulb from "./HomeBulb";
import HomeCamera from "./HomeCamera";

const LandingRight = ({ active }: { active: LandingActive }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "calc(100vh - 2rem - 60px)",
        "@media(max-width: 980px)": {
          margin: "0 auto",
          display: active === "illustrations" ? "flex" : "none"
        }
      }}>
      <Box
        sx={{
          width: "350px",
          height: "350px",
          margin: "0 auto",
          position: "relative",
          "@media(max-width: 1200px)": {
            width: "300px",
            height: "300px"
          }
        }}>
        <BlinkingEye />
        <HomeBulb />
        <HomeCamera />
        <HomeAlarm />
      </Box>
    </Box>
  );
};

export default LandingRight;
