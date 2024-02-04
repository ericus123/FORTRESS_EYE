import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import { Member } from "../../../../hooks/useMembers";
import MemberInitial from "../Initial";

const MemberCard = ({
  member,
  isCurrent
}: {
  member: Member;
  isCurrent: boolean;
}) => {
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
            // borderRadius: "10px",
            borderRadius: "50%",
            overflow: "hidden"
          }}>
          {member?.avatar != undefined ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/avatars/${member?.avatar}`}
              alt=""
              fill
              style={{
                objectFit: "cover"
              }}
            />
          ) : (
            <>
              <MemberInitial
                fullName={`${member?.firstName} ${member?.lastName}`}
              />
            </>
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
          {isCurrent ? "You" : `${member?.firstName} ${member?.lastName}`}

          {member?.role?.roleName === "SUPER_ADMIN" ? (
            <Image
              src={images.king}
              alt=""
              width={12.5}
              height={12.5}
              style={{
                marginLeft: "5px",
                opacity: 0.8
              }}
              title="SuperAdmin"
            />
          ) : null}
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
          offline
        </Typography>
      </Box>

      <Box></Box>
    </Box>
  );
};

export default MemberCard;
