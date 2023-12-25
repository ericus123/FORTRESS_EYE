import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import AppButton from "../../common/AppButton";
import { LandingActive } from "../content";

const LandingLeft = ({ active }: { active: LandingActive }) => {
  return (
    <Box
      sx={{
        transition: ".3s ease-in-out",
        display: "flex",
        alignItems: "center",
        height: "calc(100vh - 2rem - 60px)",
        "@media(max-width: 980px)": {
          display: active === "text" ? "flex" : "none"
        }
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          gap: "50px",
          maxWidth: "450px",
          width: "max-content",
          "@media(max-width: 980px)": {
            gap: "30px"
          }
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            "@media(max-width: 980px)": {
              maxWidth: "80%"
            }
          }}>
          <Typography
            component={"h1"}
            sx={{
              color: colors.light,
              fontSize: "clamp(24px, 3vw, 36px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal"
            }}>
            Your{" "}
            <Typography
              component={"span"}
              sx={{
                color: colors.cambridge_blue,
                fontSize: "clamp(24px, 3vw, 36px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal"
              }}>
              Guardian
            </Typography>{" "}
            in a Connected World
          </Typography>
          <Typography
            component={"p"}
            sx={{
              color: colors.light,
              fontFamily: "Poppins",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal"
            }}>
            control devices, detect intruders, and manage your fortress
            effortlessly, anytime, anywhere.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "clamp(10px , 1vw, 20px)"
          }}>
          <Link
            href={"https://github.com/ericus123/FORTRESS_EYE_API#readme"}
            target="_blank">
            <AppButton
              title="Learn More"
              sx={{
                "&:hover": {
                  background: colors.cambridge_blue
                },
                background: colors.cambridge_blue,
                color: colors.light,
                fontFamily: "Poppins",
                fontSize: "clamp(16px, 1.5vw, 18px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                borderRadius: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
                textAlign: "center",
                height: "50px",
                "@media(max-width: 980px)": {
                  height: "40px",
                  paddingLeft: "15px",
                  paddingRight: "15px"
                }
              }}
            />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UCBgxKEJd0urk2AGQsZNMWDQ"}
            style={{
              textDecoration: "none"
            }}
            target="_blank">
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center"
              }}>
              <Box
                sx={{
                  position: "relative",
                  width: "50px",
                  height: "50px",
                  "@media(max-width: 980px)": {
                    width: "40px",
                    height: "40px"
                  }
                }}>
                <Image src={images.play} alt="" fill />
              </Box>

              <Typography
                component={"h2"}
                sx={{
                  color: colors.cambridge_blue,
                  fontFamily: "Poppins",
                  fontSize: "clamp(16px, 1.5vw, 18px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal"
                }}>
                Watch Tutorial
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingLeft;
