import React from "react";

class ChangeColorButton extends React.Component {
  handleClick() {
    console.log("clicked");
  }
  render() {
    return <button onClick={this.handleClick}>Change the color</button>;
  }
}

export default ChangeColorButton;
