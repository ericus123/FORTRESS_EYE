import { useDispatch } from "react-redux";
import { handleActiveLink } from "../redux/modules/navigation/navigationSlice";
import { handleActiveTab } from "../redux/modules/settings/settingsSlice";

export const useNavigation = () => {
  const dispatch = useDispatch();

  const handleProfileView = () => {
    dispatch(handleActiveLink("Settings"));
    dispatch(handleActiveTab("profile"));
  };

  return {
    handleProfileView
  };
};
