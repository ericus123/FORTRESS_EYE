"use client";

import { Box } from "@mui/material";
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
        transition: ".2s ease-in-out"
      }}
      onClick={handleMenu}>
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
