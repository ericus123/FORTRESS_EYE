import { Box, CircularProgress } from "@mui/material";
import { CSSProperties, FC } from "react";
import { colors } from "../../../constants/colors";

type Props = {
  style?: CSSProperties;
  className?: string;
};
const PlayerLoader: FC<Props> = ({ style, className }) => {
  return (
    <Box
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
      <CircularProgress
        sx={{
          color: colors.light,
          width: "20px !important",
          height: "20px !important",
          opacity: 0.5
        }}
      />
    </Box>
  );
};

export default PlayerLoader;
