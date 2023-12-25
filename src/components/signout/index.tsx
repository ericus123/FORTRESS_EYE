"use client";

import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import { useSignout } from "../../hooks/useAuth";
import { handleActiveLink } from "../../redux/modules/navigation/navigationSlice";
import { RootState } from "../../redux/modules/rootReducer";
import AppButton from "../common/AppButton";

const SignoutPopup = () => {
  const { activeLink } = useSelector(({ navigation }: RootState) => navigation);

  const { handleSignout } = useSignout();

  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(handleActiveLink("Home"));
  };

  const handleClick = () => {
    handleSignout();
  };

  return (
    <Box
      sx={{
        position: "absolute",
        width: "350px",
        height: "150px",
        display: activeLink === "Signout" ? "flex" : "none",
        zIndex: 1,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: colors.charcoal,
        borderRadius: "10px",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem 1rem",
        gap: "1rem"
      }}>
      <Box>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontFamily: "Poppins",
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.9,
            lineHeight: "normal",
            textAlign: "center"
          }}>
          Are you sure you want to signout ?
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem"
        }}>
        <AppButton
          title="Signout"
          sx={{
            background: colors.rose_pompadour,
            color: colors.light,
            opacity: 0.8,
            width: "100px",
            transition: ".2s ease-in-out",
            "&:hover": {
              background: colors.rose_pompadour,
              transition: ".2s ease-in-out",
              fontWeight: 600
            }
          }}
          onClick={handleClick}
        />
        <AppButton
          title="Stay"
          sx={{
            background: colors.active,
            color: colors.light,
            opacity: 0.8,
            transition: ".2s ease-in-out",
            width: "100px",
            "&:hover": {
              background: colors.cambridge_blue,
              transition: ".2s ease-in-out",
              fontWeight: 600
            }
          }}
          onClick={handleCancel}
        />
      </Box>
    </Box>
  );
};

export default SignoutPopup;
