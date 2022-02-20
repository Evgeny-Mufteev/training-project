import React from "react";
import gettingWeather from "../../containers/WeatherPage";

const Form = () => {
  return (
    <form action="" onSubmit={gettingWeather}>
      <input type="text" name="city" placeholder="Город" />
      <button type="button">Узнать погоду</button>
    </form>
  );
};

export default Form;
