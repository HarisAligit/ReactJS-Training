import Day7 from "./day7";
import { useRef } from "react";
import { Button } from "react-bootstrap";

const Parent = () => {
  const ref = useRef();

  return (
    <div>
      <Day7 ref={ref} />
      <Button variant="info" onClick={() => ref.current.increment()}>
        {" "}
        ImperativeHandleParent Button
      </Button>
    </div>
  );
};

export default Parent;
