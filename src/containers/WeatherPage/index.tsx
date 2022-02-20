import React from "react";
import Form from "../../components/Weather/form";
import Info from "../../components/Weather/info";
import Weather from "../../components/Weather/weather";

const API_KEY = "0224ecbe72c09131f2466317bfbdebb7";

const WeatherPage: React.FC = (event) => {
  event.preventDefault();
  const gettingWeather = async () => {
    const apiUrl = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`
    );
    const data = await apiUrl.json();
    console.log(data);
  };
  return (
    <div>
      <Info />
      <Form />
      <Weather />
    </div>
  );
};
export default WeatherPage;
