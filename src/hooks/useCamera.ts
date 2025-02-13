import { useDispatch, useSelector } from "react-redux";
import {
  ControlPopup,
  handleControlPopup
} from "../redux/modules/camera/cameraSlice";
import { RootState } from "../redux/modules/rootReducer";

const useCamera = () => {
  const dispatch = useDispatch();

  const { controlPopup } = useSelector(({ camera }: RootState) => camera);

  const triggerPopup = (data: ControlPopup) => {
    dispatch(handleControlPopup(data));
  };

  const onCancel = () => {
    triggerPopup({
      message: "",
      isOpen: false,
      type: "disable"
    });
  };

  const onConfirm = () => {
    if (controlPopup.type === "delete") {
    }

    if (controlPopup.type === "disable") {
    }
  };
  return {
    triggerPopup,
    onCancel,
    onConfirm,
    controlPopup
  };
};

export default useCamera;
