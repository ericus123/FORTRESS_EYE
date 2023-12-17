import { Box } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";

export type LightProps = {
  isLightOn: boolean;
  handleLight: () => void;
};

const Light = ({ isLightOn, handleLight }: LightProps) => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "200px",
        background: colors.dark,
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      }}
      component={"div"}
      onClick={handleLight}
      title={isLightOn ? "Switch Off" : "Switch On"}>
      <Image
        src={isLightOn ? images?.lightOn : images.lightOff}
        alt=""
        width={100}
        height={100}
      />
    </Box>
  );
};

export default Light;
