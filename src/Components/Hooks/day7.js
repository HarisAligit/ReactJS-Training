import {
  useState,
  useEffect,
  useMemo,
  useReducer,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";

import { Button } from "react-bootstrap";
import useFetch from "./Fetch";

const expensivefunc = (a) => {
  for (let i = 0; i < 99999999; i++) {
    a += 1;
  }
  return a;
};

const Day7 = forwardRef((props, ref) => {
  const [message, SetMessage] = useState("");
  const prevMessage = useRef("");
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => expensivefunc(count), [count]);

  useImperativeHandle(ref, () => ({
    increment,
  }));

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset": {
        return init(action.payload);
      }
      default:
        throw new Error();
    }
  };
  const init = (x) => {
    return { count: x.count };
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("you message here in UseEffect", message);
    prevMessage.current = message;
    return () => console.log("Component Unmounted from UseEffect");
  }, [message]);

  const handleMessage = (e) => {
    SetMessage(e.target.value);
  };

  return (
    <div>
      <h2>Current Value: {message}</h2>
      <h2>Previous Value: {prevMessage.current}</h2>
      <Button variant="danger" onClick={() => increment()}>
        Add Count!
      </Button>
      Count: {state.count}
      <Button
        variant="success"
        onClick={() => dispatch({ type: "reset", payload: { count: 0 } })}
      >
        Reset
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => dispatch({ type: "decrement" })}
      >
        {" "}
        -{" "}
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => dispatch({ type: "increment" })}
      >
        {" "}
        +{" "}
      </Button>
      <form>
        <input type="text" value={message} onChange={handleMessage} />
      </form>
      Value: {calculation}
    </div>
  );
});

export default Day7;
