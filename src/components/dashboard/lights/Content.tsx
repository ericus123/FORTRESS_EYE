"use client";

import { Box } from "@mui/material";
import { Light as Type } from "../../../hooks/useAreas";
import { useLights } from "../../../hooks/useLights";
import Light from "./Light";
import LightSchedule from "./schedules";

const LightsControlContent = ({ light }: { light: Type }) => {
  const { data, error, isLoading, handleUpdate } = useLights();

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
          isLightOn: light?.isOn,
          handleLight: () =>
            handleUpdate({
              id: light?.id,
              input: {
                isOn: !light?.isOn
              },
              callback: () => null
            })
        }}
      />

      <LightSchedule />
    </Box>
  );
};

export default LightsControlContent;
