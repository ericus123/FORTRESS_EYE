import { Box, Skeleton } from "@mui/material";
import React from "react";

const DoorSkeleton = () => {
  return (
    <Box
      sx={{
        height: "200px",
        width: "140px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid red"
      }}>
      <React.Fragment>
        <Skeleton height={150} />
        <Skeleton height={35} />
      </React.Fragment>
    </Box>
  );
};

export default DoorSkeleton;
