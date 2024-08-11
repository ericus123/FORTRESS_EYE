import { Box } from "@mui/material";
import { useState } from "react";
import { colors } from "../../../constants/colors";
import HomeSubTitle from "../../common/Headers";
import FanCard from "./FanCard";

const Fan = () => {
  const [isFanOn1, setIsFan1On] = useState<boolean>(false);
  const [isFanOn2, setIsFan2On] = useState<boolean>(false);

  const handleFan1 = () => {
    setIsFan1On(!isFanOn1);
  };

  const handleFan2 = () => {
    setIsFan2On(!isFanOn2);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        height: "100%"
      }}>
      <Box
        sx={{
          display: "flex"
        }}>
        <HomeSubTitle text="Air Conditioners" />
      </Box>
      <Box
        sx={{
          background: colors.dark,
          height: "150px",
          width: "100%",
          borderRadius: "1rem",
          padding: "1rem",
          display: "grid",
          gridTemplateColumns: "auto 2px auto",
          flexWrap: "wrap",
          border: `1px solid ${colors.graphite}`,
          gap: ".5rem"
        }}>
        <FanCard
          {...{
            isOn: isFanOn1,
            area: "Living Room",
            handleFan: handleFan1
          }}
        />

        <Box
          sx={{
            width: "1px",
            height: "120px",
            background: colors.graphite
          }}></Box>

        <FanCard
          {...{
            isOn: isFanOn2,
            area: "Kitchen",
            handleFan: handleFan2
          }}
        />
      </Box>
    </Box>
  );
};

export default Fan;
