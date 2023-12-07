"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import LandingLeft from "../left";
import LandingRight from "../right";

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
          display: "grid",
          gridTemplateColumns: "50% 50%",
          "@media(max-width: 980px)": {
            display: "flex",
            flexDirection: "column"
          }
        }}>
        <LandingLeft active={active} />
        <LandingRight active={active} />
      </Box>
      {/* <MobileTabsSwitch handleChange={handleChange} active={active} /> */}
    </Box>
  );
};

export default LandingContent;
