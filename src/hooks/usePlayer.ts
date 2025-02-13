import { useDispatch, useSelector } from "react-redux";
import {
  toggleCameraDetailsView,
  toggleExpanded,
  toggleMic,
  togglePictureMode,
  toggleSpeaker
} from "../redux/modules/player/playerSlice";
import { RootState } from "../redux/modules/rootReducer";

const usePlayer = () => {
  const dispatch = useDispatch();
  const {
    isSpeakerOpen,
    isMicOpen,
    isInPictureMode,
    isExpanded,
    isCameraDetailsOpen
  } = useSelector(({ playerSlice }: RootState) => playerSlice);

  const handleToggleMic = () => {
    dispatch(toggleMic());
  };

  const handleToggleSpeaker = () => {
    dispatch(toggleSpeaker());
  };

  const handleToggleExpanded = () => {
    dispatch(toggleExpanded());
  };

  const handleTogglePictureMode = () => {
    dispatch(togglePictureMode());
  };

  const handleToggleCameraDetailsView = () => {
    dispatch(toggleCameraDetailsView());
  };

  return {
    isMicOpen,
    isSpeakerOpen,
    isExpanded,
    isInPictureMode,
    isCameraDetailsOpen,
    handleToggleMic,
    handleToggleSpeaker,
    handleToggleExpanded,
    handleTogglePictureMode,
    handleToggleCameraDetailsView
  };
};

export default usePlayer;
