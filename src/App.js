import logo from "./logo.svg";
import "./App.css";
import ColoredBlock from "./cb";
import Clock from "./clock";
import Calc from "./calc";
import Welcome from "./test";
import Day7 from "./day7";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    <div>
      <Calc />
      <Clock />
      <Day7 />
      <ColoredBlock />
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
