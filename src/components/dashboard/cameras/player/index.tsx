"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import MotionStats from "../../detections/motion/stats";
import CameraPlayerHeader from "./Header";
import LiveIndicator from "./LiveIndicator";
import PlayerWithWorker from "./sockets";

const CameraPlayer = () => {
  const playerRef = useRef(null);

  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <Box
      key={key}
      sx={{
        position: "absolute",
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bottom: 0
      }}>
      <Box
        sx={{
          width: "100%",
          height: "94%",
          position: "relative"
        }}>
        <MotionStats />
        <CameraPlayerHeader camera="Kitchen" />
        <Box
          sx={{
            width: "100%",
            height: "66.6%",
            position: "absolute",
            bottom: 0,
            background: colors.black_5,
            borderRadius: "1rem",
            overflow: "hidden"
          }}>
          <PlayerWithWorker
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }}
            {...{
              wsUrl: "wss://ws.amanieric.com",
              loaderProps: {
                show: true
              }
            }}
          />
          <Typography
            component={"h3"}
            sx={{
              position: "absolute",
              left: "1rem",
              top: "1rem",
              color: colors.light,
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              opacity: 0.8,
              lineHeight: "normal"
            }}>
            Cam 3
          </Typography>
          <Box
            sx={{
              position: "absolute",
              right: "1rem",
              top: "1rem",
              display: "flex",
              alignItems: "center",
              gap: ".5rem"
            }}>
            <Image
              src={images.reload}
              alt=""
              width={20}
              height={20}
              title="Refresh"
              onClick={handleReload}
              style={{
                cursor: "pointer"
              }}
            />
            <LiveIndicator />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CameraPlayer;
