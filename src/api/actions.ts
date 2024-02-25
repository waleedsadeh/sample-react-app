import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getWeatherData = async (
  city: string
): Promise<WeatherData | null> => {
  try {
    const res = await axios.get(`${API_URL}/weather/${city}`);

    return {
      city: city,
      temperature: res.data.temperature,
      humidity: res.data.humidity,
      wind: res.data.wind,
      rain: res.data.rain,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
