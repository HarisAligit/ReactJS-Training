import FancyInput from "./ImperativeHandlerChild";
import { useRef } from "react";

const Parent = () => {
  const aString = useRef("");

  return (
    <div>
      <FancyInput ref={aString} />
    </div>
  );
};

export default Parent;
