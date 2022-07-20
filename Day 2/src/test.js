import React from "react";
import { Button } from "react-bootstrap";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: "Hello From",
      color: "red",
      login: false,
      numbers: [1, 2, 3, 4, 6, 7, 8],
    };
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

  NumberList(x) {
    const numbers = x;
    const listItems = numbers.map((number, i) => <li key={i}>{number}</li>);
    return <ul>{listItems}</ul>;
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Welcome;
