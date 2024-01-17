import {
  Box,
  FormControlLabel,
  Switch,
  SwitchProps,
  Typography,
  styled
} from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";

const FanCard = ({ area, isOn }: { area: string; isOn?: boolean }) => {
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 33.6,
    height: 19,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: colors.light,
        "& + .MuiSwitch-track": {
          backgroundColor: colors.active,
          opacity: 1,
          border: 0
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5
        }
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff"
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600]
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3
      }
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 16,
      height: 16
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500
      })
    }
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem"
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
        <Typography
          component={"h2"}
          sx={{
            marginRight: "auto",
            color: colors.light_6,
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textAlign: "center"
          }}>
          {area}
        </Typography>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label=""
          sx={{
            marginRight: 0
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Image
          src={images.fan}
          alt=""
          width={50}
          height={50}
          style={{
            opacity: 0.5
          }}
        />
      </Box>
      <Typography
        component={"h3"}
        sx={{
          margin: "0 auto",
          color: colors.gray,
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          opacity: 0.9,
          lineHeight: "normal",
          textAlign: "center"
        }}>
        {isOn ? "ON" : "OFF"}
      </Typography>
    </Box>
  );
};

export default FanCard;
