import React, { useRef } from "react";
import { Button } from "react-bootstrap";

const Uncontrol = () => {
  const inputRef = useRef(null);
  const handleSubmitButton = () => {
    alert(inputRef.current.value);
  };
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <Button
        className="a1"
        variant="primary"
        type="submit"
        value="submit"
        onClick={handleSubmitButton}
      >
        Submit
      </Button>
    </div>
  );
};

export default Uncontrol;
