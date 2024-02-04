import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { getAlarmAreaName } from "../../../helpers";
import { Alarm as AlarmType, Area } from "../../../hooks/useAreas";

const Alarm = ({ alarm, areas }: { alarm: AlarmType; areas: Area[] }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100px",
        minWidth: "80px",
        height: "80px",
        maxHeight: "80px",
        minHeight: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "5px",
        background: alarm.isOn ? colors.rose_red : colors.graphite,
        borderRadius: "10px"
        // border: !alarm.isOn
        //   ? `.5px dashed ${colors.active}`
        //   : `.5px dashed ${colors.rose_red}`
      }}>
      {/* <Box
        sx={{
          position: "absolute",
          right: "5px",
          top: "5px"
        }}>
        <Image src={images.dots} alt="" style={{ height: "12.5px" }} />
      </Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px"
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}>
          <Image src={images.siren} alt="" width={15} height={15} />
        </Box>
        <Box>
          <Typography
            component={"h3"}
            sx={{
              color: colors.light,
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontStyle: "normal",
              fontWeight: "400",
              opacity: 0.9,
              lineHeight: "normal",
              textAlign: "center"
            }}>
            in {getAlarmAreaName(alarm.area)}
          </Typography>
          <Typography
            component={"h3"}
            sx={{
              color: alarm.isOn ? colors.rose_red : colors.gray,
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "500",
              opacity: 0.9,
              lineHeight: "normal",
              textAlign: "center"
            }}>
            {alarm?.isOn ? "is ON" : "is OFF"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Alarm;
