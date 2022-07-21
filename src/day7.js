import { useState, useEffect, useMemo } from "react";

const Day7 = () => {
  const [message, SetMessage] = useState("This is a message");

  var a = 4,
    b = 7;

  const expensivefunc = (a, b) => {
    console.log("Expensive Function Run! ");
    return a * b;
  };

  const memoized = useMemo(() => expensivefunc(a, b), [a, b]);

  useEffect(() => {
    console.log("you message here in UseEffect", message);
    return () => console.log("Component Unmounted from UseEffect");
  }, [message]);

  const handleMessage = (e) => {
    SetMessage(e.target.value);
  };

  const handleMem = () => {
    console.log("handleMem Clicked!");
    a = 5;
  };

  return (
    <div>
      {message}
      {JSON.stringify(memoized)}
      <form>
        <input type="text" value={message} onChange={handleMessage} />
      </form>
      <button onCick={() => handleMem}>Change a to 5</button>
    </div>
  );
};

export default Day7;
