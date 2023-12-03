import { Box } from "@mui/material";
import Image from "next/image";
import { images } from "../../../constants/images";
import { LandingActive } from "../content";
import BlinkingEye from "./BlinkingEye";

const LandingRight = ({ active }: { active: LandingActive }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        height: "calc(100vh - 2rem - 60px)",
        "@media(max-width: 980px)": {
          margin: "0 auto",
          display: active === "illustrations" ? "flex" : "none"
        }
      }}>
      <Box
        sx={{
          width: "400px",
          height: "400px",
          position: "relative",
          "@media(max-width: 1200px)": {
            width: "300px",
            height: "300px"
          }
        }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "15%",
            width: "150px",
            height: "150px",
            transform: "translate(0%, -50%)",
            "@media(max-width: 1200px)": {
              width: "125px",
              height: "125px"
            }
          }}>
          <BlinkingEye />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: "calc(30% + 4rem)",
            width: "50px",
            height: "50px",
            "@media(max-width: 1200px)": {
              width: "35px",
              height: "35px"
            }
          }}>
          <Image src={images.bulb_yellow} alt="" fill />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translate(50%, -50%)",
            right: "calc(4rem)",
            width: "50px",
            height: "50px",
            "@media(max-width: 1200px)": {
              width: "35px",
              height: "35px"
            }
          }}>
          <Image src={images.camera} alt="" fill />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0%",
            right: "calc(30% + 4rem)",
            width: "50px",
            height: "50px",
            "@media(max-width: 1200px)": {
              width: "35px",
              height: "35px"
            }
          }}>
          <Image src={images.siren} alt="" fill />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingRight;
