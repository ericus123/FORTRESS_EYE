import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { Member } from "../../../../hooks/useMembers";
import MemberInitial from "../Initial";

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "50px auto 50px",
        gap: "1rem",
        alignItems: "center"
      }}>
      <Box
        sx={{
          width: "50px",
          height: "50px",
          position: "relative"
        }}>
        <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: status === "active" ? colors.active : colors.rose_red,
            position: "absolute",
            right: "-2.5px",
            bottom: "-2.5px",
            zIndex: 1
          }}></Box>
        <Box
          sx={{
            position: "relative",
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            overflow: "hidden"
          }}>
          {member?.avatar != undefined ? (
            <Image src={member?.avatar || ""} alt="" fill />
          ) : (
            <MemberInitial
              fullName={`${member?.firstName} ${member?.lastName}`}
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontFamily: "Poppins",
            fontSize: "clamp(10px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.9,
            lineHeight: "normal"
          }}>
          {`${member?.firstName} ${member?.lastName}`}
        </Typography>
        <Typography
          component={"h4"}
          sx={{
            color: colors.light,
            // fontFamily: "Poppins",
            fontSize: "clamp(10px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.5,
            lineHeight: "normal"
          }}>
          active
        </Typography>
      </Box>

      <Box></Box>
    </Box>
  );
};

export default MemberCard;
