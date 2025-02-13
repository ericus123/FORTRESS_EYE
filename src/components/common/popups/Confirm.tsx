"use client";

import { Box, Typography } from "@mui/material";
import { colors } from "../../../constants/colors";
import AppButton from "../AppButton";
interface ConfirmPopupProps {
  message: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
  onCancel: () => void;
  show: boolean;
}

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({
  message,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
  show
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "350px",
        height: "150px",
        display: show ? "flex" : "none",
        zIndex: 99999,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: colors.dark_blue,
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
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontStyle: "normal",
            fontWeight: "500",
            opacity: 0.9,
            lineHeight: "normal",
            textAlign: "center"
          }}>
          {message}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem"
        }}>
        <AppButton
          title={confirmButtonText}
          sx={{
            background: colors.rose_red,
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
          onClick={onConfirm}
        />
        <AppButton
          title={cancelButtonText}
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
          onClick={onCancel}
        />
      </Box>
    </Box>
  );
};

export default ConfirmPopup;
