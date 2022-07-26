import { Button } from "react-bootstrap";
import { useState } from "react";

const LoginButton = () => {
  const [flag, SetFlag] = useState(false);

  const flipFlag = () => {
    SetFlag(!flag);
    if (!flag) {
      localStorage.setItem("isAuthenticated", false);
    }
  };

  return (
    <div>
      {flag ? (
        <Button className="a1" variant="success" onClick={flipFlag}>
          Login Button
        </Button>
      ) : (
        <Button className="a1" variant="danger" onClick={flipFlag}>
          Login Button
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
