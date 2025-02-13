import { Box, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { colors } from "../../../../constants/colors";
import { useProfile } from "../../../../hooks/useProfile";
import { useUpload } from "../../../../hooks/useUploader";
import { RootState } from "../../../../redux/modules/rootReducer";
import ImageCropper from "../../../common/image/ImageCropper";
import ProfileAvatar from "./Avatar";
import ProfileForm from "./Form";
import AvatarSkeleton from "./skeletons/AvatarSkeleton";
import FormSkeleton from "./skeletons/FormSkeleton";

const Profile = () => {
  const { uploadFile, isLoading: isUploading } = useUpload();
  const { handleUpdate, isLoading, error } = useProfile();
  const { profile } = useSelector(({ auth }: RootState) => auth);

  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  const handleSelected = (image: string) => {
    setSelectedImage(image);
  };

  const handleAvatarUpdate = async (file?: File) => {
    if (file != undefined) {
      if (file.size > 5 * 1024 * 1024) {
        toast.dismiss();
        setTimeout(() => {
          toast.error("The cropped image size exceeds the 5MB limit.");
        }, 1000);
        return;
      }

      const data = await uploadFile(file, "avatars");
      handleUpdate({
        input: {
          avatar: data.filename
        },
        callback: () => setSelectedImage(undefined)
      });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem 1rem",
        height: "fit-content",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      {selectedImage && (
        <ImageCropper
          image={selectedImage}
          handleUpdate={handleAvatarUpdate}
          isLoading={isLoading || isUploading}
        />
      )}
      <Box>
        <Typography
          component={"p"}
          sx={{
            color: colors.light_7,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
          }}>
          Your profile
        </Typography>
      </Box>
      {isUploading || isLoading ? (
        <AvatarSkeleton />
      ) : (
        <ProfileAvatar
          {...{ profile, uploadFile, handleUpdate, handleSelected }}
        />
      )}

      {isLoading ? (
        <FormSkeleton />
      ) : (
        <ProfileForm {...{ handleUpdate, isLoading, error, profile }} />
      )}
    </Box>
  );
};

export default Profile;
