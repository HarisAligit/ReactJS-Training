import React from "react";
import { InputGroup, Form } from "react-bootstrap";

const scaleArr = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TemperatureCaller = (props) => {
  const handleTemp = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  const PropsTemperature = props.temperature;
  const scale1 = props.scale;

  return (
    <div>
      <br />
      <InputGroup>
        <InputGroup.Text>
          Enter temperature in {scaleArr[scale1]}:
        </InputGroup.Text>
        <Form.Control
          value={PropsTemperature}
          onChange={handleTemp}
          as="textarea"
          aria-label="With textarea"
        />
      </InputGroup>
      <br />
    </div>
  );
};

export default TemperatureCaller;
