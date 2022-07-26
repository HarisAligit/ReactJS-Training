import "./App.css";
import ColoredBlock from "./Components/Color/ColoredButton";
import Clock from "./Components/TimeClock/TimeClock";
import TempCalculator from "./Components/Temperature/TempCalculator";
import Day7 from "./Components/Hooks/day7";
import NewTodo from "./Components/Todos/NewTodo";
import Parent from "./Components/Hooks/ImperativeHandleParent";
import LoginButton from "./Components/Login/LoginButton";
import Welcome from "./Components/Shared/test";
import Uncontrol from "./Components/Uncontrolled/uncontrol";
import Error from "./Components/Error/Error";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginData from "./Components/Authentication/LoginData";
import SignInUser from "./Components/Authentication/SignIn";
import Protected from "./Components/Authentication/protectedRoute";
import HOCParent from "./Components/HigherOrder/parent";
import FormikForm from "./Components/Forms/Formik";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/user"
            element={
              <Protected>
                <LoginData />
              </Protected>
            }
          />
          <Route path="signout" element={<LoginButton />} />
          <Route path="user/signin" element={<SignInUser />} />
          <Route path="clock" element={<Clock />} />
          <Route path="tcalc" element={<TempCalculator />} />
          <Route path="tcalc" element={<Day7 />} />
          <Route path="color" element={<ColoredBlock />} />
          <Route path="uncontrol" element={<Uncontrol />} />
          <Route path="formik" element={<FormikForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <HOCParent /> */}
      <Parent />
      <NewTodo />
    </div>

    /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
    //     </a> */
    //   </header>
    // </div>
  );
}

export default App;
