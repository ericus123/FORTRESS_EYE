import { StaticImageData } from "next/image";
import { images } from "../../../constants/images";

export type SensorData = {
  name: string;
  value: number;
  unit: "hpa" | "%" | "ppm" | "°C";
  icon: StaticImageData | string;
  progress: {
    type: "increase" | "decrease" | "same";
    value?: number;
  };
};

export const sensorData: {
  pressure: SensorData;
  humidity: SensorData;
  temperature: SensorData;
  voc: SensorData;
} = {
  pressure: {
    name: "Press",
    value: 21,
    unit: "hpa",
    icon: images.pressure,
    progress: {
      type: "increase",
      value: 12
    }
  },
  temperature: {
    name: "Temp",
    value: 21,
    unit: "°C",
    icon: images.temperature,
    progress: {
      type: "decrease",
      value: 12
    }
  },
  humidity: {
    name: "VOC",
    value: 21,
    unit: "ppm",
    icon: images.air,
    progress: {
      type: "increase",
      value: 12
    }
  },
  voc: {
    name: "Hum",
    value: 21,
    unit: "%",
    icon: images.humidity,
    progress: {
      type: "increase",
      value: 12
    }
  }
};
