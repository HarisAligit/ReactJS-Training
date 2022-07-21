import Welcome from "../Shared/test"
import React, {useState} from "react";

const TempCalculator = () => {

  const[temperature, setTemperature] = useState(''); 
  const[scale, setScale] = useState('c');

  const handleTempChange = (x, temperature) => {
    setScale(x);
    setTemperature(temperature);
  }

  const toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

  const toFahrenheit = (celsius) => {
          return (celsius * 9 / 5) + 32;
      }

  const tryConvert = (temperature, convert) => {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
      return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
      <div>
          <Welcome
        scale={"c"}
        temperature={celsius}
        onTemperatureChange={() => handleTempChange('c', temperature)} />
      <Welcome
        scale={"f"}
        temperature={fahrenheit}
        onTemperatureChange={() => handleTempChange('f', temperature)} />
      {/* <BoilingVerdict
        celsius={parseFloat(celsius)} /> */}
      </div>
  )
};

export default TempCalculator;