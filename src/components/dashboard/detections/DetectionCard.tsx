import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FaRunning } from "react-icons/fa";
import ReactMoment from "react-moment";
import { colors } from "../../../constants/colors";

export type DetectionProp = {
  title: string;
  timeStamp: Date;
  image: string | StaticImageData;
  area: string;
};
const DetectionCard = ({ title, timeStamp, image, area }: DetectionProp) => {
  return (
    <Box
      sx={{
        minWidth: "100%",
        cursor: "pointer"
      }}>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item xs={2.5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}>
            <FaRunning
              color="white"
              style={{
                width: "16px",
                height: "30px"
              }}
            />
            <Typography
              component={"p"}
              sx={{
                color: colors.light,
                fontSize: "clamp(10px, 1.5vw, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                opacity: 0.8,
                lineHeight: "normal"
              }}>
              <ReactMoment date={timeStamp} format="hh:mm A" />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            position: "relative"
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column"
            }}>
            <Typography
              component={"h3"}
              sx={{
                color: colors.light,
                fontSize: "clamp(11px, 1.5vw, 13px)",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                opacity: 0.8,
                lineHeight: "normal",
                marginRight: "auto"
              }}>
              {title}
            </Typography>
            <Typography
              component={"p"}
              textAlign={"left"}
              sx={{
                color: colors.light,
                fontSize: "clamp(10px, 1.5vw, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                opacity: 0.8,
                lineHeight: "normal",
                marginRight: "auto"
              }}>
              {area}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3.5}>
          <Box
            sx={{
              position: "relative",
              width: "80px",
              height: "60px",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}>
            <Image src={image} alt="" fill />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetectionCard;
