import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SignInUser = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const Validate = (username, pass) => {
    console.log("Username: ", username, "Password: ", pass);
    if (username === "" || pass === "") return 1;
    else if (username === "admin" || pass === "123") {
      localStorage.setItem("isAuthenticated", true);
      window.location.pathname = "/";
      console.log(localStorage.getItem("isAuthenticated"));
      return 2;
    }
  };

  const handleInput = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("User Data: ", userData);
    Validate(userData.username, userData.password) === 1
      ? alert("Pass/Username Invalid!")
      : alert("login successful!");
  };

  return (
    <div>
      <h1>Sign In User</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={userData.username}
            onChange={(e) => handleInput("username", e.target.value)}
            type="text"
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Text className="text-muted">
            We'll never share your password with anyone else.
          </Form.Text>
          <Form.Control
            value={userData.password}
            onChange={(e) => handleInput("password", e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* {Validate(userData.username, userData.password) === 2 && (
        <Navigate to="/user" />
      )} */}
    </div>
  );
};

export default SignInUser;
