import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import NumberList from "../Memo/NumberList";

const scaleArr = {
  c: "Celsius",
  f: "Fahrenheit",
};

const Welcome = (props) => {
  const x = "Hello From";
  const [login, setLogin] = useState(false);
  const numbers = [1, 2, 3, 4, 6, 7, 8];

  useEffect(() => {
    console.log("Welcome Component Mounted!");
    return () => {
      console.log("Welcome Component Unmounted!");
    };
  }, []);

  const PropsTemperature = props.temperature;
  const scale1 = props.scale;

  return (
    <div>
      <NumberList list={numbers} />
      {x}
    </div>
  );
};

export default Welcome;
