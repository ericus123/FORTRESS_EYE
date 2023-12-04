"use client";
import { Box, styled } from "@mui/system";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "../../../constants/images";

const AnimatedDiv = styled(motion.div)({
  width: "calc(50vw - 1px)",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media(max-width: 860px)": {
    display: "none"
  }
});

const LoginLeft = () => {
  const animationVariants = {
    initial: {
      y: "100%"
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatedDiv
      initial="initial"
      animate="animate"
      variants={animationVariants}>
      <Box
        sx={{
          position: "relative",
          width: "400px",
          height: "400px"
        }}>
        <Image src={images.login} alt="" fill />
      </Box>
    </AnimatedDiv>
  );
};

export default LoginLeft;
