import { Box } from "@mui/material";
import { colors } from "../../../constants/colors";
import HomeSubTitle from "../../common/Headers";
import FanCard from "./FanCard";

const Fan = () => {
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
            isOn: true,
            area: "Living Room"
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
            isOn: true,
            area: "Kitchen"
          }}
        />
      </Box>
    </Box>
  );
};

export default Fan;
