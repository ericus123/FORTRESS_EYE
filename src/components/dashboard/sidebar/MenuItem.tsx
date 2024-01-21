"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { handleActiveLink } from "../../../redux/modules/navigation/navigationSlice";
import { RootState } from "../../../redux/modules/rootReducer";
import { MenuItemType } from "./items";

const MenuItem = ({ icon, name }: MenuItemType) => {
  const dispatch = useDispatch();

  const { activeLink } = useSelector(({ navigation }: RootState) => navigation);

  const handleMenu = () => {
    dispatch(handleActiveLink(name));
  };

  const isActive = activeLink === name;
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        cursor: "pointer",
        transition: ".2s ease-in-out",
        position: "relative"
      }}
      onClick={handleMenu}>
      {name === "Notifications" && activeLink != "Notifications" ? (
        <Box
          sx={{
            width: "20px",
            height: "20px",
            background: colors.rose_red,
            borderRadius: "50%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "-7.5px",
            right: "15px",
            zIndex: 1
          }}>
          <Typography
            component={"p"}
            sx={{
              color: colors.light,
              fontFamily: "Poppins",
              fontSize: "clamp(12px, 1.5vw, 12px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
            13
          </Typography>
        </Box>
      ) : null}
      {isActive ? (
        <Box
          sx={{
            width: "5px",
            height: "50px",
            background: colors.cambridge_blue,
            borderRadius: "2px",
            transition: ".2s ease-in-out"
          }}></Box>
      ) : null}
      <Box
        sx={{
          transition: ".2s ease-in-out",
          width: "50px",
          height: "50px",
          background: isActive ? colors.cambridge_blue : colors.dark,
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: isActive ? 0 : "25px",
          opacity: isActive ? 1 : 0.8
        }}>
        <Image src={icon} alt="" width={30} height={30} />
      </Box>
    </Box>
  );
};

export default MenuItem;
