import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { RootState } from "../../../redux/modules/rootReducer";
import { SensorData } from "./data";

const Sensor = ({ data }: { data: SensorData }) => {
  const { area } = useSelector(({ area }: RootState) => area);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "calc(50% - 0.5rem)",
        gap: "5px"
      }}>
      <Box
        sx={{
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          minWidth: "25px",
          minHeight: "25px",
          maxWidth: "25px",
          maxHeight: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: colors.graphite
        }}>
        <Image src={data?.icon} alt="" width={15} height={15} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.9,
            lineHeight: "normal",
            textAlign: "left"
          }}>
          {data?.name}
        </Typography>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal"
          }}>
          {data?.value} {data?.unit}
        </Typography>
      </Box>

      {data?.progress?.type !== "same" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "auto"
          }}>
          <Image
            src={
              data?.progress?.type === "decrease"
                ? images.arrowDecrease
                : images?.arrowIncrease
            }
            alt=""
            height={15}
          />
          <Typography
            component={"h2"}
            sx={{
              color:
                data?.progress?.type === "decrease"
                  ? colors.rose_red
                  : colors.active,
              fontSize: "clamp(10px, 1.5vw, 10px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
            {data?.progress?.type === "decrease"
              ? "-"
              : data?.progress?.type === "increase"
              ? "+"
              : null}
            {data?.progress?.value}&nbsp;
            {data?.unit}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default Sensor;
