import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "../../../constants/images";

const BlinkingEye = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      controls.start({ scale: 0, transition: { duration: 0.2 } });
      setTimeout(() => {
        setIsBlinking(false);
        controls.start({ scale: 1, transition: { duration: 0.2 } });
      }, 100);
    };

    setInterval(blink, 5000);
  }, []);

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        position: "relative"
      }}
      animate={controls}>
      <Image
        src={images.eye}
        alt="Blinking Eye"
        layout="fill"
        objectFit="cover"
      />
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "none",
          borderRadius: "50%"
        }}
        animate={{ scale: isBlinking ? 0 : 1 }}
      />
    </motion.div>
  );
};

export default BlinkingEye;
