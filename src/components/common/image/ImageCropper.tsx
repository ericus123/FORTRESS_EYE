import { Box } from "@mui/material";
import { useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { colors } from "../../../constants/colors";
import AppButton from "../AppButton";

const ImageCropper = ({
  image,
  handleUpdate,
  isLoading
}: {
  image: string;
  handleUpdate: (file: File | undefined) => void;
  isLoading: boolean;
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(10);
  const [croppedImage, setCroppedImage] = useState<File | undefined>();

  const onCropComplete = async (area: Area, pixels: Area) => {
    const croppedBlob = await getCroppedImg(pixels);

    if (croppedBlob) {
      const croppedFile = new File([croppedBlob], "cropped-image.png", {
        type: "image/png"
      });

      setCroppedImage(croppedFile);
    }
  };

  const getCroppedImg = async (cropArea: any): Promise<Blob | null> => {
    const _image = new Image();
    _image.src = image;
    await new Promise((resolve) => (_image.onload = resolve));

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return null;

    canvas.width = cropArea.width;
    canvas.height = cropArea.height;

    ctx.drawImage(
      _image,
      cropArea.x,
      cropArea.y,
      cropArea.width,
      cropArea.height,
      0,
      0,
      cropArea.width,
      cropArea.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob || null);
      }, "image/png");
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        width: 300,
        height: 250,
        top: "30%",
        left: "37.5%",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onCropComplete={(area, pixels) => onCropComplete(area, pixels)}
        onZoomChange={setZoom}
        style={{
          containerStyle: {
            background: colors.teal,
            opacity: 1,
            zIndex: 1,
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)"
          }
        }}
      />

      <AppButton
        title="Save 🚀"
        sx={{
          width: "300px",
          zIndex: 99,
          height: "3rem",
          bottom: 0,
          position: "absolute",
          background: colors.active,
          color: colors.light_9,
          fontFamily: "Poppins",
          fontSize: "clamp(12px, 1.5vw, 14px)",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          marginTop: "1rem",
          "&:hover": {
            background: colors.active
          }
        }}
        onClick={() => handleUpdate(croppedImage)}
        isLoading={isLoading}
        disabled={isLoading || croppedImage == undefined}
      />
    </Box>
  );
};

export default ImageCropper;
