import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="no-content">
      <Alert variant="danger">Sorry Page Not Found!</Alert>
      <Alert variant="warning">The route given is invalid!</Alert>
      <Button variant="outline-info">
        <Link className="link_to" to="/">
          Back To Homepage....
        </Link>
      </Button>
    </div>
  );
};

export default Error;
