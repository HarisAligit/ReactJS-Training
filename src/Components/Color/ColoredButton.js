import React, { useState } from "react";
import ChangeColorButton from "./ChangeColor";

const ColoredBlock = (props) => {
  const [color, setColor] = useState("purple");

  const changeColor = () => {
    let newColor = color === "purple" ? "pink" : "purple";
    setColor(newColor);
  };
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: color,
      }}
    >
      <ChangeColorButton clickHandler={changeColor}></ChangeColorButton>
    </div>
  );
};

export default ColoredBlock;
