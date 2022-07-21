import { useState, useEffect, useMemo, useReducer } from "react";
import { Button } from "react-bootstrap";

const expensivefunc = (a) => {
  for (let i = 0; i < 199999999; i++) {
    a += 1;
  }
  return a;
};

const Day7 = () => {
  const [message, SetMessage] = useState("This is a message");
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => expensivefunc(count), [count]);

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

  const increment = (incCount) => {
    setCount(incCount);
  };

  useEffect(() => {
    console.log("you message here in UseEffect", message);
    return () => console.log("Component Unmounted from UseEffect");
  }, [message]);

  const handleMessage = (e) => {
    SetMessage(e.target.value);
  };

  return (
    <div>
      {message}
      <Button variant="danger" onClick={() => increment(count + 1)}>
        Add Count!
      </Button>
      Count: {state.count}
      <Button
        variant="success"
        onClick={() => dispatch({ type: "reset", payload: { count: 0 } })}
      >
        Reset
      </Button>
      <Button variant="warning" onClick={() => dispatch({ type: "decrement" })}>
        {" "}
        -{" "}
      </Button>
      <Button variant="warning" onClick={() => dispatch({ type: "increment" })}>
        {" "}
        +{" "}
      </Button>
      <form>
        <input type="text" value={message} onChange={handleMessage} />
      </form>
      Count: {count}
      {calculation}
    </div>
  );
};

export default Day7;
