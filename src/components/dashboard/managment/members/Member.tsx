import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { Member } from "../../../../hooks/useMembers";

const IMember = ({ member }: { member: Member }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        background: colors.dark_blue,
        borderRadius: "15px",
        padding: "1rem",
        position: "relative",
        cursor: "pointer",
        transition: ".3s ease-in-out",
        ":hover": {
          background: colors.graphite
        }
      }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: ".75rem"
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}>
          <Box
            sx={{
              position: "relative",
              width: "125px",
              height: "125px",
              borderRadius: "7.5px",
              overflow: "hidden"
            }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/avatars/${member?.avatar}`}
              style={{
                objectFit: "cover"
              }}
              alt=""
              fill
            />
          </Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: colors.rose_red,
              position: "absolute",
              bottom: "-3px",
              right: "-3px",
              boxShadow: `0px 0px 10px ${colors.rose_red}`
            }}></Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: ".5rem"
          }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}>
            <Typography
              sx={{
                color: colors.light,
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                textAlign: "center"
              }}>
              AMANI Eric
            </Typography>{" "}
            <Typography
              sx={{
                color: colors.light_5,
                fontSize: "clamp(10px, 1.5vw, 12px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                textAlign: "center"
              }}>
              @amani
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IMember;
