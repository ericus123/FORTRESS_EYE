import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { Area, useAreas } from "../../../hooks/useAreas";
import { setEcosensorArea } from "../../../redux/modules/area/areaSlice";
import AppPopover from "../../common/Popover";
import AreaItem from "../../common/select/area/Item";

const SensorsAreaSelect = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);
  const { ecoSensorArea } = useAreas();

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
  const dispatch = useDispatch();

  const { data: areas } = useAreas();
  const handleArea = (_area: Area) => {
    dispatch(setEcosensorArea(_area));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem"
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem"
        }}>
        <Box
          component="div"
          //@ts-ignore
          onClick={(
            e: MouseEvent<
              HTMLAnchorElement,
              MouseEvent<Element, MouseEvent<Element, MouseEvent>>
            >
          ) => handleClick(e)}>
          {/* <Box
            sx={{
              marginLeft: "auto",
              cursor: "pointer",
              width: "200px",
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
          </Box> */}
          <Box
            sx={{
              marginLeft: "auto",
              cursor: "pointer",
              width: "fit-content",
              height: "30px",
              background: colors.dark,
              borderRadius: "15px",
              display: "flex",
              alignItems: "center"
            }}>
            <Typography
              component={"h3"}
              sx={{
                color: colors.light,
                fontSize: "clamp(10px, 1.5vw, 12px)",
                fontStyle: "normal",
                fontWeight: "500",
                opacity: 0.8,
                lineHeight: "normal",
                paddingLeft: "15px",
                paddingRight: "15px"
              }}>
              {ecoSensorArea?.name}
            </Typography>
            <Image
              src={images.caretDown}
              alt=""
              width={25}
              height={25}
              style={{
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
            width: "150px"
          }}>
          {areas
            .filter((a) => a.id != ecoSensorArea?.id)
            ?.map((area, i) => (
              <AreaItem
                {...{ area }}
                key={i}
                handleArea={() => handleArea(area)}
                sx={{
                  fontSize: "14px"
                }}
              />
            ))}
        </Box>
      </AppPopover>
    </Box>
  );
};

export default SensorsAreaSelect;
