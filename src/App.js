import "./App.css";
import ColoredBlock from "./Components/Color/ColoredButton";
import Clock from "./Components/TimeClock/TimeClock";
import TempCalculator from "./Components/Temperature/TempCalculator";
import Day7 from "./day7";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    <div>
      <TempCalculator />
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
