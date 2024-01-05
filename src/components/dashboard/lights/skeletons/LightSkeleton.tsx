import { Box, Skeleton } from "@mui/material";
import React from "react";

const LightSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton width={150} height={50} />
      <Box
        sx={{
          maxHeight: "200px",
          maxWidth: "400px"
        }}>
        <Skeleton
          height={"325px"}
          sx={{
            padding: 0,
            marginTop: "-75px",
            maxWidth: "600px"
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default LightSkeleton;
