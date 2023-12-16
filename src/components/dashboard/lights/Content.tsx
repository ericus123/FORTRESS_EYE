"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import Light from "./Light";
import LightSchedule from "./schedules";

const LightsControlContent = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleLight = () => {
    setIsLightOn(!isLightOn);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        width: "600px",
        overflow: "scroll"
      }}>
      <Light
        {...{
          isLightOn
        }}
        handleLight={handleLight}
      />

      <LightSchedule />
    </Box>
  );
};

export default LightsControlContent;
