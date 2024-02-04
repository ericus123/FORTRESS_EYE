import { Box } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import { RootState } from "../../../../redux/modules/rootReducer";
import CenteredPopup from "../../../common/popups/Centered";
import AreaSelect from "../../../common/select/area/AreaSelect";

type FormData = {
  name: string;
};
const AlarmForm = ({
  show,
  handleShow,
  type = "add"
}: {
  show: boolean;
  handleShow: () => void;
  type?: "add" | "edit";
}) => {
  const { areas } = useSelector(({ area }: RootState) => area);

  return show ? (
    <CenteredPopup
      sx={{
        width: "400px",
        height: "250px",
        zIndex: 1,
        background: colors.graphite,
        borderRadius: "10px",
        padding: "2rem"
      }}>
      <Box
        sx={{
          position: "relative",
          height: "100%"
        }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            cursor: "pointer",
            zIndex: 1
          }}>
          <Image src={images.close} alt="" onClick={handleShow} />
        </Box>
        <AreaSelect {...{ areas }} />
      </Box>
    </CenteredPopup>
  ) : null;
};

export default AlarmForm;
