import { Box, SxProps, Typography } from "@mui/material";
import { Area } from "../../../../hooks/useAreas";

const AreaItem = ({
  area,
  handleArea,
  sx
}: {
  area: Area;
  handleArea: () => void;
  sx?: SxProps;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: ".5rem 1rem .5rem 1rem",
        cursor: "pointer",
        "&:hover": {
          background: "black"
        }
      }}
      component={"div"}
      onClick={handleArea}>
      <Typography sx={{ ...sx }}>{area?.name}</Typography>
    </Box>
  );
};

export default AreaItem;
