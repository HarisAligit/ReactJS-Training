import FancyInput from "./ImperativeHandlerChild";
import { useRef } from "react";

const Parent = () => {
  const aString = useRef("");

  return (
    <div>
      <FancyInput ref={aString} />
      {aString.current.value}
    </div>
  );
};

export default Parent;
