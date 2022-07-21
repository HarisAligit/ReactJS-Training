import React from "react";

class ChangeColorButton extends React.Component {
  render() {
    return <button onClick={this.props.clickHandler}>Change the color</button>;
  }
}

export default ChangeColorButton;
