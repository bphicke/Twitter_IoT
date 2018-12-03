import React, { Component } from "react";

export default class Background extends Component {
  render() {
    return <div style={backgroundStyle}>sample text</div>;
  }
}

const backgroundStyle = {
  width: "auto",
  height: "900px",
  backgroundColor: "#ededed"
};
