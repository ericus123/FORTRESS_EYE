"use client";

import { Box, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import { CSSProperties, useRef, useState } from "react";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import MotionStats from "../../detections/motion/stats";
import CameraControls from "../controls";
import PtzControl from "../controls/PtzControl";
import CameraPlayerHeader from "./Header";
import LiveIndicator from "./LiveIndicator";
import PlayerWithWorker from "./sockets";

const CameraPlayer = ({
  sx,
  isStandalone,
  containerSx
}: {
  sx?: CSSProperties;
  isStandalone?: boolean;
  containerSx?: SxProps;
}) => {
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
        bottom: 0,
        ...containerSx
      }}>
      <Box
        sx={{
          width: "100%",
          height: "94%",
          position: "relative"
        }}>
        <PtzControl />
        {!isStandalone ? <MotionStats /> : null}
        {!isStandalone ? <CameraPlayerHeader camera="Kitchen" /> : null}
        <Box
          sx={{
            width: "100%",
            height: "66.6%",
            position: "absolute",
            bottom: 0,
            background: colors.black_5,
            borderRadius: "1rem",
            overflow: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}>
          <PlayerWithWorker
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              ...sx
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
        <CameraControls />
      </Box>
    </Box>
  );
};

export default CameraPlayer;
