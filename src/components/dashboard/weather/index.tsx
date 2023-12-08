import { Box } from "@mui/material";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import Temperature from "./Temperature";

const Weather = () => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
      <Box
        sx={{
          height: "100px",
          display: "flex",
          gap: "1rem"
        }}>
        <Temperature
          {...{
            title: "Temperature",
            value: 30,
            unit: images.celcius,
            icon: images.temperature
          }}
        />
        <Temperature
          {...{
            title: "Humidity",
            value: 17,
            unit: images.percent,
            icon: images.humidity
          }}
        />
      </Box>
      <Box
        sx={{
          height: "calc(100% - 50px -  2rem)",
          background: colors.black_5,
          borderRadius: "15px"
        }}></Box>
    </Box>
  );
};

export default Weather;
