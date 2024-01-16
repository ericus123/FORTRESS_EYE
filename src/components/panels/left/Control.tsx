import { Box } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { handleLeftBar } from "../../../redux/modules/navigation/navigationSlice";
import { RootState } from "../../../redux/modules/rootReducer";

const LeftBarControl = () => {
  const dispatch = useDispatch();

  const handleExpand = () => {
    dispatch(handleLeftBar());
  };

  const { isLeftBarExpanded: isExpanded } = useSelector(
    ({ navigation }: RootState) => navigation
  );

  return (
    <Box
      sx={{
        background: colors.graphite,
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        marginLeft: "auto",
        cursor: "pointer",
        opacity: 0.8
      }}
      component={"div"}
      onClick={handleExpand}>
      <Image
        src={images.caretDown}
        alt=""
        style={{
          opacity: 0.6,
          width: "40px",
          height: "40px",
          transform: isExpanded ? "rotate(90deg)" : "rotate(-90deg)"
        }}
      />
    </Box>
  );
};

export default LeftBarControl;
