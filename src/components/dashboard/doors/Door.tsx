import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { Area } from "../../../hooks/useAreas";
import { useDoors } from "../../../hooks/useDoors";

const Door = ({ area }: { area: Area }) => {
  const { data, isLoading, error, handleUpdate } = useDoors();
  return (
    <Box
      sx={{
        height: "200px",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "150px",
          borderRadius: ".5rem",
          overflow: "hidden",
          background: colors.dark,
          border: `.5px solid ${colors.graphite}`
        }}>
        <Image
          src={images.door}
          alt=""
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            width: "40px",
            height: "40px",
            opacity: 0.8
          }}
        />
        <Box
          sx={{
            position: "absolute",
            height: "30px",
            width: "90%",
            left: "5%",
            right: "5%",
            bottom: "10px",
            borderRadius: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Typography
            component={"h3"}
            sx={{
              textAlign: "center",
              color: colors.light,
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              opacity: 0.6,
              lineHeight: "normal"
            }}>
            {area?.name}
          </Typography>
        </Box>
      </Box>
      <Box
        component={"div"}
        sx={{
          background: !area?.door?.isLocked ? colors.active : colors.rose_red,
          width: "100%",
          display: "flex",
          borderRadius: "5px",
          height: "35px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer"
        }}
        onClick={() =>
          handleUpdate({
            id: area?.door?.id,
            input: {
              isLocked: !area?.door?.isLocked
            },
            callback: () => null
          })
        }>
        <Image
          src={!area?.door?.isLocked ? images.unlocked : images.locked}
          alt=""
          width={20}
          height={20}
        />
        <Typography
          component={"h4"}
          sx={{
            textAlign: "center",
            color: colors.light,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
          }}>
          {!area?.door?.isLocked ? "Unlocked" : "Locked"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Door;
