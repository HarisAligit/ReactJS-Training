import { Navigate } from "react-router-dom";

const Error = () => {
  return (
    <>
      {alert("Sorry Page Not Found! Redirecting to the HomePage")}
      {/* <Button variant="outline-info">
        <Link className="link_to" to="/">
          Back To Homepage....
        </Link>
      </Button> */}
      <Navigate to="/" />
    </>
  );
};

export default Error;
