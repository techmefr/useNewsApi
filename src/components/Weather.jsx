import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=b68e3c8b3a181508b0ac48be82afd936&units=metric`
      );

      setWeather(response.data);
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <p>
        La météo à {weather.city} pour les trois prochains jours est la suivante
        :
      </p>

      <ul>
        {weather.daily.map((day, i) => (
          <li key={i}>
            Jour {i + 1} :
            <ul>
              <li>Conditions : {day.weather[0].main}</li>
              <li>Température actuelle : {day.temp.current} °C</li>
              <li>Température maximale : {day.temp.max} °C</li>
              <li>Température minimale : {day.temp.min} °C</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

Weather.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Weather;
