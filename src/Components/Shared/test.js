import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

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

  const activateLaser = (flag) => {
    setLogin(flag);
  };

  const handleTemp = (e) => {
    props.onTemperatureChange(() => e.target.value);
  };

  const NumberList = (x) => {
    const numbers = x;
    const listItems = numbers.map((number, i) => <li key={i}>{number}</li>);
    return <ul>{listItems}</ul>;
  };

  const PropsTemperature = props.temperature;
  const scale1 = props.scale;

  return (
    <div>
      {x}
      {login ? (
        <Button
          onClick={() => activateLaser(false)}
          className="a1"
          variant="success"
        >
          Logged In!
        </Button>
      ) : (
        <Button
          onClick={() => activateLaser(true)}
          className="a1"
          variant="danger"
        >
          Logged Out!
        </Button>
      )}
      (:P)
      {NumberList(numbers)}
      <fieldset>
        <legend>Enter temperature in {scaleArr[scale1]}:</legend>
        <input value={PropsTemperature} onChange={handleTemp} />
      </fieldset>
    </div>
  );
};

export default Welcome;
