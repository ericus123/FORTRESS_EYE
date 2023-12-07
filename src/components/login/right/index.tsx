"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import LoginWelcome from "./Welcome";
import LoginForm from "./form";

const AnimatedDiv = motion(Box);

const LoginRight = () => {
  const animationVariants = {
    initial: {
      x: "100%"
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      sx={{
        width: "calc(50vw - 1px)",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        overflow: "hidden",
        "@media(max-width: 860px)": {
          width: "auto"
        }
      }}>
      <AnimatedDiv
        initial="initial"
        animate="animate"
        variants={animationVariants}>
        <Box
          sx={{
            maxWidth: "450px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            overflow: "hidden",
            "@media(max-width: 980px)": {
              maxWidth: "300px"
            },
            "@media(max-width: 860px)": {
              maxWidth: "100%"
            }
          }}>
          <LoginWelcome />
          <LoginForm />
        </Box>
      </AnimatedDiv>
    </Box>
  );
};

export default LoginRight;
