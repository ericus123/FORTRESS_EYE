"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import DetectionCard, { DetectionProp } from "./DetectionCard";

export const detections: DetectionProp[] = [
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  },
  {
    title: "Motion Detected",
    area: "Kitchen",
    timeStamp: new Date(),
    image: images.profile
  }
];
const Detections = ({ detections }: { detections: DetectionProp[] }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "33.3%",
        height: "100%",
        marginLeft: "66.6%"
      }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "100%",
          background: colors.dark,
          borderRadius: "1rem",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
        <Box
          sx={{
            display: "flex"
          }}>
          <Box>
            <Typography
              component={"h2"}
              sx={{
                color: colors.light,
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                opacity: 0.8,
                lineHeight: "normal"
              }}>
              Detection
            </Typography>
            <Typography
              component={"p"}
              sx={{
                color: colors.cambridge_blue,
                fontSize: "clamp(10px, 1.5vw, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
              }}>
              Cam 3
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              cursor: "pointer"
            }}>
            <Image
              title="Next"
              src={images.arrowNext}
              alt=""
              style={{
                opacity: 0.8
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "1rem 0 1rem 0",
            maxHeight: "94%",
            overflow: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}>
          {detections?.map((detection, i) => (
            <DetectionCard {...detection} key={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Detections;
