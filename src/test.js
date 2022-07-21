import React from "react";
import { Button } from "react-bootstrap";

const scaleArr = {
  c: "Celsius",
  f: "Fahrenheit",
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      x: "Hello From",
      color: "red",
      login: false,
      numbers: [1, 2, 3, 4, 6, 7, 8],
    };
    this.handleTemp = this.handleTemp.bind(this);
  }

  componentDidMount() {
    console.log("Welcome Component Mounted!");
  }

  componentWillUnmount() {
    console.log("Welcome Component Unmounted!");
  }

  activateLaser(x) {
    this.setState({ login: x });
  }

  handleTemp(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  NumberList(x) {
    const numbers = x;
    const listItems = numbers.map((number, i) => <li key={i}>{number}</li>);
    return <ul>{listItems}</ul>;
  }

  render() {
    const temperature = this.props.temperature;
    const scale1 = this.props.scale;

    return (
      <div>
        {console.log("Props", this.props)}
        {this.state.x} {this.props.name}
        {this.state.login ? (
          <Button
            onClick={() => this.activateLaser(false)}
            className="a1"
            variant="success"
          >
            Logged In!
          </Button>
        ) : (
          <Button
            onClick={() => this.activateLaser(true)}
            className="a1"
            variant="danger"
          >
            Logged Out!
          </Button>
        )}
        (:P)
        {this.NumberList(this.state.numbers)}
        <fieldset>
          <legend>Enter temperature in {scaleArr[scale1]}:</legend>
          <input value={temperature} onChange={this.handleTemp} />
        </fieldset>
      </div>
    );
  }
}

export default Welcome;
