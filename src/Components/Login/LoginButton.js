import { Button } from "react-bootstrap";
import { useState } from "react";

const LoginButton = () => {
  const [flag, SetFlag] = useState(false);

  return (
    <div>
      {flag ? (
        <Button className="a1" variant="success" onClick={() => SetFlag(!flag)}>
          Login Button
        </Button>
      ) : (
        <Button className="a1" variant="danger" onClick={() => SetFlag(!flag)}>
          Login Button
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
