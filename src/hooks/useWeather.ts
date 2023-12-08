"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

interface UseWeatherData {
  city: string;
  temperature: number | null;
  description: string | null;
  icon: string | null;
  fetchData: () => void;
}

const useWeather = (initialCity: string): UseWeatherData => {
  const [city, setCity] = useState(initialCity);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [icon, setIcon] = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (response.ok) {
        const data: WeatherData = await response.json();
        setTemperature(data.main.temp);
        setDescription(data.weather[0].description);
        setIcon(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      } else {
        throw new Error(`Failed to fetch weather data for ${city}`);
      }
    } catch (error) {
      throw new Error("Error fetching weather data");
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return {
    city,
    temperature,
    description,
    icon,
    fetchData
  };
};

export default useWeather;
