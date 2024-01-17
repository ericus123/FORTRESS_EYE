import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import HomeSubTitle from "../../common/Headers";
import Sensor from "./Sensor";
import { sensorData } from "./data";

const Sensors = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        height: "170px"
      }}>
      <Box
        sx={{
          display: "flex"
        }}>
        <HomeSubTitle text="Sensors" />
        <Box
          sx={{
            marginLeft: "auto",
            cursor: "pointer",
            width: "fit-content",
            height: "30px",
            background: colors.dark,
            borderRadius: "15px",
            display: "flex",
            alignItems: "center"
          }}>
          <Typography
            component={"h3"}
            sx={{
              color: colors.light,
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontStyle: "normal",
              fontWeight: "500",
              opacity: 0.8,
              lineHeight: "normal",
              paddingLeft: "15px",
              paddingRight: "15px"
            }}>
            Living room
          </Typography>
          <Image
            src={images.caretDown}
            alt=""
            width={25}
            height={25}
            style={{
              opacity: 0.6
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          background: colors.dark,
          height: "150px",
          width: "100%",
          borderRadius: "1rem",
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          border: `1px solid ${colors.graphite}`,
          gap: "1rem"
        }}>
        <Sensor data={sensorData?.temperature} />
        <Sensor data={sensorData?.pressure} />
        <Sensor data={sensorData?.voc} />
        <Sensor data={sensorData?.humidity} />
      </Box>
    </Box>
  );
};

export default Sensors;
