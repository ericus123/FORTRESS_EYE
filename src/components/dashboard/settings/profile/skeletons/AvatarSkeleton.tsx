import { Box, Skeleton } from "@mui/material";

const AvatarSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        gap: "1rem",
        alignItems: "center"
      }}>
      <Skeleton
        width={100}
        height={170}
        sx={{
          borderRadius: "50%",
          height: "100px",
          width: "100px"
        }}
      />
      <Box>
        <Skeleton width={120} height={30} sx={{}} />
        <Skeleton width={120} height={30} sx={{}} />
      </Box>
    </Box>
  );
};

export default AvatarSkeleton;
