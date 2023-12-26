import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField } from "@mui/material";
import Image from "next/image";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import { useAreas } from "../../../../hooks/useAreas";
import AppButton from "../../../common/AppButton";
import InputError from "../../../common/inputs/InputError";
import CenteredPopup from "../../../common/popups/Centered";

type FormData = {
  name: string;
};
const AddArea = ({
  show,
  handleShow
}: {
  show: boolean;
  handleShow: () => void;
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required")
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const { handleAddArea, isAdding } = useAreas();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    handleAddArea(data?.name, () => methods.reset());
  };

  return show ? (
    <CenteredPopup
      sx={{
        width: "400px",
        height: "250px",
        zIndex: 1,
        background: colors.dark_blue,
        borderRadius: "10px",
        padding: "2rem"
      }}>
      <Box
        sx={{
          position: "relative",
          height: "100%"
        }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            cursor: "pointer"
          }}>
          <Image src={images.close} alt="" onClick={handleShow} />
        </Box>

        <FormProvider {...methods}>
          <form
            autoCorrect="false"
            autoSave="false"
            autoComplete="off"
            autoFocus={false}
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
            <Box
              sx={{
                paddingTop: "3.5rem"
              }}>
              <TextField
                variant="standard"
                id="name"
                type="text"
                autoComplete="off"
                {...methods.register("name")}
                error={Boolean(methods.formState.errors.name)}
                fullWidth
                autoFocus={false}
                placeholder="Area name"
                sx={{
                  borderBottom: `2px solid ${colors.light_5}`,
                  height: "45px",
                  color: colors.light,
                  marginBottom: 0,
                  paddingLeft: "10px",
                  fill: "none"
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    padding: 0,
                    height: "45px",
                    color: colors.light,
                    fill: "none"
                  }
                }}
              />
              <InputError error={methods.formState.errors.name?.message} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                gap: "calc(400px - 300px - 4rem)",
                bottom: 0
              }}>
              <AppButton
                title="Cancel"
                type="button"
                sx={{
                  background: "transparent",
                  width: "150px",
                  height: "40px",
                  border: `1px solid ${colors.light_6}`,
                  color: colors.light,
                  opacity: 8,
                  "&:hover": {
                    background: "transparent"
                  }
                }}
                onClick={handleShow}
              />
              <AppButton
                title="Add"
                isLoading={isAdding}
                disabled={isAdding}
                sx={{
                  background: colors.black_5,
                  width: "150px",
                  height: "40px",
                  color: colors.light,
                  opacity: 8,
                  "&:hover": {
                    background: colors.black_5
                  }
                }}
              />
            </Box>
          </form>
        </FormProvider>
      </Box>
    </CenteredPopup>
  ) : null;
};

export default AddArea;
