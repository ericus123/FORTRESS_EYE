"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { colors } from "../../../constants/colors";
import useWeather from "../../../hooks/useWeather";

const WeatherCard = () => {
  const { temperature, description, icon, city, fetchData } =
    useWeather("Kigali");

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        height: "calc(100% - 50px -  2rem)",
        background: colors.black_5,
        borderRadius: "15px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        position: "relative"
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100px",
          position: "relative"
        }}>
        <Box
          sx={{
            position: "relative",
            width: "100px",
            height: "100px"
          }}>
          <Image src={icon || ""} alt="" fill />
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            position: "relative"
          }}>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: "15px",
              display: "flex"
            }}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "2.5px",
                border: `1px solid ${colors.cambridge_blue}`
              }}></Box>
            <Typography
              component={"h6"}
              sx={{
                color: colors.cambridge_blue,
                fontFamily: "Poppins",
                fontSize: "clamp(10px, 1.5vw, 14px)",
                fontWeight: "500"
              }}>
              C
            </Typography>
          </Box>
          <Typography
            component={"h1"}
            sx={{
              color: colors.cambridge_blue,
              fontFamily: "Poppins",
              fontSize: "80px",
              fontStyle: "normal",
              fontWeight: "600",
              opacity: 0.9,
              lineHeight: "normal",
              marginRight: "5px"
            }}>
            {temperature ? Math.round(temperature) : 28}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "150px 100px",
          gap: "1rem",
          height: "calc(50px - 1rem)",
          alignItems: "center"
        }}>
        <Box
          sx={{
            overflow: "scroll"
          }}>
          <Typography
            sx={{
              flexWrap: "wrap",
              overflow: "scroll",
              color: colors.light,
              fontFamily: "Poppins",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              opacity: 0.8,
              lineHeight: "normal"
            }}>
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100px",
            minWidth: "100px",
            textAlign: "center"
          }}>
          <Typography
            sx={{
              color: colors.light,
              fontFamily: "Poppins",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              opacity: 0.5,
              lineHeight: "normal"
            }}>
            {city}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherCard;
