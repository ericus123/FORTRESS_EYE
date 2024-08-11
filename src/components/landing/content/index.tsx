"use client";

import { Box } from "@mui/material";
import LandingIntro from "./Intro";

const LandingContent = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <LandingIntro />
      </Box>
    </Box>
  );
};

export default LandingContent;
