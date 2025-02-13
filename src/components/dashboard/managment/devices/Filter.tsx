import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { colors } from "../../../../constants/colors";

export type deviceType = "light" | "camera" | "door" | "alarm" | "sensor";

const DeviceFilter = ({
  type,
  title,
  selectedType,
  onChange
}: {
  type: deviceType;
  title: string;
  selectedType: deviceType;
  onChange: (type: deviceType) => void;
}) => {
  return (
    <FormControlLabel
      control={
        <Radio
          checked={selectedType === type}
          onChange={() => onChange(type)}
          value={type}
          sx={{
            color: colors.graphite,
            "&.Mui-checked": {
              color: colors.active
            }
          }}
        />
      }
      label={title}
      //   sx={{
      //     backgroundColor:
      //       selectedType === type ? colors.active_2 : colors.graphite,
      //     borderRadius: "5px",
      //     padding: "5px 10px",
      //     margin: "0",
      //     width: "auto"
      //   }}
    />
  );
};

const DevicesFilters = ({
  handleSelected,
  selectedType
}: {
  handleSelected: (type: deviceType) => void;
  selectedType: deviceType;
}) => {
  const handleChange = (type: deviceType) => {
    handleSelected(type);
  };

  return (
    <RadioGroup row>
      <DeviceFilter
        {...{
          type: "camera",
          title: "Cameras",
          selectedType,
          onChange: handleChange
        }}
      />
      <DeviceFilter
        {...{
          type: "light",
          title: "Lights",
          selectedType,
          onChange: handleChange
        }}
      />
      <DeviceFilter
        {...{
          type: "door",
          title: "Doors",
          selectedType,
          onChange: handleChange
        }}
      />
      <DeviceFilter
        {...{
          type: "alarm",
          title: "Alarms",
          selectedType,
          onChange: handleChange
        }}
      />
      <DeviceFilter
        {...{
          type: "sensor",
          title: "Sensors",
          selectedType,
          onChange: handleChange
        }}
      />
    </RadioGroup>
  );
};

export default DevicesFilters;
