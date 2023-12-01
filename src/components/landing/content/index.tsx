"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import LandingLeft from "../left";
import LandingRight from "../right";
import MobileTabsSwitch from "../switch";

export type LandingActive = "text" | "illustrations";
const LandingContent = () => {
  const [active, setActive] = useState<LandingActive>("text");

  const handleChange = (state: LandingActive) => {
    setActive(state);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex"
        }}>
        <LandingLeft active={active} />
        <LandingRight active={active} />
      </Box>
      <MobileTabsSwitch handleChange={handleChange} active={active} />
    </Box>
  );
};

export default LandingContent;
