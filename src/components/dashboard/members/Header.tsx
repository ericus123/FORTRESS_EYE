import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { colors } from "../../../constants/colors";
import { handleInviteShow } from "../../../redux/modules/member/memberSlice";
import HomeSubTitle from "../../common/Headers";

const MembersHeader = ({ isAuthorized }: { isAuthorized: boolean }) => {
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(handleInviteShow());
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}>
      <Box
        sx={{
          marginRight: "auto"
        }}>
        <HomeSubTitle text="All Members"></HomeSubTitle>
      </Box>
      {isAuthorized ? (
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            gap: "1rem",
            border: `1.5px solid ${colors.gray}`,
            padding: "4px",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "15px",
            cursor: "pointer"
          }}
          component={"div"}
          onClick={handleShow}>
          <Typography
            sx={{
              color: colors.light,
              fontSize: "clamp(10px, 1.5vw, 12px)",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              opacity: 0.8,
              lineHeight: "normal"
            }}>
            Invite New +
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default MembersHeader;
