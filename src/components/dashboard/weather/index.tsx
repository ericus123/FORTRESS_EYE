"use client";

import { Box } from "@mui/material";
import { images } from "../../../constants/images";
import useWeather from "../../../hooks/useWeather";
import Temperature from "./Temperature";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const { temperature, humidity } = useWeather();
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
            value: temperature ? Math.round(temperature) : 0.0,
            unit: images.celcius,
            icon: images.temperature
          }}
        />
        <Temperature
          {...{
            title: "Humidity",
            value: humidity ? Math.round(humidity) : 0.0,
            unit: images.percent,
            icon: images.humidity
          }}
        />
      </Box>
      <WeatherCard />
    </Box>
  );
};

export default Weather;
