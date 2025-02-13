import { Box } from "@mui/material";
import Device from "./Device";

const Devices = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        paddingTop: "1rem"
      }}>
      {[...Array(5)].map((i) => (
        <Device key={i} />
      ))}
    </Box>
  );
};

export default Devices;
