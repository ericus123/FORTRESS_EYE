import { Box, Skeleton } from "@mui/material";
import { colors } from "../../../../constants/colors";

const MemberSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "-30px"
      }}>
      <Box>
        <Skeleton
          width={50}
          height={70}
          sx={{
            background: colors.dark
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}>
        <Skeleton
          width={150}
          height={25}
          sx={{
            background: colors.dark
          }}
        />
        <Skeleton
          width={50}
          height={25}
          sx={{
            background: colors.dark
          }}
        />
      </Box>
    </Box>
  );
};

export default MemberSkeleton;
