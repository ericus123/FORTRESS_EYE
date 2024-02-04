import { Box, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import { useAlarms } from "../../../../hooks/useAlarms";
import { Area } from "../../../../hooks/useAreas";
import AppButton from "../../AppButton";
import AppPopover from "../../Popover";
import AreaItem from "./Item";

const AreaSelect = ({ areas }: { areas: Area[] }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);
  const { handleAddAlarm, isAdding, alarms, fetchData } = useAlarms();

  const handleClick = (
    event: MouseEvent<
      HTMLAnchorElement,
      MouseEvent<Element, MouseEvent<Element, MouseEvent>>
    >
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [area, setArea] = useState<Area>(areas[0]);
  const handleArea = (_area: Area) => {
    setArea(_area);
    handleClose();
  };

  const [key, setKey] = useState<string>(nanoid(4));

  const refresh = () => {
    fetchData();
    setKey(nanoid(4));
  };
  return (
    <Box
      sx={{
        paddingTop: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem"
      }}
      key={key}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem"
        }}>
        <Typography
          component={"p"}
          sx={{
            color: colors.light,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.9,
            lineHeight: "normal",
            textAlign: "left"
          }}>
          Select area:
        </Typography>
        <Box
          component="div"
          //@ts-ignore
          onClick={(
            e: MouseEvent<
              HTMLAnchorElement,
              MouseEvent<Element, MouseEvent<Element, MouseEvent>>
            >
          ) => handleClick(e)}>
          <Box
            sx={{
              marginLeft: "auto",
              cursor: "pointer",
              width: "300px",
              height: "40px",
              background: colors.dark,
              borderRadius: "15px",
              display: "flex",
              alignItems: "center"
            }}>
            <Typography
              component={"h3"}
              sx={{
                color: colors.light,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                opacity: 0.8,
                lineHeight: "normal",
                paddingLeft: "15px",
                paddingRight: "15px"
              }}>
              {area?.name}
            </Typography>
            <Image
              src={images.caretDown}
              alt=""
              width={25}
              height={25}
              style={{
                marginLeft: "auto",
                marginRight: "1rem",
                opacity: 0.6
              }}
            />
          </Box>
        </Box>
      </Box>
      <AppPopover handleClose={handleClose} anchorEl={anchorEl}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "300px"
          }}>
          {areas
            .filter((a) => a.id != area.id)
            ?.map((area, i) => (
              <AreaItem
                {...{ area }}
                key={i}
                handleArea={() => handleArea(area)}
              />
            ))}
        </Box>
      </AppPopover>
      <AppButton
        title="Add"
        isLoading={isAdding}
        disabled={isAdding}
        onClick={() =>
          handleAddAlarm(
            {
              name: nanoid(6),
              areaID: area?.id
            },
            () => refresh()
          )
        }
        sx={{
          background: colors.teal,
          width: "300px",
          height: "40px",
          color: colors.light,
          fontWeight: 600,
          "&:hover": {
            background: colors.black_5
          }
        }}
      />
    </Box>
  );
};

export default AreaSelect;
