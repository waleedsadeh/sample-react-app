import React from "react";
import { IoSunny, IoRainy } from "react-icons/io5";

type WeatherCardProps = {
  data: WeatherData;
};
const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col w-1/2 bg-slate-200 rounded-xl p-3 shadow-md">
        <div className="flex flex-col col-span-1 w-full items-center">
          {data.temperature > 20 ? (
            <div>
              <IoSunny className="w-20 h-20" />
            </div>
          ) : (
            <div>
              <IoRainy className="w-20 h-20" />
            </div>
          )}
        </div>
        <div className=" text-center flex flex-col ">
          <h2>{data.city}</h2>
          <p>Temperature: {data.temperature}°C</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Wind: {data.wind}km/h</p>
          <p>Rain: {data.rain}%</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
