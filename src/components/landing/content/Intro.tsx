import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import AppButton from "../../common/AppButton";

const LandingIntro = () => {
  return (
    <Box
      sx={{
        transition: ".3s ease-in-out",
        display: "flex",
        alignItems: "center",
        height: "calc(100vh - 2rem - 60px)"
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          maxWidth: "750px",
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
              fontSize: [
                "clamp(32px, 4.5vw, 52px)",
                "clamp(36px, 5vw, 52px)",
                "52px"
              ],
              textAlign: "center",
              fontWeight: 900,
              fontStyle: "normal",
              lineHeight: "1",
              fontFamily: "Poppins"
            }}>
            Your Trusted
            <Typography
              component={"span"}
              sx={{
                color: colors.cambridge_blue,
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
                fontSize: [
                  "clamp(36px, 4.5vw, 56px)",
                  "clamp(40px, 5vw, 56px)",
                  "56px"
                ],
                fontWeight: 900,
                fontFamily: "Poppins"
              }}>
              Guardian
            </Typography>{" "}
            in a Connected World
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center"
            }}>
            <Typography
              component={"p"}
              sx={{
                color: "#E9EAE9",
                fontFamily: "Poppins",
                fontSize: "clamp(12px, 1.5vw, 16px)",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "normal",
                textAlign: "center",
                maxWidth: "70%"
              }}>
              Control devices,accurately detect intruders, and effortlessly
              manage your fortress, anytime, anywhere.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center"
          }}>
          <Link
            href={"https://github.com/ericus123/FORTRESS_EYE_API#readme"}
            target="_blank">
            <AppButton
              title="Let's get started"
              sx={{
                "&:hover": {
                  background: colors.cambridge_blue
                },
                background: colors.cambridge_blue,
                color: colors.light,
                fontFamily: "Poppins",
                fontSize: "clamp(16px, 1.5vw, 18px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                borderRadius: "6px",
                padding: "15px 20px",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
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
                    width: "40px",
                    height: "40px",
                    "@media(max-width: 980px)": {
                      width: "30px",
                      height: "30px"
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
                    fontWeight: "500",
                    lineHeight: "normal"
                  }}>
                  Watch Tutorial
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingIntro;
