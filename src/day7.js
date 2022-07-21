import { useState, useEffect } from "react";

const Day7 = () => {
  const [message, SetMessage] = useState("This is a message");

  useEffect(() => {
    console.log("you message here in UseEffect", message);
    return () => console.log("Component Unmounted from UseEffect");
  }, []);

  const handleMessage = (e) => {
    SetMessage(e.target.value);
  };

  return (
    <div>
      {message}
      <form>
        <input type="text" value={message} onChange={handleMessage} />
      </form>
    </div>
  );
};

export default Day7;
