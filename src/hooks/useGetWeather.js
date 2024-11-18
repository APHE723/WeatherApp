import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );
      const data = await res.json();
      console.log("Weather Data:", data); // Log the raw weather data
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.log("Error fetching weather:", e); // Log any error
      setError("Could not fetch weather");
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("Location permission status:", status); // Log permission status
      if (status !== "granted") {
        setError("Permission to access location was denied");
        setLoading(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log("Location:", location); // Log the location data
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
    })();
  }, []);

  useEffect(() => {
    if (lat && lon) {
      fetchWeatherData();
    }
  }, [lat, lon]);

  return [loading, error, weather];
};
