import {
  Box,
  CircularProgress,
  Typography,
  circularProgressClasses
} from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { useVerification } from "../../../hooks/useAuth";
import CenteredPopup from "../../common/popups/Centered";

const Verified = () => {
  const { handleVerification, fetching, error, data } = useVerification();

  const searchParams = useSearchParams();

  useEffect(() => {
    handleVerification(`${searchParams.get("verify")}`);
  }, []);

  const isSuccess = data != undefined && !error && !fetching;
  return (
    <Box>
      <CenteredPopup sx={{}}>
        {fetching ? (
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: colors.light,
              animationDuration: "600ms",
              position: "absolute",
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round"
              }
            }}
            size={40}
            thickness={4}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px"
            }}>
            {isSuccess ? (
              <Image src={images.check} alt="" width={50} height={50} />
            ) : (
              <Image src={images.fail} alt="" width={50} height={50} />
            )}
            <Typography
              component={"h1"}
              sx={{
                color: colors.light,
                fontFamily: "Poppins",
                fontSize: "clamp(18px, 1.5vw, 24px)",
                fontStyle: "normal",
                fontWeight: "600",
                opacity: 0.9,
                lineHeight: "normal",
                textAlign: "center"
              }}>
              {isSuccess ? "Verified" : "Invalid or expired link"}
            </Typography>
          </Box>
        )}
      </CenteredPopup>
    </Box>
  );
};

export default Verified;
