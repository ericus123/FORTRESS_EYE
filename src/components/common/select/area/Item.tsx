import { Box, Typography } from "@mui/material";
import { Area } from "../../../../hooks/useAreas";

const AreaItem = ({
  area,
  handleArea
}: {
  area: Area;
  handleArea: () => void;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: ".5rem 1rem .5rem 1rem",
        "&:hover": {
          background: "black"
        }
      }}
      component={"div"}
      onClick={handleArea}>
      <Typography>{area?.name}</Typography>
    </Box>
  );
};

export default AreaItem;
