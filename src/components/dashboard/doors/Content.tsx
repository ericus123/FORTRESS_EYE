import { Box } from "@mui/material";
import { images } from "../../../constants/images";
import Door from "./Door";

const Doors = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        overflow: "scroll",
        height: "200px",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      <Door
        {...{
          area: "Living Room",
          status: "locked",
          cover: images.profile
        }}
      />
      <Door
        {...{
          area: "Kitchen",
          status: "unlocked",
          cover: images.profile
        }}
      />
      <Door
        {...{
          area: "Kitchen",
          status: "unlocked",
          cover: images.profile
        }}
      />
      <Door
        {...{
          area: "Kitchen",
          status: "unlocked",
          cover: images.profile
        }}
      />
      <Door
        {...{
          area: "Kitchen",
          status: "unlocked",
          cover: images.profile
        }}
      />
      <Door
        {...{
          area: "Kitchen",
          status: "unlocked",
          cover: images.profile
        }}
      />
    </Box>
  );
};

export default Doors;
