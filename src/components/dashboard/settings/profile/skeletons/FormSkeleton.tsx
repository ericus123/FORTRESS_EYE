import { Box, Skeleton } from "@mui/material";

const FormSkeleton = () => {
  return (
    <Box
      sx={{
        height: "400px"
      }}>
      <Skeleton
        sx={{
          height: "500px",
          marginTop: "-130px",
          width: "600px"
        }}
      />
    </Box>
  );
};

export default FormSkeleton;
